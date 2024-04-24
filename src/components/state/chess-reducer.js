let clickSquare = 'click-square'
let nextMoveType = 'for-next-move'

let initialState = {
    // chessBoard2: {
    //     '1_8': {
    //         color: 'white',
    //         coordX: 1,
    //         coordY: 8,
    //         hasKnight: false,
    //         nextMove: false
    //     },
    //     '2_8':  {
    //         color: 'black',
    //         coordX: 2,
    //         coordY: 8,
    //         hasKnight: false,
    //         nextMove: false
    //     },
    // },
    chessBoard: [
        {
            color: 'white',
            coordX: 1,
            coordY: 8,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 2,
            coordY: 8,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 3,
            coordY: 8,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 4,
            coordY: 8,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 5,
            coordY: 8,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 6,
            coordY: 8,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 7,
            coordY: 8,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 8,
            coordY: 8,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 1,
            coordY: 7,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 2,
            coordY: 7,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 3,
            coordY: 7,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 4,
            coordY: 7,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 5,
            coordY: 7,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 6,
            coordY: 7,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 7,
            coordY: 7,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 8,
            coordY: 7,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 1,
            coordY: 6,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 2,
            coordY: 6,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 3,
            coordY: 6,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 4,
            coordY: 6,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 5,
            coordY: 6,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 6,
            coordY: 6,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 7,
            coordY: 6,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 8,
            coordY: 6,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 1,
            coordY: 5,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 2,
            coordY: 5,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 3,
            coordY: 5,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 4,
            coordY: 5,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 5,
            coordY: 5,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 6,
            coordY: 5,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 7,
            coordY: 5,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 8,
            coordY: 5,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 1,
            coordY: 4,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 2,
            coordY: 4,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 3,
            coordY: 4,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 4,
            coordY: 4,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 5,
            coordY: 4,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 6,
            coordY: 4,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 7,
            coordY: 4,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 8,
            coordY: 4,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 1,
            coordY: 3,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 2,
            coordY: 3,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 3,
            coordY: 3,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 4,
            coordY: 3,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 5,
            coordY: 3,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 6,
            coordY: 3,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 7,
            coordY: 3,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 8,
            coordY: 3,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 1,
            coordY: 2,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 2,
            coordY: 2,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 3,
            coordY: 2,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 4,
            coordY: 2,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 5,
            coordY: 2,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 6,
            coordY: 2,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 7,
            coordY: 2,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 8,
            coordY: 2,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 1,
            coordY: 1,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 2,
            coordY: 1,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 3,
            coordY: 1,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 4,
            coordY: 1,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 5,
            coordY: 1,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'white',
            coordX: 6,
            coordY: 1,
            hasKnight: false,
            nextMove: false
        },

        {
            color: 'black',
            coordX: 7,
            coordY: 1,
            hasKnight: false,
            nextMove: false
        },
        {
            color: 'white',
            coordX: 8,
            coordY: 1,
            hasKnight: false,
            nextMove: false
        },
    ],

    knight: {
        color: 'white',
        coordX: 4,
        coordY: 4,
    }
}
//
// let chessReducer = (state = initialState, action) => {
//
//     if(action.type === clickSquare){
//         for(let i = 0; i < state.chessBoard.length; i++){
//             if(state.chessBoard[i].hasKnight){
//                 state.chessBoard[i].hasKnight = false
//             }
//         }
//         for(let i = 0; i < state.chessBoard.length; i++){
//             if(state.chessBoard[i].coordX === action.x
//                 && state.chessBoard[i].coordY === action.y){
//                 state.chessBoard[i].hasKnight = true
//             }
//         }
//     } else if(action.type === nextMoveType){
//         let x = action.x
//         let y = action.y
//         let coordinate = [
//             {yY: y + 2, xX: x - 1}, // 3_6
//             {yY: y + 2, xX: x + 1}, // 3_9
//             {yY: y + 1, xX: x - 2},
//             {yY: y + 1, xX: x + 2},
//
//             {yY: y - 1, xX: x - 2},
//             {yY: y - 1, xX: x + 2},
//             {yY: y - 2, xX: x - 1},
//             {yY: y - 2, xX: x + 1}
//         ].filter(el => el.xX <= 8 && el.yY <= 8 && el.xX >= 1 && el.yY >= 1);
//
//         for(let i = 0; i < state.chessBoard.length; i++){
//             let obj = state.chessBoard[i]
//             state.chessBoard[i].nextMove = false
//             for(let j = 0; j < coordinate.length; j++){
//                 let yCoordinate = coordinate[j].yY
//                 let xCoordinate = coordinate[j].xX
//
//                 if(yCoordinate === obj.coordY && xCoordinate === obj.coordX) {
//                     obj.nextMove = true
//                 }
//             }
//         }
//     }
//
//     return state
// }

let chessReducer = (state = initialState, action) => {
    let newState = { ...state }; // Создаем копию состояния

    if (action.type === clickSquare) {
        newState.chessBoard = newState.chessBoard.map(square => {
            // Копируем квадраты шахматной доски
            return {
                ...square,
                hasKnight: (square.coordX === action.x && square.coordY === action.y)
            };
        });
    } else if (action.type === nextMoveType) {
        let x = action.x;
        let y = action.y;
        let coordinate = [
            { yY: y + 2, xX: x - 1 },
            { yY: y + 2, xX: x + 1 },
            { yY: y + 1, xX: x - 2 },
            { yY: y + 1, xX: x + 2 },
            { yY: y - 1, xX: x - 2 },
            { yY: y - 1, xX: x + 2 },
            { yY: y - 2, xX: x - 1 },
            { yY: y - 2, xX: x + 1 }
        ].filter(el => el.xX <= 8 && el.yY <= 8 && el.xX >= 1 && el.yY >= 1);

        newState.chessBoard = newState.chessBoard.map(square => {
            // Копируем квадраты шахматной доски
            let updatedSquare = { ...square };
            updatedSquare.nextMove = coordinate.some(coord => coord.yY === square.coordY && coord.xX === square.coordX);
            return updatedSquare;
        });
    }

    return newState; // Возвращаем новое состояние
};


export let clickSquareAction = (xCoord, yCoord) => {
    return {type: clickSquare, x: xCoord, y: yCoord}
}
export let forNextMoveAction = (xCoord, yCoord) => {
    return {type: nextMoveType, x: xCoord, y: yCoord}
}

export default chessReducer;