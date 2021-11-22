import Piece from "./piece.js";
//manage the piece Rook ande everything related to this piece
export default class Rook extends Piece {
    constructor(color) {
        super(color, ["♜", "♖"], "r")
    }

    availableMovements(position, LOGICBOARD) {
        //up
        this.pieceDirection(position, [-1, 0], LOGICBOARD)

        //down
        this.pieceDirection(position, [1, 0], LOGICBOARD)

        //Right
        this.pieceDirection(position, [0, 1], LOGICBOARD)

        //left
        this.pieceDirection(position, [0, -1], LOGICBOARD)



    }
}