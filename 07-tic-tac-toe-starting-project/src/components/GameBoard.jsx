import { useState } from "react"

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

export default function GameBoard(){
    const [gameBoard,setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex){
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = "X";
            return updatedBoard;
        });
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex)=> 
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol,colIndex)=> 
                    <li key={colIndex}>
                        <button onClick={() => handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )
}

/*
1️⃣ What state looks like at the start
const [gameBoard, setGameBoard] = useState(initialGameBoard);


Initial state in memory:

gameBoard =
[
  [null, null, null],
  [null, null, null],
  [null, null, null]
]


So when React renders:

<button>{playerSymbol}</button>


playerSymbol is null → button shows nothing.

2️⃣ How the board is rendered (recap)
gameBoard.map((row, rowIndex) => ...)


Creates rows

Inside:

row.map((playerSymbol, colIndex) => ...)


Creates cells

Each button remembers its position:

onClick={() => handleSelectSquare(rowIndex, colIndex)}


So every button knows:

"I am row X, column Y"

3️⃣ What happens when you CLICK a button

Let’s say you click top-left cell.

That means:

handleSelectSquare(0, 0);

4️⃣ setGameBoard runs (IMPORTANT PART)
setGameBoard((prevGameBoard) => {


React gives you the current state snapshot:

prevGameBoard =
[
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

5️⃣ Why you COPY the board (immutability)
const updatedBoard = prevGameBoard.map(
  innerArray => [...innerArray]
);


This creates a deep copy:

updatedBoard =
[
  [null, null, null],
  [null, null, null],
  [null, null, null]
]


❗ Why?
Because you must NOT mutate state directly.

This would be ❌ WRONG:

prevGameBoard[rowIndex][colIndex] = "X";

6️⃣ Where the "X" ACTUALLY comes from
updatedBoard[rowIndex][colIndex] = "X";


For our click:

updatedBoard[0][0] = "X";


Now board becomes:

[
  ["X", null, null],
  [null, null, null],
  [null, null, null]
]


🔥 THIS is where the "X" is created.

7️⃣ Returning the new state
return updatedBoard;


React:

Sees state changed

Triggers a re-render

Calls GameBoard() again

8️⃣ Re-render: how "X" appears in UI

During re-render:

{row.map((playerSymbol) => (
  <button>{playerSymbol}</button>
))}


Now:

playerSymbol is "X" for [0][0]

Other cells are still null

So React renders:

[X][ ][ ]
[ ][ ][ ]
[ ][ ][ ]


✨ Magic explained — no DOM manipulation, just data → UI.

9️⃣ Why React feels “instant”

React does:

Virtual DOM diff

Updates only that one button

Super fast

You never touch the DOM manually.

🔑 One sentence that explains EVERYTHING

The UI is a pure reflection of state.
Change the state → React redraws the UI.

🧠 Final mental model (burn this in)
Click button
→ handler runs
→ state copy created
→ X added to copy
→ state updated
→ component re-renders
→ JSX reads new state
→ X appears 

*/