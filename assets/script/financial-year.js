// kob form data
$(document).ready(function () {
  $("#metode").select2({
    placeholder: "Netto",
    allowClear: true,
  });
  $("#Vmlg").select2({
    placeholder: "-- Vmlg bling --",
    allowClear: true,
  });
  $("#Vmlg2").select2({
    placeholder: "-- Vmlg bling --",
    allowClear: true,
  });
  $("#Vmlg3").select2({
    placeholder: "-- Vmlg bling --",
    allowClear: true,
  });
  $(document).ready(function () {
    $("#financial_more_content_button").click(function () {
      $("#financial-more-content").toggle();
    });
  });
});

