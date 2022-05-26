function buildAddBtn() {
  const btn = document.createElement("button");
  const task = document.querySelector(".task-area");
  btn.classList.add("add");
  btn.innerHTML = "+ Add Task";
  task.appendChild(btn);
}

export { buildAddBtn };
