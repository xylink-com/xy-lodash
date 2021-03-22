import SocketEventEmitter from "./socketEventEmitter";
import { SocketConfigType } from "./index.type";
import { idGenerator } from "./index.util";

class Socket extends SocketEventEmitter {
  private id: string;
  private socket: WebSocket;
  private config: SocketConfigType;

  constructor(config: SocketConfigType | string) {
    super();
    this.config = typeof config === "object" ? config : { url: config };
    // init class basic.
    this.init(this.config);
  }
  // init socket instance through config and return the instance.
  public init(config: SocketConfigType) {
    this.createSocket(config);
    this.startListening();
  }

  public createSocket(config: SocketConfigType) {
    // create socket instance.
    const { url } = config;
    this.socket = new WebSocket(url);
  }

  public startListening() {
    this.socket.onopen = (e) => {
      this.emit("open", e);
    };
  }

  public getSocket() {
    return this.socket;
  }
}

export default Socket;
