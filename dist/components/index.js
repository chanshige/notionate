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
        if (items.results.length === 0) {
            return React.createElement(React.Fragment, null);
        }
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
        if (items.results.length === 0) {
            return React.createElement(React.Fragment, null);
        }
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
    return (React.createElement("div", { className: "notionate-table-richtext" }, payload && React.createElement(TextBlock, { tag: "span", block: [payload.rich_text] })));
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
        if (items.results.length === 0) {
            return React.createElement(React.Fragment, null);
        }
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

var Code = function (_a) {
    var children = _a.children, _b = _a.language, language = _b === void 0 ? 'text' : _b, modules = _a.modules;
    var codeRef = React.createRef();
    var highlight = function (language) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (codeRef.current) {
                if (language === 'mermaid' && (modules === null || modules === void 0 ? void 0 : modules.mermaid)) {
                    modules.mermaid.init(undefined, codeRef.current);
                }
                else if (modules === null || modules === void 0 ? void 0 : modules.prism) {
                    modules.prism.highlightElement(codeRef.current);
                }
                else {
                    console.log('block component require prismjs or mermaidjs modules argument');
                }
            }
            return [2 /*return*/];
        });
    }); };
    var cl = "language-".concat(language.toLowerCase());
    var _c = React.useState(false), show = _c[0], setShow = _c[1];
    var showLang = function () { return setShow(true); };
    var hideLang = function () { return setShow(false); };
    React.useEffect(function () {
        highlight(language);
    }, [language, '']);
    return (React.createElement("div", { className: "notionate-blocks-code", onMouseOver: showLang, onMouseOut: hideLang },
        show && React.createElement("div", { className: "notionate-blocks-code-lang" }, language),
        React.createElement("pre", { className: cl },
            React.createElement("code", { ref: codeRef }, children))));
};
var CodeBlock = function (_a) {
    var _b, _c;
    var block = _a.block, modules = _a.modules;
    var els = (_b = block.code) === null || _b === void 0 ? void 0 : _b.rich_text.map(function (textObject, i) {
        var _a;
        var text = textObject;
        return (React.createElement(Code, { language: ((_a = block.code) === null || _a === void 0 ? void 0 : _a.language) || '', key: "".concat(i), modules: modules }, text.text.content));
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
    var icon = 'icon' in block.page && block.page.icon.type === 'emoji' ? block.page.icon.emoji : '';
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
    var block = _a.block, href = _a.href, link = _a.link, query = _a.query, modules = _a.modules;
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
            return React.createElement(CodeBlock, { block: block, key: block.id, modules: modules });
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
    var blocks = _a.blocks, href = _a.href, link = _a.link, query = _a.query, modules = _a.modules;
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
            var elem = BlockHandler({ block: block, href: href, link: link, query: query, modules: modules });
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
