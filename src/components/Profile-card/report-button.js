function reportButton() {
  document
    .querySelector(".profile-card__report-button")
    .addEventListener("click", (_) => {
      document
        .querySelector(".profile-card__report-card")
        .classList.toggle("profile-card__report-card--active");
    });
}
document.addEventListener("DOMContentLoaded", () => {
  reportButton();
});
