// For Filters
document.addEventListener("DOMContentLoaded", function () {
    var filterBtn = document.getElementById('filter-btn');
    var btnTxt = document.getElementById('btn-txt');
    var filterAngle = document.getElementById('filter-angle');

    $('#filterbar').collapse(false);
    var count = 0, count2 = 0;
    function changeBtnTxt() {
        $('#filterbar').collapse(true);
        count++;
        if (count % 2 != 0) {
            filterAngle.classList.add("fa-angle-right");
            btnTxt.innerText = "show filters"
            filterBtn.style.backgroundColor = "#36a31b";
        }
        else {
            filterAngle.classList.remove("fa-angle-right")
            btnTxt.innerText = "hide filters"
            filterBtn.style.backgroundColor = "#ff935d";
        }

    }

    // For Applying Filters
    $('#inner-box').collapse(false);
    $('#inner-box2').collapse(false);

});