class Vector {
    x: number;
    y: number;

    static Zero = new Vector(0, 0);
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    // INSTANCE METHODS

    add(v: Vector): Vector {
        this.x += v.x;
        this.y += v.y;
        return this;
    }
    sub(v: Vector): Vector {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }
    scale(s: number): Vector {
        this.x *= s;
        this.y *= s;
        return this;
    }
    dot(v: Vector): number {
        return this.x * v.x + this.y * v.y;
    }
    
    get magnitude() {
        return Math.sqrt(this.dot(this));
    }
    set magnitude(mag: number) {
        this.scale(mag/this.magnitude);
    }

    dist(v: Vector): number {
        return Math.sqrt((this.x-v.x)*(this.x-v.x) + (this.y-v.y)*(this.y-v.y));
    }

    toAngle(): number {
        return Math.atan2(this.y, this.x);
    }
    

    // STATIC METHODS

    static Copy(v: Vector): Vector {
        return new Vector(v.x, v.y);
    }

    // returns the resulting vector of adding v1 and v2
    static AddVectors(v1: Vector, v2: Vector): Vector {
        return new Vector(v1.x + v2.x, v1.y + v2.y);
    }
    // returns the resulting vector of subtracting v2 from v1
    static SubVectors(v1: Vector, v2: Vector): Vector {
        return new Vector(v1.x - v2.x, v1.y - v2.y);
    }

    // returns the resulting scalar dot product of v1*v2
    static DotVectors(v1: Vector, v2: Vector): number {
        return v1.x * v2.x + v1.y * v2.y;
    }

    // returns a unit vector with the given direction in radians
    static FromRadians(rad: number): Vector {
        return new Vector(Math.cos(rad), Math.sin(rad));
    }
    // returns a unit vector with the given direction in degrees
    static FromDegrees(deg: number): Vector {
        return Vector.FromRadians(deg * Math.PI / 180);
    }
    
    static FromMatrix(m: Matrix): Vector {
        return new Vector(m.matrix[0][0], m.matrix[1][0]);
    }
}
