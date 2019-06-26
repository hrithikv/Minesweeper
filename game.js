import {screen} from './screen';


class Game {
  constructor(total_rows, total_columns, total_bombs) {
    this._screen = new screen(total_rows, total_columns, total_bombs);

  };
  playMove(row_index, column_index) {
    this._screen.flipTile(row_index, column_index);
    if (this._screen.player_screen[row_index][column_index] === 'B')
    {
      console.log("You lose!");
      this._screen.println();
    }
    else if(!this._screen.has_available_paths()) {
      console.log("You won the game!");
      this._screen.println();
    }
    else {
      console.log("Current Status:");
      this._screen.print();
    }
  };
};
