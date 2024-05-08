import "./style.css";
import { handleSearch } from "./handlers";

const btn = document.querySelector("button");
btn.addEventListener("click", handleSearch);
