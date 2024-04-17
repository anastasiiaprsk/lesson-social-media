import classes from './Chess.module.css'
import Knight from "./Knight";
import Point from './point'
import {clickSquareAction, forNextMoveAction} from "../state/chess-reducer";


let Square = (props) => {

    let knight = props.data.hasKnight
    let content;

    if (knight) {
        content = <Knight/>;
    }

    let point = props.data.nextMove

    let forPoint
    if(point) {
        forPoint = <Point/>
    }

    const onSquareClick = () => {
        const xCoord = props.data.coordX
        const yCoord = props.data.coordY
        let action = clickSquareAction(xCoord, yCoord)
        let action2 = forNextMoveAction(xCoord, yCoord)
        props.dispatch(action)
        props.dispatch(action2)

    }


    
    return (
        <div className={classes.square} onClick={onSquareClick} style={{ backgroundColor: props.data.color }}>
            {content}
            {forPoint}
        </div>
    )
}

export default Square