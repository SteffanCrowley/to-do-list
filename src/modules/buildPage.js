function buildHeader() {
  const element = document.createElement("div");
  element.classList.add("header");
  element.innerHTML = "TO-DO LIST";
  document.body.appendChild(element);
}

function buildContent() {
  const element = document.createElement("div");
  element.id.add("header");
  document.body.appendChild(element);
}

function buildFooter() {
  const element = document.createElement("div");
  element.id.add("footer");
  document.body.appendChild(element);
}

function build() {
  buildHeader();
  buildContent();
  buildFooter();
}

export { build };
