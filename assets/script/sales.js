// Sales table
// Outside search
oTable = $("#salesTable").DataTable(); //pay attention to capital D, which is mandatory to retrieve "api" datatables' object, as @Lionel said
$("#salesSearch").keyup(function () {
    oTable.search($(this).val()).draw();
});