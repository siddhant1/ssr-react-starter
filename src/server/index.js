import express from "express";
import React from "react";
import App from "../shared/App";
import { renderToString } from "react-dom/server";

const app = express();
app.use(express.static("public"));
app.get("*", (req, res) => {
  const html = renderToString(<App data={"Nik"} />);
  res.send(`
    <!DOCTYPE html>
  <html>
    <head>
      <title></title>
      <script src="/bundle.js" defer></script>
    </head>
    <body>
      <div id="app">${html}</div>
    </body>
  </html>`);
});
app.listen("3000", () => {
  console.log("listening");
});
