import { WINNER_COMBOS } from "../constants.js";

export const checkWinnerFrom = (boardToCheck) => {
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

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square != null) //retorna true si todas las celdas están llenas
}