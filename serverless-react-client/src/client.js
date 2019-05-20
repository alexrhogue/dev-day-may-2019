import fs from "fs";

export function app(event, context, callback) {
  const file = fs.readFileSync("index.html");

  callback(null, {
    statusCode: 200,
    body: file.toString(),
    headers: {}
  });
}
