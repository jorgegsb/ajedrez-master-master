import Piece from "./piece.js";
//manage the piece King ande everything related to this piece
export default class King extends Piece {

    constructor(color) {
        super(color, ["♚", "♔"], "k")
    }


}