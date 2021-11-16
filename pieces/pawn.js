import Piece from "./piece.js";
//manage the piece Pawn and everything related to this piece
export default class Pawn extends Piece {
    constructor(color) {
        super(color, ["♟", "♙"], " ")
    }


    availableMovements(position, LOGICBOARD) {
        const [x, y] = position;
        for (let i = 1; i <= 2; i += 1) {
            const cell = LOGICBOARD[this.color === "#000000" ? x - i : x + i][y];
            if (cell.piece) break;
            cell.setAvialableMove(true);
        }
    }

}