import "./style.css";
import { build } from "./modules/buildPage";
import { buildModal } from "./modules/formModal";

build();
buildModal();

const favDialog = document.getElementById("dialogMod");

document.addEventListener("click", (e) => {
  const target = e.target.innerText;

  if (target === "+ Add Task") favDialog.showModal();
  //   if (target === "MENU") loadMenu();
  //   if (target === "CONTACT") loadContact();
});
