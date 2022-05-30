import { addTextToClass } from "./text";
import { submitText } from "./text";

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
    submitText("today");
  });

  const dateBtn2 = document.querySelector(".dateBtn2");
  dateBtn2.addEventListener("click", (e) => {
    submitText("week");
  });

  const dateBtn3 = document.querySelector(".dateBtn3");
  dateBtn3.addEventListener("click", (e) => {
    submitText("all");
  });
}

export { eventListeners };
