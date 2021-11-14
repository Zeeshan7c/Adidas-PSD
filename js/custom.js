function closeTop() {
  document.getElementById("notification-bar").style.display = "none";
}
function openMenu() {
  document.getElementById("menu-bar").style.display = "block";
  document.getElementById("btnOpen").style.display = "none";
  document.getElementById("btnClose").style.display = "block";
}
function closeMenu() {
  document.getElementById("menu-bar").style.display = "none";
  document.getElementById("btnOpen").style.display = "block";
  document.getElementById("btnClose").style.display = "none";
}

$(document).ready(function () {
  $(".owl-carousel-1").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    smartSpeed: 1500,
    navText: ["<img src='img/left.png'>", "<img src='img/right.png'>"],
    autoplayHoverPause: true,
  });
});

$(document).ready(function () {
  $(".owl-carousel-2").owlCarousel({
    nav: false,
    dots: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 1000,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    navText: ["<img src='img/left.png'>", "<img src='img/right.png'>"],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: true,
      },
    },
  });
});
