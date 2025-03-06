import http from "http";
import { logRequestInfo, serveRequest } from "./utils.js";
import { codes as c, paths as p, mimeTypes as m } from "./config.js";
import { extname } from "path";

// Server setup
const server = http.createServer((req, res) => {
  logRequestInfo(req); //Logging info about the request to console
  const clientMethod = req.method;
  const clientUrl = req.url;

  if (clientUrl.startsWith("/public/")) {
    const filePath = `.${clientUrl}`;
    const ext = extname(filePath);
    const mimeType = m[ext] || "application/octet-stream";
    return serveRequest(res, filePath, c.statusCodeOk, mimeType);
  }

  if (clientMethod === c.GET) {
    switch (clientUrl) {
      case p.requestHomePath:
        serveRequest(res, p.pathHomepage, c.statusCodeOk, m.mimeTypeHtml);
        break;
      case p.requestAboutPath:
        serveRequest(res, p.pathAbout, c.statusCodeOk, m.mimeTypeHtml);
        break;
      case p.requestContactMePath:
        serveRequest(res, p.pathContactMe, c.statusCodeOk, m.mimeTypeHtml);
        break;
      default:
        serveRequest(res, p.path404Page, c.statusCodeNotFound, m.mimeTypeHtml);
        break;
    }
  } else {
    res.writeHead(405, { "Content-Type": m.mimeTypePlain });
    res.end("405 - Method Not Allowed");
  }
});

// Start server listening
server.listen(c.PORT, () => {
  console.log(`Listening to server on port ${c.PORT}`);
});
