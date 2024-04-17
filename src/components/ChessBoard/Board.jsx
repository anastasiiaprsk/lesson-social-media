import classes from './Chess.module.css'
import Square from "./Square";
import React from "react";

let Board = (props) => {

    const colorChess = props.chessPage.chessBoard.map((elem) => {
        return <Square data={elem} dispatch = {props.dispatch}/>;
    });

    return (
        <div>
            <div className={classes.coordX}>
                <div className={classes.bukva}>A</div>
                <div className={classes.bukva}>B</div>
                <div className={classes.bukva}>C</div>
                <div className={classes.bukva}>D</div>
                <div className={classes.bukva}>E</div>
                <div className={classes.bukva}>F</div>
                <div className={classes.bukva}>G</div>
                <div className={classes.bukva}>H</div>
            </div>

            <div>
                <div className={classes.board}>
                    {colorChess}
                </div>

                <div className={classes.coordY}>
                    <div className={classes.number}>8</div>
                    <div className={classes.number}>7</div>
                    <div className={classes.number}>6</div>
                    <div className={classes.number}>5</div>
                    <div className={classes.number}>4</div>
                    <div className={classes.number}>3</div>
                    <div className={classes.number}>2</div>
                    <div className={classes.number}>1</div>

                </div>
            </div>


        </div>


    )
}

export default Board