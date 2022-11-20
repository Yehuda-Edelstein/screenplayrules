require("@babel/register");

const router = require("./router.jsx").default;
const Sitemap = require("./").default;

new Sitemap(router)
  .build("https://screenplayrules.com")
  .save("../public/sitemap.xml");
