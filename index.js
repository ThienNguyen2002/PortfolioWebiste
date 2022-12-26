const backButton = document.querySelector(".back-button");

backButton.addEventListener("click", function (event) {
  event.preventDefault(); // prevent the link from navigating away from the page

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
