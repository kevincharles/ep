/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    "src/one": { url: '/one' },
    "src/two": { url: '/two' },
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv'],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    openUrl: '/one',
  },
  buildOptions: {
    /* ... */
  },
};
