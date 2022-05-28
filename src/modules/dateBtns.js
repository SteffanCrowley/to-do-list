function dateBtns() {
  const btn = document.createElement("button");
  const side = document.querySelector(".side");
  btn.classList.add("dateBtn");
  btn.innerHTML = "This Week";
  side.appendChild(btn);
}

export { dateBtns };
