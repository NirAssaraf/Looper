import React from 'react';
import Square from '../Square/Square';
import './Board.css'
class Board extends React.Component {
    renderSquare(i) {
    //  console.log(this.props);
      return (
        <Square
        value={this.props.squares[i].name}
        onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
      return (
        <div className="container">
          {this.renderSquare(0)}
          {/* <div className="board-row"> */}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          {/* </div> */}
          {/* <div className="board-row"> */}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          {/* </div> */}
          {/* <div className="board-row"> */}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          {/* </div> */}
        </div>
      );
    }
  }

  export default Board;