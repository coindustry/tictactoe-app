[Play the Game](https://coindustry.github.io/tictactoe-app/)
# Tic Tac Toe Game

This project is a simple implementation of the classic Tic Tac Toe game built using React.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Roadmap of Future Improvements](#roadmap-of-future-improvements)

## Features
- Allows two players to take turns marking squares on a 3x3 grid.
- Tracks the game state and determines the winner or if the game is a tie.
- Displays the current player's turn and the winner when the game ends.

## Technologies Used
- React
- JavaScript (ES6+)
- HTML
- CSS

## Installation
1. Clone the repository: `git clone https://github.com/your-username/tic-tac-toe.git`
2. Navigate to the project directory: `cd tic-tac-toe`
3. Install dependencies: `npm install`

## Usage
1. Start the development server: `npm start`
2. Open your browser and navigate to `http://localhost:3000`

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you find any bugs or have suggestions for improvements.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Roadmap of Future Improvements
One feature I would like to implement is to change the color of the winning row once the game is finished to highlight the winner. Another improvement could be to display a message if the game ends in a tie.

One way to implement the winning row changing color could be using ternary operators like this:

```jsx
return (
    <button onClick={() => { setTik(takeTurn(id)); setFilled(true); }}>
        {/* Apply conditional class based on the winning row */}
        <h1 className={id === winningRow ? "winning-row" : ""}>{mark[tik]}</h1>
    </button>
);
