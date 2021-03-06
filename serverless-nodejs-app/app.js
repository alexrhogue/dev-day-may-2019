import express from "express";
import sls from "serverless-http";

const app = express();

app.get("/", async (req, res) => {
  res.status(200).send("Hello Serverless!");
});

app.post("/update", async (req, res) => {
  res.status(200).send("Hello Serverless!");
});

export const server = sls(app);
