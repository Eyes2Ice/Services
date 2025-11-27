// Сайдбар
document.addEventListener("DOMContentLoaded", () => {
  const burgers = document.querySelectorAll(".burger-icon");
  const aside = document.querySelector("aside.main__aside");
  const content = document.querySelector(".main__content");
  const header = document.querySelector(".header");
  const body = document.body;

  function toggleSidebar() {
    aside.classList.toggle("aside--visible");
    content.classList.toggle("main__content--blured");
    header.classList.toggle("header--blured");
    body.classList.toggle("body--event");
  }

  function closeSidebar() {
    aside.classList.remove("aside--visible");
    content.classList.remove("main__content--blured");
    header.classList.remove("header--blured");
    body.classList.remove("body--event");
  }

  burgers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleSidebar();
    });
  });

  aside.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.addEventListener("click", () => {
    if (aside.classList.contains("aside--visible")) {
      closeSidebar();
    }
  });
});
