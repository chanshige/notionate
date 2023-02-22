'use strict';

var React = require('react');

var ListCheckboxField = function (_a) {
    var payload = _a.payload;
    return (React.createElement("div", { className: "notionate-list-checkbox" }, payload));
};

var ListDateField = function (_a) {
    var payload = _a.payload;
    return (React.createElement("div", { className: "notionate-list-date" }, payload === null || payload === void 0 ? void 0 : payload.start));
};

var ListTitleField = function (_a) {
    var payload = _a.payload, path = _a.path, slug = _a.slug, link = _a.link, query = _a.query;
    var title = payload.map(function (v) {
        var richtext = v.title;
        switch (richtext.type) {
            case 'text':
                return richtext.text.content;
            case 'mention':
                return richtext.mention.type;
            default:
                return richtext.equation.expression;
        }
    }).join(',');
    var href = "".concat(path).concat(slug);
    var LinkedTitle = function () {
        if (link && query) {
            var Link = link;
            return (React.createElement(React.Fragment, null,
                React.createElement(Link, { className: "notionate-list-title-a", href: { pathname: href, query: query } }, title)));
        }
        else if (link) {
            var Link = link;
            return (React.createElement(React.Fragment, null,
                React.createElement(Link, { className: "notionate-list-title-a", href: href }, title)));
        }
        return (React.createElement("a", { className: "notionate-list-title-a", href: href, title: title }, title));
    };
    return (React.createElement("div", { className: "notionate-list-title" }, LinkedTitle()));
};

var FigmaIcon = function () {
    return (React.createElement("svg", { className: "notionate-blocks-icons-figma", version: "1.0", xmlns: "http://www.w3.org/2000/svg", width: "12px", height: "18px", viewBox: "0 0 200 300" },
        React.createElement("path", { d: "M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z", fill: "#0acf83" }),
        React.createElement("path", { d: "M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z", fill: "#a259ff" }),
        React.createElement("path", { d: "M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z", fill: "#f24e1e" }),
        React.createElement("path", { d: "M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z", fill: "#ff7262" }),
        React.createElement("path", { d: "M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z", fill: "#1abcfe" })));
};
var SlackIcon = function () {
    return (React.createElement("svg", { className: "notionate-blocks-icons-slack", version: "1.0", xmlns: "http://www.w3.org/2000/svg", width: "20px", height: "20px", viewBox: "0 0 140 140" },
        React.createElement("path", { d: "M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z", fill: "#E01E5A" }),
        React.createElement("path", { d: "M47 27c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.5 39.7.6 47 .6c7.3 0 13.2 5.9 13.2 13.2V27H47zm0 6.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H13.9C6.6 60.1.7 54.2.7 46.9c0-7.3 5.9-13.2 13.2-13.2H47z", fill: "#36C5F0" }),
        React.createElement("path", { d: "M99.9 46.9c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.9V46.9zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V13.8C66.9 6.5 72.8.6 80.1.6c7.3 0 13.2 5.9 13.2 13.2v33.1z", fill: "#2EB67D" }),
        React.createElement("path", { d: "M80.1 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8h13.2zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33.1c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H80.1z", fill: "#ECB22E" })));
};
var GithubIcon = function () {
    return (React.createElement("svg", { className: "notionate-blocks-icons-github", version: "1.0", xmlns: "http://www.w3.org/2000/svg", width: "20px", height: "20px", viewBox: "0 0 200 200", preserveAspectRatio: "xMidYMid meet" },
        React.createElement("g", { transform: "translate(0.000000,200.000000) scale(0.100000,-0.100000)", stroke: "none" },
            React.createElement("path", { d: "M899 1910 c-314 -38 -586 -232 -720 -515 -63 -133 -80 -205 -86 -356 -6 -144 10 -245 57 -367 88 -226 287 -429 503 -512 110 -43 117 -38 117 88 l0 97 -98 0 c-89 0 -102 2 -138 26 -27 18 -49 46 -72 90 -37 74 -54 96 -99 127 -39 28 -42 49 -9 58 43 10 110 -28 155 -90 46 -61 71 -82 122 -96 45 -13 138 5 145 28 3 10 15 38 28 63 l22 46 -76 17 c-220 47 -330 188 -330 425 0 81 19 150 59 213 29 45 30 51 21 100 -10 52 -7 95 12 157 10 33 11 33 56 28 25 -3 82 -24 128 -47 l82 -42 59 13 c79 16 232 17 324 0 76 -13 76 -13 116 13 50 34 148 68 182 64 20 -2 28 -11 37 -43 15 -49 17 -135 4 -169 -8 -21 -4 -34 25 -76 45 -67 57 -116 57 -225 -2 -235 -118 -376 -344 -416 -64 -12 -67 -13 -52 -30 34 -38 43 -91 44 -256 0 -133 3 -164 16 -177 21 -22 25 -21 115 18 147 64 292 181 385 311 50 70 109 196 136 290 19 68 23 104 23 235 0 188 -13 248 -90 405 -92 185 -230 325 -411 415 -144 72 -349 108 -505 90z" }))));
};

var pathBasename = function (str) {
    var u = str.replace(/\/$/, '');
    var l = u.substring(u.lastIndexOf('/') + 1);
    return l.lastIndexOf('?') > 0 ? l.substring(0, l.lastIndexOf('?')) : l;
};
var LinkObject = function (_a) {
    var textObject = _a.textObject, children = _a.children;
    return (React.createElement("a", { className: "notionate-blocks-text-a", href: textObject.href, rel: "noreferrer", target: "_blank" }, children));
};
var UserMention = function (_a) {
    var children = _a.children;
    return (React.createElement("span", { className: "notionate-blocks-text-usermention" }, children));
};
var MentionObject = function (_a) {
    var textObject = _a.textObject, children = _a.children;
    if (textObject.type === 'mention') {
        if (textObject.mention.type === 'link_preview') {
            var url = textObject.mention.link_preview.url;
            return (React.createElement("span", { className: "notionate-blocks-text-mention" },
                url.includes('github.com') && React.createElement(GithubIcon, null),
                url.includes('slack.com') && React.createElement(SlackIcon, null),
                url.includes('figma.com') && React.createElement(FigmaIcon, null),
                children));
        }
        else if (textObject.mention.type === 'user') {
            return UserMention({ children: children });
        }
        else {
            console.log("unsupport mention type: ".concat(textObject.mention.type));
            return React.createElement(React.Fragment, null);
        }
    }
    else {
        console.log("unsupport richtext type: ".concat(textObject.type));
        return React.createElement(React.Fragment, null);
    }
};
var StyleObject = function (_a) {
    var textObject = _a.textObject, children = _a.children;
    var annotations = textObject.annotations, href = textObject.href;
    var css = ['notionate-blocks-text-annotation'];
    css.push("notionate-blocks-text-".concat(annotations.color.replace('_', '-')));
    if (annotations.bold)
        css.push('notionate-blocks-text-bold');
    if (annotations.italic)
        css.push('notionate-blocks-text-italic');
    if (annotations.strikethrough)
        css.push('notionate-blocks-text-strikethrough');
    if (annotations.underline)
        css.push('notionate-blocks-text-underline');
    if (annotations.code)
        css.push('notionate-blocks-text-code');
    if (href !== null)
        css.push('notionate-blocks-text-anchor');
    return (React.createElement("span", { className: css.join(' ') }, children));
};
var TextObject = function (_a) {
    var textObject = _a.textObject;
    var href = textObject.href, plain_text = textObject.plain_text;
    var children = textObject.type === 'mention'
        ? MentionObject({ textObject: textObject, children: StyleObject({ textObject: textObject, children: pathBasename(plain_text) }) })
        : StyleObject({ textObject: textObject, children: plain_text });
    if (href === null) {
        return children;
    }
    return (React.createElement(LinkObject, { textObject: textObject }, children));
};
var TextBlock = function (_a) {
    var tag = _a.tag, block = _a.block;
    var CustomTag = tag;
    if (block === undefined) {
        return (React.createElement("div", { className: "notionate-blocks-text-hr" }));
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(CustomTag, { className: "notionate-blocks-text-".concat(tag) }, block.map(function (v, i) { return (React.createElement(TextObject, { textObject: v, key: "".concat(i) })); }))));
};

var ListRichTextField = function (_a) {
    var payload = _a.payload;
    return (React.createElement("div", { className: "notionate-list-richtext" },
        React.createElement(TextBlock, { tag: "span", block: [payload.rich_text] })));
};

var ListMultiSelectField = function (_a) {
    var payload = _a.payload, path = _a.path, link = _a.link, query = _a.query;
    var LinkedTag = function (name) {
        var href = "".concat(path, "tags/").concat(encodeURIComponent(name));
        if (link && query) {
            var Link = link;
            return (React.createElement(React.Fragment, null,
                React.createElement(Link, { className: "notionate-list-multiselect-a", href: { pathname: href, query: query } }, name)));
        }
        else if (link) {
            var Link = link;
            return (React.createElement(React.Fragment, null,
                React.createElement(Link, { className: "notionate-list-multiselect-a", href: href }, name)));
        }
        return (React.createElement("a", { className: "notionate-list-multiselect-a", href: href, title: name }, name));
    };
    return (React.createElement("ul", { className: "notionate-list-multiselect-ul" }, payload.multi_select.map(function (f) { return (React.createElement("li", { key: f.id, className: "notionate-list-multiselect-li notionate-select-".concat(f.color) }, LinkedTag(f.name))); })));
};

var ListUrlField = function (_a) {
    var payload = _a.payload;
    if (payload === null) {
        return (React.createElement(React.Fragment, null));
    }
    var regex = /https?:\/\/([0-9A-z.-]+)/;
    var result = payload.match(regex);
    if (result === null) {
        return (React.createElement(React.Fragment, null));
    }
    var domain = result[1];
    return (React.createElement("div", { className: "notionate-list-url" },
        React.createElement("a", { className: "notionate-list-url-a", href: payload, rel: "noreferrer", target: "_blank" },
            React.createElement("svg", { className: "notionate-list-url-chain", width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor" },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.4 3h3.085a3.4 3.4 0 0 1 3.4 3.4v.205A3.4 3.4 0 0 1 7.485 10H7V9h.485A2.4 2.4 0 0 0 9.88 6.61V6.4A2.4 2.4 0 0 0 7.49 4H4.4A2.4 2.4 0 0 0 2 6.4v.205A2.394 2.394 0 0 0 4 8.96v1a3.4 3.4 0 0 1-3-3.35V6.4A3.405 3.405 0 0 1 4.4 3zM12 7.04v-1a3.4 3.4 0 0 1 3 3.36v.205A3.405 3.405 0 0 1 11.605 13h-3.09A3.4 3.4 0 0 1 5.12 9.61V9.4A3.4 3.4 0 0 1 8.515 6H9v1h-.485A2.4 2.4 0 0 0 6.12 9.4v.205A2.4 2.4 0 0 0 8.515 12h3.09A2.4 2.4 0 0 0 14 9.61V9.4a2.394 2.394 0 0 0-2-2.36z" })),
            React.createElement("span", { className: "notionate-list-url-address" }, domain))));
};

var ListNumberField = function (_a) {
    var payload = _a.payload;
    return (React.createElement("div", { className: "notionate-list-number" }, payload.number));
};

var ListHandler = function (_a) {
    _a.name; var items = _a.items, path = _a.path, slug = _a.slug, link = _a.link, query = _a.query;
    if (items === undefined) {
        return React.createElement(React.Fragment, null);
    }
    if (items.object === 'list') {
        var target = items.results[0];
        switch (target.type) {
            case 'title': { // Skip: Unexpected lexical declaration in case block.
                var payload = items.results;
                return ListTitleField({ payload: payload, path: path, slug: slug, link: link, query: query });
            }
            case 'rich_text':
                return ListRichTextField({ payload: target });
            case 'people':
            case 'relation':
            case 'rollup':
            default:
                console.log('unsupport database property:', target);
                break;
        }
    }
    else {
        switch (items.type) {
            case 'date':
                return ListDateField({ payload: items.date });
            case 'rich_text':
                return ListRichTextField({ payload: items });
            case 'multi_select':
                return ListMultiSelectField({ payload: items, path: path });
            case 'url':
                return ListUrlField({ payload: items.url });
            case 'checkbox':
                return ListCheckboxField({ payload: items.checkbox });
            case 'number':
                return ListNumberField({ payload: items });
            case 'select':
            case 'status':
            case 'email':
            case 'phone_number':
            case 'files':
            case 'created_by':
            case 'created_time':
            case 'last_edited_by':
            case 'last_edited_time':
            case 'formula':
            case 'people':
            case 'relation':
            case 'rollup':
            default:
                console.log('unsupport database property:', items);
                break;
        }
    }
};

var getLinkPathAndLinkKey = function (link) {
    var linkArray = link.split('[');
    if (link === '') {
        return ['/', ''];
    }
    else if (linkArray.length < 2) {
        console.log('link format is wrong, example: /path/to/[slug]');
        return ['', ''];
    }
    return [linkArray[0], linkArray[1].split(']')[0]];
};

var List = function (_a) {
    var keys = _a.keys, db = _a.db, href = _a.href, link = _a.link, query = _a.query;
    var getSlug = function (key, page) {
        if (!('properties' in page)) {
            return 'not-found-properties';
        }
        if (key === 'id') {
            return page.id;
        }
        if (!(key in page.properties)) {
            return 'not-found-key-in-page-properties';
        }
        var p = page.properties[key];
        if (!('rich_text' in p)) {
            return 'not-found-richtext-in-key';
        }
        // @ts-ignore
        return p.rich_text.map(function (v) { return v.text.content; }).join(',');
    };
    var _b = getLinkPathAndLinkKey(href), path = _b[0], slugKey = _b[1];
    var dbf = function (name, page) {
        if (name === 'spacer' || !('property_items' in page) || !('properties' in page)) {
            return React.createElement(React.Fragment, null);
        }
        var propertyId = '';
        for (var _i = 0, _a = Object.entries(page.properties); _i < _a.length; _i++) {
            var _b = _a[_i], k = _b[0], v = _b[1];
            if (k === name) {
                propertyId = v.id;
            }
        }
        var items = page.property_items.find(function (v) { return ((v.object === 'property_item' && v.id === propertyId) || (v.object === 'list' && v.property_item.id === propertyId)); });
        var slug = getSlug(slugKey, page);
        return ListHandler({ name: name, items: items, path: path, slug: slug, link: link, query: query });
    };
    return (React.createElement("div", { className: "notionate-list" },
        React.createElement("div", { className: "notionate-list-inner" }, db.results.map(function (v) { return (React.createElement("div", { key: v.id, className: "notionate-list-record" }, keys.map(function (name, i) { return (React.createElement("div", { key: "".concat(v.id).concat(name), className: "".concat(name === 'spacer' ? 'notionate-list-spacer ' : '', "field").concat(i) }, dbf(name, v))); }))); }))));
};

var GalleryCheckboxField = function (_a) {
    var payload = _a.payload;
    return (React.createElement("div", { className: "notionate-gallery-checkbox" }, payload));
};

var GalleryDateField = function (_a) {
    var payload = _a.payload;
    return (React.createElement("div", { className: "notionate-gallery-date" }, payload === null || payload === void 0 ? void 0 : payload.start));
};

var GalleryTitleField = function (_a) {
    var payload = _a.payload;
    var title = payload.map(function (v) {
        var richtext = v.title;
        switch (richtext.type) {
            case 'text':
                return richtext.text.content;
            case 'mention':
                return richtext.mention.type;
            default:
                return richtext.equation.expression;
        }
    }).join(',');
    return (React.createElement("div", { className: "notionate-gallery-title" }, title));
};

var GalleryRichTextField = function (_a) {
    var payload = _a.payload;
    return (React.createElement("div", { className: "notionate-gallery-richtext" },
        React.createElement(TextBlock, { tag: "span", block: [payload.rich_text] })));
};

var GalleryMultiSelectField = function (_a) {
    var payload = _a.payload;
    var Tag = function (name) {
        return (React.createElement("div", { className: "notionate-gallery-multiselect-a" }, name));
    };
    return (React.createElement("ul", { className: "notionate-gallery-multiselect-ul" }, payload.multi_select.map(function (f) { return (React.createElement("li", { key: f.id, className: "notionate-gallery-multiselect-li notionate-select-".concat(f.color) }, Tag(f.name))); })));
};

var GalleryUrlField = function (_a) {
    var payload = _a.payload;
    if (payload === null) {
        return (React.createElement(React.Fragment, null));
    }
    var regex = /https?:\/\/([0-9A-z.-]+)/;
    var result = payload.match(regex);
    if (result === null) {
        return (React.createElement(React.Fragment, null));
    }
    var domain = result[1];
    return (React.createElement("div", { className: "notionate-gallery-url" },
        React.createElement("a", { className: "notionate-gallery-url-a", href: payload, rel: "noreferrer", target: "_blank" },
            React.createElement("svg", { className: "notionate-gallery-url-chain", width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor" },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.4 3h3.085a3.4 3.4 0 0 1 3.4 3.4v.205A3.4 3.4 0 0 1 7.485 10H7V9h.485A2.4 2.4 0 0 0 9.88 6.61V6.4A2.4 2.4 0 0 0 7.49 4H4.4A2.4 2.4 0 0 0 2 6.4v.205A2.394 2.394 0 0 0 4 8.96v1a3.4 3.4 0 0 1-3-3.35V6.4A3.405 3.405 0 0 1 4.4 3zM12 7.04v-1a3.4 3.4 0 0 1 3 3.36v.205A3.405 3.405 0 0 1 11.605 13h-3.09A3.4 3.4 0 0 1 5.12 9.61V9.4A3.4 3.4 0 0 1 8.515 6H9v1h-.485A2.4 2.4 0 0 0 6.12 9.4v.205A2.4 2.4 0 0 0 8.515 12h3.09A2.4 2.4 0 0 0 14 9.61V9.4a2.394 2.394 0 0 0-2-2.36z" })),
            React.createElement("span", { className: "notionate-gallery-url-address" }, domain))));
};

var GalleryNumberField = function (_a) {
    var payload = _a.payload;
    return (React.createElement("div", { className: "notionate-gallery-number" }, payload.number));
};

var GalleryHandler = function (_a) {
    var items = _a.items; _a.path;
    if (items === undefined) {
        return React.createElement(React.Fragment, null);
    }
    if (items.object === 'list') {
        var target = items.results[0];
        switch (target.type) {
            case 'title':
                return GalleryTitleField({ payload: items.results });
            case 'rich_text':
                return GalleryRichTextField({ payload: target });
            case 'people':
            case 'relation':
            case 'rollup':
            default:
                console.log('unsupport database property:', target);
                break;
        }
    }
    else {
        switch (items.type) {
            case 'date':
                return GalleryDateField({ payload: items.date });
            case 'rich_text':
                return GalleryRichTextField({ payload: items });
            case 'multi_select':
                return GalleryMultiSelectField({ payload: items });
            case 'url':
                return GalleryUrlField({ payload: items.url });
            case 'checkbox':
                return GalleryCheckboxField({ payload: items.checkbox });
            case 'number':
                return GalleryNumberField({ payload: items });
            case 'select':
            case 'status':
            case 'email':
            case 'phone_number':
            case 'files':
            case 'created_by':
            case 'created_time':
            case 'last_edited_by':
            case 'last_edited_time':
            case 'formula':
            case 'people':
            case 'relation':
            case 'rollup':
            default:
                console.log('unsupport database property:', items);
                break;
        }
    }
};

var getSlug = function (key, page) {
    if (!('properties' in page)) {
        return 'not-found-properties';
    }
    if (key === 'id') {
        return page.id;
    }
    if (!(key in page.properties)) {
        return 'not-found-key-in-page-properties';
    }
    var p = page.properties[key];
    if (!('rich_text' in p)) {
        return 'not-found-richtext-in-key';
    }
    // @ts-ignore
    return p.rich_text.map(function (v) { return v.text.content; }).join(',');
};
var buildHref = function (page, link) {
    if (link === undefined) {
        return '';
    }
    var _a = getLinkPathAndLinkKey(link), path = _a[0], slugKey = _a[1];
    var slug = getSlug(slugKey, page);
    return "".concat(path).concat(slug);
};
var LinkedCard = function (_a) {
    var children = _a.children, link = _a.link, query = _a.query, href = _a.href;
    if (link && query) {
        var Link = link;
        return (React.createElement(Link, { href: { pathname: href, query: query } },
            React.createElement("div", { className: "notionate-gallery-a" }, children)));
    }
    else if (link) {
        var Link = link;
        return (React.createElement(Link, { href: href },
            React.createElement("div", { className: "notionate-gallery-a" }, children)));
    }
    return (React.createElement(React.Fragment, null, children));
};
var Preview = function (_a) {
    var src = _a.src;
    return (React.createElement("div", { className: "notionate-gallery-preview" }, src && React.createElement("img", { src: src })));
};
var Card = function (_a) {
    var _b;
    var keys = _a.keys, page = _a.page, href = _a.href, link = _a.link; _a.query; var preview = _a.preview;
    var findItems = function (name, page) {
        var propertyId = '';
        for (var _i = 0, _a = Object.entries(page.properties); _i < _a.length; _i++) {
            var _b = _a[_i], k = _b[0], v = _b[1];
            if (k === name) {
                propertyId = v.id;
            }
        }
        return page.property_items.find(function (v) { return ((v.object === 'property_item' && v.id === propertyId) || (v.object === 'list' && v.property_item.id === propertyId)); });
    };
    var path = getLinkPathAndLinkKey(href)[0];
    return (React.createElement("div", { className: "notionate-gallery-card" },
        React.createElement(LinkedCard, { href: buildHref(page, href), link: link },
            preview && React.createElement(Preview, { src: (_b = page.cover) === null || _b === void 0 ? void 0 : _b.src }),
            React.createElement("div", { className: "notionate-gallery-card-text" }, keys.map(function (name, i) { return (React.createElement("div", { key: "".concat(page.id).concat(name), className: "field".concat(i) }, GalleryHandler({ items: findItems(name, page), path: path }))); })))));
};
var Gallery = function (_a) {
    var keys = _a.keys, db = _a.db, href = _a.href, link = _a.link, query = _a.query, preview = _a.preview, size = _a.size, fit = _a.fit;
    var fitClass = "".concat(fit ? ' notionate-gallery-fit' : '');
    var sizeClass = " notionate-gallery-".concat(size || 'medium');
    return (React.createElement("div", { className: "notionate-gallery".concat(fitClass) },
        React.createElement("div", { className: "notionate-gallery-inner".concat(sizeClass) }, db.results.map(function (v) { return (React.createElement(Card, { key: v.id, keys: keys, page: v, href: href || '', link: link, query: query, preview: preview })); }))));
};

var TableCheckboxField = function (_a) {
    var payload = _a.payload;
    return (React.createElement("div", { className: "notionate-table-checkbox" }, payload));
};

var TableDateField = function (_a) {
    var payload = _a.payload;
    return (React.createElement("div", { className: "notionate-table-date" }, payload === null || payload === void 0 ? void 0 : payload.start));
};

var TableTitleField = function (_a) {
    var payload = _a.payload, path = _a.path, slug = _a.slug, link = _a.link, query = _a.query;
    var title = payload.map(function (v) {
        var richtext = v.title;
        switch (richtext.type) {
            case 'text':
                return richtext.text.content;
            case 'mention':
                return richtext.mention.type;
            default:
                return richtext.equation.expression;
        }
    }).join(',');
    var href = "".concat(path).concat(slug);
    var LinkedTitle = function () {
        if (link && query) {
            var Link = link;
            return (React.createElement(React.Fragment, null,
                React.createElement(Link, { className: "notionate-table-title-a", href: { pathname: href, query: query } }, title)));
        }
        else if (link) {
            var Link = link;
            return (React.createElement(React.Fragment, null,
                React.createElement(Link, { className: "notionate-table-title-a", href: href }, title)));
        }
        return (React.createElement("a", { className: "notionate-table-title-a", href: href, title: title }, title));
    };
    return (React.createElement("div", { className: "notionate-table-title" }, (!path && !slug) ? title : LinkedTitle()));
};

var TableRichTextField = function (_a) {
    var payload = _a.payload;
    return (React.createElement("div", { className: "notionate-table-richtext" },
        React.createElement(TextBlock, { tag: "span", block: [payload.rich_text] })));
};

