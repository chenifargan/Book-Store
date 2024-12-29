const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5001;
//middleware:
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
//routes:
const bookRoutes = require("./src/Routes/Book");
app.use("/api/books", bookRoutes);
const orderRoutes = require("./src/Routes/Order");
app.use("/api/orders", orderRoutes);
const userRoutes = require("./src/Routes/User");
app.use("/api/auth", userRoutes);
const adminRoutes = require("./src/Stats/AdminStats");
app.use("/api/admin", adminRoutes);
async function main() {
  await mongoose.connect(process.env.URL);
  app.use("/", (req, res) => {
    res.send("Hello World");
  });
}
main()
  .then(() => console.log("mongodb connected successfully"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(` http://localhost:${PORT}`);
});
