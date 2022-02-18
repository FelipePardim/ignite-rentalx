import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.use(categoriesRoutes);

app.listen(3333, () => {
  console.log("Server Running!");

  app.post("/courses", (request, response) => {
    const { name } = request.body;
    return response.json({ name });
  });
});
