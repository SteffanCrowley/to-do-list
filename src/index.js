import "./style.css";
import { build } from "./modules/buildPage";
import { buildModal } from "./modules/formModal";
import { eventListeners, eventListeners2 } from "./modules/eventListeners";
import { submitText } from "./modules/text";

build();
buildModal();
eventListeners(0);
eventListeners2();
submitText();
