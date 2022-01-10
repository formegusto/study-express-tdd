import express from "express";

class App {
  server: express.Application;

  constructor() {
    this.server = express();
    this.SettingMW();
    this.Router();
    this.Start();
  }

  SettingMW() {}

  Router() {}

  Start() {
    const port = process.env.PORT || "80";
    this.server.listen(port, () => {
      console.log(`[Express] Listen to ${port}`);
    });
  }
}

export default App;
