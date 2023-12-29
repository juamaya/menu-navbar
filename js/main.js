const body = document.querySelector("body");
const nav = document.querySelector("nav");
const modeToggle = document.querySelector(".dark-light");
const searchToggle = document.querySelector(".searchToggle");
const sidebarOpen = document.querySelector(".sidebarOpen");
const sidebarClose = document.querySelector(".sidebarClose");

let getMode = localStorage.getItem("mode");

if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
}

// js code to toggle dark light mode

modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");

  // js code to keep user selected mode even page refresh or file reopen
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});

// js code to toggle search Box

searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

// js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

body.addEventListener("click", (e) => {
  let clicked = e.target;
  if (
    !clicked.classList.contains("sidebarOpen") &&
    !clicked.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});
