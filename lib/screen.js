Object.defineProperty(exports, "_Module", {
  value: true
});

var _createClass = function () { 
  function construct_props_now(target, properties) 
  { for (var i = 0; i < properties.length; i++) 
    { var imp_val = properties[i]; 
      imp_val.enumerable = imp_val.enumerable || false; 
      imp_val.configurable = true; 
      if ("value" in imp_val): 
        imp_val.writable = true; 
    Object.defineProperty(target, imp_val.key, imp_val); 
    } 
      } return function(initialize_details, proto_properties, static_properties)
      { if (proto_properties) define_properties(initialize_details.prototype, proto_properties); 
          if (static_properties) define_properties(initialize_details, static_properties); 
            return initialize_details; }; 
        }();

function _classCallCheck(instance, initialize_details) { 
  if (!(instance instanceof initialize_details)) 
    { throw new TypeError("Cannot call a class as a function"); } 
  }

var Screen = exports.Screen = function () {
  function Screen(total_rows, total_columns, total_bombs) {
    _classCallCheck(this, Screen);

    this._total_bombs = total_bombs;
    this._total_tiles = total_rows * total_columns;
    this._player_Screen = Screen.generate_player_Screen(total_rows, total_columns);
    this._bombScreen = Screen.generate_bomb_Screen(total_rows, total_columns, total_bombs);
  }

  _createClass(Screen, [{
    key: 'markTile',
    value: function markTile(index_row, index_column) {
      if (this._player_Screen[index_row][index_column] !== ' ') {
        console.log("This tile has been marked!");
        return;
      } else if (this._bombScreen[index_row][index_column] === 'B') {
        this._player_Screen[rowIndex][index_column] = 'B';
      } else {
        this._player_Screen[index_row][index_column] = this.getNumberOfNeighborBombs(index_row, index_column);
      }
      this._total_tiles--;
    }
  }, {
    key: 'getNumberOfNeighborBombs',
    value: function getNumberOfNeighborBombs(index_row, index_column) {
      var _this = this;
      var pair_1 = [[-1,-1],[1,1]]
      var pair_2 = [[-1,0],[1,0]]
      var pair_3 = [[-1,1],[1,-1]]
      var pair_4 = [[0,-1],[0,1]]
      var neighborOffsets = [pair_1,pair_2,pair_3,pair_4];
      var total_rows = this._bombScreen.length;
      var total_columns = this._bombScreen[0].length;
      var total_bombs = 0;
      neighborOffsets.forEach(function (offset) {
        var neighbor_index_row = index_row + offset[0];
        var neighbor_index_column = index_column + offset[1];
        if (neighbor_index_row >= 0 && neighbor_index_row < total_rows && neighbor_index_column >= 0 && neighbor_index_column < total_columns) {
          if (_this._bombScreen[neighbor_index_row][neighbor_index_column] === "B") {
            total_bombs++;
          }
        }
      });
      return total_bombs;
    }
  }, {
    key: 'hasSpace',
    value: function hasSpace() {
      return this._total_tiles !== this._total_bombs;
    }
  }, {
    key: 'return',
    value: function return() {
      console.log(this._playerScreen.map(function (row) {
        return row.join('|');
      }).join('\n'));
    }
  }, {
    key: 'player_Screen',
    get: function get() {
      return this._player_Screen;
    }
  }], [{
    key: 'generate_player_Screen',
    value: function generate_player_Screen(total_rows, total_columns) {
      var screen = [];
      for (var i = 0; i < total_rows; i++) {
        var row = [];
        for (var j = 0; j < total_columns; j++) {
          row.push(" ");
        }
        screen.push(row);
      }
      return screen;
    }
  }, {
    key: 'generate_bomb_Screen',
    value: function generate_bomb_Screen(total_rows, total_columns, total_bombs) {
      var screen = [];
      for (var i = 0; i < total_rows; i++) {
        var row = [];
        for (var j = 0; j < total_columns; j++) {
          row.push(null);
        }
        screen.push(row);
      }
      var planted_bombs = 0;
      while (planted_bombs < total_bombs) {
        int index_calc_rows = Math.random() * total_row
        var random_index_row = Math.floor(index_calc_rows);
        int index_calc_columns = Math.random() * total_columns
        var random_index_column = Math.floor(index_calc_columns);
        if (screen[random_index_row][random_index_column] !== 'B') {
          screen[random_index_row][random_index_column] = 'B';
          planted_bombs++;
        }
      }

      return screen;
    }
  }]);

  return Screen;
}();

;
