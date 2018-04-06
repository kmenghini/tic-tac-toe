import React, { Component } from 'react';
import Square from './Square';
import styles from './board.css';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBoard: [[0,0,0],[0,0,0],[0,0,0]],
      lastPlayer: 'O'
    }
  }

  handleSquareClick(row, column) {
    if (!this.state.currentBoard[row][column]) {
      var currentPlayer = this.state.lastPlayer === 'O' ? 'X' : 'O';
      this.toggleSquare(row, column, currentPlayer);
      this.setState({lastPlayer: currentPlayer});
    } else {
      alert('that square is taken! try again!');
    }
  }

  toggleSquare(row, column, player) {
    var board = this.state.currentBoard;
    board[row][column] = player;
    this.setState({currentBoard: board});
    this.checkBoard(this.state.currentBoard)
    //TODO: make this async so board updates before winner is announced
  }

  checkBoard(board) {
    //check rows
    board.forEach(row => {
      if (row[0] === row[1] && row[1] === row[2]) {
        if (row[0]) {
          alert(`player ${row[0]} wins!`)
        }
      }
    });
    //check columns
    for (var i = 0; i < 3; i++) {
      if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        if (board[0][i]) {
          alert(`player ${board[0][i]} wins!`)          
        }
      }
    }
    //check diagonals
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      if (board[0][0]) {
        alert(`player ${board[0][0]} wins!`)          
      }
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      if (board[0][2]) {
        alert(`player ${board[0][2]} wins!`)          
      }
    }
  }

  render() {
    return (
    <div className="board">
      {this.state.currentBoard.map((row, rowIndex) => 
        <div className="row">
          {row.map((square, colIndex) => 
            <Square rowIndex={rowIndex} colIndex={colIndex} onSquareClick={this.handleSquareClick.bind(this)} text={square}/>
          )}       
        </div>
      )}
    </div>
    )
  }
}

export default Board;