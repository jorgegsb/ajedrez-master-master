import Piece from "./piece.js";
//manage the piece Queen ande everything related to this piece
export default class Queen extends Piece {
    constructor(color) {
        super(color, ["♛", "♕"], "q")
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