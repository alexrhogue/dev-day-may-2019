import React from "react";
import { renderToString } from "react-dom/server";
import App from "./app";

export function app(event, context, callback) {
  const app = renderToString(<App name={"Alex"} />);
  callback(null, {
    statusCode: 200,
    body: app,
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}
