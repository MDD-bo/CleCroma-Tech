
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/CleCroma-Tech/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/CleCroma-Tech"
  },
  {
    "renderMode": 2,
    "route": "/CleCroma-Tech/servicios"
  },
  {
    "renderMode": 2,
    "route": "/CleCroma-Tech/contacto"
  },
  {
    "renderMode": 2,
    "route": "/CleCroma-Tech/recomendaciones"
  },
  {
    "renderMode": 2,
    "redirectTo": "/CleCroma-Tech",
    "route": "/CleCroma-Tech/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 832, hash: '625b8efcbf406b084e57e895a94acbea5f1bdc6c270372548b9ea4b57fe313a9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 960, hash: '548e991f61cc3f12433e9a0d1eaa55ec80082cc46bce4b3c69e2e1e0d96f4e52', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 17272, hash: 'ad3c1993a51cd3706a02b68895383e7c65cd90df8e5b85d671383e0ce520fc81', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'recomendaciones/index.html': {size: 23944, hash: '223ae72a85c7b5a6c5e696df008aff8b3337247d80da24e1d2cf07f676cfd205', text: () => import('./assets-chunks/recomendaciones_index_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 17293, hash: 'eb6d7ac1e7fd06435062e0b1447ee7fe84734c92d8c0957d1e31fdca11598371', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 19441, hash: 'a6ebb15084e80dfcb5b767d7ca4e41b4f56b8c0e66157ba06aed8e2da0360639', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'styles-LLJES7HP.css': {size: 527, hash: 'BB+2Xtdd5vM', text: () => import('./assets-chunks/styles-LLJES7HP_css.mjs').then(m => m.default)}
  },
};
