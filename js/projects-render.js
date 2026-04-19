import { projectsCatalog } from "./projects-data.js";

function trimText(value) {
  return value != null && String(value).trim() !== "" ? String(value).trim() : "";
}

function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";
  card.setAttribute("data-aos", "fade-zoom-in");
  card.setAttribute("data-aos-easing", "ease-in-out");
  card.setAttribute("data-aos-duration", "1000");

  if (project.aosDelay != null) {
    card.setAttribute("data-aos-delay", String(project.aosDelay));
  }

  const link = document.createElement("a");
  link.className = "project-card__link";
  link.href = trimText(project.href) || "#";

  const tv = document.createElement("div");
  tv.className = "project-tv";

  const bezel = document.createElement("div");
  bezel.className = "project-tv__bezel";

  const screen = document.createElement("div");
  screen.className = "project-tv__screen";

  const img = document.createElement("img");
  img.className = "project-img";
  img.src = trimText(project.imageSrc);
  img.alt = trimText(project.imageAlt) || trimText(project.title) || "";

  const stand = document.createElement("div");
  stand.className = "project-tv__stand";
  stand.setAttribute("aria-hidden", "true");

  const standNeck = document.createElement("span");
  standNeck.className = "project-tv__stand-neck";
  const standFoot = document.createElement("span");
  standFoot.className = "project-tv__stand-foot";

  stand.appendChild(standNeck);
  stand.appendChild(standFoot);

  screen.appendChild(img);
  bezel.appendChild(screen);
  tv.appendChild(bezel);
  tv.appendChild(stand);
  link.appendChild(tv);

  const caption = document.createElement("div");
  caption.className = "project-card__caption";

  const title = document.createElement("h5");
  title.textContent = trimText(project.title) || "Untitled";

  const category = document.createElement("p");
  category.textContent = trimText(project.category);

  caption.appendChild(title);
  caption.appendChild(category);

  card.appendChild(link);
  card.appendChild(caption);

  return card;
}

function getSectionRow(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) {
    return null;
  }

  let row = section.querySelector(".projects-row");
  if (!row) {
    row = document.createElement("div");
    row.className = "projects-row";
    section.appendChild(row);
  }

  return row;
}

function renderSection(entry) {
  const sectionId = trimText(entry && entry.sectionId);
  const items = Array.isArray(entry && entry.items) ? entry.items : [];
  const row = getSectionRow(sectionId);

  if (!sectionId || !row) {
    return;
  }

  row.textContent = "";

  items.forEach((item) => {
    row.appendChild(createProjectCard(item));
  });
}

export function renderProjects() {
  if (!Array.isArray(projectsCatalog) || !projectsCatalog.length) {
    return;
  }

  projectsCatalog.forEach((entry) => {
    renderSection(entry);
  });
}
