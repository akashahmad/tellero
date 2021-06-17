// Invoice edit form data
$(document).ready(function () {
    $("#inventory").select2({
        placeholder: "Revolut",
        allowClear: true,
    });
    $("#inventory").on("change paste keyup", function () {
        console.log("Inventory value is ", $(this).val());
    });

    $("#account").select2({
        placeholder: "1000-Salg af varer/ydelser m/moms",
        allowClear: true,
    });
    $("#account").on("change paste keyup", function () {
        console.log("Account name is ", $(this).val());
    });

    $("#vat").on("change", function () {
        console.log("VAT ", $(this).is(":checked"));
    });

    $("#product_no").on("change", function () {
        console.log("Hide product numbers ", $(this).is(":checked"));
    });

    $("#account_language").select2({
        placeholder: "Engelsk",
        allowClear: true,
    });
    $("#account_language").on("change paste keyup", function () {
        console.log("Account language is ", $(this).val());
    });

    $("#valuta").select2({
        placeholder: "Svenske Kroner (SEK)",
        allowClear: true,
    });
    $("#valuta").on("change paste keyup", function () {
        console.log("Account value is ", $(this).val());
    });

    $("#valutakurs").select2({
        placeholder: "73,33",
        allowClear: true,
    });
    $("#valutakurs").on("change paste keyup", function () {
        console.log("Currency exchange rate is ", $(this).val());
    });

    $("#fi_deposit").on("change", function () {
        console.log("Use a FI payment card on the invoice ", $(this).is(":checked"));
    });

    $("#other_bindings").on("change", function () {
        console.log("Other binding options ", $(this).is(":checked"));
    });

    $("#description").on("change", function () {
        console.log("Description is ", $(this).val());
    });
    $("#description2").on("change", function () {
        console.log("Second description is ", $(this).val());
    });

    $("#contactContent").on("click", function (e) {
        console.log("Selection contact is", e.target.innerText);
        $("#selectionContact").text(e.target.innerText);
    });

    $("#searchResults").on("click", function (e) {
        console.log("Invoice name is", e.target.innerText);
        $("#invoiceText").val(e.target.innerText);
    });

    $("#date_picker").on("change", function () {
        console.log("Choosen date is", $(this).val());
    });
    $("#companyType").select2({
        placeholder: "Investment",
        allowClear: true,
    });
    $("#land").select2({
        placeholder: "Investment",
        allowClear: true,
    });
    $("#reminderFee").select2({
        placeholder: "Netto",
        allowClear: true,
    });
    $("#method").select2({
        placeholder: "Netto",
        allowClear: true,
    });
    $(window).click(function () {
        contactContent.classList.add("max-h-0");
        contactContent.classList.remove("max-h-ease");
        contactFlag = true;
        searchContent.classList.add("max-h-0");
        searchContent.classList.remove("max-h-ease");
        searchFlag = true;
    });
    $("#contactTrigger").click(function (event) {
        event.stopPropagation();
    });
    $("#invoiceText").click(function (event) {
        event.stopPropagation();
    });
});