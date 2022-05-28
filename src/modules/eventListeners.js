import { addTextToClass } from "./text";
import { sortWeek } from "./sortDate";
import { scan } from "./scan";

function eventListeners() {
  const inputText = document.querySelector("#todotask");
  const favDialog = document.getElementById("dialogMod");
  const dueDate = document.querySelector("#due");
  const submitBtn = document.querySelector("#submit");

  let sendText = "";
  let sendDate = "";

  inputText.addEventListener("change", function onSelect(e) {
    sendText = inputText.value;
  });

  dueDate.addEventListener("change", function onSelect(e) {
    sendDate = dueDate.value;
  });

  submitBtn.addEventListener("click", (e) => {
    addTextToClass("steffan", sendText, sendDate);
  });

  const add = document.querySelector(".add");
  add.addEventListener("click", (e) => {
    favDialog.showModal();
  });

  const dateBtn = document.querySelector(".dateBtn");
  dateBtn.addEventListener("click", (e) => {
    scan();
  });
}

export { eventListeners };
