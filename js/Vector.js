"use strict";
class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    // INSTANCE METHODS
    add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }
    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }
    scale(s) {
        this.x *= s;
        this.y *= s;
        return this;
    }
    dot(v) {
        return this.x * v.x + this.y * v.y;
    }
    get magnitude() {
        return Math.sqrt(this.dot(this));
    }
    set magnitude(mag) {
        this.scale(mag / this.magnitude);
    }
    dist(v) {
        return Math.sqrt((this.x - v.x) * (this.x - v.x) + (this.y - v.y) * (this.y - v.y));
    }
    toAngle() {
        return Math.atan2(this.y, this.x);
    }
    // STATIC METHODS
    static Copy(v) {
        return new Vector(v.x, v.y);
    }
    // returns the resulting vector of adding v1 and v2
    static AddVectors(v1, v2) {
        return new Vector(v1.x + v2.x, v1.y + v2.y);
    }
    // returns the resulting vector of subtracting v2 from v1
    static SubVectors(v1, v2) {
        return new Vector(v1.x - v2.x, v1.y - v2.y);
    }
    // returns the resulting scalar dot product of v1*v2
    static DotVectors(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y;
    }
    // returns a unit vector with the given direction in radians
    static FromRadians(rad) {
        return new Vector(Math.cos(rad), Math.sin(rad));
    }
    // returns a unit vector with the given direction in degrees
    static FromDegrees(deg) {
        return Vector.FromRadians(deg * Math.PI / 180);
    }
    static FromMatrix(m) {
        return new Vector(m.matrix[0][0], m.matrix[1][0]);
    }
}
Vector.Zero = new Vector(0, 0);
