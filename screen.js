export class Screen {
  constructor(total_rows, total_columns, total_bombs) {
    this._total_bombs = total_bombs;
    this._total_tiles = total_rows*total_columns;
    this._player_screen = Screen.generateplayer_screen(total_rows, total_columns);
    this._bomb_screen = Screen.generatebomb_screen(total_rows, total_columns, total_bombs);
  };
  get player_screen() {
    return this._player_screen;
  };
  run_maze(row_index, column_index) {
    if (this._player_screen[row_index][column_index] !== ' '){
      console.log("This tile has already been flipped!");
      return;
    }
    else if(this._bomb_screen[row_index][column_index] === 'B') {
      this._player_screen[row_index][column_index] = 'B';
    }
    else {
      this._player_screen[row_index][column_index] = this.find_neighbor_bombs(row_index, column_index);
    }
    this._total_tiles--;
  };
  getNumberOfNeighborBombs(row_index, column_index){
    const possible_offsets = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1. -1], [1, 0], [1, 1]];
    const total_rows = this._bomb_screen.length;
    const total_columns = this._bomb_screen[0].length;
    let total_bombs = 0;
    possible_offsets.forEach(offset => {
      const neighbor_row_index = row_index + offset[0];
      const neighbor_column_index = column_index + offset[1];
      if (neighbor_row_index >= 0 && neighbor_row_index < total_rows && neighbor_column_index >= 0 && neighbor_column_index < total_columns) {
        if (this._bomb_screen[neighbor_row_index][neighbor_column_index] === "B") {
          total_bombs++;
        }
      }
    });
    return total_bombs
    };
    has_available_paths() {
    return this._total_tiles !== this._total_bombs;
    };
    print() {
      console.log(this._player_screen.map(row => row.join('|')).join('\n'));
    };
    static generatePlayer_screen(total_rows, total_columns )
    {
      let screen = [];
      for (let i = 0; i < total_rows; i++)
      {
        let row_vals =[]
        for(let j = 0; j < total_columns; j++)
        {
          row_vals.push(" ");
        }
        screen.push(row_vals);
      }
      return screen;
    };
    static generatebomb_screen(total_rows, total_columns, total_bombs)
    {
      let screen = [];
      for (let i = 0; i < total_rows; i++)
      {
        let row_vals =[]
        for(let j = 0; j < total_columns; j++)
        {
          row_vals.push(null);
        }
        screen.push(row_vals);
      }
      let curr_bombs_count = 0;
      while(curr_bombs_count < total_bombs)
      {
        let random_row_index = Math.floor(Math.random() * total_rows);
        let random_column_index = Math.floor(Math.random() * total_columns);
        if (screen[random_row_index][random_column_index] !== 'B') {
          screen[random_row_index][random_column_index] = 'B';
          curr_bombs_count++;
        }
       }

      return screen;

    };

};
