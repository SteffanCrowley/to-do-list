import { buildAddBtn } from "./buildAddButton";

function buildSideBar() {
  const side = document.createElement("div");
  side.classList.add("side");
  side.innerHTML = "SIDE";
  document.body.appendChild(side);
}

function buildTaskArea() {
  const task = document.createElement("div");
  task.classList.add("task-area");
  task.innerHTML = "TO-DO LIST";
  document.body.appendChild(task);
  buildAddBtn();
}

function buildContent() {
  buildSideBar();
  buildTaskArea();
}

export { buildContent };
