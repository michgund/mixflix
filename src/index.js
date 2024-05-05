import "./style.css";
import search from "./api.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = "Search a movie";
  element.classList.add("title");

  btn.innerHTML = "Search for 'Frozen'";
  btn.onclick = search;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
