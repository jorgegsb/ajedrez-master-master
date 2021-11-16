import Piece from "./piece.js";
//manage the piece Knight ande everything related to this piece
export default class Knight extends Piece {
    constructor(color) {
        super(color, ["♞", "♘"], "n")
    }


}