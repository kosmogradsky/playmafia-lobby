const { default: styles } = require("./LobbyTableHeader.css");

export class LobbyTableHeaderView {
  mount() {
    const tableHeader = document.createElement("div");
    tableHeader.classList.add(styles.tableHeader);

    const nameHeader = document.createElement("div");
    const nameHeaderText = document.createTextNode("Название комнаты");
    nameHeader.classList.add(styles.nameColumn);
    nameHeader.appendChild(nameHeaderText);

    const gameTypeHeader = document.createElement("div");
    const gameTypeHeaderText = document.createTextNode("Тип игры");
    gameTypeHeader.classList.add(styles.gameTypeColumn);
    gameTypeHeader.appendChild(gameTypeHeaderText);

    const gameStatusHeader = document.createElement("div");
    const gameStatusHeaderText = document.createTextNode("Статус");
    gameStatusHeader.classList.add(styles.gameStatusColumn);
    gameStatusHeader.appendChild(gameStatusHeaderText);

    const playerCountHeader = document.createElement("div");
    const playerCountHeaderText = document.createTextNode("Игроков");
    playerCountHeader.appendChild(playerCountHeaderText);

    tableHeader.appendChild(nameHeader);
    tableHeader.appendChild(gameTypeHeader);
    tableHeader.appendChild(gameStatusHeader);
    tableHeader.appendChild(playerCountHeader);

    return tableHeader;
  }
}
