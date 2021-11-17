//class uset to make inheritance on the child-pieces and establish the common atributes and methods of the child-pieces
export default class Piece {
    constructor(color, sprite, type) {
        this.color = color;
        this.sprite = sprite;
        this.type = type;

    }

    getCellfromCords(position, LOGICBOARD) {
        const [x, y] = position;
        const rank = LOGICBOARD[y] || [];
        const cell = rank[x];
        return cell;
    }

    availableMovements(position, LOGICBOARD) {
        throw new Error(`Missing avaliable movements in  ${this.type}`);
    }

}