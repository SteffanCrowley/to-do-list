import { addTextToClass } from "./text";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

function eventListeners() {
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
    console.log(format(parseISO(sendDate), "MM/dd/yyyy"));
  });

  document.addEventListener("click", (e) => {
    const target = e.target.innerText;
    if (target === "SUBMIT") addTextToClass("first", sendText, sendDate);
  });

  const add = document.querySelector(".add");
  add.addEventListener("click", (e) => {
    favDialog.showModal();
  });
}

export { eventListeners };
