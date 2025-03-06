import dotenv from "dotenv";
dotenv.config();

const codes = {
  PORT: process.env.PORT || 3000,
  GET: "GET",
  statusCodeOk: 200,
  statusCodeNotFound: 404,
};

const paths = {
  VIEWS_DIR: "./views/",
  pathHomepage: "./views/index.html",
  pathAbout: "./views/about.html",
  pathContactMe: "./views/contact-me.html",
  path404Page: "./views/404.html",
  requestHomePath: "/",
  requestAboutPath: "/about",
  requestContactMePath: "/contact-me",
};

// MIME types for static files
const mimeTypes = {
  mimeTypeHtml: "text/html",
  mimeTypePlain: "text/plain",
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".json": "application/json",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
};

export { codes, paths, mimeTypes };
