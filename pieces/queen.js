import Piece from "./piece.js";
//manage the piece Queen ande everything related to this piece
export default class Queen extends Piece {
    constructor(color) {
        super(color, ["♛", "♕"], "q")
    }

}