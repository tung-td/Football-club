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

$('.stadium .door').on('click', function () {
    $(this).toggleClass('active');
    $('.stadium .door').not(this).removeClass('active');
});

// toggle class active to seat div
$('.door-seats .seat').on('click', function () {
    $(this).toggleClass('active');

    // add and remove seat tag when click on seat div
    if (this.classList.contains('active')) {
        $("#inputSeats").append('<div class="input-seat border rounded p-2" id="' + this.getAttribute('value') + '">' + this.getAttribute('value') + '</div>');  //<i class="fa fa-times-circle-o"></i>
    } else {
        $("#" + this.getAttribute('value')).remove();
    }
});

// remove seat tag when click on remove button
// $("body").on("click",".fa-times-circle-o",function(){
//     $("[data-id="+this.parents('.input-seat').getAttribute('id')+"]").toggleClass('active');
//     $(this).parents('.input-seat').remove();
// });

// Onclick svg
$('svg .door').on('click', function () {

    // chooseStand
    $('#chooseStand option').remove();
    switch (this.getAttribute('data-stand').toString()) {
        case "A-bot":
            $("#chooseStand").append(`<option value="A-bot" selected>Stand A - 2nd floor</option>`);
            $("#chooseStand").append(`<option value="A-top">Stand A - 5th floor</option>`);
            $("#chooseStand").append(`<option value="B-bot">Stand B - 2nd floor</option>`);
            $("#chooseStand").append(`<option value="B-top">Stand B - 5th floor</option>`);
            $("#chooseStand").append(`<option value="C">Stand C - 2nd floor</option>`);
            $("#chooseStand").append(`<option value="D">Stand D - 2nd floor</option>`);
            break;
        case "A-top":
            $("#chooseStand").append(`<option value="A-bot">Stand A - 2nd floor</option>`);
            $("#chooseStand").append(`<option value="A-top" selected>Stand A - 5th floor</option>`);
            $("#chooseStand").append(`<option value="B-bot">Stand B - 2nd floor</option>`);
            $("#chooseStand").append(`<option value="B-top">Stand B - 5th floor</option>`);
            $("#chooseStand").append(`<option value="C">Stand C - 2nd floor</option>`);
            $("#chooseStand").append(`<option value="D">Stand D - 2nd floor</option>`);
            break;
        case "B-bot":
            $("#chooseStand").append(`<option value="A-bot">Stand A - 2nd floor</option>`);
            $("#chooseStand").append(`<option value="A-top">Stand A - 5th floor</option>`);
            $("#chooseStand").append(`<option value="B-bot" selected>Stand B - 2nd floor</option>`);
            $("#chooseStand").append(`<option value="B-top">Stand B - 5th floor</option>`);
            $("#chooseStand").append(`<option value="C">Stand C - 2nd floor</option>`);
            $("#chooseStand").append(`<option value="D">Stand D - 2nd floor</option>`);
            break;
        case "B-top":
            $("#chooseStand").append(`<option value="A-bot">Stand A - 2nd floor</option>`);
            $("#chooseStand").append(`<option value="A-top">Stand A - 5th floor</option>`);
            $("#chooseStand").append(`<option value="B-bot">Stand B - 2nd floor</option>`);
            $("#chooseStand").append(`<option value="B-top" selected>Stand B - 5th floor</option>`);
            $("#chooseStand").append(`<option value="C">Stand C - 2nd floor</option>`);
            $("#chooseStand").append(`<option value="D">Stand D - 2nd floor</option>`);
            break;
        case "C":
            $("#chooseStand").append(`<option value="A-bot">Stand A - 2nd floor</option>`);
            $("#chooseStand").append(`<option value="A-top">Stand A - 5th floor</option>`);
            $("#chooseStand").append(`<option value="B-bot">Stand B - 2nd floor</option>`);
            $("#chooseStand").append(`<option value="B-top">Stand B - 5th floor</option>`);
            $("#chooseStand").append(`<option value="C" selected>Stand C - 2nd floor</option>`);
            $("#chooseStand").append(`<option value="D">Stand D - 2nd floor</option>`);
            break;
        case "D":
            $("#chooseStand").append(`<option value="A-bot">Stand A - 2nd floor</option>`);
            $("#chooseStand").append(`<option value="A-top">Stand A - 5th floor</option>`);
            $("#chooseStand").append(`<option value="B-bot">Stand B - 2nd floor</option>`);
            $("#chooseStand").append(`<option value="B-top">Stand B - 5th floor</option>`);
            $("#chooseStand").append(`<option value="C">Stand C - 2nd floor</option>`);
            $("#chooseStand").append(`<option value="D" selected>Stand D - 2nd floor</option>`);
            break;
        default:
            $("#chooseStand").append(`<option value="A-bot">Stand A - 2nd floor</option>`);
            $("#chooseStand").append(`<option value="A-top">Stand A - 5th floor</option>`);
            $("#chooseStand").append(`<option value="B-bot">Stand B - 2nd floor</option>`);
            $("#chooseStand").append(`<option value="B-top">Stand B - 5th floor</option>`);
            $("#chooseStand").append(`<option value="C">Stand C - 2nd floor</option>`);
            $("#chooseStand").append(`<option value="D">Stand D - 2nd floor</option>`);
            break;
    }

    // chooseCategory
    $('#chooseCategory option').remove();
    switch (this.getAttribute('data-class').toString()) {
        case "1":
            $('#chooseCategory').append(`<option value="1" selected>1st class ticket</option>`);
            $('#chooseCategory').append(`<option value="2">2nd class ticket</option>`);
            $('#chooseCategory').append(`<option value="3">3rd class ticket</option>`);
            $('#chooseCategory').append(`<option value="4">4th class ticket</option>`);
            break;
        case "2":
            $('#chooseCategory').append(`<option value="1">1st class ticket</option>`);
            $('#chooseCategory').append(`<option value="2" selected>2nd class ticket</option>`);
            $('#chooseCategory').append(`<option value="3">3rd class ticket</option>`);
            $('#chooseCategory').append(`<option value="4">4th class ticket</option>`);
            break;
        case "3":
            $('#chooseCategory').append(`<option value="1">1st class ticket</option>`);
            $('#chooseCategory').append(`<option value="2">2nd class ticket</option>`);
            $('#chooseCategory').append(`<option value="3" selected>3rd class ticket</option>`);
            $('#chooseCategory').append(`<option value="4">4th class ticket</option>`);
            break;
        case "4":
            $('#chooseCategory').append(`<option value="1">1st class ticket</option>`);
            $('#chooseCategory').append(`<option value="2">2nd class ticket</option>`);
            $('#chooseCategory').append(`<option value="3">3rd class ticket</option>`);
            $('#chooseCategory').append(`<option value="4" selected>4th class ticket</option>`);
            break;
        default:
            $('#chooseCategory').append(`<option value="1">1st class ticket</option>`);
            $('#chooseCategory').append(`<option value="2">2nd class ticket</option>`);
            $('#chooseCategory').append(`<option value="3">3rd class ticket</option>`);
            $('#chooseCategory').append(`<option value="4">4th class ticket</option>`);
            break;
    }

    // chooseDoor
    $('#chooseDoor option').remove();
    switch (this.getAttribute('data-door').toString()) {
        case "1":
            $("#chooseDoor").append(`<option value="1" selected>1</option>`);
            $("#chooseDoor").append(`<option value="2">2</option>`);
            $("#chooseDoor").append(`<option value="3">3</option>`);
            $("#chooseDoor").append(`<option value="4">4</option>`);
            $("#chooseDoor").append(`<option value="5">5</option>`);
            $("#chooseDoor").append(`<option value="6">6</option>`);
            $("#chooseDoor").append(`<option value="7">7</option>`);
            $("#chooseDoor").append(`<option value="8">8</option>`);
            $("#chooseDoor").append(`<option value="9">9</option>`);
            $("#chooseDoor").append(`<option value="10">10</option>`);
            break;
        case "2":
            $("#chooseDoor").append(`<option value="1">1</option>`);
            $("#chooseDoor").append(`<option value="2" selected>2</option>`);
            $("#chooseDoor").append(`<option value="3">3</option>`);
            $("#chooseDoor").append(`<option value="4">4</option>`);
            $("#chooseDoor").append(`<option value="5">5</option>`);
            $("#chooseDoor").append(`<option value="6">6</option>`);
            $("#chooseDoor").append(`<option value="7">7</option>`);
            $("#chooseDoor").append(`<option value="8">8</option>`);
            $("#chooseDoor").append(`<option value="9">9</option>`);
            $("#chooseDoor").append(`<option value="10">10</option>`);
            break;
        case "3":
            $("#chooseDoor").append(`<option value="1">1</option>`);
            $("#chooseDoor").append(`<option value="2">2</option>`);
            $("#chooseDoor").append(`<option value="3" selected>3</option>`);
            $("#chooseDoor").append(`<option value="4">4</option>`);
            $("#chooseDoor").append(`<option value="5">5</option>`);
            $("#chooseDoor").append(`<option value="6">6</option>`);
            $("#chooseDoor").append(`<option value="7">7</option>`);
            $("#chooseDoor").append(`<option value="8">8</option>`);
            $("#chooseDoor").append(`<option value="9">9</option>`);
            $("#chooseDoor").append(`<option value="10">10</option>`);
            break;
        case "4":
            $("#chooseDoor").append(`<option value="1">1</option>`);
            $("#chooseDoor").append(`<option value="2">2</option>`);
            $("#chooseDoor").append(`<option value="3">3</option>`);
            $("#chooseDoor").append(`<option value="4" selected>4</option>`);
            $("#chooseDoor").append(`<option value="5">5</option>`);
            $("#chooseDoor").append(`<option value="6">6</option>`);
            $("#chooseDoor").append(`<option value="7">7</option>`);
            $("#chooseDoor").append(`<option value="8">8</option>`);
            $("#chooseDoor").append(`<option value="9">9</option>`);
            $("#chooseDoor").append(`<option value="10">10</option>`);
            break;
        case "5":
            $("#chooseDoor").append(`<option value="1">1</option>`);
            $("#chooseDoor").append(`<option value="2">2</option>`);
            $("#chooseDoor").append(`<option value="3">3</option>`);
            $("#chooseDoor").append(`<option value="4">4</option>`);
            $("#chooseDoor").append(`<option value="5" selected>5</option>`);
            $("#chooseDoor").append(`<option value="6">6</option>`);
            $("#chooseDoor").append(`<option value="7">7</option>`);
            $("#chooseDoor").append(`<option value="8">8</option>`);
            $("#chooseDoor").append(`<option value="9">9</option>`);
            $("#chooseDoor").append(`<option value="10">10</option>`);
            break;
        case "6":
            $("#chooseDoor").append(`<option value="1">1</option>`);
            $("#chooseDoor").append(`<option value="2">2</option>`);
            $("#chooseDoor").append(`<option value="3">3</option>`);
            $("#chooseDoor").append(`<option value="4">4</option>`);
            $("#chooseDoor").append(`<option value="5">5</option>`);
            $("#chooseDoor").append(`<option value="6" selected>6</option>`);
            $("#chooseDoor").append(`<option value="7">7</option>`);
            $("#chooseDoor").append(`<option value="8">8</option>`);
            $("#chooseDoor").append(`<option value="9">9</option>`);
            $("#chooseDoor").append(`<option value="10">10</option>`);
            break;
        case "7":
            $("#chooseDoor").append(`<option value="1">1</option>`);
            $("#chooseDoor").append(`<option value="2">2</option>`);
            $("#chooseDoor").append(`<option value="3">3</option>`);
            $("#chooseDoor").append(`<option value="4">4</option>`);
            $("#chooseDoor").append(`<option value="5">5</option>`);
            $("#chooseDoor").append(`<option value="6">6</option>`);
            $("#chooseDoor").append(`<option value="7" selected>7</option>`);
            $("#chooseDoor").append(`<option value="8">8</option>`);
            $("#chooseDoor").append(`<option value="9">9</option>`);
            $("#chooseDoor").append(`<option value="10">10</option>`);
            break;
        case "8":
            $("#chooseDoor").append(`<option value="1">1</option>`);
            $("#chooseDoor").append(`<option value="2">2</option>`);
            $("#chooseDoor").append(`<option value="3">3</option>`);
            $("#chooseDoor").append(`<option value="4">4</option>`);
            $("#chooseDoor").append(`<option value="5">5</option>`);
            $("#chooseDoor").append(`<option value="6">6</option>`);
            $("#chooseDoor").append(`<option value="7">7</option>`);
            $("#chooseDoor").append(`<option value="8" selected>8</option>`);
            $("#chooseDoor").append(`<option value="9">9</option>`);
            $("#chooseDoor").append(`<option value="10">10</option>`);
            break;
        case "9":
            $("#chooseDoor").append(`<option value="1">1</option>`);
            $("#chooseDoor").append(`<option value="2">2</option>`);
            $("#chooseDoor").append(`<option value="3">3</option>`);
            $("#chooseDoor").append(`<option value="4">4</option>`);
            $("#chooseDoor").append(`<option value="5">5</option>`);
            $("#chooseDoor").append(`<option value="6">6</option>`);
            $("#chooseDoor").append(`<option value="7">7</option>`);
            $("#chooseDoor").append(`<option value="8">8</option>`);
            $("#chooseDoor").append(`<option value="9" selected>9</option>`);
            $("#chooseDoor").append(`<option value="10">10</option>`);
            break;
        case "10":
            $("#chooseDoor").append(`<option value="1">1</option>`);
            $("#chooseDoor").append(`<option value="2">2</option>`);
            $("#chooseDoor").append(`<option value="3">3</option>`);
            $("#chooseDoor").append(`<option value="4">4</option>`);
            $("#chooseDoor").append(`<option value="5">5</option>`);
            $("#chooseDoor").append(`<option value="6">6</option>`);
            $("#chooseDoor").append(`<option value="7">7</option>`);
            $("#chooseDoor").append(`<option value="8">8</option>`);
            $("#chooseDoor").append(`<option value="9">9</option>`);
            $("#chooseDoor").append(`<option value="10" selected>10</option>`);
            break;
        default:
            $("#chooseDoor").append(`<option value="1">1</option>`);
            $("#chooseDoor").append(`<option value="2">2</option>`);
            $("#chooseDoor").append(`<option value="3">3</option>`);
            $("#chooseDoor").append(`<option value="4">4</option>`);
            $("#chooseDoor").append(`<option value="5">5</option>`);
            $("#chooseDoor").append(`<option value="6">6</option>`);
            $("#chooseDoor").append(`<option value="7">7</option>`);
            $("#chooseDoor").append(`<option value="8">8</option>`);
            $("#chooseDoor").append(`<option value="9">9</option>`);
            $("#chooseDoor").append(`<option value="10">10</option>`);
            break;
    }

});