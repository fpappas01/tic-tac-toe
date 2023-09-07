Tic Tac Toe Game with Minimax AI
This is a simple implementation of the classic Tic Tac Toe game with a challenging Minimax AI opponent. The frontend is built using Angular, and the server-side logic implements the Minimax algorithm to provide a competitive AI opponent.

Features
Play Tic Tac Toe against a smart AI opponent.
A responsive and user-friendly UI built with Angular.
The AI opponent uses the Minimax algorithm to make strategic moves.
Enjoy a two-player mode for some fun with friends.
A clean and intuitive interface.
Prerequisites
Node.js and npm installed on your machine.

Angular CLI installed globally. You can install it using the following command:

shell
Copy code
npm install -g @angular/cli
Getting Started
Clone this repository to your local machine:

shell
Copy code
git clone https://github.com/your-username/tic-tac-toe-minimax.git
Change to the project directory:

shell
Copy code
cd tic-tac-toe-minimax
Install the frontend dependencies:

shell
Copy code
cd frontend
npm install
Start the frontend application:

shell
Copy code
ng serve
The application should be available at http://localhost:4200/ in your browser.

Running the Minimax AI Server
Change to the server directory:

shell
Copy code
cd ../server
Install the server dependencies:

shell
Copy code
npm install
Start the server:

shell
Copy code
npm start
The server should be running at http://localhost:3000/.

How to Play
Open the application in your web browser at http://localhost:4200/.

You can start a new game by clicking the "New Game" button.

Play against the Minimax AI opponent or invite a friend to play with you.

To make a move, simply click on an empty cell on the game board.

AI Minimax Algorithm
The Minimax algorithm is used to power the AI opponent. It ensures that the AI makes optimal moves to either win or tie the game. The AI explores all possible moves and selects the best one based on the minimax score.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Special thanks to the developers of Angular for providing an excellent framework for building the frontend.
Thanks to the creators of the Minimax algorithm for making the AI opponent challenging and fun to play against.
Enjoy the game!
