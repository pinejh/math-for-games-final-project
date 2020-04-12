"use strict";
class Line {
    constructor(p, v) {
        this.p = p;
        this.v = v;
        this.proj = TransformationMatrix.Projection(this);
        this.ref = TransformationMatrix.Reflection(this.proj);
    }
    draw(c, length, color = '#ffffff') {
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
    getClosestPoint(v) {
        return this.proj.transformVector(v);
    }
    static FromPoints(p1, p2) {
        return new Line(p1, Vector.SubVectors(p2, p1));
    }
}
