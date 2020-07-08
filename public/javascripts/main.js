$(document).ready(function () {
  $("body").ripples({
    resolution: 512,
    dropRadius: 28,
    perturbance: 0.02,
    interactive: true,
    crossOrigin: "",
  });

  // Automatic drops
  setInterval(function () {
    var $el = $("body");
    var x = Math.random() * $el.innerWidth();
    var y = Math.random() * $el.innerHeight();
    var dropRadius = Math.random() * 25 + 15;
    var strength = 0.03 + Math.random() * 0.04;

    $el.ripples("drop", x, y, dropRadius, strength);
  }, 500);
});
