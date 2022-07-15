$(document).ready(function () {
  $("video source").each(function () {
    var sourceFile = $(this).attr("data-src");
    $(this).attr("src", sourceFile);
    var video = this.parentElement;
    video.load();
    video.playbackRate = 0.5;
    video.play();
  });
});
