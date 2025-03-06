import fs from "fs/promises";
import { URL } from "url";
function logRequestInfo(req) {
  console.log("-------START LOG-------");
  console.log(req.method);
  console.log(req.url);
  console.log(req.headers.host);
  console.log("-------END LOG-------");
}

// Read file function
async function readFile(path, encoding) {
  try {
    const filePath = new URL(path, import.meta.url);
    const contents = await fs.readFile(filePath.pathname, encoding);
    return contents;
  } catch (err) {
    console.error(err);
  }
}

export { logRequestInfo, readFile };
