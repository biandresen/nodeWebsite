import fs from "fs/promises";
import { URL } from "url";
import { mimeTypes as m } from "./config.js";

function logRequestInfo(req) {
  const timestamp = new Date().toISOString();
  console.log(
    `[${timestamp}] ${req.method} ${req.url} from ${req.headers.host}`
  );
}

const serverErrorResponse = "<h1>500 - Internal Server Error</h1>";

function writeHead(res, responseCode, mimeType) {
  res.writeHead(responseCode, { "Content-Type": mimeType });
}

// Read file function
async function readFile(path, encoding) {
  try {
    const filePath = new URL(path, import.meta.url);
    const contents = await fs.readFile(filePath.pathname, encoding);
    return contents;
  } catch (err) {
    console.error(`Error reading file ${filePath}:`, err.message);
    return serverErrorResponse;
  }
}

// Function to serve files
async function serveRequest(res, filePath, statusCode, mimeType) {
  try {
    const data = await readFile(
      filePath,
      mimeType === "text/html" ? "utf8" : null
    );
    writeHead(res, statusCode, mimeType);
    res.end(data);
  } catch (err) {
    console.error(`Error serving file ${filePath}:`, err.message);

    if (err.code === "ENOENT") {
      res.writeHead(404, { "Content-Type": m.mimeTypePlain });
      res.end("404 - Not Found");
    } else {
      res.writeHead(500, { "Content-Type": m.mimeTypePlain });
      res.end("500 - Internal Server Error");
    }
  }
}

export { logRequestInfo, readFile, serveRequest };
