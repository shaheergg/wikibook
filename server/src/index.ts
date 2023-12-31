import app from "./server";

app.get("/", (req, res) => {
  res.json({ message: "This wikibook api" });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
