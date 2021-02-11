import { GameStatus } from "./GameStatus";
import { GameType } from "./GameType";

const { default: styles } = require("./Lobby.css");

export class Lobby {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly type: GameType,
    readonly status: GameStatus,
    readonly playersCount: number
  ) {}
}

export interface LobbyProps {
  lobby: Lobby;
}

export class LobbyView {
  constructor(public props: LobbyProps) {}

  mount() {
    const container = document.createElement("div");
    container.classList.add(styles.container);

    const name = document.createElement("div");
    const nameText = document.createTextNode(this.props.lobby.name);
    name.classList.add(styles.nameColumn);
    name.appendChild(nameText);

    const gameType = document.createElement("div");
    const gameTypeText = document.createTextNode(
      this.props.lobby.type.asString()
    );
    gameType.classList.add(styles.gameTypeColumn);
    gameType.appendChild(gameTypeText);

    const gameStatus = document.createElement("div");
    const gameStatusText = document.createTextNode(
      this.props.lobby.status.asString()
    );
    gameStatus.classList.add(styles.gameStatusColumn);
    gameStatus.appendChild(gameStatusText);

    const playersCount = document.createElement("div");
    const playersCountText = document.createTextNode(
      `${this.props.lobby.playersCount} из 11`
    );
    playersCount.appendChild(playersCountText);

    container.appendChild(name);
    container.appendChild(gameType);
    container.appendChild(gameStatus);
    container.appendChild(playersCount);

    return container;
  }
}
