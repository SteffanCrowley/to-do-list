import { buildAddBtn } from "./buildAddButton";

function buildSideBar() {
  const side = document.createElement("div");
  side.classList.add("side");
  document.body.appendChild(side);
}

function buildTaskArea() {
  const task = document.createElement("div");
  task.classList.add("task-area");
  document.body.appendChild(task);
  buildAddBtn();
  const cardArea = document.createElement("div");
  cardArea.classList.add("card-area");
  task.appendChild(cardArea);
}

function buildContent() {
  buildSideBar();
  buildTaskArea();
}

export { buildContent };
