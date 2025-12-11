/* Smooth Scroll */
document.querySelectorAll("nav a").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(a.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

/* 3D universal tilt */
document.querySelectorAll(".tilt").forEach((box) => {
  box.addEventListener("mousemove", (e) => {
    const r = box.getBoundingClientRect();
    const x = e.clientX - r.left,
      y = e.clientY - r.top;

    const rotX = ((y - r.height / 2) / 20) * -1;
    const rotY = (x - r.width / 2) / 20;

    box.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  });

  box.addEventListener("mouseleave", () => {
    box.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
  });
});

/* Card-specific extra glow */
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left,
      y = e.clientY - r.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });
});

/* Modal */
function openModal(card) {
  document.getElementById("m-title").textContent = card.dataset.title;
  document.getElementById("m-tech").textContent = "Tech: " + card.dataset.tech;
  document.getElementById("m-desc").textContent = card.dataset.desc;
  document.getElementById("m-live").href = card.dataset.live;
  document.getElementById("m-git").href = card.dataset.git;

  document.getElementById("modal").classList.add("active");
}

function closeModal(e) {
  if (e.target.id === "modal" || e.target.classList.contains("modal-close")) {
    document.getElementById("modal").classList.remove("active");
  }
}

/* Make Live Demo and GitHub links open correctly */
document.querySelectorAll(".card").forEach((card) => {
  const liveBtn = card.querySelector("[data-live]");
  const gitBtn = card.querySelector("[data-git]");

  liveBtn.href = card.dataset.live;
  liveBtn.target = "_blank";

  gitBtn.href = card.dataset.git;
  gitBtn.target = "_blank";
});
