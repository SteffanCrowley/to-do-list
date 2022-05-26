import { buildContent } from "./buildContent";

function buildHeader() {
  const element = document.createElement("div");
  element.classList.add("header");
  element.innerHTML = "TO-DO LIST";
  document.body.appendChild(element);
}

function buildFooter() {
  const element = document.createElement("div");
  element.classList.add("footer");
  document.body.appendChild(element);
}

function build() {
  buildHeader();
  buildContent();
  buildFooter();
}

export { build };
