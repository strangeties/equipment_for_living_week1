class Eye {
  constructor(center_x, center_y, lid_arc_angle, radius) {
    this.x = center_x
    this.y = center_y
    this.theta = lid_arc_angle
    this.radius = radius
  }

  Draw(ctx) {
    let h = Math.sin(this.theta * Math.PI) * this.radius;

    ctx.beginPath();
    // upper lid
    ctx.arc(this.x, this.y + h, this.radius, (1.0 + this.theta)*Math.PI, (2.0 - this.theta)*Math.PI);
    // lower lid
    ctx.arc(this.x, this.y - h, this.radius, this.theta*Math.PI, (1.0 - this.theta)*Math.PI);
    ctx.lineWidth = 2;
    ctx.stroke();

    // eye
    ctx.beginPath();
    ctx.arc(this.x, this.y, (this.radius - h) * 0.8, 0, 2.0 * Math.PI);
    ctx.fillStyle = "grey";
    ctx.fill();
    // pupil
    ctx.beginPath();
    ctx.arc(this.x, this.y, (this.radius - h) * 0.2, 0, 2.0 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();


    // eye lashes
    for (let i = 0; i < 7; i++) {
      let phi = (i + 2) * (1.0 - 2.0 * this.theta) / 8;
      ctx.beginPath();
      ctx.moveTo(this.x - 1.1 * this.radius * Math.cos(phi * Math.PI),
                 this.y + h - 1.1 * this.radius * Math.sin(phi * Math.PI));
      ctx.lineTo(this.x - 1.2 * this.radius * Math.cos(phi * Math.PI),
                 this.y + h - 1.2 * this.radius * Math.sin(phi * Math.PI));
      ctx.stroke();
    }
  } 
}
