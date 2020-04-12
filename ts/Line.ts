class Line {
    p: Vector;
    v: Vector;
    proj: TransformationMatrix;
    ref: TransformationMatrix;

    constructor(p: Vector, v: Vector) {
        this.p = p;
        this.v = v;
        this.proj = TransformationMatrix.Projection(this);
        this.ref = TransformationMatrix.Reflection(this.proj);
    }

    draw(c: CanvasRenderingContext2D, length: number, color: string = '#ffffff') {
        let v = Vector.Copy(this.v).scale(length);
        let p1 = Vector.AddVectors(this.p, v);
        let p2 = Vector.AddVectors(this.p, v.scale(-1));
        c.strokeStyle = color;
        c.beginPath();
        c.moveTo(p1.x, p1.y);
        c.lineTo(p2.x, p2.y);
        c.closePath();
        c.stroke();
    }

    getClosestPoint(v: Vector): Vector {
        return this.proj.transformVector(v);
    }

    static FromPoints(p1: Vector, p2: Vector): Line {
        return new Line(p1, Vector.SubVectors(p2, p1));
    }
}