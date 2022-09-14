import express from "express";

const app = express();

app.get("/ads", (request, response) => {
  return response.json([
    { id: "1", name: "Ads 01" },
    { id: "2", name: "Ads 02" },
    { id: "3", name: "Ads 03" },
    { id: "4", name: "Ads 04" },
  ]);
});

app.listen(3000);
