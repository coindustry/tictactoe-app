import React from 'react';
import ReactDOM from 'react-dom';

const Board = () => {
    const [player, setPlayer] = React.useState(1);
    const [gameState, setGameState] = React.useState([]);
    const [status, setStatus] = React.useState("Next Player: X");

    const takeTurn = (id) => {
        setGameState([...gameState, { id: id, player: player }]);
        setPlayer((player + 1) % 2);
        return player;
    };

    const renderSquare = (id) => {
        return <Square takeTurn={takeTurn} id={id} />;
    };

    const checkForWinner = (gameState) => {
        if (gameState.length < 5) return 'No Winner Yet';
        
        const p0 = gameState.filter((item) => item.player === 0).map((item) => item.id);
        const px = gameState.filter((item) => item.player === 1).map((item) => item.id);

        const win0 = win.filter((item) => isSuperset(new Set(p0), new Set(item)));
        const winX = win.filter((item) => isSuperset(new Set(px), new Set(item)));

        if (win0.length > 0) return 'Player O';
        else if (winX.length > 0) return 'Player X';
        return 'No Winner Yet';
    };

    React.useEffect(() => {
        const winner = checkForWinner(gameState);
        setStatus(winner !== 'No Winner Yet' ? `Winner is ${winner}` : `Next Player: ${player === 0 ? 'O' : 'X'}`);
    }, [gameState, player]);

    return (
        <div className="game-board">
            {[0, 1, 2].map(row => (
                <div key={row} className="grid-row">
                    {[0, 1, 2].map(col => renderSquare(row * 3 + col))}
                </div>
            ))}
            <div id="info">
                <h1 id="turn">{status}</h1>
            </div>
        </div>
    );
};

const Square = ({ takeTurn, id }) => {
    const [filled, setFilled] = React.useState(false);
    const [tik, setTik] = React.useState(2);

    const mark = ['O', 'X', '+'];

    return (
        <button
            className={tik === 1 ? 'red' : 'white'}
            disabled={filled}
            onClick={() => {
                setTik(takeTurn(id));
                setFilled(true);
            }}
        >
            <h1>{mark[tik]}</h1>
        </button>
    );
};

const Game = () => {
    return (
        <div className="game">
            <Board />
        </div>
    );
};

const win = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
];

function isSuperset(set, subset) {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}

export const Tictactoe = () => {
    return (
        <div className="game">
            <Board />
        </div>
    );
};

ReactDOM.render(<Tictactoe />, document.getElementById('root'));;
