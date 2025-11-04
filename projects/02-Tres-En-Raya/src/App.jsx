import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom , checkEndGame} from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'

const board = Array(9).fill(null) 


function App() {
 const [board, setBoard] = useState(Array(9).fill(null))
 const [turn, setTurn] = useState(TURNS.X)
 const [winner, setWinner] = useState(null) //null es que no hay ganador, false es que hay empate




 const updateBoard = (index) => {
  if(board[index] || winner) return //No actualiza la posicion si ya tiene algo o si hay un ganador
  const newBoard = [...board]  //Copia de un array para evitar modificar el original
  newBoard[index] = turn
  setBoard(newBoard) //asíncrona, ojo, actualizacón asíncrona del estado
   const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
   setTurn(newTurn)
   //revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner) {
      //alert(`El ganador es ${newWinner}`)
      confetti()
      setWinner(newWinner) //actualiza el estado del ganador y es  ASINCRONO!!!!!
      //IMPORTAN´TISIMO: LA ACTUALIZACIÓN DEL ESTADO ES ASINCRONA, 
      //POR LO TANTO NO SE PUEDE USAR EL ESTADO INMEDIATAMENTE DESPUÉS DE ACTUALIZARLO
    }  else if(checkEndGame(newBoard)) {
    //else if(!newBoard.includes(null)) {
      setWinner(false) //empate
    }
  }

const resetGame = () => { //Volver a setear con el estado que quieras
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setWinner(null)
}

  return (
    <main className='board'>
      <h1>TIC TAC TOE</h1>
      <button onClick={resetGame}>Reset del juego</button>
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

<WinnerModal resetGame={resetGame} winner={winner} />

    </main>
  )



  
}

export default App
