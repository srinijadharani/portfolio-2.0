$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 150) {
            $("#nav").css("background", "#24a19c");
        } else {
            $("#nav").css("background", "transparent");
        }
    })
})

$(document).ready(function() {
    var letters = $('h1').text();
    var nHTML = '';
    for (var letter of letters) {
        nHTML += "<span class='t'>" + letter + "</span>";
    }
    $('h1').html(nHTML);
})


$(document).ready(function() {
    var letters = $('p').text();
    var nHTML = '';
    for (var letter of letters) {
        nHTML += "<span class='x'>" + letter + "</span>";
    }
    $('p').html(nHTML);
})

$(document).ready(function() {
    var letters = $('h2').text();
    var nHTML = '';
    for (var letter of letters) {
        nHTML += "<span class='y'>" + letter + "</span>";
    }
    $('h2').html(nHTML);
})

$(document).ready(function() {
    var letters = $('h3').text();
    var nHTML = '';
    for (var letter of letters) {
        nHTML += "<span class='y'>" + letter + "</span>";
    }
    $('h3').html(nHTML);
})