import classes from './Chess.module.css'
import Knight from "./Knight";
import Point from './point'

let Square = (props) => {

    let knight = props.hasKnight
    let content;

    if (knight) {
        content = <Knight/>;
    }

    let point = props.nextMove

    let forPoint
    if(point) {
        forPoint = <Point/>
    }

    const onSquareClick = () => {
        props.clickSquare()
        props.nextMoveType()

    }

    return (
        <div className={classes.square} onClick={onSquareClick} style={{ backgroundColor: props.data.color }}>
            {content}
            {forPoint}
        </div>
    )
}

export default Square