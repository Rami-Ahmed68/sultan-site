const { defineConfig } = require("@vue/cli-service");
const SitemapPlugin = require("sitemap-webpack-plugin").default;

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new SitemapPlugin({
        base: "https://sultan-site.onrender.com/",
        paths: [
          { path: "/", priority: 1 },
          { path: "/about", priority: 0.8 },
          { path: "/works", priority: 0.8 },
          // ... إضافة مسارات أخرى
        ],
      }),
    ],
  },
});
