import classes from './Chess.module.css'
import Knight from "./Knight";
import Point from './point'
import {useDispatch} from "react-redux";
import {clickSquareAction, forNextMoveAction} from "../state/chess-reducer";

let Square = (props) => {
    const dispatch = useDispatch()

    let hasKnight = props.data.hasKnight
    let nextMove = props.data.nextMove

    const onSquareClick = () => {
        const xCoord = props.data.coordX
        const yCoord = props.data.coordY
        dispatch(clickSquareAction(xCoord, yCoord))
        dispatch(forNextMoveAction(xCoord, yCoord))
    }
    return (
        <div className={classes.square} onClick={onSquareClick} style={{ backgroundColor: props.data.color }}>
            {hasKnight === true ? <Knight /> : null}
            {nextMove === true ? <Point/> : null}
        </div>
    )
}
export default Square