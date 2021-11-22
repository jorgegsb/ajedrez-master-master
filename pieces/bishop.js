import Piece from "./piece.js";
//manage the piece Bishop ande everything related to this piece
export default class Bishop extends Piece {
    constructor(color) {
        super(color, ["♝", "♗"], "b")
    }


    availableMovements(position, LOGICBOARD) {
        //down/Right
        this.pieceDirection(position, [1, 1], LOGICBOARD)

        //down/left
        this.pieceDirection(position, [1, -1], LOGICBOARD)

        //up/right
        this.pieceDirection(position, [-1, 1], LOGICBOARD)

        //up/left
        this.pieceDirection(position, [-1, -1], LOGICBOARD)

    }
}