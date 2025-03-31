class Eye {
    constructor(center_x, center_y, lid_arc_angle, radius) {
        this.x = center_x;
        this.y = center_y;
        this.theta = lid_arc_angle;
        this.radius = radius;

        this.mouse_x = center_x;
        this.mouse_y = center_y;
    }

    Draw(ctx) {
        let h = Math.sin(this.theta * Math.PI) * this.radius;

        ctx.beginPath();
        // upper lid
        ctx.arc(this.x, this.y + h, this.radius, (1.0 + this.theta) * Math.PI,
                (2.0 - this.theta) * Math.PI);
        // lower lid
        ctx.arc(this.x, this.y - h, this.radius, this.theta * Math.PI,
                (1.0 - this.theta) * Math.PI);
        ctx.lineWidth = 2;
        ctx.stroke();

        // eye distances
        let outer_eye_radius = (this.radius - h) * 0.8;
        let pupil_radius = (this.radius - h) * 0.2;
        let max_pupil_movement = (outer_eye_radius - pupil_radius) * 0.8;
        // eyeball
        ctx.beginPath();
        ctx.arc(this.x, this.y, outer_eye_radius, 0, 2.0 * Math.PI);
        ctx.fillStyle = "grey";
        ctx.fill();
        // pupil
        let mouse_distance_x = this.mouse_x - this.x;
        let mouse_distance_y = this.mouse_y - this.y;
        let mouse_distance = Math.sqrt(mouse_distance_x * mouse_distance_x +
                                       mouse_distance_y * mouse_distance_y);
        let pupil_x = this.mouse_x;
        let pupil_y = this.mouse_y;
        if (mouse_distance > max_pupil_movement) {
            let mouse_angle =
                Math.abs(Math.atan(mouse_distance_y / mouse_distance_x));

            let pupil_diff_x = max_pupil_movement * Math.cos(mouse_angle);
            let pupil_diff_y = max_pupil_movement * Math.sin(mouse_angle);

            pupil_x =
                this.x + (this.mouse_x > this.x ? pupil_diff_x : -pupil_diff_x);
            pupil_y =
                this.y + (this.mouse_y > this.y ? pupil_diff_y : -pupil_diff_y);
        } else if (this.mouse_x < 0 || this.mouse_y < 0) {
            let pupil_x = this.x;
            let pupil_y = this.y;
        }
        ctx.beginPath();
        ctx.arc(pupil_x, pupil_y, pupil_radius, 0, 2.0 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();

        // eye lashes
        for (let i = 0; i < 7; i++) {
            let phi = (i + 2) * (1.0 - 2.0 * this.theta) / 8;
            ctx.beginPath();
            ctx.moveTo(this.x - 1.1 * this.radius * Math.cos(phi * Math.PI),
                       this.y + h -
                           1.1 * this.radius * Math.sin(phi * Math.PI));
            ctx.lineTo(this.x - 1.3 * this.radius * Math.cos(phi * Math.PI),
                       this.y + h -
                           1.3 * this.radius * Math.sin(phi * Math.PI));
            ctx.stroke();
        }
    }

    UpdateMouse(x, y) {
        this.mouse_x = x;
        this.mouse_y = y;
    }
}
