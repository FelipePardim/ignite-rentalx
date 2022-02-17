import express from "express";

const app = express();

app.use(express.json());

app.listen(3333, () => {
  console.log("Server Running!");

  app.post("/courses", (request, response) => {
    const { name } = request.body;
    return response.json({ name });
  });
});
