export class Board {
  constructor(total_rows, total_columns, total_bombs) {
    this._total_bombs = total_bombs;
    this._numberOfTiles = total_rows*total_columns;
    this._player_screen = Board.generateplayer_screen(total_rows, total_columns);
    this._bomb_screen = Board.generatebomb_screen(total_rows, total_columns, total_bombs);
  };
  get player_screen() {
    return this._player_screen;
  };
  run_maze(row_index, columnIndex) {
    if (this._player_screen[row_index][columnIndex] !== ' '){
      console.log("This tile has already been flipped!");
      return;
    }
    else if(this._bomb_screen[row_index][columnIndex] === 'B') {
      this._player_screen[row_index][columnIndex] = 'B';
    }
    else {
      this._player_screen[row_index][columnIndex] = this.find_neighbor_bombs(row_index, columnIndex);
    }
    this._numberOfTiles--;
  };
  getNumberOfNeighborBombs(row_index, columnIndex){
    const neighborOffsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1. -1], [1, 0], [1, 1]];
    const total_rows = this._bomb_screen.length;
    const total_columns = this._bomb_screen[0].length;
    let total_bombs = 0;
    neighborOffsets.forEach(offset => {
      const neighbor_row_index = row_index + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];
      if (neighbor_row_index >= 0 && neighbor_row_index < total_rows && neighborColumnIndex >= 0 && neighborColumnIndex < total_columns) {
        if (this._bomb_screen[neighbor_row_index][neighborColumnIndex] === "B") {
          total_bombs++;
        }
      }
    });
    return total_bombs
    };
    hasSafeTiles() {
    return this._numberOfTiles !== this._total_bombs;
    };
    print() {
      console.log(this._player_screen.map(row => row.join('|')).join('\n'));
    };
    static generatePlayer_screen(total_rows, total_columns )
    {
      let board = [];
      for (let i = 0; i < total_rows; i++)
      {
        let row =[]
        for(let j = 0; j < total_columns; j++)
        {
          row.push(" ");
        }
        board.push(row);
      }
      return board;
    };
    static generatebomb_screen(total_rows, total_columns, total_bombs)
    {
      let board = [];
      for (let i = 0; i < total_rows; i++)
      {
        let row =[]
        for(let j = 0; j < total_columns; j++)
        {
          row.push(null);
        }
        board.push(row);
      }
      let curr_bombs_count = 0;
      while(curr_bombs_count < total_bombs)
      {
        let random_row_index = Math.floor(Math.random() * total_rows);
        let randomColumnIndex = Math.floor(Math.random() * total_columns);
        if (board[random_row_index][randomColumnIndex] !== 'B') {
          board[random_row_index][randomColumnIndex] = 'B';
          curr_bombs_count++;
        }
       }

      return board;

    };

};
