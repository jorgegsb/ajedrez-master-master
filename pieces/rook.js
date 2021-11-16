import Piece from "./piece.js";
//manage the piece Rook ande everything related to this piece
export default class Rook extends Piece {
    constructor(color) {
        super(color, ["♜", "♖"], "r")
    }

}