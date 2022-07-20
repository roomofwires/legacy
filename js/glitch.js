$(document).ready(function () {
  $(".glitch-img").mgGlitch({
    destroy: false,
    glitch: true,
    scale: true,
    blend: true,
    blendModeType: "hue",
    glitch1TimeMin: 300,
    glitch1TimeMax: 600,
    glitch2TimeMin: 10,
    glitch2TimeMax: 100,
    zIndexStart: -10,
  });
});
