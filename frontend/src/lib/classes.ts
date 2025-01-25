export class SquareClass{
    covered: boolean;
    empty: boolean;

    constructor(covered: boolean, empty: boolean){
        this.covered = covered;
        this.empty = empty;
    }
}

export class Line{
    squares: SquareClass[];

    constructor(){
        this.squares = [
            new SquareClass(false, true),
            new SquareClass(false, true),
            new SquareClass(false, true),
            new SquareClass(false, true),
            new SquareClass(false, true),
            new SquareClass(false, true),
            new SquareClass(false, true),
            new SquareClass(false, true)
        ]
    }
}