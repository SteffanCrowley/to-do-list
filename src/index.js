import "./style.css";
import { build } from "./modules/buildPage";
import { buildModal } from "./modules/formModal";
import { addTextToClass } from "./modules/text";

build();
buildModal();

const inputText = document.querySelector("input");
const favDialog = document.getElementById("dialogMod");
let sendText = "";

inputText.addEventListener("change", function onSelect(e) {
  sendText = inputText.value;
});

document.addEventListener("click", (e) => {
  const target = e.target.innerText;
  if (target === "SUBMIT") addTextToClass("first", sendText, "third");
});

const add = document.querySelector(".add");
add.addEventListener("click", (e) => {
  favDialog.showModal();
});
