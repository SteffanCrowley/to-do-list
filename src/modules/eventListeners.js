import { addTextToClass } from "./text";
import { submitText } from "./text";

function eventListeners() {
  const inputText = document.querySelector("#todotask");
  const dueDate = document.querySelector("#due");
  const submitBtn = document.querySelector("#submit");
  const container = document.querySelector("ul");

  let sendText = "";
  let sendDate = "";
  let sendId = "0";

  //console.log(sendId);

  container.addEventListener("click", (e) => {
    sendId = e.target.id;
  });

  inputText.addEventListener("change", function onSelect(e) {
    sendText = inputText.value;
  });

  dueDate.addEventListener("change", function onSelect(e) {
    sendDate = dueDate.value;
  });

  submitBtn.addEventListener("click", (e) => {
    addTextToClass(sendId, sendText, sendDate);
  });
}

function eventListeners2() {
  const favDialog = document.getElementById("dialogMod");

  const add = document.querySelector(".add");
  add.addEventListener("click", (e) => {
    favDialog.showModal();
  });

  const dateBtn = document.querySelector(".dateBtn");
  dateBtn.addEventListener("click", (e) => {
    submitText("today");
    dateBtn.classList.add("btn-active");
    dateBtn2.classList.add("dateBtn2");
    dateBtn3.classList.add("dateBtn3");

    dateBtn.classList.remove("dateBtn");
    dateBtn2.classList.remove("btn-active");
    dateBtn3.classList.remove("btn-active");
  });

  const dateBtn2 = document.querySelector(".dateBtn2");
  dateBtn2.addEventListener("click", (e) => {
    submitText("week");
    dateBtn.classList.add("dateBtn");
    dateBtn2.classList.add("btn-active");
    dateBtn3.classList.add("dateBtn3");

    dateBtn.classList.remove("btn-active");
    dateBtn2.classList.remove("dateBtn2");
    dateBtn3.classList.remove("btn-active");
  });

  const dateBtn3 = document.querySelector(".dateBtn3");
  dateBtn3.addEventListener("click", (e) => {
    submitText("all");
    dateBtn.classList.add("dateBtn");
    dateBtn2.classList.add("dateBtn2");
    dateBtn3.classList.add("btn-active");

    dateBtn.classList.remove("btn-active");
    dateBtn2.classList.remove("btn-active");
    dateBtn3.classList.remove("dateBtn3");
  });
}

export { eventListeners, eventListeners2 };
