var move = 1;
var play = true;

$("table tr td").on('click', function (){
   if($(this).text() == '' && play) {
       if(move%2 == 1) {
           $(this).append('X');
           $(this).css('color', '#61892f');
       } else {
           $(this).append('O');
           $(this).css('color', '#e85a4f');
       }
       move++;
   }

   if(findWinner() != -1 && findWinner() != '') {
       if(findWinner() == 'X') {
           $('body').append('<div class="winner"><span>Winner</span>X</div>');
           $('body').append('<button onclick="location.reload()">Play Again</button>');
           $('button').css('color', '#61892f');
       } else if(findWinner() == 'O') {
           $('body').append('<div class="winner"><span>Winner</span>O</div>');
           $('body').append('<button onclick="location.reload()">Play Again</button>');
           $('button').css('color', '#e85a4f');
       }
   }
});

/* -------- Start of findWinner Method -------- */
function findWinner () {
    var sp1 = $('table tbody tr:nth-child(1) td:nth-child(1)').text();
    var sp2 = $('table tbody tr:nth-child(1) td:nth-child(2)').text();
    var sp3 = $('table tbody tr:nth-child(1) td:nth-child(3)').text();
    var sp4 = $('table tbody tr:nth-child(2) td:nth-child(1)').text();
    var sp5 = $('table tbody tr:nth-child(2) td:nth-child(2)').text();
    var sp6 = $('table tbody tr:nth-child(2) td:nth-child(3)').text();
    var sp7 = $('table tbody tr:nth-child(3) td:nth-child(1)').text();
    var sp8 = $('table tbody tr:nth-child(3) td:nth-child(2)').text();
    var sp9 = $('table tbody tr:nth-child(3) td:nth-child(3)').text();

    /* -------- Start of Check Row -------- */
    if((sp1 == sp2) && (sp2 == sp3)) {
        return sp3;
    } else if((sp4 == sp5) && (sp5 == sp6)) {
        return sp6;
    } else if((sp7 == sp8) && (sp8 == sp9)) {
        return sp9;
    }
    /* -------- End of Check Row ---------- */

    /* -------- Start of Check Column -------- */
    if((sp1 == sp4) && (sp4 == sp7)) {
        return sp7;
    } else if((sp2 == sp5) && (sp5 == sp8)) {
        return sp8;
    } else if((sp3 == sp6) && (sp6 == sp9)) {
        return sp9;
    }
    /* -------- End of Check Column ---------- */

    /* -------- Start of Check Diagonal -------- */
    if((sp1 == sp5) && (sp5 == sp9)) {
        return sp9;
    } else if((sp3 == sp5) && (sp5 == sp7)) {
        return sp7;
    }
    /* -------- End of Check Diagonal ---------- */

    return -1;
}
/* -------- End of findWinner Method ---------- */