var TableMultiSelectField = function (_a) {
    var payload = _a.payload, path = _a.path, link = _a.link;
    var LinkedTag = function (name) {
        if (!path) {
            return (React.createElement("span", { className: "notionate-table-multiselect-span" }, name));
        }
        var href = "".concat(path, "tags/").concat(encodeURIComponent(name));
        if (link) {
            var Link = link;
            return (React.createElement(React.Fragment, null,
                React.createElement(Link, { className: "notionate-table-multiselect-a", href: href }, name)));
        }
        return (React.createElement("a", { className: "notionate-table-multiselect-a", href: href, title: name }, name));
    };
    return (React.createElement("ul", { className: "notionate-table-multiselect-ul" }, payload.multi_select.map(function (f) { return (React.createElement("li", { key: f.id, className: "notionate-table-multiselect-li notionate-select-".concat(f.color) }, LinkedTag(f.name))); })));
};

var TableSelectField = function (_a) {
    var payload = _a.payload, path = _a.path, link = _a.link;
    var LinkedTag = function (name) {
        if (!path) {
            return (React.createElement("span", { className: "notionate-table-select-span" }, name));
        }
        var href = "".concat(path, "tags/").concat(encodeURIComponent(name));
        if (link) {
            var Link = link;
            return (React.createElement(React.Fragment, null,
                React.createElement(Link, { className: "notionate-table-select-a", href: href }, name)));
        }
        return (React.createElement("a", { className: "notionate-table-select-a", href: href, title: name }, name));
    };
    if (payload.select) {
        return (React.createElement("div", { className: "notionate-table-select-div notionate-select-".concat(payload.select.color) }, LinkedTag(payload.select.name)));
    }
    return React.createElement(React.Fragment, null);
};

var TableUrlField = function (_a) {
    var payload = _a.payload;
    if (payload === null) {
        return (React.createElement(React.Fragment, null));
    }
    return (React.createElement("div", { className: "notionate-table-url" },
        React.createElement("a", { className: "notionate-table-url-a", href: payload, rel: "noreferrer", target: "_blank" },
            React.createElement("span", { className: "notionate-table-url-address" }, payload))));
};

var TableNumberField = function (_a) {
    var payload = _a.payload;
    return (React.createElement("div", { className: "notionate-table-number" }, payload.number));
};

var TableHandler = function (_a) {
    _a.name; var items = _a.items, path = _a.path, slug = _a.slug, link = _a.link, query = _a.query;
    if (items === undefined) {
        return React.createElement(React.Fragment, null);
    }
    if (items.object === 'list') {
        var target = items.results[0];
        switch (target.type) {
            case 'title': { // Skip: Unexpected lexical declaration in case block.
                var payload = items.results;
                return TableTitleField({ payload: payload, path: path, slug: slug, link: link, query: query });
            }
            case 'rich_text':
                return TableRichTextField({ payload: target });
            case 'people':
            case 'relation':
            case 'rollup':
            default:
                console.log('unsupport database property:', target);
                break;
        }
    }
    else {
        switch (items.type) {
            case 'date':
                return TableDateField({ payload: items.date });
            case 'rich_text':
                return TableRichTextField({ payload: items });
            case 'multi_select':
                return TableMultiSelectField({ payload: items, path: path });
            case 'url':
                return TableUrlField({ payload: items.url });
            case 'checkbox':
                return TableCheckboxField({ payload: items.checkbox });
            case 'number':
                return TableNumberField({ payload: items });
            case 'select':
                return TableSelectField({ payload: items, path: path });
            case 'status':
            case 'email':
            case 'phone_number':
            case 'files':
            case 'created_by':
            case 'created_time':
            case 'last_edited_by':
            case 'last_edited_time':
            case 'formula':
            case 'people':
            case 'relation':
            case 'rollup':
            default:
                console.log('unsupport database property:', items);
                break;
        }
    }
};

var TableIcon = function (_a) {
    var type = _a.type;
    switch (type) {
        case 'title':
            return (React.createElement("svg", { viewBox: "0 0 14 14", className: "notionate-table-icon" },
                React.createElement("path", { d: "M7.73943662,8.6971831 C7.77640845,8.7834507 7.81338028,8.8943662 7.81338028,9.00528169 C7.81338028,9.49823944 7.40669014,9.89260563 6.91373239,9.89260563 C6.53169014,9.89260563 6.19894366,9.64612676 6.08802817,9.30105634 L5.75528169,8.33978873 L2.05809859,8.33978873 L1.72535211,9.30105634 C1.61443662,9.64612676 1.2693662,9.89260563 0.887323944,9.89260563 C0.394366197,9.89260563 0,9.49823944 0,9.00528169 C0,8.8943662 0.0246478873,8.7834507 0.0616197183,8.6971831 L2.46478873,2.48591549 C2.68661972,1.90669014 3.24119718,1.5 3.90669014,1.5 C4.55985915,1.5 5.12676056,1.90669014 5.34859155,2.48591549 L7.73943662,8.6971831 Z M2.60035211,6.82394366 L5.21302817,6.82394366 L3.90669014,3.10211268 L2.60035211,6.82394366 Z M11.3996479,3.70598592 C12.7552817,3.70598592 14,4.24823944 14,5.96126761 L14,9.07922535 C14,9.52288732 13.6549296,9.89260563 13.2112676,9.89260563 C12.8169014,9.89260563 12.471831,9.59683099 12.4225352,9.19014085 C12.028169,9.6584507 11.3257042,9.95422535 10.5492958,9.95422535 C9.60035211,9.95422535 8.47887324,9.31338028 8.47887324,7.98239437 C8.47887324,6.58978873 9.60035211,6.08450704 10.5492958,6.08450704 C11.3380282,6.08450704 12.040493,6.33098592 12.4348592,6.81161972 L12.4348592,5.98591549 C12.4348592,5.38204225 11.9172535,4.98767606 11.1285211,4.98767606 C10.6602113,4.98767606 10.2411972,5.11091549 9.80985915,5.38204225 C9.72359155,5.43133803 9.61267606,5.46830986 9.50176056,5.46830986 C9.18133803,5.46830986 8.91021127,5.1971831 8.91021127,4.86443662 C8.91021127,4.64260563 9.0334507,4.44542254 9.19366197,4.34683099 C9.87147887,3.90316901 10.6232394,3.70598592 11.3996479,3.70598592 Z M11.1778169,8.8943662 C11.6830986,8.8943662 12.1760563,8.72183099 12.4348592,8.37676056 L12.4348592,7.63732394 C12.1760563,7.29225352 11.6830986,7.11971831 11.1778169,7.11971831 C10.5616197,7.11971831 10.056338,7.45246479 10.056338,8.0193662 C10.056338,8.57394366 10.5616197,8.8943662 11.1778169,8.8943662 Z M0.65625,11.125 L13.34375,11.125 C13.7061869,11.125 14,11.4188131 14,11.78125 C14,12.1436869 13.7061869,12.4375 13.34375,12.4375 L0.65625,12.4375 C0.293813133,12.4375 4.43857149e-17,12.1436869 0,11.78125 C-4.43857149e-17,11.4188131 0.293813133,11.125 0.65625,11.125 Z" })));
        case 'date':
            return (React.createElement("svg", { viewBox: "0 0 14 14", className: "notionate-table-icon" },
                React.createElement("path", { d: "M10.8889,5.5 L3.11111,5.5 L3.11111,7.05556 L10.8889,7.05556 L10.8889,5.5 Z M12.4444,1.05556 L11.6667,1.05556 L11.6667,0 L10.1111,0 L10.1111,1.05556 L3.88889,1.05556 L3.88889,0 L2.33333,0 L2.33333,1.05556 L1.55556,1.05556 C0.692222,1.05556 0.00777777,1.75556 0.00777777,2.61111 L0,12.5 C0,13.3556 0.692222,14 1.55556,14 L12.4444,14 C13.3,14 14,13.3556 14,12.5 L14,2.61111 C14,1.75556 13.3,1.05556 12.4444,1.05556 Z M12.4444,12.5 L1.55556,12.5 L1.55556,3.94444 L12.4444,3.94444 L12.4444,12.5 Z M8.55556,8.61111 L3.11111,8.61111 L3.11111,10.1667 L8.55556,10.1667 L8.55556,8.61111 Z" })));
        case 'rich_text':
            return (React.createElement("svg", { viewBox: "0 0 14 14", className: "notionate-table-icon" },
                React.createElement("path", { d: "M7,4.56818 C7,4.29204 6.77614,4.06818 6.5,4.06818 L0.5,4.06818 C0.223858,4.06818 0,4.29204 0,4.56818 L0,5.61364 C0,5.88978 0.223858,6.11364 0.5,6.11364 L6.5,6.11364 C6.77614,6.11364 7,5.88978 7,5.61364 L7,4.56818 Z M0.5,1 C0.223858,1 0,1.223858 0,1.5 L0,2.54545 C0,2.8216 0.223858,3.04545 0.5,3.04545 L12.5,3.04545 C12.7761,3.04545 13,2.8216 13,2.54545 L13,1.5 C13,1.223858 12.7761,1 12.5,1 L0.5,1 Z M0,8.68182 C0,8.95796 0.223858,9.18182 0.5,9.18182 L11.5,9.18182 C11.7761,9.18182 12,8.95796 12,8.68182 L12,7.63636 C12,7.36022 11.7761,7.13636 11.5,7.13636 L0.5,7.13636 C0.223858,7.13636 0,7.36022 0,7.63636 L0,8.68182 Z M0,11.75 C0,12.0261 0.223858,12.25 0.5,12.25 L9.5,12.25 C9.77614,12.25 10,12.0261 10,11.75 L10,10.70455 C10,10.4284 9.77614,10.20455 9.5,10.20455 L0.5,10.20455 C0.223858,10.20455 0,10.4284 0,10.70455 L0,11.75 Z" })));
        case 'multi_select':
            return (React.createElement("svg", { viewBox: "0 0 14 14", className: "notionate-table-icon" },
                React.createElement("path", { d: "M4,3 C4,2.447715 4.447715,2 5,2 L12,2 C12.5523,2 13,2.447716 13,3 C13,3.55228 12.5523,4 12,4 L5,4 C4.447715,4 4,3.55228 4,3 Z M4,7 C4,6.447715 4.447715,6 5,6 L12,6 C12.5523,6 13,6.447716 13,7 C13,7.55228 12.5523,8 12,8 L5,8 C4.447715,8 4,7.55228 4,7 Z M4,11 C4,10.447715 4.447715,10 5,10 L12,10 C12.5523,10 13,10.447716 13,11 C13,11.55228 12.5523,12 12,12 L5,12 C4.447715,12 4,11.55228 4,11 Z M2,4 C1.44771525,4 1,3.55228475 1,3 C1,2.44771525 1.44771525,2 2,2 C2.55228475,2 3,2.44771525 3,3 C3,3.55228475 2.55228475,4 2,4 Z M2,8 C1.44771525,8 1,7.55228475 1,7 C1,6.44771525 1.44771525,6 2,6 C2.55228475,6 3,6.44771525 3,7 C3,7.55228475 2.55228475,8 2,8 Z M2,12 C1.44771525,12 1,11.5522847 1,11 C1,10.4477153 1.44771525,10 2,10 C2.55228475,10 3,10.4477153 3,11 C3,11.5522847 2.55228475,12 2,12 Z" })));
        case 'url':
            return (React.createElement("svg", { viewBox: "0 0 14 14", className: "notionate-table-icon" },
                React.createElement("path", { d: "M3.73333,3.86667 L7.46667,3.86667 C8.49613,3.86667 9.33333,4.70387 9.33333,5.73333 C9.33333,6.7628 8.49613,7.6 7.46667,7.6 L6.53333,7.6 C6.01813,7.6 5.6,8.0186 5.6,8.53333 C5.6,9.04807 6.01813,9.46667 6.53333,9.46667 L7.46667,9.46667 C9.5284,9.46667 11.2,7.79507 11.2,5.73333 C11.2,3.6716 9.5284,2 7.46667,2 L3.73333,2 C1.6716,2 0,3.6716 0,5.73333 C0,7.124 0.762067,8.33453 1.88953,8.97713 C1.87553,8.83107 1.86667,8.6836 1.86667,8.53333 C1.86667,7.92013 1.98753,7.33447 2.2036,6.7978 C1.99267,6.4954 1.86667,6.12953 1.86667,5.73333 C1.86667,4.70387 2.70387,3.86667 3.73333,3.86667 Z M12.1095,5.28907 C12.1231,5.4356 12.1333,5.58307 12.1333,5.73333 C12.1333,6.34607 12.0101,6.9294 11.7931,7.46513 C12.0059,7.768 12.1333,8.13573 12.1333,8.53333 C12.1333,9.5628 11.2961,10.4 10.2667,10.4 L6.53333,10.4 C5.50387,10.4 4.66667,9.5628 4.66667,8.53333 C4.66667,7.50387 5.50387,6.66667 6.53333,6.66667 L7.46667,6.66667 C7.98187,6.66667 8.4,6.24807 8.4,5.73333 C8.4,5.2186 7.98187,4.8 7.46667,4.8 L6.53333,4.8 C4.4716,4.8 2.8,6.4716 2.8,8.53333 C2.8,10.59507 4.4716,12.2667 6.53333,12.2667 L10.2667,12.2667 C12.3284,12.2667 14,10.59507 14,8.53333 C14,7.14267 13.2375,5.93167 12.1095,5.28907 Z" })));
        case 'number':
            return (React.createElement("svg", { viewBox: "0 0 14 14", className: "notionate-table-icon" },
                React.createElement("path", { d: "M4.46191,0 C3.8667,0 3.38428,0.482422 3.38428,1.07751 L3.38428,3.38425 L1.07764,3.38425 C0.482422,3.38425 0,3.86667 0,4.46179 C0,5.05688 0.482422,5.53931 1.07764,5.53931 L3.38428,5.53931 L3.38428,8.46063 L1.07764,8.46063 C0.482422,8.46063 0,8.94308 0,9.53818 C0,10.1333 0.482422,10.6157 1.07764,10.6157 L3.38428,10.6157 L3.38428,12.9224 C3.38428,13.5175 3.8667,13.9999 4.46191,13.9999 C5.05664,13.9999 5.53906,13.5175 5.53906,12.9224 L5.53906,10.6157 L8.46045,10.6157 L8.46045,12.9224 C8.46045,13.5175 8.94287,13.9999 9.53809,13.9999 C10.1333,13.9999 10.6157,13.5175 10.6157,12.9224 L10.6157,10.6157 L12.9224,10.6157 C13.5176,10.6157 14,10.1333 14,9.53818 C14,8.94308 13.5176,8.46063 12.9224,8.46063 L10.6157,8.46063 L10.6157,5.53931 L12.9224,5.53931 C13.5176,5.53931 14,5.05688 14,4.46179 C14,3.86667 13.5176,3.38425 12.9224,3.38425 L10.6157,3.38425 L10.6157,1.07751 C10.6157,0.482422 10.1333,0 9.53809,0 C8.94287,0 8.46045,0.482422 8.46045,1.07751 L8.46045,3.38425 L5.53906,3.38425 L5.53906,1.07751 C5.53906,0.482422 5.05664,0 4.46191,0 Z M5.53906,8.46063 L5.53906,5.53931 L8.46045,5.53931 L8.46045,8.46063 L5.53906,8.46063 Z" })));
        case 'checkbox':
            return (React.createElement("svg", { viewBox: "0 0 14 14", className: "notionate-table-icon" },
                React.createElement("path", { d: "M0,3 C0,1.34314 1.34326,0 3,0 L11,0 C12.6567,0 14,1.34314 14,3 L14,11 C14,12.6569 12.6567,14 11,14 L3,14 C1.34326,14 0,12.6569 0,11 L0,3 Z M3,1.5 C2.17139,1.5 1.5,2.17157 1.5,3 L1.5,11 C1.5,11.8284 2.17139,12.5 3,12.5 L11,12.5 C11.8286,12.5 12.5,11.8284 12.5,11 L12.5,3 C12.5,2.17157 11.8286,1.5 11,1.5 L3,1.5 Z M2.83252,6.8161 L3.39893,6.27399 L3.57617,6.10425 L3.92334,5.77216 L4.26904,6.10559 L4.44531,6.27582 L5.58398,7.37402 L9.28271,3.81073 L9.45996,3.64008 L9.80664,3.3056 L10.1538,3.63989 L10.3311,3.81067 L10.8936,4.35303 L11.0708,4.52399 L11.4434,4.88379 L11.0708,5.24353 L10.8936,5.41437 L6.1084,10.0291 L5.93115,10.2 L5.58398,10.5344 L5.23682,10.2 L5.05957,10.0292 L2.83057,7.87946 L2.65283,7.70801 L2.27832,7.34674 L2.6543,6.98694 L2.83252,6.8161 Z" })));
        case 'select':
            return (React.createElement("svg", { viewBox: "0 0 14 14", className: "notionate-table-icon" },
                React.createElement("path", { d: "M7,13 C10.31348,13 13,10.31371 13,7 C13,3.68629 10.31348,1 7,1 C3.68652,1 1,3.68629 1,7 C1,10.31371 3.68652,13 7,13 Z M3.75098,5.32278 C3.64893,5.19142 3.74268,5 3.90869,5 L10.09131,5 C10.25732,5 10.35107,5.19142 10.24902,5.32278 L7.15771,9.29703 C7.07764,9.39998 6.92236,9.39998 6.84229,9.29703 L3.75098,5.32278 Z" })));
        case 'status':
            return (React.createElement("svg", { viewBox: "0 0 16 16", className: "notionate-table-icon" },
                React.createElement("path", { d: "M8.75488 1.02344C8.75488 0.613281 8.41309 0.264648 8.00293 0.264648C7.59277 0.264648 7.25098 0.613281 7.25098 1.02344V3.11523C7.25098 3.51855 7.59277 3.86719 8.00293 3.86719C8.41309 3.86719 8.75488 3.51855 8.75488 3.11523V1.02344ZM3.91504 5.0293C4.20215 5.31641 4.69434 5.32324 4.97461 5.03613C5.26855 4.74902 5.26855 4.25684 4.98145 3.96973L3.53906 2.52051C3.25195 2.2334 2.7666 2.21973 2.47949 2.50684C2.19238 2.79395 2.18555 3.28613 2.47266 3.57324L3.91504 5.0293ZM10.9629 4.01758C10.6826 4.30469 10.6826 4.79688 10.9697 5.08398C11.2568 5.37109 11.749 5.36426 12.0361 5.07715L13.4854 3.62793C13.7725 3.34082 13.7725 2.84863 13.4785 2.55469C13.1982 2.27441 12.7061 2.27441 12.4189 2.56152L10.9629 4.01758ZM15.0234 8.78906C15.4336 8.78906 15.7822 8.44727 15.7822 8.03711C15.7822 7.62695 15.4336 7.28516 15.0234 7.28516H12.9385C12.5283 7.28516 12.1797 7.62695 12.1797 8.03711C12.1797 8.44727 12.5283 8.78906 12.9385 8.78906H15.0234ZM0.975586 7.28516C0.56543 7.28516 0.223633 7.62695 0.223633 8.03711C0.223633 8.44727 0.56543 8.78906 0.975586 8.78906H3.07422C3.48438 8.78906 3.83301 8.44727 3.83301 8.03711C3.83301 7.62695 3.48438 7.28516 3.07422 7.28516H0.975586ZM12.0361 10.9902C11.749 10.71 11.2568 10.71 10.9629 10.9971C10.6826 11.2842 10.6826 11.7764 10.9697 12.0635L12.4258 13.5127C12.7129 13.7998 13.2051 13.793 13.4922 13.5059C13.7793 13.2256 13.7725 12.7266 13.4854 12.4395L12.0361 10.9902ZM2.52051 12.4395C2.22656 12.7266 2.22656 13.2188 2.50684 13.5059C2.79395 13.793 3.28613 13.7998 3.57324 13.5127L5.02246 12.0703C5.31641 11.7832 5.31641 11.291 5.03613 11.0039C4.74902 10.7168 4.25684 10.71 3.96973 10.9971L2.52051 12.4395ZM8.75488 12.9658C8.75488 12.5557 8.41309 12.207 8.00293 12.207C7.59277 12.207 7.25098 12.5557 7.25098 12.9658V15.0576C7.25098 15.4609 7.59277 15.8096 8.00293 15.8096C8.41309 15.8096 8.75488 15.4609 8.75488 15.0576V12.9658Z" })));
        case 'person':
            return (React.createElement("svg", { viewBox: "0 0 14 14", className: "notionate-table-icon" },
                React.createElement("path", { d: "M9.625,10.8465 C8.91187,10.2891 8.12088,9.926 7,9.26013 L7,8.71938 C7.21175,8.47612 7.392,8.176 7.53813,7.83213 C7.94587,7.7315 8.3125,7.33425 8.3125,7 C8.3125,6.51788 8.1095,6.32713 7.8715,6.17137 C7.8715,6.15562 7.875,6.14162 7.875,6.125 C7.875,5.41362 7.4375,3.5 5.25,3.5 C3.0625,3.5 2.625,5.4145 2.625,6.125 C2.625,6.14162 2.6285,6.15562 2.6285,6.17137 C2.3905,6.32713 2.1875,6.51788 2.1875,7 C2.1875,7.33425 2.55413,7.7315 2.96187,7.833 C3.108,8.176 3.28825,8.47612 3.5,8.71938 L3.5,9.26013 C2.37912,9.92513 1.58812,10.2882 0.875,10.8465 C0.041125,11.4984 0,12.4688 0,14 L10.5,14 C10.5,12.4688 10.4589,11.4984 9.625,10.8465 Z M13.125,7.3465 C12.4119,6.78912 11.6209,6.426 10.5,5.76013 L10.5,5.21938 C10.7118,4.97613 10.892,4.676 11.0381,4.33213 C11.4459,4.2315 11.8125,3.83425 11.8125,3.5 C11.8125,3.01787 11.6095,2.82713 11.3715,2.67138 C11.3715,2.65562 11.375,2.64162 11.375,2.625 C11.375,1.91363 10.9375,0 8.75,0 C6.5625,0 6.125,1.9145 6.125,2.625 C6.125,2.64162 6.1285,2.65562 6.1285,2.67138 C6.11188,2.68275 6.09787,2.69588 6.08125,2.70725 C7.83212,3.066 8.59688,4.54825 8.72813,5.74787 C8.97575,6.00863 9.1875,6.39625 9.1875,7 C9.1875,7.60288 8.771,8.20312 8.18388,8.51462 C8.127,8.624 8.06662,8.729 8.00275,8.82962 C8.155,8.91537 8.30025,8.99675 8.44025,9.07463 C9.08075,9.4325 9.63375,9.74137 10.164,10.1561 C10.3022,10.2638 10.4204,10.3801 10.5289,10.4991 L14,10.4991 C14,8.96875 13.9589,7.99837 13.125,7.3465 Z" })));
        case 'email':
            return (React.createElement("svg", { viewBox: "0 0 14 14", className: "notionate-table-icon" },
                React.createElement("path", { d: "M14,6.22508 C14,7.0471 13.8666,7.79918 13.5999,8.48134 C13.3332,9.16351 12.9563,9.69867 12.4692,10.0868 C11.9821,10.475 11.524,10.6862 10.9764,10.6862 C10.5473,10.6862 10.1676,10.5849 9.83705,10.3823 C9.50653,10.1796 9.2688,9.91274 9.12384,9.58165 C8.51065,10.318 7.56114,10.6862 6.5928,10.6862 C5.56647,10.6862 4.75762,10.3823 4.16618,9.77431 C3.57473,9.16636 3.27902,8.33436 3.27902,7.27829 C3.27902,6.0738 3.66752,5.10337 4.44451,4.36697 C5.2215,3.63058 6.2362,3.26239 7.48867,3.26239 C7.98734,3.26239 9.5206,3.47449 9.74131,3.53033 C10.2518,3.65949 10.6003,4.12335 10.5763,4.6417 C10.5697,4.78537 10.5175,5.88115 10.4198,7.92905 C10.4198,8.72253 10.6401,9.11927 11.0808,9.11927 C11.4519,9.11927 11.7476,8.8524 11.968,8.31865 C12.1883,7.78491 12.2985,7.08706 12.2985,6.22508 C12.2985,5.30601 12.1042,4.49399 11.7157,3.78899 C11.3272,3.08399 10.7808,2.54597 10.0762,2.17492 C9.37173,1.80387 8.56719,1.61835 7.66263,1.61835 C6.49134,1.61835 5.47373,1.85525 4.60976,2.32905 C3.74579,2.80286 3.08332,3.48644 2.62234,4.37981 C2.16136,5.27319 1.93089,6.30499 1.93089,7.47523 C1.93089,9.05077 2.35851,10.2595 3.21378,11.1015 C4.06905,11.9435 5.30847,12.3645 6.93203,12.3645 C7.54667,12.3645 8.22216,12.2975 8.95856,12.1633 C9.18419,12.1222 9.47682,12.0555 9.83645,11.9632 C10.2649,11.8532 10.7081,12.0814 10.8607,12.4905 C11.0082,12.8863 10.802,13.3249 10.4001,13.4701 C10.3865,13.475 10.3728,13.4796 10.359,13.4837 C9.30721,13.7996 8.18808,13.9716 7.00161,14 C4.7982,14 3.08041,13.4292 1.84823,12.2875 C0.616061,11.1458 0,9.55883 0,7.52661 C0,6.11661 0.314555,4.8365 0.943688,3.68624 C1.57282,2.53598 2.46867,1.63405 3.63126,0.980429 C4.79385,0.326807 6.13184,0 7.64524,0 C8.9209,0 10.1589,0.290316 11.0634,0.770643 C11.968,1.25097 12.6374,1.99796 13.1824,2.94557 C13.7275,3.89318 14,4.98634 14,6.22508 Z M5.38462,7.23555 C5.38462,8.44263 5.87335,9.04616 6.85083,9.04616 C7.3623,9.04616 7.75159,8.86452 8.01869,8.50126 C8.28579,8.13799 8.44773,7.54734 8.50456,6.72927 L8.61539,4.83286 C8.32555,4.76993 7.9988,4.73846 7.63509,4.73846 C6.92471,4.73846 6.37204,4.96157 5.97707,5.40779 C5.58211,5.854 5.38462,6.46325 5.38462,7.23555 Z" })));
        case 'phone_number':
            return (React.createElement("svg", { viewBox: "0 0 14 14", className: "notionate-table-icon" },
                React.createElement("path", { d: "M2.20731,0.0127209 C2.1105,-0.0066419 1.99432,-0.00664663 1.91687,0.032079 C0.871279,0.438698 0.212942,1.92964 0.0580392,2.95587 C-0.426031,6.28627 2.20731,9.17133 4.62766,11.0689 C6.77694,12.7534 10.9012,15.5223 13.3409,12.8503 C13.6507,12.5211 14.0186,12.037 13.9993,11.553 C13.9412,10.7397 13.186,10.1588 12.6051,9.71349 C12.1598,9.38432 11.2304,8.47427 10.6495,8.49363 C10.1267,8.51299 9.79754,9.05515 9.46837,9.38432 L8.88748,9.96521 C8.79067,10.062 7.55145,9.24878 7.41591,9.15197 C6.91248,8.8228 6.4284,8.45491 6.00242,8.04829 C5.57644,7.64167 5.18919,7.19632 4.86002,6.73161 C4.7632,6.59607 3.96933,5.41495 4.04678,5.31813 C4.04678,5.31813 4.72448,4.58234 4.91811,4.2919 C5.32473,3.67229 5.63453,3.18822 5.16982,2.45243 C4.99556,2.18135 4.78257,1.96836 4.55021,1.73601 C4.14359,1.34875 3.73698,0.942131 3.27227,0.612963 C3.02055,0.419335 2.59457,0.0708094 2.20731,0.0127209 Z" })));
        case 'file':
            return (React.createElement("svg", { viewBox: "0 0 14 14", className: "notionate-table-icon" },
                React.createElement("path", { d: "M5.94578,14 C4.62416,14 3.38248,13.4963 2.44892,12.585 C1.514641,11.6736 1,10.4639 1,9.17405 C1.00086108,7.88562 1.514641,6.67434 2.44892,5.76378 L7.45612,0.985988 C8.80142,-0.327216 11.1777,-0.332396 12.5354,0.992848 C13.9369,2.36163 13.9369,4.58722 12.5354,5.95418 L8.03046,10.2414 C7.16278,11.0877 5.73682,11.0894 4.86024,10.2345 C3.98394,9.37789 3.98394,7.98769 4.86024,7.1327 L6.60422,5.4317 L7.87576,6.67196 L6.13177,8.37297 C6.01668,8.48539 6.00003,8.61545 6.00003,8.68335 C6.00003,8.75083 6.01668,8.88103 6.13177,8.99429 C6.36197,9.21689 6.53749,9.21689 6.76768,8.99429 L11.2707,4.70622 C11.9645,4.03016 11.9645,2.91757 11.2638,2.23311 C10.5843,1.57007 9.40045,1.57007 8.72077,2.23311 L3.71342,7.0109 C3.12602,7.58406 2.79837,8.35435 2.79837,9.17405 C2.79837,9.99459 3.12602,10.7654 3.72045,11.3446 C4.90947,12.5062 6.98195,12.5062 8.17096,11.3446 L10.41911,9.15165 L11.6906,10.3919 L9.4425,12.585 C8.50808,13.4963 7.2664,14 5.94578,14 Z" })));
        case 'formula':
            return (React.createElement("svg", { viewBox: "0 0 14 14", className: "notionate-table-icon" },
                React.createElement("path", { d: "M7.77892,7.06304 L4.62218,11.2875 C4.58556,11.3416 4.55285,11.4392 4.5504,11.5052 C4.5504,11.7022 4.7047,11.8619 4.89562,11.8619 L11.1383,11.8619 C11.6139,11.8619 11.9996,12.2598 11.9996,12.7507 L11.9996,13.1111 C11.9996,13.602 11.6139,14 11.1383,14 L1.861927,14 C1.385853,14 1.00011061,13.602 1.00011061,13.1111 L1.00011061,12.6858 C0.99718092,12.4783 1.0523567,12.3098 1.176868,12.1466 L4.39269,7.79888 C4.74816,7.31841 4.74572,6.65139 4.38683,6.17354 L1.400013,2.19436 C1.27306,2.03028 1.216419,1.85993 1.219349,1.65006 L1.219349,0.888889 C1.219349,0.397968 1.605091,0 2.08117,0 L10.91906,0 C11.3946,0 11.7804,0.397968 11.7804,0.888889 L11.7804,1.24925 C11.7804,1.74017 11.3946,2.13814 10.91906,2.13814 L5.13634,2.13814 C4.94542,2.13814 4.79064,2.29801 4.79064,2.49522 C4.79308,2.56049 4.82482,2.65709 4.86095,2.71087 L7.78038,6.68628 C7.8297,6.74847 7.84435,6.7934 7.84142,6.87363 C7.84435,6.95493 7.82921,7.00048 7.77892,7.06304 Z" })));
        case 'rollup':
            return (React.createElement("svg", { viewBox: "0 0 18 18", className: "notionate-table-icon" },
                React.createElement("path", { d: "M17,15.6l-5.119-5.119C12.583,9.499,13,8.299,13,7c0-3.314-2.686-6-6-6S1,3.686,1,7s2.686,6,6,6 c1.299,0,2.499-0.417,3.481-1.119L15.6,17L17,15.6z M7,11c-2.209,0-4-1.791-4-4c0-2.209,1.791-4,4-4s4,1.791,4,4 C11,9.209,9.209,11,7,11z" })));
        case 'created_at':
        case 'last_edited_at':
            return (React.createElement("svg", { viewBox: "0 0 14 14", className: "notionate-table-icon" },
                React.createElement("path", { d: "M7.01356 14.0001C8.8042 14.0001 10.5958 13.3107 11.9575 11.9324C14.681 9.21201 14.6808 4.7603 11.9571 2.04013C9.23336 -0.680043 4.77573 -0.680043 2.05199 2.04013C0.727519 3.36277 0 5.13301 0 6.99553C0 8.8764 0.727811 10.6285 2.05199 11.9509C3.43207 13.3106 5.22243 14.0001 7.01356 14.0001ZM3.72947 7.00914V8.461V8.65543H3.92382H5.34563H8.2794H8.4738V8.461V5.52541V3.37947V3.18502H8.2794H6.82747H6.63307V3.37947V6.81467H3.92382H3.72947V7.00914ZM1.83985 6.99553C1.83985 5.61698 2.38099 4.32597 3.36061 3.3477C5.36746 1.34337 8.64803 1.34062 10.6585 3.33944C10.6613 3.34219 10.6639 3.34494 10.6668 3.3477C12.676 5.3546 12.6763 8.63642 10.6668 10.6434C8.65705 12.6504 5.37031 12.6504 3.36061 10.6434C2.38099 9.66506 1.83985 8.37408 1.83985 6.99553Z" })));
        case 'created_by':
        case 'last_edited_by':
            return (React.createElement("svg", { viewBox: "0 0 14 14", className: "notionate-table-icon" },
                React.createElement("path", { d: "M13.125,10.0354 C12.5536,9.48588 10.801,8.53125 9.625,7.875 L9.625,7.04112 C9.849,6.71912 10.045,6.37 10.1911,5.98588 C10.5849,5.7435 10.9375,5.28412 10.9375,4.8125 C10.9375,4.35488 10.9323,3.94275 10.4668,3.605 C10.3049,1.5575 9.436,0 7,0 C4.564,0 3.69513,1.5575 3.53325,3.605 C3.06775,3.94275 3.0625,4.35488 3.0625,4.8125 C3.0625,5.28412 3.41513,5.7435 3.80888,5.98588 C3.955,6.37 4.151,6.71912 4.375,7.04112 L4.375,7.875 C3.199,8.53125 1.44638,9.48588 0.875,10.0354 C0.1645,10.7188 0,11.8125 0,14 L14,14 C14,11.8125 13.8364,10.7188 13.125,10.0354 Z" })));
        case 'relation':
        default:
            return (React.createElement("span", null, "\u2753"));
    }
};

