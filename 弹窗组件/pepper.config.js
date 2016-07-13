module.exports = {
    // debug host
    "host": "0.0.0.0",

    // debug port
    "port": "9527",

    // pepper src entry, also inner webpack entry, default to `src/pages/index.js`
    "base": "src",

    // target build dir
    "build": "dist/tld",

    "api": {
        "start": "", // local api base entry
        "test": "//mqq.wepiao.com",
        "pre": "//mqq.wepiao.com", // online api base entry
        "release": "//mqq.wepiao.com"
    },

    // CDN domain, or just leave it blank if not using
    "static": {
        "start"         :   "/",                         // here use relative path
        "test"          :   "//mqqstatic.wepiao.com/tld/", // here use CDN domain
        "pre"           :   "//mqqstatic.wepiao.com/tld/", // here use CDN domain
        "release"       :   "//mqqstatic-gray.wepiao.com/tld/"  // here use CDN domain
    },

    // gloabl variable definations, export via UPPER_CASE
    "globals": {
        "GLOBAL_DEBUG":{
            "start": true,
            "test": null,
            "pre": null,
            "release": null
        },
        "static_api": {
            "start": "//mqq.wepiao.com",
            "test": "//mqqstatic.wepiao.com/tld",
            "pre": "//mqqstatic.wepiao.com/tld",
            "release": "//mqqstatic-gray.wepiao.com/tld"
        }
    },

    // third patry libs to bundle
    "vendor": ["react", "react-dom"],

    // dir alias, could use globally, despite of CWD
    "alias": {
        "scss"          :   "scss",
        "wepiao"        :   "components",
        "utils"         :   "utils",
        "assets"        :   "assets",
        "app"           :   "app"
    },

    // source map options
    "devtool": "source-map",

    // switch for CSS Modules
    "css_modules": false,

    // switch for eslint
    "eslint": false,

    // template settings
    "template": {
        "title"         :   "",                         // inner template document title
        "keywords"      :   "",                         // inner template meta keywords
        "description"   :   "",                         // inner template meta description
        "viewport"      :   "",                         // inner template meta viewport
        "path"          :   "index.html",             // custom template path, omit it if your desire to use inner template
        "favicon"       :   "assets/images/favicon.ico"
    },

    // custom default page dir
    "pages": "containers",

    // custom default component dir
    "components": "components",

    // custom default scss dir
    "scss": "scss",

    // custom default assets dir
    "assets": "assets",

    // switch template ES mode, ['es5' or 'es6']
    "esmode": "es6",

    "base64_image_limit": 5120

}
