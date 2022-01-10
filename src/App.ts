import express from "express";

class App {
  server: express.Application;

  constructor(isStart?: boolean) {
    this.server = express();
    this.SettingMW();
    this.Router();
    if (isStart) this.Start();
  }

  SettingMW() {}

  Router() {
    this.server.get("/", (req, res) => {
      return res.send("<h1>Hello :)</h1>");
    });
    this.server.get("/message", (req, res) => {
      return res.status(200).json({
        message: "Hello :)",
      });
    });
  }

  Start() {
    const port = process.env.PORT || "80";

    this.server.listen(port, () => {
      console.log(`[Express] Listen to ${port}`);
    });
  }
}

export default App;
