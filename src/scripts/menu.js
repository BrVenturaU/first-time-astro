document.addEventListener("astro:page-load", () => {
  document.querySelector(".hamburger").addEventListener("click", (e) => {
    document.querySelector(".nav-links").classList.toggle("expanded");
  });
});
