import Piece from "./piece.js";
//manage the piece Bishop ande everything related to this piece
export default class Bishop extends Piece {
    constructor(color) {
        super(color, ["♝", "♗"], "b")
    }
    availableMovements(position, LOGICBOARD) {
        const [x, y] = position;
        //down/Right
        for (let i = 1; i <= LOGICBOARD.length; i += 1) {
            const cell = this.getCellfromCords([y + i, x + i], LOGICBOARD);
            if (!cell) break;
            if (cell.piece && cell.piece.color === this.color) break;
            cell.setAvialableMove(true);
            if (cell.piece) break;
        }
        //down/left
        for (let i = 1; i <= LOGICBOARD.length; i += 1) {
            const cell = this.getCellfromCords([y - i, x + i], LOGICBOARD);
            if (!cell) break;
            if (cell.piece && cell.piece.color === this.color) break;
            cell.setAvialableMove(true);
            if (cell.piece) break;
        }
        //up/right
        for (let i = 1; i <= LOGICBOARD.length; i += 1) {
            const cell = this.getCellfromCords([y + i, x - i], LOGICBOARD);
            if (!cell) break;
            if (cell.piece && cell.piece.color === this.color) break;
            cell.setAvialableMove(true);
            if (cell.piece) break;
        }
        //up/left
        for (let i = 1; i <= LOGICBOARD.length; i += 1) {
            const cell = this.getCellfromCords([y - i, x - i], LOGICBOARD);
            if (!cell) break;
            if (cell.piece && cell.piece.color === this.color) break;
            cell.setAvialableMove(true);
            if (cell.piece) break;
        }
    }
}