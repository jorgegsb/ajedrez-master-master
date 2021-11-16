import Piece from "./piece.js";
//manage the piece Bishop ande everything related to this piece
export default class Bishop extends Piece {
    constructor(color) {
        super(color, ["♝", "♗"], "b")
    }
    availableMovements(position, LOGICBOARD) {
        const [x, y] = position;

        for (let i = 1; i <= 2; i += 1) {
            const cell = LOGICBOARD[y + i][x + i];
            if (!cell) break;
            if (cell.piece) break;
            cell.setAvialableMove(true);
        }

        for (let i = 1; i <= 2; i += 1) {
            const cell = LOGICBOARD[y - i][x + i];
            if (!cell) break;
            if (cell.piece) break;
            cell.setAvialableMove(true);
        }

        for (let i = 1; i <= 2; i += 1) {
            const cell = LOGICBOARD[y + i][x - i];
            if (!cell) break;
            if (cell.piece) break;
            cell.setAvialableMove(true);
        }
        for (let i = 1; i <= 2; i += 1) {
            const cell = LOGICBOARD[y - i][x - i];
            if (!cell) break;
            if (cell.piece) break;
            cell.setAvialableMove(true);
        }
    }
}