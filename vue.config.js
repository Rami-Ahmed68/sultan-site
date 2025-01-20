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
          { path: "/contact", priority: 0.8 },
          { path: "/works", priority: 0.8 },
          { path: "/work", priority: 0.8 },
          { path: "/lessons", priority: 0.8 },
          { path: "/lesson", priority: 0.8 },
          { path: "/cv", priority: 0.8 },
          { path: "/skills", priority: 0.8 },
          { path: "/skill", priority: 0.8 },
          { path: "/install", priority: 0.8 },
          { path: "/messages", priority: 0.8 },
          { path: "/dashboard", priority: 0.8 },
        ],
      }),
    ],
  },
});