var TablePropertyNameAndIcon = function (_a) {
    var name = _a.name, db = _a.db;
    if (!(name in db.meta.properties)) {
        return (React.createElement(React.Fragment, null, "Unknown \"".concat(name, "\"")));
    }
    var propType = db.meta.properties[name].type;
    return (React.createElement("div", { className: "notionate-table-cell-inner" },
        React.createElement(TableIcon, { type: propType }),
        React.createElement("div", { className: "notionate-table-cell-text" }, name)));
};
var Table = function (_a) {
    var keys = _a.keys, db = _a.db, href = _a.href, link = _a.link, query = _a.query;
    var getSlug = function (key, page) {
        if (!('properties' in page)) {
            return 'not-found-properties';
        }
        if (key === 'id') {
            return page.id;
        }
        if (!(key in page.properties)) {
            return 'not-found-key-in-page-properties';
        }
        var p = page.properties[key];
        if (!('rich_text' in p)) {
            return 'not-found-richtext-in-key';
        }
        // @ts-ignore
        return p.rich_text.map(function (v) { return v.text.content; }).join(',');
    };
    var _b = href ? getLinkPathAndLinkKey(href) : [undefined, undefined], path = _b[0], slugKey = _b[1];
    var dbf = function (name, page) {
        if (!('property_items' in page) || !('properties' in page)) {
            return React.createElement(React.Fragment, null);
        }
        var propertyId = '';
        for (var _i = 0, _a = Object.entries(page.properties); _i < _a.length; _i++) {
            var _b = _a[_i], k = _b[0], v = _b[1];
            if (k === name) {
                propertyId = v.id;
            }
        }
        var items = page.property_items.find(function (v) { return ((v.object === 'property_item' && v.id === propertyId) || (v.object === 'list' && v.property_item.id === propertyId)); });
        var slug = slugKey ? getSlug(slugKey, page) : undefined;
        return TableHandler({ name: name, items: items, path: path, slug: slug, link: link, query: query });
    };
    return (React.createElement("div", { className: "notionate-table" },
        React.createElement("div", { className: "notionate-table-inner" },
            React.createElement("div", { className: "notionate-table-header notionate-table-row" }, keys.map(function (name, i) { return (React.createElement("div", { key: "".concat(name, "-").concat(i), className: "notionate-table-cell notionate-table-column-".concat(i) },
                React.createElement(TablePropertyNameAndIcon, { name: name, db: db }))); })),
            db.results.map(function (v) { return (React.createElement("div", { key: v.id, className: "notionate-table-row" }, keys.map(function (name, i) { return (React.createElement("div", { key: "".concat(v.id).concat(name), className: "notionate-table-cell notionate-table-column-".concat(i) },
                React.createElement("div", { className: "notionate-table-cell-inner" }, dbf(name, v)))); }))); }))));
};

var ColumnlistBlock = function (_a) {
    var block = _a.block, href = _a.href, link = _a.link, query = _a.query;
    var columns = block.columns.map(function (v, i) {
        return (React.createElement("div", { key: i, className: "notionate-blocks-columnlist-inner" }, Blocks({ blocks: v, href: href, link: link, query: query })));
    });
    var l = columns.length;
    var columnlistStyle = {
        gridTemplate: "repeat(1, 1fr) / repeat(".concat(l, ", 1fr)"),
    };
    return (React.createElement("div", { className: "notionate-blocks-columnlist", style: columnlistStyle }, columns));
};

var VideoBlock = function (_a) {
    var _b, _c, _d;
    var block = _a.block;
    if (((_b = block.video) === null || _b === void 0 ? void 0 : _b.type) !== 'external' || (((_c = block.video) === null || _c === void 0 ? void 0 : _c.type) === 'external' && ((_d = block.video) === null || _d === void 0 ? void 0 : _d.html) === undefined)) {
        console.log('The html for this video block was undefined:', block);
        return React.createElement(React.Fragment, null);
    }
    var providerClass = (block.video.html.includes('youtube')) ? ' notionate-blocks-video-youtube' : '';
    return (React.createElement("div", { className: "notionate-blocks-video" },
        React.createElement("div", { className: "notionate-blocks-video-inner" },
            React.createElement("div", { className: "notionate-blocks-video-html".concat(providerClass), dangerouslySetInnerHTML: { __html: block.video.html } }),
            React.createElement("div", { className: "notionate-blocks-video-caption" },
                React.createElement(TextBlock, { tag: "span", block: block.video.caption })))));
};

var TwitterBlock = function (_a) {
    var block = _a.block;
    var htmlWithRemovedScript = block.embed.html.replace(/<script>.*/, '');
    React.useEffect(function () {
        var script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        document.getElementsByClassName('notionate-blocks-embed-inner')[0].appendChild(script);
    }, []);
    return (React.createElement("div", { className: "notionate-blocks-embed notionate-blocks-embed-twitter" },
        React.createElement("div", { className: "notionate-blocks-embed-inner", dangerouslySetInnerHTML: { __html: htmlWithRemovedScript } }),
        React.createElement("div", { className: "notionate-blocks-embed-caption" },
            React.createElement(TextBlock, { tag: "span", block: block.embed.caption }))));
};
var EmbedBlock = function (_a) {
    var _b;
    var block = _a.block;
    if (((_b = block.embed) === null || _b === void 0 ? void 0 : _b.html) === undefined) {
        console.log('The html property for this embed block was undefined:', block);
        return React.createElement(React.Fragment, null);
    }
    if (block.embed.html.includes('twitter')) {
        return (React.createElement(TwitterBlock, { block: block }));
    }
    var providerClass = block.embed.html.includes('speakerdeck') ? ' notionate-blocks-embed-speakerdeck' : '';
    return (React.createElement("div", { className: "notionate-blocks-embed" },
        React.createElement("div", { className: "notionate-blocks-embed-inner".concat(providerClass), dangerouslySetInnerHTML: { __html: block.embed.html } }),
        React.createElement("div", { className: "notionate-blocks-embed-caption" },
            React.createElement(TextBlock, { tag: "span", block: block.embed.caption }))));
};

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var prismExports = {};
var prism = {
  get exports(){ return prismExports; },
  set exports(v){ prismExports = v; },
};

