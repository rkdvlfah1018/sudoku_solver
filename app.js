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

const playground = document.getElementById("board")
playground.addEventListener('click', function(e){
    var target = e.target;
    if (target.tagName === 'TD'){
        var currentText = target.textContent;
        target.innerHTML = '<input type="text" maxlength = "1" value="' + currentText + '">';
        var input = target.querySelector('input');
        input.focus();

        input.addEventListener('input', function() {
            var newValue = this.value.replace(/[^1-9]/g, ''); // Remove any non-numeric values from 1 to 9
            this.value = newValue;
        });

        input.addEventListener('blur', function() {
          var newText = input.value;
          target.innerHTML = newText;
        });
    }
})