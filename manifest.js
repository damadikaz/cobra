import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
    name: 'Proto Homify',
    description: 'Chrome extension with react and vite',
    version: '0.0.1',
    manifest_version: 3,
    icons: {
        16: 'img/logo-16.png',
        32: 'img/logo-34.png',
        48: 'img/logo-48.png',
        128: 'img/logo-128.png',
    },
    // background: {
    //     service_worker: 'src/Background/Background.js',
    //     type: 'module',
    // },
    // action: {
    //     default_popup: 'popup.html',
    //     default_icon: 'img/logo-48.png',
    // },
    chrome_url_overrides: {
        newtab: 'index.html'
    },
    web_accessible_resources: [{
      resources: ['_favicon/*','img/logo-16.png', 'img/logo-34.png', 'img/logo-48.png', 'img/logo-128.png'],
      matches: ['<all_urls>'],
      extension_ids: ['*']
    }],
    permissions: ['storage', 'topSites', 'history', 'favicon']
})