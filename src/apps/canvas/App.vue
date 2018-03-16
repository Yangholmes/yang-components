<template lang="html">
    <div class="hello-canvas" :id="id">
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script>
export default {
    name: 'hello-canvas',
    computed: {
        canvas() {
            return this.$refs['canvas'];
        },
        ctx() {
            return this.canvas.getContext('2d');
        },
        viewport() {
            let canvasContainer = document.getElementById(this.id);
            let computedStyle = window.getComputedStyle(canvasContainer);
            return {
                width: computedStyle.width.slice(0, -2) * 1,
                height: computedStyle.height.slice(0, -2) * 1
            };
        }
    },
    data() {
        return {
            id: 'canvas-container-' + Math.ceil(Math.random() * 100000),
            pointQueue: [],
            color: 0,
            maxR: 20
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.resizeCtx();
            this.addListener();
            this.animate();
        },
        resizeCtx() {
            this.canvas.width = this.viewport.width;
            this.canvas.height = this.viewport.height;
        },
        addListener() {
            this.canvas.addEventListener('mousemove', function (event) {
                this.enqueue({
                    x: event.clientX,
                    y: event.clientY,
                    r: 0,
                    increase: true
                });
            }.bind(this));
            // this.canvas.addEventListener('touchmove', function (event) {
            //     this.enqueue({
            //         x: event.touches[0].clientX,
            //         y: event.touches[0].clientY,
            //         r: 0,
            //         increase: true
            //     });
            // }.bind(this));
            // /^.*(?=.{6,16})(?=.*\d)(?=.*[A-Z]{2,})(?=.*[a-z]{2,})(?=.*[!@#$%^&*?\(\)]).*$/
        },
        enqueue(point) {
            this.pointQueue.push(point);
        },
        animate() {
            this.color += .3; // color gradual
            this.ctx.clearRect(0, 0, this.viewport.width, this.viewport.height);

            for (let i = 0; i < this.pointQueue.length; i++) {
                this.ctx.fillStyle = 'hsla(' + this.color + ', 100%, 80%, .7)';
                this.ctx.beginPath();
                this.ctx.arc(this.pointQueue[i].x, this.pointQueue[i].y, this.pointQueue[i].r, 0, Math.PI * 2);
                this.ctx.closePath();
                this.ctx.fill();

                this.pointQueue[i].r = this.pointQueue[i].increase ?  this.pointQueue[i].r + .3 : this.pointQueue[i].r - .9; // increase
                (this.pointQueue[i].r > this.maxR) && (this.pointQueue[i].increase = false);
                (this.pointQueue[i].r < 0) && this.pointQueue.splice(i, 1);
            }

            window.requestAnimationFrame(this.animate);
        }
    }
};
</script>

<style lang="less">
.hello-canvas {
    width: 100%;
    height: 100%;
    overflow: hidden;
    canvas {
        background: #000;
    }
}
</style>
