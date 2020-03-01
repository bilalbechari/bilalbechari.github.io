window.addEventListener("load", function () {
  $(".loader").addClass("animated fadeOut")
  setTimeout(function(){ $(".loader").remove(); }, 1000);
})