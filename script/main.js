import { projects } from "./projects.js";
import { createCard } from "./card.js";

const main = document.querySelector("main");

for (let i = 0; i < projects.length; i++) {
  createCard(projects[i], main);
}

const divs = document.querySelectorAll("div");
for (let i = 0; i < divs.length; i++) {
  divs[i].setAttribute("aria-hidden", "true");
}
