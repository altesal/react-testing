import { useState } from 'react'
import './App.css'


const TURNS = {
  X: 'x',
  O: 'o'
} 

const board = Array(9).fill(null) 

const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  
  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick}  className={className}>
        {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]


function App() {
 const [board, setBoard] = useState(Array(9).fill(null))
 const [turn, setTurn] = useState(TURNS.X)
 const [winner, setWinner] = useState(null) //null es que no hay ganador, false es que hay empate
 
const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if(
      boardToCheck[a] && //si la posicion a tiene algo
      boardToCheck[a] === boardToCheck[b] && //si la posicion a es igual a la b
      boardToCheck[a] === boardToCheck[c] //si la posicion a es igual a la c
    ) {
      return boardToCheck[a] //retorna el ganador X u O
    }
  }
  return null //no hay ganador
  }

 const updateBoard = (index) => {
  if(board[index] || winner) return //No actualiza la posicion si ya tiene algo o si hay un ganador
  const newBoard = [...board]  //Copia de un array para evitar modificar el original
  newBoard[index] = turn
  setBoard(newBoard)
   const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
   setTurn(newTurn)
   //revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner) {
      alert(`El ganador es ${newWinner}`)
      setWinner(newWinner) //actualiza el estado del ganador y es  ASINCRONO!!!!!
      //IMPORTAN´TISIMO: LA ACTUALIZACIÓN DEL ESTADO ES ASINCRONA, 
      //POR LO TANTO NO SE PUEDE USAR EL ESTADO INMEDIATAMENTE DESPUÉS DE ACTUALIZARLO
    } else if(!newBoard.includes(null)) {
      setWinner(false) //empate
    }
  }

  return (
    <main className='board'>
      <h1>TIC TAC TOE</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <div key={index} className='cell'>
                <Square 
                  key={index} 
                  index={index} 
                  updateBoard={updateBoard}
                  >
                       {board[index]}          
                </Square>
              </div>
            )
          })
        }
      </section> 
      <section className='turn'> 
        <Square isSelected={turn == TURNS.X}>
          {TURNS.X}  
        </Square>
        <Square isSelected={turn == TURNS.O}>
          {TURNS.O}  
        </Square>

      </section>
    </main>
  )



  
}

export default App
