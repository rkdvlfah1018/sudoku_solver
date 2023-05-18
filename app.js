var board = [];

for (let i = 0; i < 9; i++){
    $('table').append("<tr class='row'></tr>");
    board.push([]);
}

for (let j = 0; j < 9; j++){
    $('.row').append("<td></td>")
    for (let k = 0; k < 9; k++){
        board[j].push(-1);
    }
}


$(document).ready(function(){
    $("td").click(function() {

        var column_num = parseInt( $(this).index() ) + 1;
        var row_num = parseInt( $(this).parent().index() )+1;

        console.log(row_num, ", " ,column_num)
    });
});