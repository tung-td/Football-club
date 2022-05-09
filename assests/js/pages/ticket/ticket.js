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