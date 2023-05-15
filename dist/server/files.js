"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHtmlMeta = exports.getEmbedHtml = exports.findLocationUrl = exports.findImage = exports.findHtmlByRegexp = exports.descRegexps = exports.createDirWhenNotfound = exports.atoh = void 0;
exports.getJson = getJson;
exports.imageRegexps = exports.iconRegexps = exports.getVideoHtml = void 0;
exports.isAvailableCache = isAvailableCache;
exports.readCache = readCache;
exports.titleRegexps = exports.saveImage = void 0;
exports.writeCache = writeCache;
var _fs = _interopRequireDefault(require("fs"));
var _promises = require("node:fs/promises");
var _https = _interopRequireDefault(require("https"));
var _http = _interopRequireDefault(require("http"));
var _path = _interopRequireDefault(require("path"));
var _crypto = _interopRequireDefault(require("crypto"));
var _util = require("util");
var _package = _interopRequireDefault(require("../../package.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const docRoot = process.env.NOTIONATE_DOCROOT || 'public';
const imageDir = process.env.NOTIONATE_IMAGEDIR || 'images';
const timeout = 10000;
const httpOptions = {
  timeout,
  headers: {
    'User-Agent': `${_package.default.name}/${_package.default.version}`,
    Accept: '*/*'
  }
};

// @ts-ignore
_https.default.get[_util.promisify.custom] = function getAsync(url) {
  return new Promise((resolve, reject) => {
    const req = _https.default.get(url, httpOptions, res => {
      // @ts-ignore
      res.end = new Promise(resolve => res.on('end', resolve));
      resolve(res);
    });
    req.on('error', reject);
    req.on('timeout', () => {
      console.log(`request timed out(${timeout}ms): ${url}`);
      req.destroy();
      return reject;
    });
  });
};

// @ts-ignore
_http.default.get[_util.promisify.custom] = function getAsync(url) {
  return new Promise((resolve, reject) => {
    const req = _http.default.get(url, httpOptions, res => {
      // @ts-ignore
      res.end = new Promise(resolve => res.on('end', resolve));
      resolve(res);
    });
    req.on('error', reject);
    req.on('timeout', () => {
      console.log(`request timed out(${timeout}ms): ${url}`);
      req.abort();
      return reject;
    });
  });
};

// https://oembed.com/

const httpsGet = (0, _util.promisify)(_https.default.get);
const httpGet = (0, _util.promisify)(_http.default.get);
const readFile = (0, _util.promisify)(_fs.default.readFile);
const writeFile = (0, _util.promisify)(_fs.default.writeFile);
const maxRedirects = 5;
const findLocationUrl = rawHeaders => {
  for (let i = 0; i <= rawHeaders.length; i++) {
    if (rawHeaders[i] === 'Location') {
      const next = 1;
      return rawHeaders[i + next];
    }
  }
  console.log('location header url is not found', rawHeaders);
  return '';
};
exports.findLocationUrl = findLocationUrl;
async function httpsGetWithFollowRedirects(reqUrl, redirectCount) {
  if (!redirectCount) {
    redirectCount = 0;
  }
  const httpFunc = reqUrl.includes('https://') ? httpsGet : httpGet;
  const res = await httpFunc(reqUrl);
  if (res.statusCode >= 300 && res.statusCode < 400 && res.rawHeaders.includes('Location')) {
    const redirectTo = findLocationUrl(res.rawHeaders);
    redirectCount++;
    if (maxRedirects < redirectCount) {
      console.log('maximum number of redirects exceeded');
      return res;
    }
    return await httpsGetWithFollowRedirects(redirectTo, redirectCount);
  } else {
    return res;
  }
}
async function getHTTP(reqUrl, redirectCount) {
  if (!redirectCount) {
    redirectCount = 0;
  }
  let body = '';
  const res = await httpsGetWithFollowRedirects(reqUrl);
  // @ts-ignore
  for await (const chunk of res) {
    body += chunk;
  }
  return body;
}
async function getJson(reqUrl) {
  const body = await getHTTP(reqUrl);
  return JSON.parse(body);
}
const atoh = a => {
  const shasum = _crypto.default.createHash('sha1');
  shasum.update(a);
  return shasum.digest('hex');
};
exports.atoh = atoh;
const createDirWhenNotfound = async dir => {
  if (!_fs.default.existsSync(dir)) {
    await (0, _promises.mkdir)(dir, {
      recursive: true
    });
    console.log(`created direcotry: ${dir}`);
  }
};
exports.createDirWhenNotfound = createDirWhenNotfound;
async function readCache(f) {
  return JSON.parse(await readFile(f, 'utf8'));
}
async function writeCache(f, data) {
  return writeFile(f, JSON.stringify(data), 'utf8').catch(() => {});
}
async function isAvailableCache(f, seconds) {
  const t = new Date(Date.now() + seconds * 1000);
  const stats = await (0, _promises.stat)(f);
  return stats.mtime < t;
}
const saveImage = async (imageUrl, prefix) => {
  const urlWithoutQuerystring = imageUrl.split('?').shift() || '';
  const {
    ext,
    name
  } = _path.default.parse(urlWithoutQuerystring);
  const basename = `${atoh(name)}${ext}`;
  const urlPath = `/${imageDir}/${prefix}-${basename}`;
  const filePath = `${docRoot}${urlPath}`;
  await createDirWhenNotfound(`${docRoot}/${imageDir}`);
  if (_fs.default.existsSync(filePath)) {
    return urlPath;
  }
  try {
    const res = await httpsGetWithFollowRedirects(imageUrl);
    res.pipe(_fs.default.createWriteStream(filePath));
    await res.end;
    console.log(`saved image -- path: ${filePath}, url: ${imageUrl}`);
  } catch (e) {
    console.log(`saveImage error -- path: ${filePath}, url: ${imageUrl}, message: ${e}`);
  }
  return urlPath;
};
exports.saveImage = saveImage;
const findHtmlByRegexp = (regexps, html) => {
  let matched = null;
  for (let i = 0; i < regexps.length; i++) {
    const result = html.match(regexps[i]);
    if (result !== null) {
      matched = result;
      break;
    }
  }
  if (matched === null) {
    return null;
  }
  return matched[1].replaceAll('\n', ' ').trim().replace(/<[^>]*>?/gm, '').replaceAll('https:https:', 'https:');
};
exports.findHtmlByRegexp = findHtmlByRegexp;
const titleRegexps = [/<title>([^"]*?)<\/title>/, /<title\s+[^"]+="[^"]+">([^"]*?)<\/title>/, /property="og:title"\s+content="([^"]+)"/];
exports.titleRegexps = titleRegexps;
const descRegexps = [/property="og:description"\s+content="([^"]+)"/, /content="([^"]+)"\s+property="og:description"/, /name="description"\s+content="([^"]+)"/, /content="([^"]+)"\s+name="description"/, /<div.*?>([\s\S]*?)<\/div>/];
exports.descRegexps = descRegexps;
const imageRegexps = [/property="og:image:secure_url"\s+content="([^"]+)"/, /property="og:image"\s+content="([^"]+)"/, /content="([^"]+)"\s+property="og:image:secure_url"/, /content="([^"]+)"\s+property="og:image"/];
exports.imageRegexps = imageRegexps;
const iconRegexps = [/<link\s+href="([^"]+)"\s+rel="icon"/, /<link\s+rel="icon"\s+href="(\/favicon\.ico)"\s*?\/?>/, /<link\s+rel="icon".*?href="([^"]+)"/, /<link\s+rel="shortcut icon"\s+type="image\/x-icon"\s+href="?([^"]+)"?\s?\/?>/, /<link\s+rel="shortcut icon"\s+href="?([^"]+)"?\s?\/?>/, /<link\s+href="?([^"]+)"?\s+rel="(shortcut icon|icon shortcut)"(\s+type="image\/x-icon")?\s?\/?>/, /<link\s+href="([^"]+)"\s+rel="icon"\s+sizes="[^"]+"\s+type="image\/[^"]"\s*\/?>/, /type="image\/x-icon"\s+href="(\/favicon\.ico)"/, /rel="icon"\s+href="(\/favicon\.ico)"/, /rel="shortcut icon"\s+href="([^"]+)"/];
exports.iconRegexps = iconRegexps;
const findImage = html => {
  const img = html.match(/<img\s(.*?)\s?\/?>/);
  if (img !== null) {
    const imgTag = img[1];
    const imageRegex = /src="(.*?)"/;
    const result = imgTag.match(imageRegex);
    if (result !== null) {
      return result[1];
    }
  }
  return null;
};
exports.findImage = findImage;
const getHtmlMeta = async reqUrl => {
  try {
    const resbody = await getHTTP(reqUrl);
    const body = resbody.replaceAll('\n', ' ');
    const title = findHtmlByRegexp(titleRegexps, body) || '';
    const desc = findHtmlByRegexp(descRegexps, body) || '';
    const imagePath = findHtmlByRegexp(imageRegexps, body) || findImage(body) || '';
    const iconPath = findHtmlByRegexp(iconRegexps, body) || '/favicon.ico';
    const url = new URL(reqUrl);
    const imageUrl = imagePath !== '' ? imagePath.match(/^(https?:|data:)/) ? imagePath : `${url.protocol}//${url.hostname}${imagePath}` : '';
    const image = imagePath !== '' ? imagePath.match(/^data:/) ? imagePath : await saveImage(imageUrl, 'html-image') : '';
    const iconUrl = iconPath !== '' ? iconPath.match(/^(https?:|data:)/) ? iconPath : `${url.protocol}//${url.hostname}${iconPath}` : '';
    const icon = iconUrl !== '' ? iconPath.match(/^data:/) ? iconPath : await saveImage(iconUrl, `html-icon-${atoh(reqUrl)}`) : '';
    return {
      title,
      desc,
      image,
      icon
    };
  } catch (e) {
    console.log(`getHtmlMeta failure: ${reqUrl} -- ${e}`);
  }
  return {
    title: '',
    desc: '',
    image: '',
    icon: ''
  };
};
exports.getHtmlMeta = getHtmlMeta;
const getVideoHtml = async block => {
  if (block.video?.type !== 'external') {
    return '';
  }
  const extUrl = block.video?.external.url;
  if (extUrl.includes('youtube.com') || extUrl.includes('youtu.be')) {
    const reqUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(extUrl)}`;
    try {
      const json = await getJson(reqUrl);
      return json.html;
    } catch (e) {
      console.log(`getVideoHtml failure: ${reqUrl} - ${e}`);
    }
  }
  return '';
};
exports.getVideoHtml = getVideoHtml;
const getEmbedHtml = async block => {
  if (block.embed && block.embed.url.includes('twitter.com')) {
    const src = block.embed?.url || '';
    const tweetId = _path.default.basename(src.split('?').shift() || '');
    const reqUrl = `https://api.twitter.com/1/statuses/oembed.json?id=${tweetId}`;
    try {
      const json = await getJson(reqUrl);
      return json.html;
    } catch (e) {
      console.log(`getEmbedHtml failure: ${reqUrl} - ${e}`);
    }
  } else if (block.embed && block.embed.url.includes('speakerdeck.com')) {
    const embedUrl = block.embed?.url;
    const reqUrl = `https://speakerdeck.com/oembed.json?url=${encodeURIComponent(embedUrl)}`;

    /*
     * The `UND_ERR_SOCKET` error occurs when GET request to the speakerdeck.com using the fetch api. That's why this using the https module.
     * A bug report has been created
     * https://github.com/nodejs/undici/issues/1412
     */
    try {
      const json = await getJson(reqUrl);
      return json.html;
    } catch (e) {
      console.log(`getEmbedHtml failure: ${reqUrl} -- ${e}`);
    }
  }
  return '';
};
exports.getEmbedHtml = getEmbedHtml;