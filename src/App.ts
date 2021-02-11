import { LobbyTableView } from "./LobbyTable";

const { default: styles } = require("./App.css");

export class AppView {
  mount() {
    const container = document.createElement("div");
    container.classList.add(styles.container);

    const subcontainer = document.createElement("div");
    subcontainer.classList.add(styles.subcontainer);

    const header = document.createElement("div");
    header.classList.add(styles.header);

    const searchInput = document.createElement("input");
    searchInput.classList.add(styles.searchInput);
    searchInput.type = "text";
    searchInput.placeholder = "Поиск по названию";

    const createButton = document.createElement("button");
    createButton.classList.add(styles.createButton);
    createButton.type = "button";

    const createButtonText = document.createTextNode("Создать комнату");
    createButton.appendChild(createButtonText);

    header.appendChild(searchInput);
    header.appendChild(createButton);
    subcontainer.appendChild(header);
    subcontainer.appendChild(new LobbyTableView().mount());
    container.appendChild(subcontainer);

    return container;
  }
}
