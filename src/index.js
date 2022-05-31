import "./style.css";
import { build } from "./modules/buildPage";
import { buildModal } from "./modules/formModal";
import { eventListeners, eventListeners2 } from "./modules/eventListeners";

build();
buildModal();
eventListeners(0);
eventListeners2();
