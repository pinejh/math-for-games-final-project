"use strict";
class Ball {
    constructor(radius, material, pos = Vector.Zero, vel = Vector.Zero, acc = Vector.Zero) {
        this.radius = radius;
        this.material = material;
        this.pos = pos;
        this.vel = vel;
        this.acc = acc;
    }
    update(lines) {
        this.vel.add(this.acc);
        lines.forEach(l => {
            if (this.pos.dist(l.getClosestPoint(this.pos)) <= this.radius + this.vel.magnitude) {
                this.vel = l.ref.transformVector(this.vel).scale(this.material.bounce * this.material.bounce);
            }
        });
        this.pos.add(this.vel);
    }
    draw(c) {
        c.fillStyle = this.material.fill;
        c.strokeStyle = this.material.stroke;
        c.beginPath();
        c.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
        c.closePath();
        c.fill();
        c.stroke();
    }
}
