$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    pager: false,
    controls: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});
