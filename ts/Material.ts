class Material {
    fill: string;
    stroke: string;
    bounce: number;

    constructor(fill: string = '#00000000', stroke: string = '#ffffff', bounce: number = 1) {
        this.fill = fill;
        this.stroke = stroke;
        this.bounce = bounce;
    }
}