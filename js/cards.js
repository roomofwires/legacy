$(document).ready(function () {
  $("a .card-img-top").mouseenter(function (e) {
    $(this).animate({ opacity: 0.5 }, 250);
  });
  $("a .card-img-top").mouseleave(function (e) {
    $(this).animate({ opacity: 1.0 }, 250);
  });
});
