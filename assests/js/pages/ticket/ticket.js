function ticketWaytoShow(i) {
    var matchList1 = document.getElementById("matchList1");
    var matchList2 = document.getElementById("matchList2");

    if (i == 1) {
        matchList1.classList.remove("d-none");
        matchList2.classList.add("d-none");
    } else {
        matchList1.classList.add("d-none");
        matchList2.classList.remove("d-none");
    }
}

// SVG tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
$('svg #standA').tooltip({
title: '<h4>Acre</h4>',
html: true,
placement: 'top',
container: 'body'
});