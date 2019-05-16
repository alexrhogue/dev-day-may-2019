import express from "express";
import sls from "serverless-http";

const app = express();

app.get("/", async (req, res, next) => {
  res.status(200).send("Hello Alex!");
});

export const server = sls(app);
