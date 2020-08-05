export const privacyButton = () => {
  function privacyButton() {
    document
      .querySelector(".privacy__button")
      .addEventListener("click", (_) => {
        document
          .querySelector(".privacy__button")
          .classList.toggle("privacy__button--active");
      });
  }
  document.addEventListener("DOMContentLoaded", () => {
    privacyButton();
  });
};
