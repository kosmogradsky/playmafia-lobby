import { AppView } from "./App";

require("./styles.css");

const appView = new AppView();

document.body.appendChild(appView.mount());
