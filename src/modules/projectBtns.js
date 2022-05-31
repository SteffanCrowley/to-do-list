import { eventListeners } from "./eventListeners";

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

let i = 0;

function addPrj() {
  const side = document.querySelector(".side");

  let edit = prompt("Name your project", `My project`);
  if (edit != null) {
    const card = document.createElement("div");
    card.classList.add("card-prj");
    card.setAttribute("id", `${i}`);
    const prj = document.createElement("button");
    prj.classList.add("add-prj2");
    prj.setAttribute("id", `${i}`);
    prj.innerHTML = edit;

    // //engage event listener for project button
    prj.addEventListener("click", (event) => {
      eventListeners(i);
    });

    i++;
    // //Adds close button to card
    const closePrj = document.createElement("button");
    closePrj.classList.add("close-Prj");
    closePrj.textContent = "x";

    // //engage event listener for close button
    closePrj.addEventListener("click", (event) => {
      side.removeChild(card);
    });

    side.appendChild(card);
    card.appendChild(prj);
    card.appendChild(closePrj);
  }
}

export { projectBtns };
