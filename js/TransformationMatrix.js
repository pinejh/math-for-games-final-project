"use strict";
class TransformationMatrix {
    constructor(matrix = Matrix.Identity(2), offset = Vector.Zero) {
        this.matrix = matrix;
        this.offset = offset;
    }
    transform(m) {
        return Matrix.Multiply(this.matrix, m);
    }
    transformVector(v, offset = true) {
        let vector = v;
        if (offset)
            vector = Vector.SubVectors(v, this.offset);
        const mv = Vector.FromMatrix(this.transform(Matrix.FromVector(vector)));
        return (offset ? Vector.AddVectors(mv, this.offset) : mv);
    }
    static Reflection(proj) {
        // 2P - I
        let m = Matrix.SubMatrix(Matrix.Copy(proj.matrix).scale(2), Matrix.Identity(2));
        return new TransformationMatrix(m);
    }
    static Projection(l) {
        let vm = Matrix.FromVector(l.v);
        let vmT = Matrix.Transpose(vm);
        let m = Matrix.Multiply(vm, vmT);
        m.scale(1 / l.v.dot(l.v));
        return new TransformationMatrix(m, l.p);
    }
}
