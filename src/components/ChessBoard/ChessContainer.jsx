
import {clickSquareAction, forNextMoveAction} from "../state/chess-reducer";
import Square from "./Square";


let ChessContainer = (props) => {

    let state = props.store.getState()

    const onSquareClick = () => {
        const xCoord = state.chessPage.coordX
        const yCoord = state.chessPage.coordY
        let action = clickSquareAction(xCoord, yCoord)
        let action2 = forNextMoveAction(xCoord, yCoord)
        props.store.dispatch(action)
        props.store.dispatch(action2)

    }

    return (
        <Square clickSquare = {onSquareClick} nextMoveType = {onSquareClick}
                hasKnight = {state.chessPage.hasKnight}
                nextMove = {state.chessPage.nextMove}
        />
    )
}

export default ChessContainer;