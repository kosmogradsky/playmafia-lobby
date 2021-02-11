import { GameInProgress, GameStatus, WaitingForPlayers } from "./GameStatus";
import { CasualType, GameType, RankedType, TournamentType } from "./GameType";
import { Lobby, LobbyView } from "./Lobby";
import { LobbyTableHeaderView } from "./LobbyTableHeader";

const { default: styles } = require("./LobbyTable.css");

const tournaments = [
  new Lobby(
    5,
    "Invitational #4",
    new TournamentType(),
    new WaitingForPlayers(),
    3
  ),
  new Lobby(
    7,
    "Invitational #5",
    new TournamentType(),
    new GameInProgress(),
    7
  ),
];

const lobbies = [
  new Lobby(1, "Lobby #1", new CasualType(), new WaitingForPlayers(), 3),
  new Lobby(2, "Lobby #2", new RankedType(), new WaitingForPlayers(), 7),
  new Lobby(3, "Lobby #3", new CasualType(), new GameInProgress(), 5),
  new Lobby(4, "Lobby #4", new RankedType(), new GameInProgress(), 3),
];

export class LobbyTableView {
  mount() {
    const container = document.createElement("div");
    container.classList.add(styles.container);

    container.appendChild(new LobbyTableHeaderView().mount());

    for (const tournament of tournaments) {
      container.appendChild(new LobbyView({ lobby: tournament }).mount());
    }

    const hr = document.createElement("hr");
    hr.classList.add(styles.hr);
    container.appendChild(hr);

    for (const lobby of lobbies) {
      container.appendChild(new LobbyView({ lobby }).mount());
    }

    return container;
  }
}
