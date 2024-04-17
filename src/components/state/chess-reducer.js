let clickSquare = 'click-square'
let nextMoveType = 'for-next-move'

let chessReducer = (state, action) => {

    if(action.type === clickSquare){
        for(let i = 0; i < state.chessBoard.length; i++){
            if(state.chessBoard[i].hasKnight){
                state.chessBoard[i].hasKnight = false
            }
        }
        for(let i = 0; i < state.chessBoard.length; i++){
            if(state.chessBoard[i].coordX === action.x
                && state.chessBoard[i].coordY === action.y){
                state.chessBoard[i].hasKnight = true
            }
        }
    } else if(action.type === nextMoveType){
        let x = action.x
        let y = action.y
        let coordinate = [
            {yY: y + 2, xX: x - 1}, // 3_6
            {yY: y + 2, xX: x + 1}, // 3_9
            {yY: y + 1, xX: x - 2},
            {yY: y + 1, xX: x + 2},

            {yY: y - 1, xX: x - 2},
            {yY: y - 1, xX: x + 2},
            {yY: y - 2, xX: x - 1},
            {yY: y - 2, xX: x + 1}
        ].filter(el => el.xX <= 8 && el.yY <= 8 && el.xX >= 1 && el.yY >= 1);

        for(let i = 0; i < state.chessBoard.length; i++){
            let obj = state.chessBoard[i]
            state.chessBoard[i].nextMove = false
            for(let j = 0; j < coordinate.length; j++){
                let yCoordinate = coordinate[j].yY
                let xCoordinate = coordinate[j].xX

                if(yCoordinate === obj.coordY && xCoordinate === obj.coordX) {
                    obj.nextMove = true
                }
            }
        }
    }

    return state
}


export let clickSquareAction = (xCoord, yCoord) => {
    return {type: clickSquare, x: xCoord, y: yCoord}
}
export let forNextMoveAction = (xCoord, yCoord) => {
    return {type: nextMoveType, x: xCoord, y: yCoord}
}

export default chessReducer;