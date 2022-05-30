function dateBtns() {
  const btn = document.createElement("button");
  const side = document.querySelector(".side");
  const weekBtn = document.createElement("button");
  const main = document.createElement("button");

  main.classList.add("dateBtn3");
  main.innerHTML = "ALL";
  main.setAttribute("type", "button");
  main.setAttribute("id", "main");
  side.appendChild(main);

  btn.classList.add("dateBtn");
  btn.innerHTML = "Today";
  btn.setAttribute("type", "button");
  btn.setAttribute("id", "today");
  side.appendChild(btn);

  weekBtn.classList.add("dateBtn2");
  weekBtn.innerHTML = "Week";
  weekBtn.setAttribute("type", "button");
  weekBtn.setAttribute("id", "week");
  side.appendChild(weekBtn);
}

export { dateBtns };
