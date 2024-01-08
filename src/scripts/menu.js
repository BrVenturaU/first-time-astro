document.addEventListener("astro:page-load", () => {
  document.querySelector("#hamburger").addEventListener("click", (e) => {
    document.querySelector("#navigation").classList.toggle("scale-y-100");
  });
});
