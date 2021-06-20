// kob form data
$(document).ready(function () {
  $("#metode").select2({
    placeholder: "Netto",
    allowClear: true,
  });
  $(document).ready(function () {
    $("#financial_more_content_button").click(function () {
      $("#financial-more-content").toggle();
    });
  });
});
