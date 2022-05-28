import "./style.css";
import { build } from "./modules/buildPage";
import { buildModal } from "./modules/formModal";
import { addTextToClass } from "./modules/text";

build();
buildModal();

const inputText = document.querySelector("#todotask");
const favDialog = document.getElementById("dialogMod");
const dueDate = document.querySelector("#due");
let sendText = "";
let sendDate = "";

inputText.addEventListener("change", function onSelect(e) {
  sendText = inputText.value;
});

dueDate.addEventListener("change", function onSelect(e) {
  sendDate = dueDate.value;
});

document.addEventListener("click", (e) => {
  const target = e.target.innerText;
  if (target === "SUBMIT") addTextToClass("first", sendText, sendDate);
});

const add = document.querySelector(".add");
add.addEventListener("click", (e) => {
  favDialog.showModal();
});
