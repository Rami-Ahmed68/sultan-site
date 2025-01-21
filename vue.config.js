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
          { path: "/works", priority: 0.8 },
          { path: "/lessons", priority: 0.7 },
          { path: "/contact", priority: 0.6 },
          { path: "/about", priority: 0.5 },
          { path: "/work", priority: 0.8 },
          { path: "/lesson", priority: 0.8 },
          { path: "/cv", priority: 0.9 },
          { path: "/skills", priority: 0.9 },
          { path: "/skill", priority: 0.8 },
          { path: "/install", priority: 1 },
          { path: "/messages", priority: 0.1 },
          { path: "/dashboard", priority: 0.1 },
        ],
      }),
    ],
  },
});