(function (module) {
  /* **********************************************
       Begin prism-core.js
  ********************************************** */

  /// <reference lib="WebWorker"/>

  var _self = typeof window !== 'undefined' ? window // if in browser
  : typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
  : {} // if in node js
  ;

  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var Prism = function (_self) {
    // Private helper vars
    var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
    var uniqueId = 0;

    // The grammar object for plaintext
    var plainTextGrammar = {};
    var _ = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: _self.Prism && _self.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function encode(tokens) {
          if (tokens instanceof Token) {
            return new Token(tokens.type, encode(tokens.content), tokens.alias);
          } else if (Array.isArray(tokens)) {
            return tokens.map(encode);
          } else {
            return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
          }
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function type(o) {
          return Object.prototype.toString.call(o).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function objId(obj) {
          if (!obj['__id']) {
            Object.defineProperty(obj, '__id', {
              value: ++uniqueId
            });
          }
          return obj['__id'];
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function deepClone(o, visited) {
          visited = visited || {};
          var clone;
          var id;
          switch (_.util.type(o)) {
            case 'Object':
              id = _.util.objId(o);
              if (visited[id]) {
                return visited[id];
              }
              clone = /** @type {Record<string, any>} */{};
              visited[id] = clone;
              for (var key in o) {
                if (o.hasOwnProperty(key)) {
                  clone[key] = deepClone(o[key], visited);
                }
              }
              return (/** @type {any} */clone
              );
            case 'Array':
              id = _.util.objId(o);
              if (visited[id]) {
                return visited[id];
              }
              clone = [];
              visited[id] = clone;
              /** @type {Array} */ /** @type {any} */o.forEach(function (v, i) {
                clone[i] = deepClone(v, visited);
              });
              return (/** @type {any} */clone
              );
            default:
              return o;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function getLanguage(element) {
          while (element) {
            var m = lang.exec(element.className);
            if (m) {
              return m[1].toLowerCase();
            }
            element = element.parentElement;
          }
          return 'none';
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function setLanguage(element, language) {
          // remove all `language-xxxx` classes
          // (this might leave behind a leading space)
          element.className = element.className.replace(RegExp(lang, 'gi'), '');

          // add the new `language-xxxx` class
          // (using `classList` will automatically clean up spaces for us)
          element.classList.add('language-' + language);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function currentScript() {
          if (typeof document === 'undefined') {
            return null;
          }
          if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
            return (/** @type {any} */document.currentScript
            );
          }

          // IE11 workaround
          // we'll get the src of the current script by parsing IE11's error stack trace
          // this will not work for inline scripts

          try {
            throw new Error();
          } catch (err) {
            // Get file src url from stack. Specifically works with the format of stack traces in IE.
            // A stack will look like this:
            //
            // Error
            //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
            //    at Global code (http://localhost/components/prism-core.js:606:1)

            var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
            if (src) {
              var scripts = document.getElementsByTagName('script');
              for (var i in scripts) {
                if (scripts[i].src == src) {
                  return scripts[i];
                }
              }
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function isActive(element, className, defaultActivation) {
          var no = 'no-' + className;
          while (element) {
            var classList = element.classList;
            if (classList.contains(className)) {
              return true;
            }
            if (classList.contains(no)) {
              return false;
            }
            element = element.parentElement;
          }
          return !!defaultActivation;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: plainTextGrammar,
        plaintext: plainTextGrammar,
        text: plainTextGrammar,
        txt: plainTextGrammar,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function extend(id, redef) {
          var lang = _.util.clone(_.languages[id]);
          for (var key in redef) {
            lang[key] = redef[key];
          }
          return lang;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function insertBefore(inside, before, insert, root) {
          root = root || /** @type {any} */_.languages;
          var grammar = root[inside];
          /** @type {Grammar} */
          var ret = {};
          for (var token in grammar) {
            if (grammar.hasOwnProperty(token)) {
              if (token == before) {
                for (var newToken in insert) {
                  if (insert.hasOwnProperty(newToken)) {
                    ret[newToken] = insert[newToken];
                  }
                }
              }

              // Do not insert token which also occur in insert. See #1525
              if (!insert.hasOwnProperty(token)) {
                ret[token] = grammar[token];
              }
            }
          }
          var old = root[inside];
          root[inside] = ret;

          // Update references in other language definitions
          _.languages.DFS(_.languages, function (key, value) {
            if (value === old && key != inside) {
              this[key] = ret;
            }
          });
          return ret;
        },
        // Traverse a language definition with Depth First Search
        DFS: function DFS(o, callback, type, visited) {
          visited = visited || {};
          var objId = _.util.objId;
          for (var i in o) {
            if (o.hasOwnProperty(i)) {
              callback.call(o, i, o[i], type || i);
              var property = o[i];
              var propertyType = _.util.type(property);
              if (propertyType === 'Object' && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, null, visited);
              } else if (propertyType === 'Array' && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, i, visited);
              }
            }
          }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function highlightAll(async, callback) {
        _.highlightAllUnder(document, async, callback);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function highlightAllUnder(container, async, callback) {
        var env = {
          callback: callback,
          container: container,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        _.hooks.run('before-highlightall', env);
        env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
        _.hooks.run('before-all-elements-highlight', env);
        for (var i = 0, element; element = env.elements[i++];) {
          _.highlightElement(element, async === true, env.callback);
        }
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function highlightElement(element, async, callback) {
        // Find language
        var language = _.util.getLanguage(element);
        var grammar = _.languages[language];

        // Set language on the element, if not present
        _.util.setLanguage(element, language);

        // Set language on the parent, for styling
        var parent = element.parentElement;
        if (parent && parent.nodeName.toLowerCase() === 'pre') {
          _.util.setLanguage(parent, language);
        }
        var code = element.textContent;
        var env = {
          element: element,
          language: language,
          grammar: grammar,
          code: code
        };
        function insertHighlightedCode(highlightedCode) {
          env.highlightedCode = highlightedCode;
          _.hooks.run('before-insert', env);
          env.element.innerHTML = env.highlightedCode;
          _.hooks.run('after-highlight', env);
          _.hooks.run('complete', env);
          callback && callback.call(env.element);
        }
        _.hooks.run('before-sanity-check', env);

        // plugins may change/add the parent/element
        parent = env.element.parentElement;
        if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
          parent.setAttribute('tabindex', '0');
        }
        if (!env.code) {
          _.hooks.run('complete', env);
          callback && callback.call(env.element);
          return;
        }
        _.hooks.run('before-highlight', env);
        if (!env.grammar) {
          insertHighlightedCode(_.util.encode(env.code));
          return;
        }
        if (async && _self.Worker) {
          var worker = new Worker(_.filename);
          worker.onmessage = function (evt) {
            insertHighlightedCode(evt.data);
          };
          worker.postMessage(JSON.stringify({
            language: env.language,
            code: env.code,
            immediateClose: true
          }));
        } else {
          insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
        }
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function highlight(text, grammar, language) {
        var env = {
          code: text,
          grammar: grammar,
          language: language
        };
        _.hooks.run('before-tokenize', env);
        if (!env.grammar) {
          throw new Error('The language "' + env.language + '" has no grammar.');
        }
        env.tokens = _.tokenize(env.code, env.grammar);
        _.hooks.run('after-tokenize', env);
        return Token.stringify(_.util.encode(env.tokens), env.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function tokenize(text, grammar) {
        var rest = grammar.rest;
        if (rest) {
          for (var token in rest) {
            grammar[token] = rest[token];
          }
          delete grammar.rest;
        }
        var tokenList = new LinkedList();
        addAfter(tokenList, tokenList.head, text);
        matchGrammar(text, tokenList, grammar, tokenList.head, 0);
        return toArray(tokenList);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function add(name, callback) {
          var hooks = _.hooks.all;
          hooks[name] = hooks[name] || [];
          hooks[name].push(callback);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function run(name, env) {
          var callbacks = _.hooks.all[name];
          if (!callbacks || !callbacks.length) {
            return;
          }
          for (var i = 0, callback; callback = callbacks[i++];) {
            callback(env);
          }
        }
      },
      Token: Token
    };
    _self.Prism = _;

    // Typescript note:
    // The following can be used to import the Token type in JSDoc:
    //
    //   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

    /**
     * Creates a new token.
     *
     * @param {string} type See {@link Token#type type}
     * @param {string | TokenStream} content See {@link Token#content content}
     * @param {string|string[]} [alias] The alias(es) of the token.
     * @param {string} [matchedStr=""] A copy of the full string this token was created from.
     * @class
     * @global
     * @public
     */
    function Token(type, content, alias, matchedStr) {
      /**
       * The type of the token.
       *
       * This is usually the key of a pattern in a {@link Grammar}.
       *
       * @type {string}
       * @see GrammarToken
       * @public
       */
      this.type = type;
      /**
       * The strings or tokens contained by this token.
       *
       * This will be a token stream if the pattern matched also defined an `inside` grammar.
       *
       * @type {string | TokenStream}
       * @public
       */
      this.content = content;
      /**
       * The alias(es) of the token.
       *
       * @type {string|string[]}
       * @see GrammarToken
       * @public
       */
      this.alias = alias;
      // Copy of the full string this token was created from
      this.length = (matchedStr || '').length | 0;
    }

    /**
     * A token stream is an array of strings and {@link Token Token} objects.
     *
     * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
     * them.
     *
     * 1. No adjacent strings.
     * 2. No empty strings.
     *
     *    The only exception here is the token stream that only contains the empty string and nothing else.
     *
     * @typedef {Array<string | Token>} TokenStream
     * @global
     * @public
     */

    /**
     * Converts the given token or token stream to an HTML representation.
     *
     * The following hooks will be run:
     * 1. `wrap`: On each {@link Token}.
     *
     * @param {string | Token | TokenStream} o The token or token stream to be converted.
     * @param {string} language The name of current language.
     * @returns {string} The HTML representation of the token or token stream.
     * @memberof Token
     * @static
     */
    Token.stringify = function stringify(o, language) {
      if (typeof o == 'string') {
        return o;
      }
      if (Array.isArray(o)) {
        var s = '';
        o.forEach(function (e) {
          s += stringify(e, language);
        });
        return s;
      }
      var env = {
        type: o.type,
        content: stringify(o.content, language),
        tag: 'span',
        classes: ['token', o.type],
        attributes: {},
        language: language
      };
      var aliases = o.alias;
      if (aliases) {
        if (Array.isArray(aliases)) {
          Array.prototype.push.apply(env.classes, aliases);
        } else {
          env.classes.push(aliases);
        }
      }
      _.hooks.run('wrap', env);
      var attributes = '';
      for (var name in env.attributes) {
        attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
      }
      return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
    };

    /**
     * @param {RegExp} pattern
     * @param {number} pos
     * @param {string} text
     * @param {boolean} lookbehind
     * @returns {RegExpExecArray | null}
     */
    function matchPattern(pattern, pos, text, lookbehind) {
      pattern.lastIndex = pos;
      var match = pattern.exec(text);
      if (match && lookbehind && match[1]) {
        // change the match to remove the text matched by the Prism lookbehind group
        var lookbehindLength = match[1].length;
        match.index += lookbehindLength;
        match[0] = match[0].slice(lookbehindLength);
      }
      return match;
    }

    /**
     * @param {string} text
     * @param {LinkedList<string | Token>} tokenList
     * @param {any} grammar
     * @param {LinkedListNode<string | Token>} startNode
     * @param {number} startPos
     * @param {RematchOptions} [rematch]
     * @returns {void}
     * @private
     *
     * @typedef RematchOptions
     * @property {string} cause
     * @property {number} reach
     */
    function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
      for (var token in grammar) {
        if (!grammar.hasOwnProperty(token) || !grammar[token]) {
          continue;
        }
        var patterns = grammar[token];
        patterns = Array.isArray(patterns) ? patterns : [patterns];
        for (var j = 0; j < patterns.length; ++j) {
          if (rematch && rematch.cause == token + ',' + j) {
            return;
          }
          var patternObj = patterns[j];
          var inside = patternObj.inside;
          var lookbehind = !!patternObj.lookbehind;
          var greedy = !!patternObj.greedy;
          var alias = patternObj.alias;
          if (greedy && !patternObj.pattern.global) {
            // Without the global flag, lastIndex won't work
            var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
            patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
          }

          /** @type {RegExp} */
          var pattern = patternObj.pattern || patternObj;
          for (
          // iterate the token list and keep track of the current token/string position
          var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
            if (rematch && pos >= rematch.reach) {
              break;
            }
            var str = currentNode.value;
            if (tokenList.length > text.length) {
              // Something went terribly wrong, ABORT, ABORT!
              return;
            }
            if (str instanceof Token) {
              continue;
            }
            var removeCount = 1; // this is the to parameter of removeBetween
            var match;
            if (greedy) {
              match = matchPattern(pattern, pos, text, lookbehind);
              if (!match || match.index >= text.length) {
                break;
              }
              var from = match.index;
              var to = match.index + match[0].length;
              var p = pos;

              // find the node that contains the match
              p += currentNode.value.length;
              while (from >= p) {
                currentNode = currentNode.next;
                p += currentNode.value.length;
              }
              // adjust pos (and p)
              p -= currentNode.value.length;
              pos = p;

              // the current node is a Token, then the match starts inside another Token, which is invalid
              if (currentNode.value instanceof Token) {
                continue;
              }

              // find the last node which is affected by this match
              for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === 'string'); k = k.next) {
                removeCount++;
                p += k.value.length;
              }
              removeCount--;

              // replace with the new match
              str = text.slice(pos, p);
              match.index -= pos;
            } else {
              match = matchPattern(pattern, 0, str, lookbehind);
              if (!match) {
                continue;
              }
            }

            // eslint-disable-next-line no-redeclare
            var from = match.index;
            var matchStr = match[0];
            var before = str.slice(0, from);
            var after = str.slice(from + matchStr.length);
            var reach = pos + str.length;
            if (rematch && reach > rematch.reach) {
              rematch.reach = reach;
            }
            var removeFrom = currentNode.prev;
            if (before) {
              removeFrom = addAfter(tokenList, removeFrom, before);
              pos += before.length;
            }
            removeRange(tokenList, removeFrom, removeCount);
            var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
            currentNode = addAfter(tokenList, removeFrom, wrapped);
            if (after) {
              addAfter(tokenList, currentNode, after);
            }
            if (removeCount > 1) {
              // at least one Token object was removed, so we have to do some rematching
              // this can only happen if the current pattern is greedy

              /** @type {RematchOptions} */
              var nestedRematch = {
                cause: token + ',' + j,
                reach: reach
              };
              matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

              // the reach might have been extended because of the rematching
              if (rematch && nestedRematch.reach > rematch.reach) {
                rematch.reach = nestedRematch.reach;
              }
            }
          }
        }
      }
    }

    /**
     * @typedef LinkedListNode
     * @property {T} value
     * @property {LinkedListNode<T> | null} prev The previous node.
     * @property {LinkedListNode<T> | null} next The next node.
     * @template T
     * @private
     */

    /**
     * @template T
     * @private
     */
    function LinkedList() {
      /** @type {LinkedListNode<T>} */
      var head = {
        value: null,
        prev: null,
        next: null
      };
      /** @type {LinkedListNode<T>} */
      var tail = {
        value: null,
        prev: head,
        next: null
      };
      head.next = tail;

      /** @type {LinkedListNode<T>} */
      this.head = head;
      /** @type {LinkedListNode<T>} */
      this.tail = tail;
      this.length = 0;
    }

    /**
     * Adds a new node with the given value to the list.
     *
     * @param {LinkedList<T>} list
     * @param {LinkedListNode<T>} node
     * @param {T} value
     * @returns {LinkedListNode<T>} The added node.
     * @template T
     */
    function addAfter(list, node, value) {
      // assumes that node != list.tail && values.length >= 0
      var next = node.next;
      var newNode = {
        value: value,
        prev: node,
        next: next
      };
      node.next = newNode;
      next.prev = newNode;
      list.length++;
      return newNode;
    }
    /**
     * Removes `count` nodes after the given node. The given node will not be removed.
     *
     * @param {LinkedList<T>} list
     * @param {LinkedListNode<T>} node
     * @param {number} count
     * @template T
     */
    function removeRange(list, node, count) {
      var next = node.next;
      for (var i = 0; i < count && next !== list.tail; i++) {
        next = next.next;
      }
      node.next = next;
      next.prev = node;
      list.length -= i;
    }
    /**
     * @param {LinkedList<T>} list
     * @returns {T[]}
     * @template T
     */
    function toArray(list) {
      var array = [];
      var node = list.head.next;
      while (node !== list.tail) {
        array.push(node.value);
        node = node.next;
      }
      return array;
    }
    if (!_self.document) {
      if (!_self.addEventListener) {
        // in Node.js
        return _;
      }
      if (!_.disableWorkerMessageHandler) {
        // In worker
        _self.addEventListener('message', function (evt) {
          var message = JSON.parse(evt.data);
          var lang = message.language;
          var code = message.code;
          var immediateClose = message.immediateClose;
          _self.postMessage(_.highlight(code, _.languages[lang], lang));
          if (immediateClose) {
            _self.close();
          }
        }, false);
      }
      return _;
    }

    // Get current script and highlight
    var script = _.util.currentScript();
    if (script) {
      _.filename = script.src;
      if (script.hasAttribute('data-manual')) {
        _.manual = true;
      }
    }
    function highlightAutomaticallyCallback() {
      if (!_.manual) {
        _.highlightAll();
      }
    }
    if (!_.manual) {
      // If the document state is "loading", then we'll use DOMContentLoaded.
      // If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
      // DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
      // might take longer one animation frame to execute which can create a race condition where only some plugins have
      // been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
      // See https://github.com/PrismJS/prism/issues/2102
      var readyState = document.readyState;
      if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
        document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
      } else {
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(highlightAutomaticallyCallback);
        } else {
          window.setTimeout(highlightAutomaticallyCallback, 16);
        }
      }
    }
    return _;
  }(_self);
  if (module.exports) {
    module.exports = Prism;
  }

  // hack for components to work correctly in node.js
  if (typeof commonjsGlobal !== 'undefined') {
    commonjsGlobal.Prism = Prism;
  }

  // some additional documentation/types

  /**
   * The expansion of a simple `RegExp` literal to support additional properties.
   *
   * @typedef GrammarToken
   * @property {RegExp} pattern The regular expression of the token.
   * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
   * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
   * @property {boolean} [greedy=false] Whether the token is greedy.
   * @property {string|string[]} [alias] An optional alias or list of aliases.
   * @property {Grammar} [inside] The nested grammar of this token.
   *
   * The `inside` grammar will be used to tokenize the text value of each token of this kind.
   *
   * This can be used to make nested and even recursive language definitions.
   *
   * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
   * each another.
   * @global
   * @public
   */

  /**
   * @typedef Grammar
   * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
   * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
   * @global
   * @public
   */

  /**
   * A function which will invoked after an element was successfully highlighted.
   *
   * @callback HighlightCallback
   * @param {Element} element The element successfully highlighted.
   * @returns {void}
   * @global
   * @public
   */

  /**
   * @callback HookCallback
   * @param {Object<string, any>} env The environment variables of the hook.
   * @returns {void}
   * @global
   * @public
   */

  /* **********************************************
       Begin prism-markup.js
  ********************************************** */

  Prism.languages.markup = {
    'comment': {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: true
    },
    'prolog': {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: true
    },
    'doctype': {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: true,
      inside: {
        'internal-subset': {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: true,
          greedy: true,
          inside: null // see below
        },

        'string': {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: true
        },
        'punctuation': /^<!|>$|[[\]]/,
        'doctype-tag': /^DOCTYPE/i,
        'name': /[^\s<>'"]+/
      }
    },
    'cdata': {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: true
    },
    'tag': {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: true,
      inside: {
        'tag': {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            'punctuation': /^<\/?/,
            'namespace': /^[^\s>\/:]+:/
          }
        },
        'special-attr': [],
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            'punctuation': [{
              pattern: /^=/,
              alias: 'attr-equals'
            }, {
              pattern: /^(\s*)["']|["']$/,
              lookbehind: true
            }]
          }
        },
        'punctuation': /\/?>/,
        'attr-name': {
          pattern: /[^\s>\/]+/,
          inside: {
            'namespace': /^[^\s>\/:]+:/
          }
        }
      }
    },
    'entity': [{
      pattern: /&[\da-z]{1,8};/i,
      alias: 'named-entity'
    }, /&#x?[\da-f]{1,8};/i]
  };
  Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity'];
  Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

  // Plugin to make entity title show the real entity, idea by Roman Komarov
  Prism.hooks.add('wrap', function (env) {
    if (env.type === 'entity') {
      env.attributes['title'] = env.content.replace(/&amp;/, '&');
    }
  });
  Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function addInlined(tagName, lang) {
      var includedCdataInside = {};
      includedCdataInside['language-' + lang] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: true,
        inside: Prism.languages[lang]
      };
      includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
      var inside = {
        'included-cdata': {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: includedCdataInside
        }
      };
      inside['language-' + lang] = {
        pattern: /[\s\S]+/,
        inside: Prism.languages[lang]
      };
      var def = {};
      def[tagName] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
          return tagName;
        }), 'i'),
        lookbehind: true,
        greedy: true,
        inside: inside
      };
      Prism.languages.insertBefore('markup', 'cdata', def);
    }
  });
  Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function value(attrName, lang) {
      Prism.languages.markup.tag.inside['special-attr'].push({
        pattern: RegExp(/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, 'i'),
        lookbehind: true,
        inside: {
          'attr-name': /^[^\s=]+/,
          'attr-value': {
            pattern: /=[\s\S]+/,
            inside: {
              'value': {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: true,
                alias: [lang, 'language-' + lang],
                inside: Prism.languages[lang]
              },
              'punctuation': [{
                pattern: /^=/,
                alias: 'attr-equals'
              }, /"|'/]
            }
          }
        }
      });
    }
  });
  Prism.languages.html = Prism.languages.markup;
  Prism.languages.mathml = Prism.languages.markup;
  Prism.languages.svg = Prism.languages.markup;
  Prism.languages.xml = Prism.languages.extend('markup', {});
  Prism.languages.ssml = Prism.languages.xml;
  Prism.languages.atom = Prism.languages.xml;
  Prism.languages.rss = Prism.languages.xml;

  /* **********************************************
       Begin prism-css.js
  ********************************************** */

  (function (Prism) {
    var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    Prism.languages.css = {
      'comment': /\/\*[\s\S]*?\*\//,
      'atrule': {
        pattern: RegExp('@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + string.source + ')*?' + /(?:;|(?=\s*\{))/.source),
        inside: {
          'rule': /^@[\w-]+/,
          'selector-function-argument': {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: true,
            alias: 'selector'
          },
          'keyword': {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: true
          }
          // See rest below
        }
      },

      'url': {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
        greedy: true,
        inside: {
          'function': /^url/i,
          'punctuation': /^\(|\)$/,
          'string': {
            pattern: RegExp('^' + string.source + '$'),
            alias: 'url'
          }
        }
      },
      'selector': {
        pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
        lookbehind: true
      },
      'string': {
        pattern: string,
        greedy: true
      },
      'property': {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: true
      },
      'important': /!important\b/i,
      'function': {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: true
      },
      'punctuation': /[(){};:,]/
    };
    Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
    var markup = Prism.languages.markup;
    if (markup) {
      markup.tag.addInlined('style', 'css');
      markup.tag.addAttribute('style', 'css');
    }
  })(Prism);

  /* **********************************************
       Begin prism-clike.js
  ********************************************** */

  Prism.languages.clike = {
    'comment': [{
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: true,
      greedy: true
    }, {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: true,
      greedy: true
    }],
    'string': {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    'class-name': {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: true,
      inside: {
        'punctuation': /[.\\]/
      }
    },
    'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    'boolean': /\b(?:false|true)\b/,
    'function': /\b\w+(?=\()/,
    'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    'punctuation': /[{}[\];(),.:]/
  };

  /* **********************************************
       Begin prism-javascript.js
  ********************************************** */

  Prism.languages.javascript = Prism.languages.extend('clike', {
    'class-name': [Prism.languages.clike['class-name'], {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: true
    }],
    'keyword': [{
      pattern: /((?:^|\})\s*)catch\b/,
      lookbehind: true
    }, {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: true
    }],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    'number': {
      pattern: RegExp(/(^|[^\w$])/.source + '(?:' + (
      // constant
      /NaN|Infinity/.source + '|' +
      // binary integer
      /0[bB][01]+(?:_[01]+)*n?/.source + '|' +
      // octal integer
      /0[oO][0-7]+(?:_[0-7]+)*n?/.source + '|' +
      // hexadecimal integer
      /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + '|' +
      // decimal bigint
      /\d+(?:_\d+)*n/.source + '|' +
      // decimal number (integer or float) but no bigint
      /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ')' + /(?![\w$])/.source),
      lookbehind: true
    },
    'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  });
  Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
  Prism.languages.insertBefore('javascript', 'keyword', {
    'regex': {
      pattern: RegExp(
      // lookbehind
      // eslint-disable-next-line regexp/no-dupe-characters-character-class
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
      // Regex pattern:
      // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
      // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
      // with the only syntax, so we have to define 2 different regex patterns.
      /\//.source + '(?:' + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + '|' +
      // `v` flag syntax. This supports 3 levels of nested character classes.
      /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ')' +
      // lookahead
      /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'regex-source': {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: true,
          alias: 'language-regex',
          inside: Prism.languages.regex
        },
        'regex-delimiter': /^\/|\/$/,
        'regex-flags': /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    'function-variable': {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: 'function'
    },
    'parameter': [{
      pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: true,
      inside: Prism.languages.javascript
    }, {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: true,
      inside: Prism.languages.javascript
    }, {
      pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: true,
      inside: Prism.languages.javascript
    }, {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: true,
      inside: Prism.languages.javascript
    }],
    'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  });
  Prism.languages.insertBefore('javascript', 'string', {
    'hashbang': {
      pattern: /^#!.*/,
      greedy: true,
      alias: 'comment'
    },
    'template-string': {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: true,
      inside: {
        'template-punctuation': {
          pattern: /^`|`$/,
          alias: 'string'
        },
        'interpolation': {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: true,
          inside: {
            'interpolation-punctuation': {
              pattern: /^\$\{|\}$/,
              alias: 'punctuation'
            },
            rest: Prism.languages.javascript
          }
        },
        'string': /[\s\S]+/
      }
    },
    'string-property': {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: true,
      greedy: true,
      alias: 'property'
    }
  });
  Prism.languages.insertBefore('javascript', 'operator', {
    'literal-property': {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: true,
      alias: 'property'
    }
  });
  if (Prism.languages.markup) {
    Prism.languages.markup.tag.addInlined('script', 'javascript');

    // add attribute support for all DOM events.
    // https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
    Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, 'javascript');
  }
  Prism.languages.js = Prism.languages.javascript;

  /* **********************************************
       Begin prism-file-highlight.js
  ********************************************** */

  (function () {
    if (typeof Prism === 'undefined' || typeof document === 'undefined') {
      return;
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    var LOADING_MESSAGE = 'Loading…';
    var FAILURE_MESSAGE = function FAILURE_MESSAGE(status, message) {
      return '✖ Error ' + status + ' while fetching file: ' + message;
    };
    var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';
    var EXTENSIONS = {
      'js': 'javascript',
      'py': 'python',
      'rb': 'ruby',
      'ps1': 'powershell',
      'psm1': 'powershell',
      'sh': 'bash',
      'bat': 'batch',
      'h': 'c',
      'tex': 'latex'
    };
    var STATUS_ATTR = 'data-src-status';
    var STATUS_LOADING = 'loading';
    var STATUS_LOADED = 'loaded';
    var STATUS_FAILED = 'failed';
    var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])' + ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';

    /**
     * Loads the given file.
     *
     * @param {string} src The URL or path of the source file to load.
     * @param {(result: string) => void} success
     * @param {(reason: string) => void} error
     */
    function loadFile(src, success, error) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', src, true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status < 400 && xhr.responseText) {
            success(xhr.responseText);
          } else {
            if (xhr.status >= 400) {
              error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
            } else {
              error(FAILURE_EMPTY_MESSAGE);
            }
          }
        }
      };
      xhr.send(null);
    }

    /**
     * Parses the given range.
     *
     * This returns a range with inclusive ends.
     *
     * @param {string | null | undefined} range
     * @returns {[number, number | undefined] | undefined}
     */
    function parseRange(range) {
      var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || '');
      if (m) {
        var start = Number(m[1]);
        var comma = m[2];
        var end = m[3];
        if (!comma) {
          return [start, start];
        }
        if (!end) {
          return [start, undefined];
        }
        return [start, Number(end)];
      }
      return undefined;
    }
    Prism.hooks.add('before-highlightall', function (env) {
      env.selector += ', ' + SELECTOR;
    });
    Prism.hooks.add('before-sanity-check', function (env) {
      var pre = /** @type {HTMLPreElement} */env.element;
      if (pre.matches(SELECTOR)) {
        env.code = ''; // fast-path the whole thing and go to complete

        pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading

        // add code element with loading message
        var code = pre.appendChild(document.createElement('CODE'));
        code.textContent = LOADING_MESSAGE;
        var src = pre.getAttribute('data-src');
        var language = env.language;
        if (language === 'none') {
          // the language might be 'none' because there is no language set;
          // in this case, we want to use the extension as the language
          var extension = (/\.(\w+)$/.exec(src) || [, 'none'])[1];
          language = EXTENSIONS[extension] || extension;
        }

        // set language classes
        Prism.util.setLanguage(code, language);
        Prism.util.setLanguage(pre, language);

        // preload the language
        var autoloader = Prism.plugins.autoloader;
        if (autoloader) {
          autoloader.loadLanguages(language);
        }

        // load file
        loadFile(src, function (text) {
          // mark as loaded
          pre.setAttribute(STATUS_ATTR, STATUS_LOADED);

          // handle data-range
          var range = parseRange(pre.getAttribute('data-range'));
          if (range) {
            var lines = text.split(/\r\n?|\n/g);

            // the range is one-based and inclusive on both ends
            var start = range[0];
            var end = range[1] == null ? lines.length : range[1];
            if (start < 0) {
              start += lines.length;
            }
            start = Math.max(0, Math.min(start - 1, lines.length));
            if (end < 0) {
              end += lines.length;
            }
            end = Math.max(0, Math.min(end, lines.length));
            text = lines.slice(start, end).join('\n');

            // add data-start for line numbers
            if (!pre.hasAttribute('data-start')) {
              pre.setAttribute('data-start', String(start + 1));
            }
          }

          // highlight code
          code.textContent = text;
          Prism.highlightElement(code);
        }, function (error) {
          // mark as failed
          pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
          code.textContent = error;
        });
      }
    });
    Prism.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function highlight(container) {
        var elements = (container || document).querySelectorAll(SELECTOR);
        for (var i = 0, element; element = elements[i++];) {
          Prism.highlightElement(element);
        }
      }
    };
    var logged = false;
    /** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */
    Prism.fileHighlight = function () {
      if (!logged) {
        console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
        logged = true;
      }
      Prism.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  })();
})(prism);
var Prism$1 = prismExports;

(function (Prism) {
  /**
   * Returns the placeholder for the given language id and index.
   *
   * @param {string} language
   * @param {string|number} index
   * @returns {string}
   */
  function getPlaceholder(language, index) {
    return '___' + language.toUpperCase() + index + '___';
  }
  Object.defineProperties(Prism.languages['markup-templating'] = {}, {
    buildPlaceholders: {
      /**
       * Tokenize all inline templating expressions matching `placeholderPattern`.
       *
       * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
       * `true` will be replaced.
       *
       * @param {object} env The environment of the `before-tokenize` hook.
       * @param {string} language The language id.
       * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
       * @param {(match: string) => boolean} [replaceFilter]
       */
      value: function value(env, language, placeholderPattern, replaceFilter) {
        if (env.language !== language) {
          return;
        }
        var tokenStack = env.tokenStack = [];
        env.code = env.code.replace(placeholderPattern, function (match) {
          if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
            return match;
          }
          var i = tokenStack.length;
          var placeholder;

          // Check for existing strings
          while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
            ++i;
          }

          // Create a sparse array
          tokenStack[i] = match;
          return placeholder;
        });

        // Switch the grammar to markup
        env.grammar = Prism.languages.markup;
      }
    },
    tokenizePlaceholders: {
      /**
       * Replace placeholders with proper tokens after tokenizing.
       *
       * @param {object} env The environment of the `after-tokenize` hook.
       * @param {string} language The language id.
       */
      value: function value(env, language) {
        if (env.language !== language || !env.tokenStack) {
          return;
        }

        // Switch the grammar back
        env.grammar = Prism.languages[language];
        var j = 0;
        var keys = Object.keys(env.tokenStack);
        function walkTokens(tokens) {
          for (var i = 0; i < tokens.length; i++) {
            // all placeholders are replaced already
            if (j >= keys.length) {
              break;
            }
            var token = tokens[i];
            if (typeof token === 'string' || token.content && typeof token.content === 'string') {
              var k = keys[j];
              var t = env.tokenStack[k];
              var s = typeof token === 'string' ? token : token.content;
              var placeholder = getPlaceholder(language, k);
              var index = s.indexOf(placeholder);
              if (index > -1) {
                ++j;
                var before = s.substring(0, index);
                var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
                var after = s.substring(index + placeholder.length);
                var replacement = [];
                if (before) {
                  replacement.push.apply(replacement, walkTokens([before]));
                }
                replacement.push(middle);
                if (after) {
                  replacement.push.apply(replacement, walkTokens([after]));
                }
                if (typeof token === 'string') {
                  tokens.splice.apply(tokens, [i, 1].concat(replacement));
                } else {
                  token.content = replacement;
                }
              }
            } else if (token.content /* && typeof token.content !== 'string' */) {
              walkTokens(token.content);
            }
          }
          return tokens;
        }
        walkTokens(env.tokens);
      }
    }
  });
})(Prism);

Prism.languages.javascript = Prism.languages.extend('clike', {
  'class-name': [Prism.languages.clike['class-name'], {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
    lookbehind: true
  }],
  'keyword': [{
    pattern: /((?:^|\})\s*)catch\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: true
  }],
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  'number': {
    pattern: RegExp(/(^|[^\w$])/.source + '(?:' + (
    // constant
    /NaN|Infinity/.source + '|' +
    // binary integer
    /0[bB][01]+(?:_[01]+)*n?/.source + '|' +
    // octal integer
    /0[oO][0-7]+(?:_[0-7]+)*n?/.source + '|' +
    // hexadecimal integer
    /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + '|' +
    // decimal bigint
    /\d+(?:_\d+)*n/.source + '|' +
    // decimal number (integer or float) but no bigint
    /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ')' + /(?![\w$])/.source),
    lookbehind: true
  },
  'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore('javascript', 'keyword', {
  'regex': {
    pattern: RegExp(
    // lookbehind
    // eslint-disable-next-line regexp/no-dupe-characters-character-class
    /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
    // Regex pattern:
    // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
    // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
    // with the only syntax, so we have to define 2 different regex patterns.
    /\//.source + '(?:' + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + '|' +
    // `v` flag syntax. This supports 3 levels of nested character classes.
    /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ')' +
    // lookahead
    /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
    lookbehind: true,
    greedy: true,
    inside: {
      'regex-source': {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: true,
        alias: 'language-regex',
        inside: Prism.languages.regex
      },
      'regex-delimiter': /^\/|\/$/,
      'regex-flags': /^[a-z]+$/
    }
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  'function-variable': {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: 'function'
  },
  'parameter': [{
    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }],
  'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore('javascript', 'string', {
  'hashbang': {
    pattern: /^#!.*/,
    greedy: true,
    alias: 'comment'
  },
  'template-string': {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: true,
    inside: {
      'template-punctuation': {
        pattern: /^`|`$/,
        alias: 'string'
      },
      'interpolation': {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: true,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\$\{|\}$/,
            alias: 'punctuation'
          },
          rest: Prism.languages.javascript
        }
      },
      'string': /[\s\S]+/
    }
  },
  'string-property': {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: true,
    greedy: true,
    alias: 'property'
  }
});
Prism.languages.insertBefore('javascript', 'operator', {
  'literal-property': {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: true,
    alias: 'property'
  }
});
if (Prism.languages.markup) {
  Prism.languages.markup.tag.addInlined('script', 'javascript');

  // add attribute support for all DOM events.
  // https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
  Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, 'javascript');
}
Prism.languages.js = Prism.languages.javascript;

