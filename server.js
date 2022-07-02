const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

(async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/mydb");
  console.log(`Connected to Database`);
})();

const server = http.createServer(app);

const startServer = () => {
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

startServer();
