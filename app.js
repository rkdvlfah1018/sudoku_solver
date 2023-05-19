var board = [];

for (let i = 0; i < 9; i++){
    $('table').append("<tr class='row'></tr>");
    board.push([]);
}

for (let j = 0; j < 9; j++){
    $('.row').append("<td></td>")
    for (let k = 0; k < 9; k++){
        board[j].push(-1); //empty cells are -1
    }
}

const playground = document.getElementById("board")
playground.addEventListener('click', function(e){
    var target = e.target;
    if (target.tagName === 'TD'){
        // find row and column indexes
        var rowIndex = target.parentNode.rowIndex;
        var columnIndex = target.cellIndex;

        var currentText = target.textContent;
        target.innerHTML = '<input type="text" maxlength = "1" value="' + currentText + '">';
        var input = target.querySelector('input');
        input.focus();

        input.addEventListener('input', function() {
            var newValue = this.value.replace(/[^1-9]/g, ''); // Remove any non-numeric values from 1 to 9
            this.value = newValue;
            if (newValue == ""){
                board[rowIndex][columnIndex] = -1
            }
            else{
                board[rowIndex][columnIndex] = Number(newValue)
            }
        });

        input.addEventListener('blur', function() {
          var newText = input.value;
          target.innerHTML = newText;
        });
    }
})

var solveButton = document.getElementById("solve");

solveButton.addEventListener('click', function(){
    if(solve(board, 0, 0)){
        console.log(board)
    }
    else{
        alert("No solution")
    }
});

function solve(grid, row, col){
    if (row == 8 && col == 9){
        return true;
    }

    if (col == 9){
        row++;
        col = 0;
    }

    if (grid[row][col] != -1){
        return solve(grid, row, col + 1);
    }

    for(let num = 1; num < 10; num++){
        if (isSafe(grid, row, col, num)){
            grid[row][col] = num;

            if(solve(grid, row, col + 1)){
                return true;
            }
        }

        grid[row][col] = -1
    }
    return false
}

function isSafe(grid, row, col, num){
    for (let x = 0; x <= 8; x++){
        if (grid[row][x] == num){
            return false;
        }
    }

    for(let x = 0; x <= 8; x++){
        if (grid[x][col] == num){
            return false;
        }
    }
    
    let startRow = row - row % 3,
        startCol = col - col % 3;
         
    for(let i = 0; i < 3; i++)
        for(let j = 0; j < 3; j++)
            if (grid[i + startRow][j + startCol] == num)
                return false;
 
    return true;
 
}