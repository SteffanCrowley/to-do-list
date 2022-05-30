function dateBtns() {
  const btn = document.createElement("button");
  const side = document.querySelector(".side");
  const weekBtn = document.createElement("button");
  const main = document.createElement("button");

  main.classList.add("dateBtn3");
  main.innerHTML = "ALL";
  side.appendChild(main);

  btn.classList.add("dateBtn");
  btn.innerHTML = "Today";
  side.appendChild(btn);

  weekBtn.classList.add("dateBtn2");
  weekBtn.innerHTML = "Week";
  side.appendChild(weekBtn);
}

export { dateBtns };
