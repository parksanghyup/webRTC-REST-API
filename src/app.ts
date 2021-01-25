import express from "express";

const app: express.Application = express();

app.get(
  "/",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send("졸작 webRTC rest api 서버");
  }
);

export default app;