(function (Prism) {
  var keywords = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/;

  // full package (optional) + parent classes (optional)
  var classNamePrefix = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source;

  // based on the java naming conventions
  var className = {
    pattern: RegExp(/(^|[^\w.])/.source + classNamePrefix + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
    lookbehind: true,
    inside: {
      'namespace': {
        pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
        inside: {
          'punctuation': /\./
        }
      },
      'punctuation': /\./
    }
  };
  Prism.languages.java = Prism.languages.extend('clike', {
    'string': {
      pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
      lookbehind: true,
      greedy: true
    },
    'class-name': [className, {
      // variables, parameters, and constructor references
      // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
      pattern: RegExp(/(^|[^\w.])/.source + classNamePrefix + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
      lookbehind: true,
      inside: className.inside
    }, {
      // class names based on keyword
      // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
      pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + classNamePrefix + /[A-Z]\w*\b/.source),
      lookbehind: true,
      inside: className.inside
    }],
    'keyword': keywords,
    'function': [Prism.languages.clike["function"], {
      pattern: /(::\s*)[a-z_]\w*/,
      lookbehind: true
    }],
    'number': /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
    'operator': {
      pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
      lookbehind: true
    },
    'constant': /\b[A-Z][A-Z_\d]+\b/
  });
  Prism.languages.insertBefore('java', 'string', {
    'triple-quoted-string': {
      // http://openjdk.java.net/jeps/355#Description
      pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
      greedy: true,
      alias: 'string'
    },
    'char': {
      pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
      greedy: true
    }
  });
  Prism.languages.insertBefore('java', 'class-name', {
    'annotation': {
      pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
      lookbehind: true,
      alias: 'punctuation'
    },
    'generics': {
      pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
      inside: {
        'class-name': className,
        'keyword': keywords,
        'punctuation': /[<>(),.:]/,
        'operator': /[?&|]/
      }
    },
    'import': [{
      pattern: RegExp(/(\bimport\s+)/.source + classNamePrefix + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
      lookbehind: true,
      inside: {
        'namespace': className.inside.namespace,
        'punctuation': /\./,
        'operator': /\*/,
        'class-name': /\w+/
      }
    }, {
      pattern: RegExp(/(\bimport\s+static\s+)/.source + classNamePrefix + /(?:\w+|\*)(?=\s*;)/.source),
      lookbehind: true,
      alias: 'static',
      inside: {
        'namespace': className.inside.namespace,
        'static': /\b\w+$/,
        'punctuation': /\./,
        'operator': /\*/,
        'class-name': /\w+/
      }
    }],
    'namespace': {
      pattern: RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, function () {
        return keywords.source;
      })),
      lookbehind: true,
      inside: {
        'punctuation': /\./
      }
    }
  });
})(Prism);

(function (Prism) {
  var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  Prism.languages.css = {
    'comment': /\/\*[\s\S]*?\*\//,
    'atrule': {
      pattern: RegExp('@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + string.source + ')*?' + /(?:;|(?=\s*\{))/.source),
      inside: {
        'rule': /^@[\w-]+/,
        'selector-function-argument': {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: true,
          alias: 'selector'
        },
        'keyword': {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: true
        }
        // See rest below
      }
    },

    'url': {
      // https://drafts.csswg.org/css-values-3/#urls
      pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
      greedy: true,
      inside: {
        'function': /^url/i,
        'punctuation': /^\(|\)$/,
        'string': {
          pattern: RegExp('^' + string.source + '$'),
          alias: 'url'
        }
      }
    },
    'selector': {
      pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
      lookbehind: true
    },
    'string': {
      pattern: string,
      greedy: true
    },
    'property': {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: true
    },
    'important': /!important\b/i,
    'function': {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: true
    },
    'punctuation': /[(){};:,]/
  };
  Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
  var markup = Prism.languages.markup;
  if (markup) {
    markup.tag.addInlined('style', 'css');
    markup.tag.addAttribute('style', 'css');
  }
})(Prism);

Prism.languages.c = Prism.languages.extend('clike', {
  'comment': {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  'string': {
    // https://en.cppreference.com/w/c/language/string_literal
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: true
  },
  'keyword': /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  'function': /\b[a-z_]\w*(?=\s*\()/i,
  'number': /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  'operator': />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
Prism.languages.insertBefore('c', 'string', {
  'char': {
    // https://en.cppreference.com/w/c/language/character_constant
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: true
  }
});
Prism.languages.insertBefore('c', 'string', {
  'macro': {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: true,
    greedy: true,
    alias: 'property',
    inside: {
      'string': [{
        // highlight the path of the include statement as a string
        pattern: /^(#\s*include\s*)<[^>]+>/,
        lookbehind: true
      }, Prism.languages.c['string']],
      'char': Prism.languages.c['char'],
      'comment': Prism.languages.c['comment'],
      'macro-name': [{
        pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
        lookbehind: true
      }, {
        pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
        lookbehind: true,
        alias: 'function'
      }],
      // highlight macro directives as keywords
      'directive': {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: true,
        alias: 'keyword'
      },
      'directive-hash': /^#/,
      'punctuation': /##|\\(?=[\r\n])/,
      'expression': {
        pattern: /\S[\s\S]*/,
        inside: Prism.languages.c
      }
    }
  }
});
Prism.languages.insertBefore('c', 'function', {
  // highlight predefined macros as constants
  'constant': /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete Prism.languages.c['boolean'];

Prism.languages.markup = {
  'comment': {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: true
  },
  'prolog': {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: true
  },
  'doctype': {
    // https://www.w3.org/TR/xml/#NT-doctypedecl
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: true,
    inside: {
      'internal-subset': {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: true,
        greedy: true,
        inside: null // see below
      },

      'string': {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      'punctuation': /^<!|>$|[[\]]/,
      'doctype-tag': /^DOCTYPE/i,
      'name': /[^\s<>'"]+/
    }
  },
  'cdata': {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: true
  },
  'tag': {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: true,
    inside: {
      'tag': {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          'punctuation': /^<\/?/,
          'namespace': /^[^\s>\/:]+:/
        }
      },
      'special-attr': [],
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          'punctuation': [{
            pattern: /^=/,
            alias: 'attr-equals'
          }, {
            pattern: /^(\s*)["']|["']$/,
            lookbehind: true
          }]
        }
      },
      'punctuation': /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: {
          'namespace': /^[^\s>\/:]+:/
        }
      }
    }
  },
  'entity': [{
    pattern: /&[\da-z]{1,8};/i,
    alias: 'named-entity'
  }, /&#x?[\da-f]{1,8};/i]
};
Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function (env) {
  if (env.type === 'entity') {
    env.attributes['title'] = env.content.replace(/&amp;/, '&');
  }
});
Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside['language-' + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: Prism.languages[lang]
    };
    includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
    var inside = {
      'included-cdata': {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside['language-' + lang] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[lang]
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
        return tagName;
      }), 'i'),
      lookbehind: true,
      greedy: true,
      inside: inside
    };
    Prism.languages.insertBefore('markup', 'cdata', def);
  }
});
Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
  /**
   * Adds an pattern to highlight languages embedded in HTML attributes.
   *
   * An example of an inlined language is CSS with `style` attributes.
   *
   * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addAttribute('style', 'css');
   */
  value: function value(attrName, lang) {
    Prism.languages.markup.tag.inside['special-attr'].push({
      pattern: RegExp(/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, 'i'),
      lookbehind: true,
      inside: {
        'attr-name': /^[^\s=]+/,
        'attr-value': {
          pattern: /=[\s\S]+/,
          inside: {
            'value': {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: true,
              alias: [lang, 'language-' + lang],
              inside: Prism.languages[lang]
            },
            'punctuation': [{
              pattern: /^=/,
              alias: 'attr-equals'
            }, /"|'/]
          }
        }
      }
    });
  }
});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;

