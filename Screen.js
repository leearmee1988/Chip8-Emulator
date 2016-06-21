/**
 * Created by leearmee on 6/21/2016.
 */

var Screen = function(){
    this.rows = 32;
    this.columns = 64;
    this.resolution = this.rows * this.columns;
    this.scale = 10;

    this.clear = function () {

        ctx.clearRect(0, 0, 640, 320);
    }

    this.setPixel = function(x, y, display) {
        // Wrap around pixels that overflow the screen
        if (x > this.columns - 1) while (x > this.columns - 1) x -= this.columns;
        if (x < 0)                while (x < 0)                x += this.columns;

        if (y > this.rows - 1) while (y > this.rows - 1) y -= this.rows;
        if (y < 0)             while (y < 0)             y += this.rows;

        var location = x + (y * this.columns);
        display[location] = display[location] ^ 1;

        return !display[location];
    }

    this.render = function(ctx,display) {
        var i, x, y;

        ctx.clearRect(0, 0, 640, 320);

        for (i = 0; i < this.resolution; i++) {
            x = (i % this.columns) * this.scale;
            y = Math.floor(i / this.columns) * this.scale;

            if (display[i]) {
                ctx.fillStyle = "#000";
                ctx.fillRect(x, y, this.scale, this.scale);
            }
        }
    }
}