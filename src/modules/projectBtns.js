function projectBtns() {
  const title = document.createElement("div");
  const side = document.querySelector(".side");

  title.classList.add("project-title");
  title.innerHTML = "Projects";
  side.appendChild(title);

  projectAdd();
}

function projectAdd() {
  const btn = document.createElement("button");
  const side = document.querySelector(".side");
  btn.classList.add("add-prj");
  btn.innerHTML = "+ Add Project";
  side.appendChild(btn);

  btn.addEventListener("click", (event) => {
    addPrj();
  });
}

function addPrj() {
  const side = document.querySelector(".side");
  let edit = prompt("Name your project", `My project`);
  const prj = document.createElement("button");
  prj.classList.add("add-prj");
  prj.innerHTML = edit;
  side.appendChild(prj);
}

export { projectBtns };
