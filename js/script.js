const typedEl = document.querySelector("#typed");

const typed = new Typed(typedEl, {
  strings: [
    "Ajis Maulana.",
    "Multimedia",
    "Content",
    "Developer.",
    "a Beginner",
    "Freelancer.",
  ],
  typeSpeed: 80,
  showCursor: false,
  backDelay: 1000,
});

$(function () {
  $('[data-toggle="popover"]').popover();
});
