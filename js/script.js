$(document).ready(function () {
  // Fixed navbar on scroll
  $(window).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > 200) {
      $(".navbar").addClass("fixed-top shadow-sm");
    } else {
      $(".navbar").removeClass("fixed-top shadow-sm");
    }
  });

  // Form submit
  $("#contact-form").submit(function (e) {
    e.preventDefault();
    Swal.fire("Thank you!", "You have submited!", "success");
    $(this).trigger("reset");
  });
});
