import express from "express";
import cors from "cors";

import { PORT } from "./constants";
import user from "src/routes/user";
import { errorHandler } from "src/middleware/error-mw";

const app = express();

const port = PORT || 8080;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:8080/"],
    credentials: true,
  })
);
app.use("/", user);

app.use(errorHandler);

const start = async (): Promise<void> => {
  try {
    app.listen(port, () => console.log(`Server started on PORT = ${port}`));
  } catch (e) {
    console.log(e + "hello its error");
  }
};

start();
