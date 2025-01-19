const { defineConfig } = require("@vue/cli-service");
const SitemapPlugin = require("sitemap-webpack-plugin").default;

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new SitemapPlugin({
        base: "https://example.com",
        // paths: [
        //   { path: '/', priority: 0.9 },
        //   { path: '/about', priority: 0.8 },
        //   // ... إضافة مسارات أخرى
        // ]
      }),
    ],
  },
});
