import Piece from "./piece.js";
//manage the piece Bishop ande everything related to this piece
export default class Bishop extends Piece {
    constructor(color) {
        super(color, ["♝", "♗"], "b")
    }

    diagonalDirection(position, direction, LOGICBOARD) {
        const [x, y] = position;
        const [dirX, dirY] = direction;
        for (let i = 1; i <= LOGICBOARD.length; i += 1) {
            const cell = this.getCellfromCords([y + (i * dirY), x + (i * dirX)], LOGICBOARD);
            if (!cell) break;
            if (cell.piece && cell.piece.color === this.color) break;
            cell.setAvialableMove(true);
            if (cell.piece) break;
        }
    }
    availableMovements(position, LOGICBOARD) {
        //down/Right
        this.diagonalDirection(position, [1, 1], LOGICBOARD)

        //down/left
        this.diagonalDirection(position, [1, -1], LOGICBOARD)

        //up/right
        this.diagonalDirection(position, [-1, 1], LOGICBOARD)

        //up/left
        this.diagonalDirection(position, [-1, -1], LOGICBOARD)

    }
}