import VueRouterSitemap from "vue-router-sitemap";
import { router } from "./router";

const staticSitemap = "public/sitemap.xml";

function generateSitemap() {
  new VueRouterSitemap(router)
    .build("https://sultan-site.onrender.com/")
    .save(staticSitemap);
}

export default generateSitemap;
