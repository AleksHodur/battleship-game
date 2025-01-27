const yAxisLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

export class SquareClass{
    covered: boolean;
    empty: boolean;
    yAxis: string;
    xAxis: number;

    constructor(covered: boolean, empty: boolean, yAxis: string, xAxis: number){
        this.covered = covered;
        this.empty = empty;
        this.yAxis = yAxis;
        this.xAxis = xAxis;
    }
}

export class Line{
    squares: SquareClass[];
    yAxis: string;

    constructor(yAxis: string){
        this.squares = [
            new SquareClass(false, true, yAxis, 1),
            new SquareClass(false, true, yAxis, 2),
            new SquareClass(false, true, yAxis, 3),
            new SquareClass(false, true, yAxis, 4),
            new SquareClass(false, true, yAxis, 5),
            new SquareClass(false, true, yAxis, 6),
            new SquareClass(false, true, yAxis, 7),
            new SquareClass(false, true, yAxis, 8),
            new SquareClass(false, true, yAxis, 9),
            new SquareClass(false, true, yAxis, 10)
        ]

        this.yAxis = yAxis;
    }
}