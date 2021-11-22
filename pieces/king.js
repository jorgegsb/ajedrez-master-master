import Piece from "./piece.js";
//manage the piece King ande everything related to this piece
export default class King extends Piece {

    constructor(color) {
        super(color, ["♚", "♔"], "k")
    }

    availableMovements(position, LOGICBOARD) {
        const [y, x] = position;

        const KingMov = [
            //down/Right
            [1, 1],
            //down/left
            [1, -1],
            //up/right
            [-1, 1],
            //up/right
            [-1, -1],
            //up
            [-1, 0],
            //down
            [1, 0],
            //Right
            [0, 1],
            //left
            [0, -1]

        ];
        KingMov.forEach((mov) => {
            const [dirX, dirY] = mov;
            const cell = this.getCellfromCords([x + (1 * dirY), y + (1 * dirX)], LOGICBOARD);
            if (cell && !(cell.piece && cell.piece.color === this.color)) cell.setAvialableMove(true);
        })
    }
}