(function (Prism) {
  // $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
  // + LC_ALL, RANDOM, REPLY, SECONDS.
  // + make sure PS1..4 are here as they are not always set,
  // - some useless things.
  var envVars = '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b';
  var commandAfterHeredoc = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: true,
    alias: 'punctuation',
    // this looks reasonably well in all themes
    inside: null // see below
  };

  var insideString = {
    'bash': commandAfterHeredoc,
    'environment': {
      pattern: RegExp('\\$' + envVars),
      alias: 'constant'
    },
    'variable': [
    // [0]: Arithmetic Environment
    {
      pattern: /\$?\(\([\s\S]+?\)\)/,
      greedy: true,
      inside: {
        // If there is a $ sign at the beginning highlight $(( and )) as variable
        'variable': [{
          pattern: /(^\$\(\([\s\S]+)\)\)/,
          lookbehind: true
        }, /^\$\(\(/],
        'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
        // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
        'operator': /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
        // If there is no $ sign at the beginning highlight (( and )) as punctuation
        'punctuation': /\(\(?|\)\)?|,|;/
      }
    },
    // [1]: Command Substitution
    {
      pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
      greedy: true,
      inside: {
        'variable': /^\$\(|^`|\)$|`$/
      }
    },
    // [2]: Brace expansion
    {
      pattern: /\$\{[^}]+\}/,
      greedy: true,
      inside: {
        'operator': /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
        'punctuation': /[\[\]]/,
        'environment': {
          pattern: RegExp('(\\{)' + envVars),
          lookbehind: true,
          alias: 'constant'
        }
      }
    }, /\$(?:\w+|[#?*!@$])/],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    'entity': /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  Prism.languages.bash = {
    'shebang': {
      pattern: /^#!\s*\/.*/,
      alias: 'important'
    },
    'comment': {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: true
    },
    'function-name': [
    // a) function foo {
    // b) foo() {
    // c) function foo() {
    // but not “foo {”
    {
      // a) and c)
      pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
      lookbehind: true,
      alias: 'function'
    }, {
      // b)
      pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
      alias: 'function'
    }],
    // Highlight variable names as variables in for and select beginnings.
    'for-or-select': {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: 'variable',
      lookbehind: true
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    'assign-left': {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
      inside: {
        'environment': {
          pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + envVars),
          lookbehind: true,
          alias: 'constant'
        }
      },
      alias: 'variable',
      lookbehind: true
    },
    // Highlight parameter names as variables
    'parameter': {
      pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
      alias: 'variable',
      lookbehind: true
    },
    'string': [
    // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
    {
      pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    },
    // Here-document with quotes around the tag
    // → No expansion (so no “inside”).
    {
      pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
      lookbehind: true,
      greedy: true,
      inside: {
        'bash': commandAfterHeredoc
      }
    },
    // “Normal” string
    {
      // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
      pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, {
      // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
      pattern: /(^|[^$\\])'[^']*'/,
      lookbehind: true,
      greedy: true
    }, {
      // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
      pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
      greedy: true,
      inside: {
        'entity': insideString.entity
      }
    }],
    'environment': {
      pattern: RegExp('\\$?' + envVars),
      alias: 'constant'
    },
    'variable': insideString.variable,
    'function': {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    'keyword': {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    'builtin': {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: true,
      // Alias added to make those easier to distinguish from strings.
      alias: 'class-name'
    },
    'boolean': {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    'file-descriptor': {
      pattern: /\B&\d\b/,
      alias: 'important'
    },
    'operator': {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        'file-descriptor': {
          pattern: /^\d/,
          alias: 'important'
        }
      }
    },
    'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    'number': {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: true
    }
  };
  commandAfterHeredoc.inside = Prism.languages.bash;

  /* Patterns in command substitution. */
  var toBeCopied = ['comment', 'function-name', 'for-or-select', 'assign-left', 'parameter', 'string', 'environment', 'function', 'keyword', 'builtin', 'boolean', 'file-descriptor', 'operator', 'punctuation', 'number'];
  var inside = insideString.variable[1].inside;
  for (var i = 0; i < toBeCopied.length; i++) {
    inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
  }
  Prism.languages.sh = Prism.languages.bash;
  Prism.languages.shell = Prism.languages.bash;
})(Prism);

(function (Prism) {
  Prism.languages.diff = {
    'coord': [
    // Match all kinds of coord lines (prefixed by "+++", "---" or "***").
    /^(?:\*{3}|-{3}|\+{3}).*$/m,
    // Match "@@ ... @@" coord lines in unified diff.
    /^@@.*@@$/m,
    // Match coord lines in normal diff (starts with a number).
    /^\d.*$/m]

    // deleted, inserted, unchanged, diff
  };

  /**
   * A map from the name of a block to its line prefix.
   *
   * @type {Object<string, string>}
   */
  var PREFIXES = {
    'deleted-sign': '-',
    'deleted-arrow': '<',
    'inserted-sign': '+',
    'inserted-arrow': '>',
    'unchanged': ' ',
    'diff': '!'
  };

  // add a token for each prefix
  Object.keys(PREFIXES).forEach(function (name) {
    var prefix = PREFIXES[name];
    var alias = [];
    if (!/^\w+$/.test(name)) {
      // "deleted-sign" -> "deleted"
      alias.push(/\w+/.exec(name)[0]);
    }
    if (name === 'diff') {
      alias.push('bold');
    }
    Prism.languages.diff[name] = {
      pattern: RegExp('^(?:[' + prefix + '].*(?:\r\n?|\n|(?![\\s\\S])))+', 'm'),
      alias: alias,
      inside: {
        'line': {
          pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
          lookbehind: true
        },
        'prefix': {
          pattern: /[\s\S]/,
          alias: /\w+/.exec(name)[0]
        }
      }
    };
  });

  // make prefixes available to Diff plugin
  Object.defineProperty(Prism.languages.diff, 'PREFIXES', {
    value: PREFIXES
  });
})(Prism);

(function (Prism) {
  // Many of the following regexes will contain negated lookaheads like `[ \t]+(?![ \t])`. This is a trick to ensure
  // that quantifiers behave *atomically*. Atomic quantifiers are necessary to prevent exponential backtracking.

  var spaceAfterBackSlash = /\\[\r\n](?:\s|\\[\r\n]|#.*(?!.))*(?![\s#]|\\[\r\n])/.source;
  // At least one space, comment, or line break
  var space = /(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)/.source.replace(/<SP_BS>/g, function () {
    return spaceAfterBackSlash;
  });
  var string = /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"|'(?:[^'\\\r\n]|\\(?:\r\n|[\s\S]))*'/.source;
  var option = /--[\w-]+=(?:<STR>|(?!["'])(?:[^\s\\]|\\.)+)/.source.replace(/<STR>/g, function () {
    return string;
  });
  var stringRule = {
    pattern: RegExp(string),
    greedy: true
  };
  var commentRule = {
    pattern: /(^[ \t]*)#.*/m,
    lookbehind: true,
    greedy: true
  };

  /**
   * @param {string} source
   * @param {string} flags
   * @returns {RegExp}
   */
  function re(source, flags) {
    source = source.replace(/<OPT>/g, function () {
      return option;
    }).replace(/<SP>/g, function () {
      return space;
    });
    return RegExp(source, flags);
  }
  Prism.languages.docker = {
    'instruction': {
      pattern: /(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,
      lookbehind: true,
      greedy: true,
      inside: {
        'options': {
          pattern: re(/(^(?:ONBUILD<SP>)?\w+<SP>)<OPT>(?:<SP><OPT>)*/.source, 'i'),
          lookbehind: true,
          greedy: true,
          inside: {
            'property': {
              pattern: /(^|\s)--[\w-]+/,
              lookbehind: true
            },
            'string': [stringRule, {
              pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/,
              lookbehind: true
            }],
            'operator': /\\$/m,
            'punctuation': /=/
          }
        },
        'keyword': [{
          // https://docs.docker.com/engine/reference/builder/#healthcheck
          pattern: re(/(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\b/.source, 'i'),
          lookbehind: true,
          greedy: true
        }, {
          // https://docs.docker.com/engine/reference/builder/#from
          pattern: re(/(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\]+<SP>)AS/.source, 'i'),
          lookbehind: true,
          greedy: true
        }, {
          // https://docs.docker.com/engine/reference/builder/#onbuild
          pattern: re(/(^ONBUILD<SP>)\w+/.source, 'i'),
          lookbehind: true,
          greedy: true
        }, {
          pattern: /^\w+/,
          greedy: true
        }],
        'comment': commentRule,
        'string': stringRule,
        'variable': /\$(?:\w+|\{[^{}"'\\]*\})/,
        'operator': /\\$/m
      }
    },
    'comment': commentRule
  };
  Prism.languages.dockerfile = Prism.languages.docker;
})(Prism);

Prism.languages.go = Prism.languages.extend('clike', {
  'string': {
    pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
    lookbehind: true,
    greedy: true
  },
  'keyword': /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  'boolean': /\b(?:_|false|iota|nil|true)\b/,
  'number': [
  // binary and octal integers
  /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
  // hexadecimal integers and floats
  /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
  // decimal integers and floats
  /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],
  'operator': /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  'builtin': /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
});
Prism.languages.insertBefore('go', 'string', {
  'char': {
    pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
    greedy: true
  }
});
delete Prism.languages.go['class-name'];

Prism.languages.graphql = {
  'comment': /#.*/,
  'description': {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: true,
    alias: 'string',
    inside: {
      'language-markdown': {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: true,
        inside: Prism.languages.markdown
      }
    }
  },
  'string': {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
    greedy: true
  },
  'number': /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  'boolean': /\b(?:false|true)\b/,
  'variable': /\$[a-z_]\w*/i,
  'directive': {
    pattern: /@[a-z_]\w*/i,
    alias: 'function'
  },
  'attr-name': {
    pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: true
  },
  'atom-input': {
    pattern: /\b[A-Z]\w*Input\b/,
    alias: 'class-name'
  },
  'scalar': /\b(?:Boolean|Float|ID|Int|String)\b/,
  'constant': /\b[A-Z][A-Z_\d]*\b/,
  'class-name': {
    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
    lookbehind: true
  },
  'fragment': {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'definition-mutation': {
    pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'definition-query': {
    pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'keyword': /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  'operator': /[!=|&]|\.{3}/,
  'property-query': /\w+(?=\s*\()/,
  'object': /\w+(?=\s*\{)/,
  'punctuation': /[!(){}\[\]:=,]/,
  'property': /\w+/
};
Prism.hooks.add('after-tokenize', function afterTokenizeGraphql(env) {
  if (env.language !== 'graphql') {
    return;
  }

  /**
   * get the graphql token stream that we want to customize
   *
   * @typedef {InstanceType<import("./prism-core")["Token"]>} Token
   * @type {Token[]}
   */
  var validTokens = env.tokens.filter(function (token) {
    return typeof token !== 'string' && token.type !== 'comment' && token.type !== 'scalar';
  });
  var currentIndex = 0;

  /**
   * Returns whether the token relative to the current index has the given type.
   *
   * @param {number} offset
   * @returns {Token | undefined}
   */
  function getToken(offset) {
    return validTokens[currentIndex + offset];
  }

  /**
   * Returns whether the token relative to the current index has the given type.
   *
   * @param {readonly string[]} types
   * @param {number} [offset=0]
   * @returns {boolean}
   */
  function isTokenType(types, offset) {
    offset = offset || 0;
    for (var i = 0; i < types.length; i++) {
      var token = getToken(i + offset);
      if (!token || token.type !== types[i]) {
        return false;
      }
    }
    return true;
  }

  /**
   * Returns the index of the closing bracket to an opening bracket.
   *
   * It is assumed that `token[currentIndex - 1]` is an opening bracket.
   *
   * If no closing bracket could be found, `-1` will be returned.
   *
   * @param {RegExp} open
   * @param {RegExp} close
   * @returns {number}
   */
  function findClosingBracket(open, close) {
    var stackHeight = 1;
    for (var i = currentIndex; i < validTokens.length; i++) {
      var token = validTokens[i];
      var content = token.content;
      if (token.type === 'punctuation' && typeof content === 'string') {
        if (open.test(content)) {
          stackHeight++;
        } else if (close.test(content)) {
          stackHeight--;
          if (stackHeight === 0) {
            return i;
          }
        }
      }
    }
    return -1;
  }

  /**
   * Adds an alias to the given token.
   *
   * @param {Token} token
   * @param {string} alias
   * @returns {void}
   */
  function addAlias(token, alias) {
    var aliases = token.alias;
    if (!aliases) {
      token.alias = aliases = [];
    } else if (!Array.isArray(aliases)) {
      token.alias = aliases = [aliases];
    }
    aliases.push(alias);
  }
  for (; currentIndex < validTokens.length;) {
    var startToken = validTokens[currentIndex++];

    // add special aliases for mutation tokens
    if (startToken.type === 'keyword' && startToken.content === 'mutation') {
      // any array of the names of all input variables (if any)
      var inputVariables = [];
      if (isTokenType(['definition-mutation', 'punctuation']) && getToken(1).content === '(') {
        // definition

        currentIndex += 2; // skip 'definition-mutation' and 'punctuation'

        var definitionEnd = findClosingBracket(/^\($/, /^\)$/);
        if (definitionEnd === -1) {
          continue;
        }

        // find all input variables
        for (; currentIndex < definitionEnd; currentIndex++) {
          var t = getToken(0);
          if (t.type === 'variable') {
            addAlias(t, 'variable-input');
            inputVariables.push(t.content);
          }
        }
        currentIndex = definitionEnd + 1;
      }
      if (isTokenType(['punctuation', 'property-query']) && getToken(0).content === '{') {
        currentIndex++; // skip opening bracket

        addAlias(getToken(0), 'property-mutation');
        if (inputVariables.length > 0) {
          var mutationEnd = findClosingBracket(/^\{$/, /^\}$/);
          if (mutationEnd === -1) {
            continue;
          }

          // give references to input variables a special alias
          for (var i = currentIndex; i < mutationEnd; i++) {
            var varToken = validTokens[i];
            if (varToken.type === 'variable' && inputVariables.indexOf(varToken.content) >= 0) {
              addAlias(varToken, 'variable-input');
            }
          }
        }
      }
    }
  }
});

Prism.languages.hcl = {
  'comment': /(?:\/\/|#).*|\/\*[\s\S]*?(?:\*\/|$)/,
  'heredoc': {
    pattern: /<<-?(\w+\b)[\s\S]*?^[ \t]*\1/m,
    greedy: true,
    alias: 'string'
  },
  'keyword': [{
    pattern: /(?:data|resource)\s+(?:"(?:\\[\s\S]|[^\\"])*")(?=\s+"[\w-]+"\s+\{)/i,
    inside: {
      'type': {
        pattern: /(resource|data|\s+)(?:"(?:\\[\s\S]|[^\\"])*")/i,
        lookbehind: true,
        alias: 'variable'
      }
    }
  }, {
    pattern: /(?:backend|module|output|provider|provisioner|variable)\s+(?:[\w-]+|"(?:\\[\s\S]|[^\\"])*")\s+(?=\{)/i,
    inside: {
      'type': {
        pattern: /(backend|module|output|provider|provisioner|variable)\s+(?:[\w-]+|"(?:\\[\s\S]|[^\\"])*")\s+/i,
        lookbehind: true,
        alias: 'variable'
      }
    }
  }, /[\w-]+(?=\s+\{)/],
  'property': [/[-\w\.]+(?=\s*=(?!=))/, /"(?:\\[\s\S]|[^\\"])+"(?=\s*[:=])/],
  'string': {
    pattern: /"(?:[^\\$"]|\\[\s\S]|\$(?:(?=")|\$+(?!\$)|[^"${])|\$\{(?:[^{}"]|"(?:[^\\"]|\\[\s\S])*")*\})*"/,
    greedy: true,
    inside: {
      'interpolation': {
        pattern: /(^|[^$])\$\{(?:[^{}"]|"(?:[^\\"]|\\[\s\S])*")*\}/,
        lookbehind: true,
        inside: {
          'type': {
            pattern: /(\b(?:count|data|local|module|path|self|terraform|var)\b\.)[\w\*]+/i,
            lookbehind: true,
            alias: 'variable'
          },
          'keyword': /\b(?:count|data|local|module|path|self|terraform|var)\b/i,
          'function': /\w+(?=\()/,
          'string': {
            pattern: /"(?:\\[\s\S]|[^\\"])*"/,
            greedy: true
          },
          'number': /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,
          'punctuation': /[!\$#%&'()*+,.\/;<=>@\[\\\]^`{|}~?:]/
        }
      }
    }
  },
  'number': /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,
  'boolean': /\b(?:false|true)\b/i,
  'punctuation': /[=\[\]{}]/
};

(function (Prism) {
  Prism.languages.ignore = {
    // https://git-scm.com/docs/gitignore
    'comment': /^#.*/m,
    'entry': {
      pattern: /\S(?:.*(?:(?:\\ )|\S))?/,
      alias: 'string',
      inside: {
        'operator': /^!|\*\*?|\?/,
        'regex': {
          pattern: /(^|[^\\])\[[^\[\]]*\]/,
          lookbehind: true
        },
        'punctuation': /\//
      }
    }
  };
  Prism.languages.gitignore = Prism.languages.ignore;
  Prism.languages.hgignore = Prism.languages.ignore;
  Prism.languages.npmignore = Prism.languages.ignore;
})(Prism);

// https://www.json.org/json-en.html
Prism.languages.json = {
  'property': {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: true,
    greedy: true
  },
  'string': {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: true,
    greedy: true
  },
  'comment': {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  'punctuation': /[{}[\],]/,
  'operator': /:/,
  'boolean': /\b(?:false|true)\b/,
  'null': {
    pattern: /\bnull\b/,
    alias: 'keyword'
  }
};
Prism.languages.webmanifest = Prism.languages.json;

(function (Prism) {
  // Allow only one line break
  var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;

  /**
   * This function is intended for the creation of the bold or italic pattern.
   *
   * This also adds a lookbehind group to the given pattern to ensure that the pattern is not backslash-escaped.
   *
   * _Note:_ Keep in mind that this adds a capturing group.
   *
   * @param {string} pattern
   * @returns {RegExp}
   */
  function createInline(pattern) {
    pattern = pattern.replace(/<inner>/g, function () {
      return inner;
    });
    return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + pattern + ')');
  }
  var tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
  var tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
    return tableCell;
  });
  var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
  Prism.languages.markdown = Prism.languages.extend('markup', {});
  Prism.languages.insertBefore('markdown', 'prolog', {
    'front-matter-block': {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: true,
      greedy: true,
      inside: {
        'punctuation': /^---|---$/,
        'front-matter': {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ['yaml', 'language-yaml'],
          inside: Prism.languages.yaml
        }
      }
    },
    'blockquote': {
      // > ...
      pattern: /^>(?:[\t ]*>)*/m,
      alias: 'punctuation'
    },
    'table': {
      pattern: RegExp('^' + tableRow + tableLine + '(?:' + tableRow + ')*', 'm'),
      inside: {
        'table-data-rows': {
          pattern: RegExp('^(' + tableRow + tableLine + ')(?:' + tableRow + ')*$'),
          lookbehind: true,
          inside: {
            'table-data': {
              pattern: RegExp(tableCell),
              inside: Prism.languages.markdown
            },
            'punctuation': /\|/
          }
        },
        'table-line': {
          pattern: RegExp('^(' + tableRow + ')' + tableLine + '$'),
          lookbehind: true,
          inside: {
            'punctuation': /\||:?-{3,}:?/
          }
        },
        'table-header-row': {
          pattern: RegExp('^' + tableRow + '$'),
          inside: {
            'table-header': {
              pattern: RegExp(tableCell),
              alias: 'important',
              inside: Prism.languages.markdown
            },
            'punctuation': /\|/
          }
        }
      }
    },
    'code': [{
      // Prefixed by 4 spaces or 1 tab and preceded by an empty line
      pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
      lookbehind: true,
      alias: 'keyword'
    }, {
      // ```optional language
      // code block
      // ```
      pattern: /^```[\s\S]*?^```$/m,
      greedy: true,
      inside: {
        'code-block': {
          pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
          lookbehind: true
        },
        'code-language': {
          pattern: /^(```).+/,
          lookbehind: true
        },
        'punctuation': /```/
      }
    }],
    'title': [{
      // title 1
      // =======

      // title 2
      // -------
      pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
      alias: 'important',
      inside: {
        punctuation: /==+$|--+$/
      }
    }, {
      // # title 1
      // ###### title 6
      pattern: /(^\s*)#.+/m,
      lookbehind: true,
      alias: 'important',
      inside: {
        punctuation: /^#+|#+$/
      }
    }],
    'hr': {
      // ***
      // ---
      // * * *
      // -----------
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'list': {
      // * item
      // + item
      // - item
      // 1. item
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'url-reference': {
      // [id]: http://example.com "Optional title"
      // [id]: http://example.com 'Optional title'
      // [id]: http://example.com (Optional title)
      // [id]: <http://example.com> "Optional title"
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        'variable': {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: true
        },
        'string': /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        'punctuation': /^[\[\]!:]|[<>]/
      },
      alias: 'url'
    },
    'bold': {
      // **strong**
      // __strong__

      // allow one nested instance of italic text using the same delimiter
      pattern: createInline(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: true,
          inside: {} // see below
        },

        'punctuation': /\*\*|__/
      }
    },
    'italic': {
      // *em*
      // _em_

      // allow one nested instance of bold text using the same delimiter
      pattern: createInline(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: true,
          inside: {} // see below
        },

        'punctuation': /[*_]/
      }
    },
    'strike': {
      // ~~strike through~~
      // ~strike~
      // eslint-disable-next-line regexp/strict
      pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: true,
          inside: {} // see below
        },

        'punctuation': /~~?/
      }
    },
    'code-snippet': {
      // `code`
      // ``code``
      pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
      lookbehind: true,
      greedy: true,
      alias: ['code', 'keyword']
    },
    'url': {
      // [example](http://example.com "Optional title")
      // [example][id]
      // [example] [id]
      pattern: createInline(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'operator': /^!/,
        'content': {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: true,
          inside: {} // see below
        },

        'variable': {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: true
        },
        'url': {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: true
        },
        'string': {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: true
        }
      }
    }
  });
  ['url', 'bold', 'italic', 'strike'].forEach(function (token) {
    ['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(function (inside) {
      if (token !== inside) {
        Prism.languages.markdown[token].inside.content.inside[inside] = Prism.languages.markdown[inside];
      }
    });
  });
  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'markdown' && env.language !== 'md') {
      return;
    }
    function walkTokens(tokens) {
      if (!tokens || typeof tokens === 'string') {
        return;
      }
      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];
        if (token.type !== 'code') {
          walkTokens(token.content);
          continue;
        }

        /*
         * Add the correct `language-xxxx` class to this code block. Keep in mind that the `code-language` token
         * is optional. But the grammar is defined so that there is only one case we have to handle:
         *
         * token.content = [
         *     <span class="punctuation">```</span>,
         *     <span class="code-language">xxxx</span>,
         *     '\n', // exactly one new lines (\r or \n or \r\n)
         *     <span class="code-block">...</span>,
         *     '\n', // exactly one new lines again
         *     <span class="punctuation">```</span>
         * ];
         */

        var codeLang = token.content[1];
        var codeBlock = token.content[3];
        if (codeLang && codeBlock && codeLang.type === 'code-language' && codeBlock.type === 'code-block' && typeof codeLang.content === 'string') {
          // this might be a language that Prism does not support

          // do some replacements to support C++, C#, and F#
          var lang = codeLang.content.replace(/\b#/g, 'sharp').replace(/\b\+\+/g, 'pp');
          // only use the first word
          lang = (/[a-z][\w-]*/i.exec(lang) || [''])[0].toLowerCase();
          var alias = 'language-' + lang;

          // add alias
          if (!codeBlock.alias) {
            codeBlock.alias = [alias];
          } else if (typeof codeBlock.alias === 'string') {
            codeBlock.alias = [codeBlock.alias, alias];
          } else {
            codeBlock.alias.push(alias);
          }
        }
      }
    }
    walkTokens(env.tokens);
  });
  Prism.hooks.add('wrap', function (env) {
    if (env.type !== 'code-block') {
      return;
    }
    var codeLang = '';
    for (var i = 0, l = env.classes.length; i < l; i++) {
      var cls = env.classes[i];
      var match = /language-(.+)/.exec(cls);
      if (match) {
        codeLang = match[1];
        break;
      }
    }
    var grammar = Prism.languages[codeLang];
    if (!grammar) {
      if (codeLang && codeLang !== 'none' && Prism.plugins.autoloader) {
        var id = 'md-' + new Date().valueOf() + '-' + Math.floor(Math.random() * 1e16);
        env.attributes['id'] = id;
        Prism.plugins.autoloader.loadLanguages(codeLang, function () {
          var ele = document.getElementById(id);
          if (ele) {
            ele.innerHTML = Prism.highlight(ele.textContent, Prism.languages[codeLang], codeLang);
          }
        });
      }
    } else {
      env.content = Prism.highlight(textContent(env.content), grammar, codeLang);
    }
  });
  var tagPattern = RegExp(Prism.languages.markup.tag.pattern.source, 'gi');

  /**
   * A list of known entity names.
   *
   * This will always be incomplete to save space. The current list is the one used by lowdash's unescape function.
   *
   * @see {@link https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/unescape.js#L2}
   */
  var KNOWN_ENTITY_NAMES = {
    'amp': '&',
    'lt': '<',
    'gt': '>',
    'quot': '"'
  };

  // IE 11 doesn't support `String.fromCodePoint`
  var fromCodePoint = String.fromCodePoint || String.fromCharCode;

  /**
   * Returns the text content of a given HTML source code string.
   *
   * @param {string} html
   * @returns {string}
   */
  function textContent(html) {
    // remove all tags
    var text = html.replace(tagPattern, '');

    // decode known entities
    text = text.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (m, code) {
      code = code.toLowerCase();
      if (code[0] === '#') {
        var value;
        if (code[1] === 'x') {
          value = parseInt(code.slice(2), 16);
        } else {
          value = Number(code.slice(1));
        }
        return fromCodePoint(value);
      } else {
        var known = KNOWN_ENTITY_NAMES[code];
        if (known) {
          return known;
        }

        // unable to decode
        return m;
      }
    });
    return text;
  }
  Prism.languages.md = Prism.languages.markdown;
})(Prism);

Prism.languages.makefile = {
  'comment': {
    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
    lookbehind: true
  },
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'builtin-target': {
    pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
    alias: 'builtin'
  },
  'target': {
    pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
    alias: 'symbol',
    inside: {
      'variable': /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
    }
  },
  'variable': /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  // Directives
  'keyword': /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
  'function': {
    pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
    lookbehind: true
  },
  'operator': /(?:::|[?:+!])?=|[|@]/,
  'punctuation': /[:;(){}]/
};

(function (Prism) {
  var variable = /\$(?:\w[a-z\d]*(?:_[^\x00-\x1F\s"'\\()$]*)?|\{[^}\s"'\\]+\})/i;
  Prism.languages.nginx = {
    'comment': {
      pattern: /(^|[\s{};])#.*/,
      lookbehind: true,
      greedy: true
    },
    'directive': {
      pattern: /(^|\s)\w(?:[^;{}"'\\\s]|\\.|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\s+(?:#.*(?!.)|(?![#\s])))*?(?=\s*[;{])/,
      lookbehind: true,
      greedy: true,
      inside: {
        'string': {
          pattern: /((?:^|[^\\])(?:\\\\)*)(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/,
          lookbehind: true,
          greedy: true,
          inside: {
            'escape': {
              pattern: /\\["'\\nrt]/,
              alias: 'entity'
            },
            'variable': variable
          }
        },
        'comment': {
          pattern: /(\s)#.*/,
          lookbehind: true,
          greedy: true
        },
        'keyword': {
          pattern: /^\S+/,
          greedy: true
        },
        // other patterns

        'boolean': {
          pattern: /(\s)(?:off|on)(?!\S)/,
          lookbehind: true
        },
        'number': {
          pattern: /(\s)\d+[a-z]*(?!\S)/i,
          lookbehind: true
        },
        'variable': variable
      }
    },
    'punctuation': /[{};]/
  };
})(Prism);

/**
 * Original by Aaron Harun: http://aahacreative.com/2012/07/31/php-syntax-highlighting-prism/
 * Modified by Miles Johnson: http://milesj.me
 * Rewritten by Tom Pavelec
 *
 * Supports PHP 5.3 - 8.0
 */
(function (Prism) {
  var comment = /\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/;
  var constant = [{
    pattern: /\b(?:false|true)\b/i,
    alias: 'boolean'
  }, {
    pattern: /(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,
    greedy: true,
    lookbehind: true
  }, {
    pattern: /(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,
    greedy: true,
    lookbehind: true
  }, /\b(?:null)\b/i, /\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/];
  var number = /\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i;
  var operator = /<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/;
  var punctuation = /[{}\[\](),:;]/;
  Prism.languages.php = {
    'delimiter': {
      pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
      alias: 'important'
    },
    'comment': comment,
    'variable': /\$+(?:\w+\b|(?=\{))/,
    'package': {
      pattern: /(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
      lookbehind: true,
      inside: {
        'punctuation': /\\/
      }
    },
    'class-name-definition': {
      pattern: /(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,
      lookbehind: true,
      alias: 'class-name'
    },
    'function-definition': {
      pattern: /(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,
      lookbehind: true,
      alias: 'function'
    },
    'keyword': [{
      pattern: /(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,
      alias: 'type-casting',
      greedy: true,
      lookbehind: true
    }, {
      pattern: /([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,
      alias: 'type-hint',
      greedy: true,
      lookbehind: true
    }, {
      pattern: /(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,
      alias: 'return-type',
      greedy: true,
      lookbehind: true
    }, {
      pattern: /\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,
      alias: 'type-declaration',
      greedy: true
    }, {
      pattern: /(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,
      alias: 'type-declaration',
      greedy: true,
      lookbehind: true
    }, {
      pattern: /\b(?:parent|self|static)(?=\s*::)/i,
      alias: 'static-context',
      greedy: true
    }, {
      // yield from
      pattern: /(\byield\s+)from\b/i,
      lookbehind: true
    },
    // `class` is always a keyword unlike other keywords
    /\bclass\b/i, {
      // https://www.php.net/manual/en/reserved.keywords.php
      //
      // keywords cannot be preceded by "->"
      // the complex lookbehind means `(?<!(?:->|::)\s*)`
      pattern: /((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,
      lookbehind: true
    }],
    'argument-name': {
      pattern: /([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,
      lookbehind: true
    },
    'class-name': [{
      pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,
      greedy: true,
      lookbehind: true
    }, {
      pattern: /(\|\s*)\b[a-z_]\w*(?!\\)\b/i,
      greedy: true,
      lookbehind: true
    }, {
      pattern: /\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,
      greedy: true
    }, {
      pattern: /(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,
      alias: 'class-name-fully-qualified',
      greedy: true,
      lookbehind: true,
      inside: {
        'punctuation': /\\/
      }
    }, {
      pattern: /(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,
      alias: 'class-name-fully-qualified',
      greedy: true,
      inside: {
        'punctuation': /\\/
      }
    }, {
      pattern: /(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
      alias: 'class-name-fully-qualified',
      greedy: true,
      lookbehind: true,
      inside: {
        'punctuation': /\\/
      }
    }, {
      pattern: /\b[a-z_]\w*(?=\s*\$)/i,
      alias: 'type-declaration',
      greedy: true
    }, {
      pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
      alias: ['class-name-fully-qualified', 'type-declaration'],
      greedy: true,
      inside: {
        'punctuation': /\\/
      }
    }, {
      pattern: /\b[a-z_]\w*(?=\s*::)/i,
      alias: 'static-context',
      greedy: true
    }, {
      pattern: /(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,
      alias: ['class-name-fully-qualified', 'static-context'],
      greedy: true,
      inside: {
        'punctuation': /\\/
      }
    }, {
      pattern: /([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,
      alias: 'type-hint',
      greedy: true,
      lookbehind: true
    }, {
      pattern: /([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,
      alias: ['class-name-fully-qualified', 'type-hint'],
      greedy: true,
      lookbehind: true,
      inside: {
        'punctuation': /\\/
      }
    }, {
      pattern: /(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,
      alias: 'return-type',
      greedy: true,
      lookbehind: true
    }, {
      pattern: /(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,
      alias: ['class-name-fully-qualified', 'return-type'],
      greedy: true,
      lookbehind: true,
      inside: {
        'punctuation': /\\/
      }
    }],
    'constant': constant,
    'function': {
      pattern: /(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,
      lookbehind: true,
      inside: {
        'punctuation': /\\/
      }
    },
    'property': {
      pattern: /(->\s*)\w+/,
      lookbehind: true
    },
    'number': number,
    'operator': operator,
    'punctuation': punctuation
  };
  var string_interpolation = {
    pattern: /\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,
    lookbehind: true,
    inside: Prism.languages.php
  };
  var string = [{
    pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
    alias: 'nowdoc-string',
    greedy: true,
    inside: {
      'delimiter': {
        pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
        alias: 'symbol',
        inside: {
          'punctuation': /^<<<'?|[';]$/
        }
      }
    }
  }, {
    pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
    alias: 'heredoc-string',
    greedy: true,
    inside: {
      'delimiter': {
        pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
        alias: 'symbol',
        inside: {
          'punctuation': /^<<<"?|[";]$/
        }
      },
      'interpolation': string_interpolation
    }
  }, {
    pattern: /`(?:\\[\s\S]|[^\\`])*`/,
    alias: 'backtick-quoted-string',
    greedy: true
  }, {
    pattern: /'(?:\\[\s\S]|[^\\'])*'/,
    alias: 'single-quoted-string',
    greedy: true
  }, {
    pattern: /"(?:\\[\s\S]|[^\\"])*"/,
    alias: 'double-quoted-string',
    greedy: true,
    inside: {
      'interpolation': string_interpolation
    }
  }];
  Prism.languages.insertBefore('php', 'variable', {
    'string': string,
    'attribute': {
      pattern: /#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,
      greedy: true,
      inside: {
        'attribute-content': {
          pattern: /^(#\[)[\s\S]+(?=\]$)/,
          lookbehind: true,
          // inside can appear subset of php
          inside: {
            'comment': comment,
            'string': string,
            'attribute-class-name': [{
              pattern: /([^:]|^)\b[a-z_]\w*(?!\\)\b/i,
              alias: 'class-name',
              greedy: true,
              lookbehind: true
            }, {
              pattern: /([^:]|^)(?:\\?\b[a-z_]\w*)+/i,
              alias: ['class-name', 'class-name-fully-qualified'],
              greedy: true,
              lookbehind: true,
              inside: {
                'punctuation': /\\/
              }
            }],
            'constant': constant,
            'number': number,
            'operator': operator,
            'punctuation': punctuation
          }
        },
        'delimiter': {
          pattern: /^#\[|\]$/,
          alias: 'punctuation'
        }
      }
    }
  });
  Prism.hooks.add('before-tokenize', function (env) {
    if (!/<\?/.test(env.code)) {
      return;
    }
    var phpPattern = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g;
    Prism.languages['markup-templating'].buildPlaceholders(env, 'php', phpPattern);
  });
  Prism.hooks.add('after-tokenize', function (env) {
    Prism.languages['markup-templating'].tokenizePlaceholders(env, 'php');
  });
})(Prism);

Prism.languages.python = {
  'comment': {
    pattern: /(^|[^\\])#.*/,
    lookbehind: true,
    greedy: true
  },
  'string-interpolation': {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: true,
    inside: {
      'interpolation': {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: true,
        inside: {
          'format-spec': {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: true
          },
          'conversion-option': {
            pattern: /![sra](?=[:}]$)/,
            alias: 'punctuation'
          },
          rest: null
        }
      },
      'string': /[\s\S]+/
    }
  },
  'triple-quoted-string': {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: true,
    alias: 'string'
  },
  'string': {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: true
  },
  'function': {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: true
  },
  'class-name': {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: true
  },
  'decorator': {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: true,
    alias: ['annotation', 'punctuation'],
    inside: {
      'punctuation': /\./
    }
  },
  'keyword': /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  'builtin': /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  'boolean': /\b(?:False|None|True)\b/,
  'number': /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  'operator': /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  'punctuation': /[{}[\];(),.:]/
};
Prism.languages.python['string-interpolation'].inside['interpolation'].inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;

(function (Prism) {
  var brackets = /(?:\((?:[^()\\]|\\[\s\S])*\)|\{(?:[^{}\\]|\\[\s\S])*\}|\[(?:[^[\]\\]|\\[\s\S])*\]|<(?:[^<>\\]|\\[\s\S])*>)/.source;
  Prism.languages.perl = {
    'comment': [{
      // POD
      pattern: /(^\s*)=\w[\s\S]*?=cut.*/m,
      lookbehind: true,
      greedy: true
    }, {
      pattern: /(^|[^\\$])#.*/,
      lookbehind: true,
      greedy: true
    }],
    // TODO Could be nice to handle Heredoc too.
    'string': [{
      pattern: RegExp(/\b(?:q|qq|qw|qx)(?![a-zA-Z0-9])\s*/.source + '(?:' + [
      // q/.../
      /([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
      // q a...a
      // eslint-disable-next-line regexp/strict
      /([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2/.source,
      // q(...)
      // q{...}
      // q[...]
      // q<...>
      brackets].join('|') + ')'),
      greedy: true
    },
    // "...", `...`
    {
      pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/,
      greedy: true
    },
    // '...'
    // FIXME Multi-line single-quoted strings are not supported as they would break variables containing '
    {
      pattern: /'(?:[^'\\\r\n]|\\.)*'/,
      greedy: true
    }],
    'regex': [{
      pattern: RegExp(/\b(?:m|qr)(?![a-zA-Z0-9])\s*/.source + '(?:' + [
      // m/.../
      /([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,
      // m a...a
      // eslint-disable-next-line regexp/strict
      /([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2/.source,
      // m(...)
      // m{...}
      // m[...]
      // m<...>
      brackets].join('|') + ')' + /[msixpodualngc]*/.source),
      greedy: true
    },
    // The lookbehinds prevent -s from breaking
    {
      pattern: RegExp(/(^|[^-])\b(?:s|tr|y)(?![a-zA-Z0-9])\s*/.source + '(?:' + [
      // s/.../.../
      // eslint-disable-next-line regexp/strict
      /([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2/.source,
      // s a...a...a
      // eslint-disable-next-line regexp/strict
      /([a-zA-Z0-9])(?:(?!\3)[^\\]|\\[\s\S])*\3(?:(?!\3)[^\\]|\\[\s\S])*\3/.source,
      // s(...)(...)
      // s{...}{...}
      // s[...][...]
      // s<...><...>
      // s(...)[...]
      brackets + /\s*/.source + brackets].join('|') + ')' + /[msixpodualngcer]*/.source),
      lookbehind: true,
      greedy: true
    },
    // /.../
    // The look-ahead tries to prevent two divisions on
    // the same line from being highlighted as regex.
    // This does not support multi-line regex.
    {
      pattern: /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|x|xor)\b))/,
      greedy: true
    }],
    // FIXME Not sure about the handling of ::, ', and #
    'variable': [
    // ${^POSTMATCH}
    /[&*$@%]\{\^[A-Z]+\}/,
    // $^V
    /[&*$@%]\^[A-Z_]/,
    // ${...}
    /[&*$@%]#?(?=\{)/,
    // $foo
    /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+(?![\w$]))+(?:::)*/,
    // $1
    /[&*$@%]\d+/,
    // $_, @_, %!
    // The negative lookahead prevents from breaking the %= operator
    /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/],
    'filehandle': {
      // <>, <FOO>, _
      pattern: /<(?![<=])\S*?>|\b_\b/,
      alias: 'symbol'
    },
    'v-string': {
      // v1.2, 1.2.3
      pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,
      alias: 'string'
    },
    'function': {
      pattern: /(\bsub[ \t]+)\w+/,
      lookbehind: true
    },
    'keyword': /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
    'number': /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
    'operator': /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|xor)\b/,
    'punctuation': /[{}[\];(),:]/
  };
})(Prism);

(function (Prism) {
  Prism.languages.puppet = {
    'heredoc': [
    // Matches the content of a quoted heredoc string (subject to interpolation)
    {
      pattern: /(@\("([^"\r\n\/):]+)"(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r(?!\n)))*?[ \t]*(?:\|[ \t]*)?(?:-[ \t]*)?\2/,
      lookbehind: true,
      alias: 'string',
      inside: {
        // Matches the end tag
        'punctuation': /(?=\S).*\S(?= *$)/
        // See interpolation below
      }
    },
    // Matches the content of an unquoted heredoc string (no interpolation)
    {
      pattern: /(@\(([^"\r\n\/):]+)(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r(?!\n)))*?[ \t]*(?:\|[ \t]*)?(?:-[ \t]*)?\2/,
      lookbehind: true,
      greedy: true,
      alias: 'string',
      inside: {
        // Matches the end tag
        'punctuation': /(?=\S).*\S(?= *$)/
      }
    },
    // Matches the start tag of heredoc strings
    {
      pattern: /@\("?(?:[^"\r\n\/):]+)"?(?:\/[nrts$uL]*)?\)/,
      alias: 'string',
      inside: {
        'punctuation': {
          pattern: /(\().+?(?=\))/,
          lookbehind: true
        }
      }
    }],
    'multiline-comment': {
      pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
      lookbehind: true,
      greedy: true,
      alias: 'comment'
    },
    'regex': {
      // Must be prefixed with the keyword "node" or a non-word char
      pattern: /((?:\bnode\s+|[~=\(\[\{,]\s*|[=+]>\s*|^\s*))\/(?:[^\/\\]|\\[\s\S])+\/(?:[imx]+\b|\B)/,
      lookbehind: true,
      greedy: true,
      inside: {
        // Extended regexes must have the x flag. They can contain single-line comments.
        'extended-regex': {
          pattern: /^\/(?:[^\/\\]|\\[\s\S])+\/[im]*x[im]*$/,
          inside: {
            'comment': /#.*/
          }
        }
      }
    },
    'comment': {
      pattern: /(^|[^\\])#.*/,
      lookbehind: true,
      greedy: true
    },
    'string': {
      // Allow for one nested level of double quotes inside interpolation
      pattern: /(["'])(?:\$\{(?:[^'"}]|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}|\$(?!\{)|(?!\1)[^\\$]|\\[\s\S])*\1/,
      greedy: true,
      inside: {
        'double-quoted': {
          pattern: /^"[\s\S]*"$/,
          inside: {
            // See interpolation below
          }
        }
      }
    },
    'variable': {
      pattern: /\$(?:::)?\w+(?:::\w+)*/,
      inside: {
        'punctuation': /::/
      }
    },
    'attr-name': /(?:\b\w+|\*)(?=\s*=>)/,
    'function': [{
      pattern: /(\.)(?!\d)\w+/,
      lookbehind: true
    }, /\b(?:contain|debug|err|fail|include|info|notice|realize|require|tag|warning)\b|\b(?!\d)\w+(?=\()/],
    'number': /\b(?:0x[a-f\d]+|\d+(?:\.\d+)?(?:e-?\d+)?)\b/i,
    'boolean': /\b(?:false|true)\b/,
    // Includes words reserved for future use
    'keyword': /\b(?:application|attr|case|class|consumes|default|define|else|elsif|function|if|import|inherits|node|private|produces|type|undef|unless)\b/,
    'datatype': {
      pattern: /\b(?:Any|Array|Boolean|Callable|Catalogentry|Class|Collection|Data|Default|Enum|Float|Hash|Integer|NotUndef|Numeric|Optional|Pattern|Regexp|Resource|Runtime|Scalar|String|Struct|Tuple|Type|Undef|Variant)\b/,
      alias: 'symbol'
    },
    'operator': /=[=~>]?|![=~]?|<(?:<\|?|[=~|-])?|>[>=]?|->?|~>|\|>?>?|[*\/%+?]|\b(?:and|in|or)\b/,
    'punctuation': /[\[\]{}().,;]|:+/
  };
  var interpolation = [{
    // Allow for one nested level of braces inside interpolation
    pattern: /(^|[^\\])\$\{(?:[^'"{}]|\{[^}]*\}|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}/,
    lookbehind: true,
    inside: {
      'short-variable': {
        // Negative look-ahead prevent wrong highlighting of functions
        pattern: /(^\$\{)(?!\w+\()(?:::)?\w+(?:::\w+)*/,
        lookbehind: true,
        alias: 'variable',
        inside: {
          'punctuation': /::/
        }
      },
      'delimiter': {
        pattern: /^\$/,
        alias: 'variable'
      },
      rest: Prism.languages.puppet
    }
  }, {
    pattern: /(^|[^\\])\$(?:::)?\w+(?:::\w+)*/,
    lookbehind: true,
    alias: 'variable',
    inside: {
      'punctuation': /::/
    }
  }];
  Prism.languages.puppet['heredoc'][0].inside.interpolation = interpolation;
  Prism.languages.puppet['string'].inside['double-quoted'].inside.interpolation = interpolation;
})(Prism);

(function (Prism) {
  var javascript = Prism.util.clone(Prism.languages.javascript);
  var space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
  var braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
  var spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;

  /**
   * @param {string} source
   * @param {string} [flags]
   */
  function re(source, flags) {
    source = source.replace(/<S>/g, function () {
      return space;
    }).replace(/<BRACES>/g, function () {
      return braces;
    }).replace(/<SPREAD>/g, function () {
      return spread;
    });
    return RegExp(source, flags);
  }
  spread = re(spread).source;
  Prism.languages.jsx = Prism.languages.extend('markup', javascript);
  Prism.languages.jsx.tag.pattern = re(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source);
  Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/;
  Prism.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/;
  Prism.languages.jsx.tag.inside['tag'].inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
  Prism.languages.jsx.tag.inside['comment'] = javascript['comment'];
  Prism.languages.insertBefore('inside', 'attr-name', {
    'spread': {
      pattern: re(/<SPREAD>/.source),
      inside: Prism.languages.jsx
    }
  }, Prism.languages.jsx.tag);
  Prism.languages.insertBefore('inside', 'special-attr', {
    'script': {
      // Allow for two levels of nesting
      pattern: re(/=<BRACES>/.source),
      alias: 'language-javascript',
      inside: {
        'script-punctuation': {
          pattern: /^=(?=\{)/,
          alias: 'punctuation'
        },
        rest: Prism.languages.jsx
      }
    }
  }, Prism.languages.jsx.tag);

  // The following will handle plain text inside tags
  var stringifyToken = function stringifyToken(token) {
    if (!token) {
      return '';
    }
    if (typeof token === 'string') {
      return token;
    }
    if (typeof token.content === 'string') {
      return token.content;
    }
    return token.content.map(stringifyToken).join('');
  };
  var walkTokens = function walkTokens(tokens) {
    var openedTags = [];
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var notTagNorBrace = false;
      if (typeof token !== 'string') {
        if (token.type === 'tag' && token.content[0] && token.content[0].type === 'tag') {
          // We found a tag, now find its kind

          if (token.content[0].content[0].content === '</') {
            // Closing tag
            if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
              // Pop matching opening tag
              openedTags.pop();
            }
          } else {
            if (token.content[token.content.length - 1].content === '/>') ; else {
              // Opening tag
              openedTags.push({
                tagName: stringifyToken(token.content[0].content[1]),
                openedBraces: 0
              });
            }
          }
        } else if (openedTags.length > 0 && token.type === 'punctuation' && token.content === '{') {
          // Here we might have entered a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces++;
        } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === 'punctuation' && token.content === '}') {
          // Here we might have left a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces--;
        } else {
          notTagNorBrace = true;
        }
      }
      if (notTagNorBrace || typeof token === 'string') {
        if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
          // Here we are inside a tag, and not inside a JSX context.
          // That's plain text: drop any tokens matched.
          var plainText = stringifyToken(token);

          // And merge text with adjacent text
          if (i < tokens.length - 1 && (typeof tokens[i + 1] === 'string' || tokens[i + 1].type === 'plain-text')) {
            plainText += stringifyToken(tokens[i + 1]);
            tokens.splice(i + 1, 1);
          }
          if (i > 0 && (typeof tokens[i - 1] === 'string' || tokens[i - 1].type === 'plain-text')) {
            plainText = stringifyToken(tokens[i - 1]) + plainText;
            tokens.splice(i - 1, 1);
            i--;
          }
          tokens[i] = new Prism.Token('plain-text', plainText, null, plainText);
        }
      }
      if (token.content && typeof token.content !== 'string') {
        walkTokens(token.content);
      }
    }
  };
  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'jsx' && env.language !== 'tsx') {
      return;
    }
    walkTokens(env.tokens);
  });
})(Prism);

(function (Prism) {
  var typescript = Prism.util.clone(Prism.languages.typescript);
  Prism.languages.tsx = Prism.languages.extend('jsx', typescript);

  // doesn't work with TS because TS is too complex
  delete Prism.languages.tsx['parameter'];
  delete Prism.languages.tsx['literal-property'];

  // This will prevent collisions between TSX tags and TS generic types.
  // Idea by https://github.com/karlhorky
  // Discussion: https://github.com/PrismJS/prism/issues/2594#issuecomment-710666928
  var tag = Prism.languages.tsx.tag;
  tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + '(?:' + tag.pattern.source + ')', tag.pattern.flags);
  tag.lookbehind = true;
})(Prism);

(function (Prism) {
  var specialEscape = {
    pattern: /\\[\\(){}[\]^$+*?|.]/,
    alias: 'escape'
  };
  var escape = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/;
  var charSet = {
    pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i,
    alias: 'class-name'
  };
  var charSetWithoutDot = {
    pattern: /\\[wsd]|\\p\{[^{}]+\}/i,
    alias: 'class-name'
  };
  var rangeChar = '(?:[^\\\\-]|' + escape.source + ')';
  var range = RegExp(rangeChar + '-' + rangeChar);

  // the name of a capturing group
  var groupName = {
    pattern: /(<|')[^<>']+(?=[>']$)/,
    lookbehind: true,
    alias: 'variable'
  };
  Prism.languages.regex = {
    'char-class': {
      pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
      lookbehind: true,
      inside: {
        'char-class-negation': {
          pattern: /(^\[)\^/,
          lookbehind: true,
          alias: 'operator'
        },
        'char-class-punctuation': {
          pattern: /^\[|\]$/,
          alias: 'punctuation'
        },
        'range': {
          pattern: range,
          inside: {
            'escape': escape,
            'range-punctuation': {
              pattern: /-/,
              alias: 'operator'
            }
          }
        },
        'special-escape': specialEscape,
        'char-set': charSetWithoutDot,
        'escape': escape
      }
    },
    'special-escape': specialEscape,
    'char-set': charSet,
    'backreference': [{
      // a backreference which is not an octal escape
      pattern: /\\(?![123][0-7]{2})[1-9]/,
      alias: 'keyword'
    }, {
      pattern: /\\k<[^<>']+>/,
      alias: 'keyword',
      inside: {
        'group-name': groupName
      }
    }],
    'anchor': {
      pattern: /[$^]|\\[ABbGZz]/,
      alias: 'function'
    },
    'escape': escape,
    'group': [{
      // https://docs.oracle.com/javase/10/docs/api/java/util/regex/Pattern.html
      // https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference?view=netframework-4.7.2#grouping-constructs

      // (), (?<name>), (?'name'), (?>), (?:), (?=), (?!), (?<=), (?<!), (?is-m), (?i-m:)
      pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
      alias: 'punctuation',
      inside: {
        'group-name': groupName
      }
    }, {
      pattern: /\)/,
      alias: 'punctuation'
    }],
    'quantifier': {
      pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,
      alias: 'number'
    },
    'alternation': {
      pattern: /\|/,
      alias: 'keyword'
    }
  };
})(Prism);

/**
 * Original by Samuel Flores
 *
 * Adds the following new token classes:
 *     constant, builtin, variable, symbol, regex
 */
(function (Prism) {
  Prism.languages.ruby = Prism.languages.extend('clike', {
    'comment': {
      pattern: /#.*|^=begin\s[\s\S]*?^=end/m,
      greedy: true
    },
    'class-name': {
      pattern: /(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,
      lookbehind: true,
      inside: {
        'punctuation': /[.\\]/
      }
    },
    'keyword': /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,
    'operator': /\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,
    'punctuation': /[(){}[\].,;]/
  });
  Prism.languages.insertBefore('ruby', 'operator', {
    'double-colon': {
      pattern: /::/,
      alias: 'punctuation'
    }
  });
  var interpolation = {
    pattern: /((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,
    lookbehind: true,
    inside: {
      'content': {
        pattern: /^(#\{)[\s\S]+(?=\}$)/,
        lookbehind: true,
        inside: Prism.languages.ruby
      },
      'delimiter': {
        pattern: /^#\{|\}$/,
        alias: 'punctuation'
      }
    }
  };
  delete Prism.languages.ruby["function"];
  var percentExpression = '(?:' + [/([^a-zA-Z0-9\s{(\[<=])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source, /\((?:[^()\\]|\\[\s\S]|\((?:[^()\\]|\\[\s\S])*\))*\)/.source, /\{(?:[^{}\\]|\\[\s\S]|\{(?:[^{}\\]|\\[\s\S])*\})*\}/.source, /\[(?:[^\[\]\\]|\\[\s\S]|\[(?:[^\[\]\\]|\\[\s\S])*\])*\]/.source, /<(?:[^<>\\]|\\[\s\S]|<(?:[^<>\\]|\\[\s\S])*>)*>/.source].join('|') + ')';
  var symbolName = /(?:"(?:\\.|[^"\\\r\n])*"|(?:\b[a-zA-Z_]\w*|[^\s\0-\x7F]+)[?!]?|\$.)/.source;
  Prism.languages.insertBefore('ruby', 'keyword', {
    'regex-literal': [{
      pattern: RegExp(/%r/.source + percentExpression + /[egimnosux]{0,6}/.source),
      greedy: true,
      inside: {
        'interpolation': interpolation,
        'regex': /[\s\S]+/
      }
    }, {
      pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
      lookbehind: true,
      greedy: true,
      inside: {
        'interpolation': interpolation,
        'regex': /[\s\S]+/
      }
    }],
    'variable': /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
    'symbol': [{
      pattern: RegExp(/(^|[^:]):/.source + symbolName),
      lookbehind: true,
      greedy: true
    }, {
      pattern: RegExp(/([\r\n{(,][ \t]*)/.source + symbolName + /(?=:(?!:))/.source),
      lookbehind: true,
      greedy: true
    }],
    'method-definition': {
      pattern: /(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,
      lookbehind: true,
      inside: {
        'function': /\b\w+$/,
        'keyword': /^self\b/,
        'class-name': /^\w+/,
        'punctuation': /\./
      }
    }
  });
  Prism.languages.insertBefore('ruby', 'string', {
    'string-literal': [{
      pattern: RegExp(/%[qQiIwWs]?/.source + percentExpression),
      greedy: true,
      inside: {
        'interpolation': interpolation,
        'string': /[\s\S]+/
      }
    }, {
      pattern: /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
      greedy: true,
      inside: {
        'interpolation': interpolation,
        'string': /[\s\S]+/
      }
    }, {
      pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
      alias: 'heredoc-string',
      greedy: true,
      inside: {
        'delimiter': {
          pattern: /^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,
          inside: {
            'symbol': /\b\w+/,
            'punctuation': /^<<[-~]?/
          }
        },
        'interpolation': interpolation,
        'string': /[\s\S]+/
      }
    }, {
      pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
      alias: 'heredoc-string',
      greedy: true,
      inside: {
        'delimiter': {
          pattern: /^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,
          inside: {
            'symbol': /\b\w+/,
            'punctuation': /^<<[-~]?'|'$/
          }
        },
        'string': /[\s\S]+/
      }
    }],
    'command-literal': [{
      pattern: RegExp(/%x/.source + percentExpression),
      greedy: true,
      inside: {
        'interpolation': interpolation,
        'command': {
          pattern: /[\s\S]+/,
          alias: 'string'
        }
      }
    }, {
      pattern: /`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,
      greedy: true,
      inside: {
        'interpolation': interpolation,
        'command': {
          pattern: /[\s\S]+/,
          alias: 'string'
        }
      }
    }]
  });
  delete Prism.languages.ruby.string;
  Prism.languages.insertBefore('ruby', 'number', {
    'builtin': /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,
    'constant': /\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/
  });
  Prism.languages.rb = Prism.languages.ruby;
})(Prism);

Prism.languages.sql = {
  'comment': {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: true
  },
  'variable': [{
    pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
    greedy: true
  }, /@[\w.$]+/],
  'string': {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: true,
    lookbehind: true
  },
  'identifier': {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: true,
    lookbehind: true,
    inside: {
      'punctuation': /^`|`$/
    }
  },
  'function': /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  'keyword': /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  'boolean': /\b(?:FALSE|NULL|TRUE)\b/i,
  'number': /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  'operator': /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  'punctuation': /[;[\]()`,.]/
};

Prism.languages.swift = {
  'comment': {
    // Nested comments are supported up to 2 levels
    pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
    lookbehind: true,
    greedy: true
  },
  'string-literal': [
  // https://docs.swift.org/swift-book/LanguageGuide/StringsAndCharacters.html
  {
    pattern: RegExp(/(^|[^"#])/.source + '(?:'
    // single-line string
    + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + '|'
    // multi-line string
    + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ')' + /(?!["#])/.source),
    lookbehind: true,
    greedy: true,
    inside: {
      'interpolation': {
        pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
        lookbehind: true,
        inside: null // see below
      },

      'interpolation-punctuation': {
        pattern: /^\)|\\\($/,
        alias: 'punctuation'
      },
      'punctuation': /\\(?=[\r\n])/,
      'string': /[\s\S]+/
    }
  }, {
    pattern: RegExp(/(^|[^"#])(#+)/.source + '(?:'
    // single-line string
    + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + '|'
    // multi-line string
    + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ')' + '\\2'),
    lookbehind: true,
    greedy: true,
    inside: {
      'interpolation': {
        pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
        lookbehind: true,
        inside: null // see below
      },

      'interpolation-punctuation': {
        pattern: /^\)|\\#+\($/,
        alias: 'punctuation'
      },
      'string': /[\s\S]+/
    }
  }],
  'directive': {
    // directives with conditions
    pattern: RegExp(/#/.source + '(?:' + (/(?:elseif|if)\b/.source + '(?:[ \t]*'
    // This regex is a little complex. It's equivalent to this:
    //   (?:![ \t]*)?(?:\b\w+\b(?:[ \t]*<round>)?|<round>)(?:[ \t]*(?:&&|\|\|))?
    // where <round> is a general parentheses expression.
    + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ')+') + '|' + /(?:else|endif)\b/.source + ')'),
    alias: 'property',
    inside: {
      'directive-name': /^#\w+/,
      'boolean': /\b(?:false|true)\b/,
      'number': /\b\d+(?:\.\d+)*\b/,
      'operator': /!|&&|\|\||[<>]=?/,
      'punctuation': /[(),]/
    }
  },
  'literal': {
    pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
    alias: 'constant'
  },
  'other-directive': {
    pattern: /#\w+\b/,
    alias: 'property'
  },
  'attribute': {
    pattern: /@\w+/,
    alias: 'atrule'
  },
  'function-definition': {
    pattern: /(\bfunc\s+)\w+/,
    lookbehind: true,
    alias: 'function'
  },
  'label': {
    // https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html#ID141
    pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
    lookbehind: true,
    alias: 'important'
  },
  'keyword': /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
  'boolean': /\b(?:false|true)\b/,
  'nil': {
    pattern: /\bnil\b/,
    alias: 'constant'
  },
  'short-argument': /\$\d+\b/,
  'omit': {
    pattern: /\b_\b/,
    alias: 'keyword'
  },
  'number': /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
  // A class name must start with an upper-case letter and be either 1 letter long or contain a lower-case letter.
  'class-name': /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
  'function': /\b[a-z_]\w*(?=\s*\()/i,
  'constant': /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
  // Operators are generic in Swift. Developers can even create new operators (e.g. +++).
  // https://docs.swift.org/swift-book/ReferenceManual/zzSummaryOfTheGrammar.html#ID481
  // This regex only supports ASCII operators.
  'operator': /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
  'punctuation': /[{}[\]();,.:\\]/
};
Prism.languages.swift['string-literal'].forEach(function (rule) {
  rule.inside['interpolation'].inside = Prism.languages.swift;
});

(function (Prism) {
  Prism.languages.typescript = Prism.languages.extend('javascript', {
    'class-name': {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: true,
      greedy: true,
      inside: null // see below
    },

    'builtin': /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  });

  // The keywords TypeScript adds to JavaScript
  Prism.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,
  // keywords that have to be followed by an identifier
  /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
  // This is for `import type *, {}`
  /\btype\b(?=\s*(?:[\{*]|$))/);

  // doesn't work with TS because TS is too complex
  delete Prism.languages.typescript['parameter'];
  delete Prism.languages.typescript['literal-property'];

  // a version of typescript specifically for highlighting types
  var typeInside = Prism.languages.extend('typescript', {});
  delete typeInside['class-name'];
  Prism.languages.typescript['class-name'].inside = typeInside;
  Prism.languages.insertBefore('typescript', 'function', {
    'decorator': {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        'at': {
          pattern: /^@/,
          alias: 'operator'
        },
        'function': /^[\s\S]+/
      }
    },
    'generic-function': {
      // e.g. foo<T extends "bar" | "baz">( ...
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: true,
      inside: {
        'function': /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        'generic': {
          pattern: /<[\s\S]+/,
          // everything after the first <
          alias: 'class-name',
          inside: typeInside
        }
      }
    }
  });
  Prism.languages.ts = Prism.languages.typescript;
})(Prism);

Prism.languages.vim = {
  'string': /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/,
  'comment': /".*/,
  'function': /\b\w+(?=\()/,
  'keyword': /\b(?:N|Next|P|Print|X|XMLent|XMLns|ab|abbreviate|abc|abclear|abo|aboveleft|al|all|ar|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|args|argu|argument|as|ascii|b|bN|bNext|ba|bad|badd|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bo|botright|bp|bprevious|br|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|brewind|bro|browse|bufdo|buffer|buffers|bun|bunload|bw|bwipeout|c|cN|cNext|cNfcNfile|ca|cabbrev|cabc|cabclear|cad|caddb|caddbuffer|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cg|cgetb|cgetbuffer|cgete|cgetexpr|cgetfile|change|changes|chd|chdir|che|checkpath|checkt|checktime|cl|cla|clast|clist|clo|close|cmapc|cmapclear|cn|cnew|cnewer|cnext|cnf|cnfile|cnorea|cnoreabbrev|co|col|colder|colo|colorscheme|comc|comclear|comp|compiler|con|conf|confirm|continue|cope|copen|copy|cp|cpf|cpfile|cprevious|cq|cquit|cr|crewind|cu|cuna|cunabbrev|cunmap|cw|cwindow|d|debugg|debuggreedy|delc|delcommand|delete|delf|delfunction|delm|delmarks|di|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|e|earlier|echoe|echoerr|echom|echomsg|echon|edit|el|else|elsei|elseif|em|emenu|en|endf|endfo|endfor|endfun|endfunction|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fin|fina|finally|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|foldd|folddoc|folddoclosed|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|h|ha|hardcopy|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iu|iuna|iunabbrev|iunmap|j|join|ju|jumps|k|kee|keepalt|keepj|keepjumps|keepmarks|l|lN|lNext|lNf|lNfile|la|lad|laddb|laddbuffer|laddexpr|laddf|laddfile|lan|language|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|left|lefta|leftabove|let|lex|lexpr|lf|lfile|lfir|lfirst|lg|lgetb|lgetbuffer|lgete|lgetexpr|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|list|ll|lla|llast|lli|llist|lm|lmak|lmake|lmap|lmapc|lmapclear|ln|lne|lnew|lnewer|lnext|lnf|lnfile|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lp|lpf|lpfile|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|m|ma|mak|make|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkv|mkvie|mkview|mkvimrc|mod|mode|move|mz|mzf|mzfile|mzscheme|n|nbkey|new|next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|o|omapc|omapclear|on|only|open|opt|options|ou|ounmap|p|pc|pclose|pe|ped|pedit|perl|perld|perldo|po|pop|popu|popup|pp|ppop|pre|preserve|prev|previous|print|prof|profd|profdel|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|ptN|ptNext|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|py|pyf|pyfile|python|q|qa|qall|quit|quita|quitall|r|read|rec|recover|red|redi|redir|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|ru|rub|ruby|rubyd|rubydo|rubyf|rubyfile|runtime|rv|rviminfo|sN|sNext|sa|sal|sall|san|sandbox|sargument|sav|saveas|sb|sbN|sbNext|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbp|sbprevious|sbr|sbrewind|sbuffer|scrip|scripte|scriptencoding|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sl|sla|slast|sleep|sm|smagic|smap|smapc|smapclear|sme|smenu|sn|snext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|so|sor|sort|source|sp|spe|spelld|spelldump|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|split|spr|sprevious|sre|srewind|st|sta|stag|star|startg|startgreplace|startinsert|startr|startreplace|stj|stjump|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tN|tNext|ta|tab|tabN|tabNext|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabn|tabnew|tabnext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tmenu|tn|tnext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tunmenu|u|una|unabbreviate|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|ve|verb|verbose|version|vert|vertical|vi|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|w|wN|wNext|wa|wall|wh|while|win|winc|wincmd|windo|winp|winpos|winsize|wn|wnext|wp|wprevious|wq|wqa|wqall|write|ws|wsverb|wv|wviminfo|x|xa|xall|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/,
  'builtin': /\b(?:acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autocmd|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|t_AB|t_AF|t_AL|t_CS|t_CV|t_Ce|t_Co|t_Cs|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_IE|t_IS|t_K1|t_K3|t_K4|t_K5|t_K6|t_K7|t_K8|t_K9|t_KA|t_KB|t_KC|t_KD|t_KE|t_KF|t_KG|t_KH|t_KI|t_KJ|t_KK|t_KL|t_RI|t_RV|t_SI|t_Sb|t_Sf|t_WP|t_WS|t_ZH|t_ZR|t_al|t_bc|t_cd|t_ce|t_cl|t_cm|t_cs|t_da|t_db|t_dl|t_fs|t_k1|t_k2|t_k3|t_k4|t_k5|t_k6|t_k7|t_k8|t_k9|t_kB|t_kD|t_kI|t_kN|t_kP|t_kb|t_kd|t_ke|t_kh|t_kl|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_se|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_xs|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww)\b/,
  'number': /\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i,
  'operator': /\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*\/%?]|\b(?:is(?:not)?)\b/,
  'punctuation': /[{}[\](),;:]/
};

(function (Prism) {
  // https://yaml.org/spec/1.2/spec.html#c-ns-anchor-property
  // https://yaml.org/spec/1.2/spec.html#c-ns-alias-node
  var anchorOrAlias = /[*&][^\s[\]{},]+/;
  // https://yaml.org/spec/1.2/spec.html#c-ns-tag-property
  var tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/;
  // https://yaml.org/spec/1.2/spec.html#c-ns-properties(n,c)
  var properties = '(?:' + tag.source + '(?:[ \t]+' + anchorOrAlias.source + ')?|' + anchorOrAlias.source + '(?:[ \t]+' + tag.source + ')?)';
  // https://yaml.org/spec/1.2/spec.html#ns-plain(n,c)
  // This is a simplified version that doesn't support "#" and multiline keys
  // All these long scarry character classes are simplified versions of YAML's characters
  var plainKey = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function () {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  });
  var string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;

  /**
   *
   * @param {string} value
   * @param {string} [flags]
   * @returns {RegExp}
   */
  function createValuePattern(value, flags) {
    flags = (flags || '').replace(/m/g, '') + 'm'; // add m flag
    var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function () {
      return properties;
    }).replace(/<<value>>/g, function () {
      return value;
    });
    return RegExp(pattern, flags);
  }
  Prism.languages.yaml = {
    'scalar': {
      pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function () {
        return properties;
      })),
      lookbehind: true,
      alias: 'string'
    },
    'comment': /#.*/,
    'key': {
      pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function () {
        return properties;
      }).replace(/<<key>>/g, function () {
        return '(?:' + plainKey + '|' + string + ')';
      })),
      lookbehind: true,
      greedy: true,
      alias: 'atrule'
    },
    'directive': {
      pattern: /(^[ \t]*)%.+/m,
      lookbehind: true,
      alias: 'important'
    },
    'datetime': {
      pattern: createValuePattern(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
      lookbehind: true,
      alias: 'number'
    },
    'boolean': {
      pattern: createValuePattern(/false|true/.source, 'i'),
      lookbehind: true,
      alias: 'important'
    },
    'null': {
      pattern: createValuePattern(/null|~/.source, 'i'),
      lookbehind: true,
      alias: 'important'
    },
    'string': {
      pattern: createValuePattern(string),
      lookbehind: true,
      greedy: true
    },
    'number': {
      pattern: createValuePattern(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, 'i'),
      lookbehind: true
    },
    'tag': tag,
    'important': anchorOrAlias,
    'punctuation': /---|[:[\]{}\-,|>?]|\.\.\./
  };
  Prism.languages.yml = Prism.languages.yaml;
})(Prism);

var Code = function (_a) {
    var children = _a.children, _b = _a.language, language = _b === void 0 ? 'text' : _b;
    var codeRef = React.createRef();
    var highlight = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (codeRef.current) {
                Prism$1.highlightElement(codeRef.current);
            }
            return [2 /*return*/];
        });
    }); };
    var cl = "language-".concat(language.toLowerCase());
    var _c = React.useState(false), show = _c[0], setShow = _c[1];
    var showLang = function () { return setShow(true); };
    var hideLang = function () { return setShow(false); };
    React.useEffect(function () {
        highlight();
    }, [language, '']);
    return (React.createElement("div", { className: "notionate-blocks-code", onMouseOver: showLang, onMouseOut: hideLang },
        show && React.createElement("div", { className: "notionate-blocks-code-lang" }, language),
        React.createElement("pre", { className: cl },
            React.createElement("code", { ref: codeRef }, children))));
};
var CodeBlock = function (_a) {
    var _b, _c;
    var block = _a.block;
    var els = (_b = block.code) === null || _b === void 0 ? void 0 : _b.rich_text.map(function (textObject, i) {
        var _a;
        var text = textObject;
        return (React.createElement(Code, { language: ((_a = block.code) === null || _a === void 0 ? void 0 : _a.language) || '', key: "".concat(i) }, text.text.content));
    });
    var captions = (_c = block.code) === null || _c === void 0 ? void 0 : _c.caption.map(function (v, i) {
        return (React.createElement(TextObject, { textObject: v, key: "".concat(i) }));
    });
    return (React.createElement(React.Fragment, null,
        els,
        React.createElement("div", { className: "notionate-blocks-code-caption" }, captions)));
};

var ImageBlock = function (_a) {
    var _b;
    var block = _a.block;
    return (React.createElement("div", { className: "notionate-blocks-image" },
        React.createElement("div", { className: "notionate-blocks-image-inner" },
            React.createElement("img", { className: "notionate-blocks-image-img", src: (_b = block.image) === null || _b === void 0 ? void 0 : _b.src, alt: "" })),
        React.createElement("div", { className: "notionate-blocks-image-caption" },
            React.createElement(TextBlock, { tag: "span", block: block.image.caption }))));
};

var checkedBox = function () {
    return (React.createElement("div", { className: "notionate-blocks-checked" },
        React.createElement("div", { className: "notionate-blocks-checked-inner" },
            React.createElement("svg", { className: "notionate-blocks-checked-checkbox", viewBox: "0 0 14 14" },
                React.createElement("polygon", { points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039" })))));
};
var uncheckedBox = function () {
    return (React.createElement("div", { className: "notionate-blocks-unchecked" },
        React.createElement("svg", { className: "notionate-blocks-unchecked-checkbox", viewBox: "0 0 16 16" },
            React.createElement("path", { d: "M1.5,1.5 L1.5,14.5 L14.5,14.5 L14.5,1.5 L1.5,1.5 Z M0,0 L16,0 L16,16 L0,16 L0,0 Z" }))));
};
var TodoBlock = function (_a) {
    var block = _a.block;
    if (!block.to_do) {
        return React.createElement(React.Fragment, null);
    }
    var todoChecked = block.to_do.checked;
    var TodoCheckbox = todoChecked ? checkedBox : uncheckedBox;
    return (React.createElement("div", { className: "notionate-blocks-todo" },
        React.createElement("div", { className: "notionate-blocks-todo-check" },
            React.createElement(TodoCheckbox, null)),
        React.createElement("div", { className: "notionate-blocks-todo-text" },
            React.createElement("div", { className: "notionate-blocks-todo-text-inner".concat(todoChecked ? ' notionate-blocks-todo-text-inner-checked' : '') },
                React.createElement(TextBlock, { tag: "span", block: block.to_do.rich_text })))));
};

var Triangle = function (_a) {
    var open = _a.open;
    var style = {
        transform: "rotateZ(".concat(open ? 180 : 90, "deg)"),
    };
    return (React.createElement("svg", { className: "notionate-blocks-toggle-triangle-svg", style: style, viewBox: "0 0 100 100" },
        React.createElement("polygon", { points: "5.9,88.2 50,11.8 94.1,88.2 " })));
};
var ToggleBlock = function (_a) {
    var block = _a.block;
    var _b = React.useState(false), open = _b[0], setOpen = _b[1];
    var onClick = function () { return setOpen(!open); };
    var text = block.children.results.map(function (vv, i) {
        var v = vv;
        return React.createElement(TextBlock, { tag: "div", block: v.paragraph.rich_text, key: "".concat(i) });
    });
    return (React.createElement("div", { className: "notionate-blocks-toggle" },
        React.createElement("div", { className: "notionate-blocks-toggle-triangle", onClick: onClick },
            React.createElement(Triangle, { open: open })),
        React.createElement("div", { className: "notionate-blocks-toggle-box" },
            React.createElement(TextBlock, { tag: "div", block: block.toggle.rich_text }),
            open ? text : null)));
};

var Td = function (_a) {
    var cell = _a.cell, key = _a.key;
    return (React.createElement("td", { className: "notionate-blocks-table-td", key: key },
        React.createElement("div", { className: "notionate-blocks-table-td-inner" },
            React.createElement(TextObject, { textObject: cell }))));
};
var TdH = function (_a) {
    var cell = _a.cell, key = _a.key;
    return (React.createElement("td", { className: "notionate-blocks-table-td-header", key: key },
        React.createElement("div", { className: "notionate-blocks-table-td-header-inner" },
            React.createElement(TextObject, { textObject: cell }))));
};
var Tr = function (_a) {
    var children = _a.children, key = _a.key;
    return (React.createElement("tr", { className: "notionate-blocks-table-tr", key: key }, children));
};
var TableBlock = function (_a) {
    var block = _a.block;
    if (!block.table || !block.children) {
        return React.createElement(React.Fragment, null);
    }
    var rows = [];
    // const tw = block.table.table_width
    // column header ||
    var ch = block.table.has_column_header;
    // row header =
    var rh = block.table.has_row_header;
    block.children.results.map(function (vv, i) {
        var v = vv;
        var columns = [];
        if (v.table_row === undefined) {
            return '';
        }
        v.table_row.cells.map(function (cells, ii) {
            cells.map(function (cell, iii) {
                var key = "".concat(v.id, "-").concat(i, "-").concat(ii, "-").concat(iii);
                if ((i === 0 && ch) || (ii === 0 && rh)) {
                    columns.push(TdH({ cell: cell, key: key }) || React.createElement(React.Fragment, null));
                }
                else {
                    columns.push(Td({ cell: cell, key: key }) || React.createElement(React.Fragment, null));
                }
                return '';
            });
            return '';
        });
        var key = "".concat(block.id, "-").concat(i);
        rows.push(Tr({ children: columns, key: key }) || React.createElement(React.Fragment, null));
        return '';
    });
    return (React.createElement("div", { className: "notionate-blocks-table" },
        React.createElement("table", { className: "notionate-blocks-table-table" },
            React.createElement("tbody", null, rows))));
};

var BookmarkBlock = function (_a) {
    var block = _a.block;
    if (!block.bookmark) {
        return React.createElement(React.Fragment, null);
    }
    var jump = function () { var _a; return window.open((_a = block.bookmark) === null || _a === void 0 ? void 0 : _a.url, '_blank', 'noreferrer'); };
    var _b = block.bookmark.site, title = _b.title, desc = _b.desc, icon = _b.icon, image = _b.image;
    var url = block.bookmark.url;
    return (React.createElement("div", { className: "notionate-blocks-bookmark" },
        React.createElement("div", { className: "notionate-blocks-bookmark-inner", onClick: jump },
            React.createElement("div", { className: "notionate-blocks-bookmark-text" },
                React.createElement("div", { className: "notionate-blocks-bookmark-title" }, title),
                React.createElement("div", { className: "notionate-blocks-bookmark-desc" }, desc),
                React.createElement("div", { className: "notionate-blocks-bookmark-url" },
                    icon !== '' && React.createElement("img", { className: "notionate-blocks-bookmark-favicon", src: icon, width: "16px", alt: "icon" }),
                    url)),
            React.createElement("div", { className: "notionate-blocks-bookmark-image" }, image !== '' && React.createElement("img", { src: image, width: "200px", height: "auto", alt: "image" }))),
        React.createElement("div", { className: "notionate-blocks-bookmark-caption" },
            React.createElement(TextBlock, { tag: "span", block: block.bookmark.caption }))));
};

var CalloutBlock = function (_a) {
    var _b, _c;
    var block = _a.block;
    var icon = ((_b = block.callout.icon) === null || _b === void 0 ? void 0 : _b.type) === 'emoji' ? (_c = block.callout.icon) === null || _c === void 0 ? void 0 : _c.emoji : '';
    var text = block.callout.rich_text;
    return (React.createElement("div", { className: "notionate-blocks-callout" },
        React.createElement("div", null, icon),
        React.createElement("div", { className: "notionate-blocks-callout-text" },
            React.createElement(TextBlock, { tag: "span", block: text, key: "".concat(block.id, "-span") }))));
};

var LinkpreviewBlock = function (_a) {
    var block = _a.block;
    if (!block.link_preview) {
        return React.createElement(React.Fragment, null);
    }
    return (React.createElement("div", { className: "notionate-blocks-linkpreview" },
        React.createElement("a", { className: "notionate-blocks-linkpreview-a", href: block.link_preview.url, rel: "noreferrer", target: "_blank" },
            block.link_preview.url.includes('github.com') && React.createElement(GithubIcon, null),
            block.link_preview.url.includes('slack.com') && React.createElement(SlackIcon, null),
            block.link_preview.url.includes('figma.com') && React.createElement(FigmaIcon, null),
            block.link_preview.url)));
};

var ChildpageBlock = function (_a) {
    var block = _a.block, href = _a.href, link = _a.link, query = _a.query;
    var icon = block.page.icon.type === 'emoji' ? block.page.icon.emoji : '';
    var title = block.child_page.title;
    var LinkedTitle = function (_a) {
        var block = _a.block, href = _a.href, link = _a.link;
        var _b = getLinkPathAndLinkKey(href || ''), path = _b[0], slugKey = _b[1];
        var file = slugKey === 'id' ? block.page.id : encodeURIComponent(title.toLowerCase());
        if (!href) {
            return (React.createElement("span", { className: "notionate-blocks-childpage-title" }, title));
        }
        if (link && query) {
            var Link = link;
            return (React.createElement(Link, { className: "notionate-blocks-childpage-a", href: { pathname: "".concat(path).concat(file), query: query } }, title));
        }
        else if (link) {
            var Link = link;
            return (React.createElement(Link, { className: "notionate-blocks-childpage-a", href: "".concat(path).concat(file) }, title));
        }
        return (React.createElement("a", { href: "".concat(path).concat(file), className: "notionate-blocks-childpage-a" }, title));
    };
    return (React.createElement("div", { className: "notionate-blocks-childpage" },
        icon,
        React.createElement("div", null, LinkedTitle({ block: block, href: href, link: link }))));
};

var ChilddatabaseBlock = function (_a) {
    var _b;
    var block = _a.block, href = _a.href, link = _a.link, query = _a.query;
    if (!('database' in block)) {
        return React.createElement(React.Fragment, null);
    }
    var icon = ('icon' in block.database) && ((_b = block.database.icon) === null || _b === void 0 ? void 0 : _b.type) === 'emoji' ? block.database.icon.emoji : '';
    var title = ('title' in block.database) ? block.database.title : [];
    var plainTitle = title.map(function (v) { return v.plain_text; }).join('').toLowerCase();
    var LinkedTitle = function (_a) {
        var block = _a.block, href = _a.href, link = _a.link;
        var _b = getLinkPathAndLinkKey(href || ''), path = _b[0], slugKey = _b[1];
        var file = slugKey === 'id' ? block.database.id : encodeURIComponent(plainTitle.toLowerCase());
        if (!href) {
            return (React.createElement(TextBlock, { tag: "span", block: title }));
        }
        if (link && query) {
            var Link = link;
            return (React.createElement(Link, { className: "notionate-blocks-childdatabase-a", href: { pathname: "".concat(path).concat(file), query: query } },
                React.createElement(TextBlock, { tag: "span", block: title })));
        }
        else if (link) {
            var Link = link;
            return (React.createElement(Link, { className: "notionate-blocks-childdatabase-a", href: "".concat(path).concat(file) },
                React.createElement(TextBlock, { tag: "span", block: title })));
        }
        return (React.createElement("a", { href: "".concat(path).concat(file), className: "notionate-blocks-childdatabase-a" },
            React.createElement(TextBlock, { tag: "span", block: title })));
    };
    return (React.createElement("div", { className: "notionate-blocks-childdatabase" },
        React.createElement("span", null, icon),
        React.createElement("div", null, LinkedTitle({ block: block, href: href, link: link }))));
};

var blockType = {
    heading_1: 'h1',
    heading_2: 'h2',
    heading_3: 'h3',
    bulleted_list_item: 'li',
    numbered_list_item: 'li',
    divider: 'hr',
    paragraph: 'p',
    code: 'code',
    quote: 'blockquote',
};
var BlockHandler = function (_a) {
    var _b;
    var block = _a.block, href = _a.href, link = _a.link, query = _a.query;
    switch (block.type) {
        case 'heading_1':
        case 'heading_2':
        case 'heading_3':
        case 'paragraph':
        case 'quote':
        case 'divider':
        case 'numbered_list_item':
        case 'bulleted_list_item': {
            var tag = blockType[block.type];
            // @ts-ignore
            var text = (_b = block[block.type]) === null || _b === void 0 ? void 0 : _b.rich_text;
            return React.createElement(TextBlock, { tag: tag, block: text, key: block.id });
        }
        case 'image':
            return React.createElement(ImageBlock, { block: block, key: block.id });
        case 'code':
            return React.createElement(CodeBlock, { block: block, key: block.id });
        case 'video':
            return React.createElement(VideoBlock, { block: block, key: block.id });
        case 'embed':
            return React.createElement(EmbedBlock, { block: block, key: block.id });
        case 'bookmark':
            return React.createElement(BookmarkBlock, { block: block, key: block.id });
        case 'link_preview':
            return React.createElement(LinkpreviewBlock, { block: block, key: block.id });
        case 'to_do':
            return React.createElement(TodoBlock, { block: block, key: block.id });
        case 'table':
            return React.createElement(TableBlock, { block: block, key: block.id });
        case 'callout':
            return React.createElement(CalloutBlock, { block: block, key: block.id });
        case 'column_list':
            // ColumnlistBlock calls blocks
            return React.createElement(ColumnlistBlock, { block: block, href: href, link: link, query: query, key: block.id });
        case 'child_page':
            return React.createElement(ChildpageBlock, { block: block, href: href, link: link, query: query, key: block.id });
        case 'child_database':
            return React.createElement(ChilddatabaseBlock, { block: block, href: href, link: link, query: query, key: block.id });
        case 'toggle':
            return React.createElement(ToggleBlock, { block: block, key: block.id });
        default:
            console.log("still a not supported component: ".concat(block.type), block);
            break;
    }
};

var ListBlock = function (_a) {
    var tag = _a.tag, blocks = _a.blocks, href = _a.href, link = _a.link, query = _a.query;
    var CustomTag = tag;
    return (React.createElement(CustomTag, { className: "notionate-blocks-list-".concat(tag), key: tag + blocks[0].id }, blocks.map(function (block) { return (BlockHandler({ block: block, href: href, link: link, query: query })); })));
};

var Blocks = function (_a) {
    var blocks = _a.blocks, href = _a.href, link = _a.link, query = _a.query;
    var results = blocks.results;
    var listType = {
        bulleted_list_item: 'ul',
        numbered_list_item: 'ol',
    };
    var listTag = Object.keys(listType);
    var isListTag = false;
    var children = [];
    var list = [];
    results.map(function (v, i) {
        var _a, _b;
        var block = v;
        if (listTag.includes(block.type)) {
            // intermediate
            if (isListTag && listTag.includes(((_a = results[i + 1]) === null || _a === void 0 ? void 0 : _a.type) || '')) {
                list.push(block);
                // last or (first and last)
            }
            else if (isListTag || !listTag.includes(((_b = results[i + 1]) === null || _b === void 0 ? void 0 : _b.type) || '')) {
                isListTag = false;
                list.push(block);
                if (Object.keys(listType).includes(block.type)) {
                    var tag = listType[block.type];
                    children.push(ListBlock({ tag: tag, blocks: list, href: href, link: link, query: query }));
                    list = [];
                }
                // first
            }
            else {
                isListTag = true;
                list.push(block);
            }
        }
        else {
            var elem = BlockHandler({ block: block, href: href, link: link, query: query });
            if (elem !== undefined) {
                children.push(elem);
            }
        }
        return '';
    });
    return (React.createElement("div", { className: "notionate-blocks" }, children));
};

function UsePagination(pages, perPage) {
    var _a = React.useState(1), currentPage = _a[0], setCurrentPage = _a[1];
    var maxPage = Math.ceil(pages.length / perPage);
    var currentData = function () {
        var begin = (currentPage - 1) * perPage;
        var end = begin + perPage;
        return pages.slice(undefined, end);
    };
    var next = function () {
        setCurrentPage(function (currentPage) { return Math.min(currentPage + 1, maxPage); });
    };
    return { next: next, currentData: currentData, currentPage: currentPage, maxPage: maxPage };
}

exports.BlockHandler = BlockHandler;
exports.Blocks = Blocks;
exports.Code = Code;
exports.FigmaIcon = FigmaIcon;
exports.Gallery = Gallery;
exports.GalleryCheckboxField = GalleryCheckboxField;
exports.GalleryDateField = GalleryDateField;
exports.GalleryHandler = GalleryHandler;
exports.GalleryMultiSelectField = GalleryMultiSelectField;
exports.GalleryNumberField = GalleryNumberField;
exports.GalleryRichTextField = GalleryRichTextField;
exports.GalleryTitleField = GalleryTitleField;
exports.GalleryUrlField = GalleryUrlField;
exports.GithubIcon = GithubIcon;
exports.ImageBlock = ImageBlock;
exports.LinkObject = LinkObject;
exports.List = List;
exports.ListBlock = ListBlock;
exports.ListCheckboxField = ListCheckboxField;
exports.ListDateField = ListDateField;
exports.ListHandler = ListHandler;
exports.ListMultiSelectField = ListMultiSelectField;
exports.ListNumberField = ListNumberField;
exports.ListRichTextField = ListRichTextField;
exports.ListTitleField = ListTitleField;
exports.ListUrlField = ListUrlField;
exports.MentionObject = MentionObject;
exports.SlackIcon = SlackIcon;
exports.StyleObject = StyleObject;
exports.Table = Table;
exports.TableCheckboxField = TableCheckboxField;
exports.TableDateField = TableDateField;
exports.TableHandler = TableHandler;
exports.TableMultiSelectField = TableMultiSelectField;
exports.TableNumberField = TableNumberField;
exports.TableRichTextField = TableRichTextField;
exports.TableTitleField = TableTitleField;
exports.TableUrlField = TableUrlField;
exports.TextBlock = TextBlock;
exports.TextObject = TextObject;
exports.UsePagination = UsePagination;
exports.blockType = blockType;
exports.getLinkPathAndLinkKey = getLinkPathAndLinkKey;
//# sourceMappingURL=index.js.map
