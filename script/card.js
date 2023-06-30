export function createCard(project, container) {
  const card = document.createElement("article");
  card.className = "card";
  container.appendChild(card);

  const h3 = document.createElement("h3");
  h3.innerText = project.name;
  card.appendChild(h3);

  const div1 = document.createElement("div");
  card.appendChild(div1);

  const img = document.createElement("img");
  img.src = project.img;
  img.alt = project.alt;
  div1.appendChild(img);

  const div2 = document.createElement("div");
  div1.appendChild(div2);

  const p = document.createElement("p");
  p.innerText = project.desc;
  div2.appendChild(p);

  const linkContainer = document.createElement("div");
  linkContainer.className = "link-container";
  div2.appendChild(linkContainer);

  const icon1 = document.createElement("i");
  icon1.className = "fa-solid fa-laptop-code";
  if (project.demo === "") {
    const deadLink1 = document.createElement("p");
    deadLink1.appendChild(icon1);
    const deadLinkText1 = document.createElement("span");
    deadLinkText1.innerText = " Live demo unavialable";
    deadLink1.appendChild(deadLinkText1);
    linkContainer.appendChild(deadLink1);
  } else {
    const link1 = document.createElement("a");
    link1.href = project.demo;
    link1.className = "demo";
    link1.appendChild(icon1);
    const linkText1 = document.createElement("span");
    linkText1.innerHTML = " Live demo";
    link1.appendChild(linkText1);
    linkContainer.appendChild(link1);
  }

  const icon2 = document.createElement("i");
  icon2.className = "fa-brands fa-github";
  if (project.github === "") {
    const deadLink2 = document.createElement("p");
    deadLink2.appendChild(icon2);
    const deadLinkText2 = document.createElement("span");
    deadLinkText2.innerText = " Github unavialable";
    deadLink2.appendChild(deadLinkText2);
    linkContainer.appendChild(deadLink2);
  } else {
    const link2 = document.createElement("a");
    link2.href = project.github;
    link2.className = "github";
    link2.appendChild(icon2);
    const linkText2 = document.createElement("span");
    linkText2.innerHTML = " Github";
    link2.appendChild(linkText2);
    linkContainer.appendChild(link2);
  }
}
