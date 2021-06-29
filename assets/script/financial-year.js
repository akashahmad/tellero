// kob form data
$(document).ready(function() {
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
    $("#faktur-beholdning").select2({
        placeholder: "Bank",
        allowClear: true,
    });
    $("#faktur-konto").select2({
        placeholder: "1000 - Salg of varer/ydelser m/moms",
        allowClear: true,
    });
    $("#faktur-sprog").select2({
        placeholder: "Dansh",
        allowClear: true,
    });
    $("#faktur-valuta").select2({
        placeholder: "Dansh kroner (DKK)",
        allowClear: true,
    });
    $(document).ready(function() {
        $("#financial_more_content_button").click(function() {
            $("#financial-more-content").toggle();
        });
    });
});