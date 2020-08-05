export const navLink = () => {
  function navLink() {
    document
      .querySelector(".nav")
      .addEventListener("click", function ({ target: t }) {
        if (t.classList.contains("nav__link")) {
          this.querySelectorAll(".nav__link").forEach((n) =>
            n.classList.toggle("nav__link--active", n === t)
          );
        }
      });
  }
  document.addEventListener("DOMContentLoaded", () => {
    navLink();
  });
};
