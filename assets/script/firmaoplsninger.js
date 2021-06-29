// Invoice edit form data
$(document).ready(function() {
    $("#cvr").select2({
        placeholder: "Indtast firmanvn eller CVR-number",
        allowClear: true,
    });
    $("#cvr").on("change paste keyup", function() {
        console.log("Inventory value is ", $(this).val());
    });
    $("#valgat").select2({
        placeholder: "Valgt virksomhedstype *",
        allowClear: true,
    });
    $("#valgat").on("change paste keyup", function() {
        console.log("Inventory value is ", $(this).val());
    });
    $("#land").select2({
        placeholder: "Danmark",
        allowClear: true,
    });
    $("#land").on("change paste keyup", function() {
        console.log("Inventory value is ", $(this).val());
    });
    $("#selectionContact").select2({
        placeholder: "Select selection contact",
        allowClear: true,
    });
    $("#selectionContact").on("change paste keyup", function() {
        console.log("Inventory value is ", $(this).val());
    });

});