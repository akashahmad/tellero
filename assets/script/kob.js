// kob form data
$(document).ready(function () {
  $("#bought-from").select2({
    placeholder: "Denmark",
    allowClear: true,
  });
  $("#beholdning").select2({
    placeholder: "--- Vaelg beholdning ---",
    allowClear: true,
  });
  $("#valute").select2({
    placeholder: "Danske kroner (DKK)",
    allowClear: true,
  });
  $("#konto").select2({
    placeholder: "--- Vaelg beholdning ---",
    allowClear: true,
  });
  $("#Gem_button").click(function () {
    $("#Gem_button").css("background", "#0077ff");
    $("#Gem_button").css("color", "white");
    $("#Godkend_button").css("background", "white");
    $("#Godkend_button").css("color", "#0077ff");
  });
  $("#Godkend_button").click(function () {
    $("#Godkend_button").css("background", "#0077ff");
    $("#Godkend_button").css("color", "white");
    $("#Gem_button").css("background", "white");
    $("#Gem_button").css("color", "#0077ff");
  });
});
