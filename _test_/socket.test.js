const Socket = require("../src/socket").default;

describe("basic socket functions", () => {
  it("should create new socket instance", async () => {
    // Socket instance
    const socket = new Socket({ url: "wss://echo.websocket.org" });
    socket.on("open", (e) => {
      console.log("==>", JSON.stringify({ e }));
    });
  });
});
