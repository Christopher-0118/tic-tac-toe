class TicTacToe {
    constructor() {
        this.arr = [[],[],[]];
        this.symbol = 'x';
    }

    getCurrentPlayerSymbol() {
       return this.symbol;

    }

    nextTurn(rowIndex, columnIndex) {
        var valueOfField = this.getFieldValue(rowIndex,columnIndex);

        if (!valueOfField) {
            this.arr[rowIndex][columnIndex] = this.symbol;
            
            if (this.symbol === 'x') {
                this.symbol = 'o';
            } else {
                this.symbol = 'x';
            }
        }      
    }

    isFinished() {
        return (this.getWinner() || this.noMoreTurns()) ? true : false;
    }

    getWinner() { 
        var j = 1;

        if ( ((this.arr[j - 1][j - 1] === this.arr[j][j]) && (this.arr[j][j] === this.arr[j + 1][j + 1]) && this.arr[j][j]) ||
            ((this.arr[j - 1][j + 1] === this.arr[j][j]) && (this.arr[j][j] === this.arr[j + 1][j - 1])) && this.arr[j][j] ) {
                return this.arr [j][j];
        }  
        for (var i = 0; i < this.arr.length; i++) {
            if ((this.arr[i][j - 1] === this.arr[i][j]) && (this.arr[i][j] === this.arr[i][j + 1]) && this.arr[i][j]) {
                return this.arr[i][j];
            } 
            if ((this.arr[j - 1][i] === this.arr[j][i]) && (this.arr[j][i] === this.arr[j + 1][i]) && this.arr[j][i]) {
                return this.arr[j][i];
            }
        }
        return null;       
    }

    noMoreTurns() {
        for (var i = 0; i < 3; i++){
            for (var j = 0; j < 3; j++) {
                if (!this.arr[i][j]){
                    return false;
                } 
            }
        }
        return true;  
    }
 
    isDraw() {
        if (!this.isFinished() || this.getWinner()) {
            return false;
        } else if (this.isFinished() && !this.getWinner()) {
            return true;
        }

    }

    getFieldValue(rowIndex, colIndex) {
        if (this.arr[rowIndex][colIndex]){
            return this.arr[rowIndex][colIndex];
        } else {
            return null;
        }
    }
}

module.exports = TicTacToe;
