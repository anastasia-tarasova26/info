const expandables = document.querySelectorAll(".expandable");

expandables.forEach((expandable) => {
  expandable.addEventListener("click", () => {
    expandable.classList.toggle("active");
  });
});
