import http from "http";
import { logRequestInfo, readFile } from "./utils.js";

const PORT = 3000;

// Server setup
const server = http.createServer(async (req, res) => {
  logRequestInfo(req); //Logging info about the request to console
  const clientMethod = req.method;
  const clientUrl = req.url;

  if (clientMethod === "GET") {
    let data;
    switch (clientUrl) {
      case "/":
        data = await readFile("./views/index.html", "utf8");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
        break;
      case "/about":
        data = await readFile("./views/about.html", "utf8");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
        break;
      case "/contact-me":
        data = await readFile("./views/contact-me.html", "utf8");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
        break;
      default:
        data = await readFile("./views/404.html", "utf8");
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(data);
        break;
    }
  }
});

// Start server listening
server.listen(PORT, () => {
  console.log(`Listening to server on port ${PORT}`);
});
