import "./style.css";
import { build } from "./modules/buildPage";
import { buildModal } from "./modules/formModal";
import { eventListeners } from "./modules/eventListeners";

build();
buildModal();
eventListeners();
