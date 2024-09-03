document
  .querySelector("[data-collapse-toggle]")
  .addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu-2");
    menu.classList.toggle("hidden");
    menu.classList.toggle("border-t-2");
    menu.classList.toggle("mt-2");
    menu.classList.toggle("border-red-500");
  });

// Optionally close the menu when clicking outside
document.addEventListener("click", function (event) {
  const menu = document.getElementById("mobile-menu-2");
  const button = document.querySelector("[data-collapse-toggle]");
  if (!button.contains(event.target) && !menu.contains(event.target)) {
    menu.classList.add("hidden");
  }
});
