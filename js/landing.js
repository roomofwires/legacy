$(document).ready(function () {
  var images = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg",
    "07.jpg",
    "08.jpg",
  ];

  jQuery(".glitch-img").css({
    "background-image":
      "url(img/jumbo" + images[Math.floor(Math.random() * images.length)] + ")",
  });
});
