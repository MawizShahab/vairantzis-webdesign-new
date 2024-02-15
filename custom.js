$(document).ready(function () {
  // Check if the window width is less than or equal to 767px (typical mobile devices)
  if ($(window).width() <= 991) {
    $(".help-hero").insertBefore(".help-container-wrapper");
    $(".help-hero img").attr("src", "./images/how-we-help-mobile.png");
  }

  // Function to apply or remove styles based on toggler click
  function toggleHeaderStyles() {
    $(".header-container.extended-header").toggleClass("sticky-header");
  }

  // Toggle styles when toggler button is clicked
  $(".navbar-toggler").click(function () {
    toggleHeaderStyles();
  });

  // Close the toggle when clicking outside of it
  $(document).click(function (event) {
    var target = $(event.target);
    if (
      !target.closest(".navbar-toggler").length &&
      !target.closest(".categories-container").length
    ) {
      $(".categories-container").removeClass("show");
      toggleHeaderStyles(); // Remove styles when toggler is closed
    }
  });
});
