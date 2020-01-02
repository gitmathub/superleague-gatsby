const title = "Zambia Super League"
const description = "Stands and numbers of the Zambia Super League"

const assetsPath = 'src/assets'
const iconPath = `${assetsPath}favicon`
const favicon = require(`src/assets/favicon/favicon.ico`)

export const helmet = {
  title,
  titleTemplate: "%s - Zambia Super League",
  htmlAttributes: { lang: "de" },
  meta: [
    { name: "description", content: description },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, user-scalable=no",
    },
    { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    { name: "msapplication-navbutton-color", content: "#000" },
    { name: "msapplication-TileColor", content: "#000" },
    { name: "msapplication-TileImage", content: `${iconPath}/ms-icon-144x144.png` },
    { name: "msapplication-config", content: `${assetsPath}/browserconfig.xml` },
    { name: "theme-color", content: "#000" },

    { property: "og:title", content: title },
    // { property: 'og:image', content: share },
    { property: "og:image:width", content: "880px" },
    { property: "og:image:height", content: "440px" },
    { property: "og:image:alt", content: description },

    { name: "twitter:title", content: title },
    { name: "twitter:card", content: "summary_large_image" },
    // { name: 'twitter:image', content: share },
    { name: "twitter:site", content: "@mat_twitta" },
    { name: "twitter:creator", content: "@mat_twitta" },
    { name: "twitter:description", content: description },
  ],
  link: [{ rel: "manifest", href: `${assetsPath}/manifest.json` },
  { rel: "icon", type: "image/x-icon", href: favicon },
  { rel: "icon", type: "image/png", sizes: "32x32", href: `${iconPath}/favicon-32x32.png` },
  { rel: "icon", type: "image/png", sizes: "96x96", href: `${iconPath}/favicon-96x96.png` },
  { rel: "icon", type: "image/png", sizes: "16x16", href: `${iconPath}/favicon-16x16.png` },
  { rel: "icon", type: "image/png", sizes: "192x192", href: `${iconPath}/android-icon-192x192.png` },
  { rel: "apple-touch-icon", type: "image/png", sizes: "57x57", href: `${iconPath}/apple-icon-57x57.png` },
  { rel: "apple-touch-icon", type: "image/png", sizes: "60x60", href: `${iconPath}/apple-icon-60x60.png` },
  { rel: "apple-touch-icon", type: "image/png", sizes: "72x72", href: `${iconPath}/apple-icon-72x72.png` },
  { rel: "apple-touch-icon", type: "image/png", sizes: "76x76", href: `${iconPath}/apple-icon-76x76.png` },
  { rel: "apple-touch-icon", type: "image/png", sizes: "114x114", href: `${iconPath}/apple-icon-114x114.png` },
  { rel: "apple-touch-icon", type: "image/png", sizes: "120x120", href: `${iconPath}/apple-icon-120x120.png` },
  { rel: "apple-touch-icon", type: "image/png", sizes: "144x144", href: `${iconPath}/apple-icon-144x144.png` },
  { rel: "apple-touch-icon", type: "image/png", sizes: "152x152", href: `${iconPath}/apple-icon-152x152.png` },
  { rel: "apple-touch-icon", type: "image/png", sizes: "180x180", href: `${iconPath}/apple-icon-180x180.png` },
  ],
}
