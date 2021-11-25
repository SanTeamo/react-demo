import React from 'react';
import styles from './game.module.css';

const Square = function Square(props) {
  const { onClick, value } = props;
  return (
    <button className={styles.square} onClick={onClick} type="button">
      {value}
    </button>
  );
};

const Board = function Board(props) {
  function renderSquare(i) {
    const { onClick, squares } = props;
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          onClick(i);
        }}
      />
    );
  }
  return (
    <div>
      <div className={styles['board-row']}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={styles['board-row']}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={styles['board-row']}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const { history, stepNumber, xIsNext } = this.state;
    const historySlice = history.slice(0, stepNumber + 1);
    const current = historySlice[historySlice.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    this.setState({
      history: historySlice.concat([
        {
          squares,
        },
      ]),
      stepNumber: historySlice.length,
      xIsNext: !xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const { history, stepNumber, xIsNext } = this.state;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        // eslint-disable-next-line react/no-array-index-key
        <li key={move}>
          <button onClick={() => this.jumpTo(move)} type="button">
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
    return (
      <div className={styles.game}>
        <div className={styles['game-info']}>
          <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
        </div>
        <div className={styles['game-info']}>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
