import Helper from './helper';

export class Solution {
  constructor(grid) {
    this.grid = grid;
  }

  checkRow(rowIndex) {
    let row = [];
    for(var i=0; i<9; i++) {
      row.push(this.grid[rowIndex][i]);
    }
    let result = Helper.arrayCheck(row);
    return result;
  }

  checkColumn(colIndex) {
    var col = [];
    for(var i=0; i<this.grid.length; i++) {
      col.push(this.grid[i][colIndex]);
    }
    var result = Helper.arrayCheck(col);
    return result;
  }

  checkUnit(unitIndex) {
    var unit = [];
    var j = Math.floor(unitIndex/3)*3;  //vertical index
    var jMax = j + 3;
    for(j; j < jMax; j++) {
      var i = (unitIndex%3)*3; //horizontal index
      var iMax = i + 3;
      for(i; i < iMax; i++) {
        unit.push(this.grid[j][i]);
      }
    }
    var result = Helper.arrayCheck(unit);
    return result;
  }

  checkAll() {
    //check for complete rows
    for (var i = 0; i < 9; i++) {
      if (this.grid[i].includes(0)) {
        return false;
      }
    }
    //check for unique value
    for (var j = 0; j < 9; j++) {
      if ((this.checkUnit(j)===false) || (this.checkRow(j)===false) || (this.checkColumn(j)===false)) {
        return false;
      }
    }
    return true;
  }
}
