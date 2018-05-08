// import {LittleTrangle} from 'trangle.js'
let topNav = {
    template: `
    <section class="nav">
        <div class="head">
            <div class="head-box">
            <div class="link" v-for="item in items" v-show="item.hide != true">
                <a href="#">
                    <p>{{ item.text }}</p>
                </a>
            </div>
            </div>
        </div>
        <ul class="right-nav">
        <li v-for="item in items">{{ item.text }}</li>
        </ul>
    </section>
    `,

    props: {
        items: Array,
    }
}

let topTitle = {
    template: `
    <section class="top-title onescroll-page">
    <div class="top-img">
        <div class="img-box">
            <img src="img/logos.png" alt="">
        </div>
    </div>
    <div class="top-text">
            <h1>Ciao</h1>
            <h2>前端资源聚合FE Favorite</h2>

    </div>
    </section>
    `,
}
// <span itemprop="name"></span>
let goodSite = {
    template: `
    <section class="good-site onescroll-page">
        <div class="top-content" style="margin-top: 75px;">
                <div class="row">
                    <h2>优秀站点</h2>
                </div>
        </div>
        <div class="box-site" style="margin-top: 35px; margin-bottom: 155px;">
            <div class="single-grid">
                <svg viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice"
                class="slide__overlay"><path d="M0,0 150,0 500,405 0,405"
                class="slide__overlay-path"></path></svg>
            </div>
            <div class="box-content">
                <ul class="box-table">
                    <li v-for="item in items">
                        <a :href="item.href" class="website">{{ item.value }}</a>
                        <p class="description">{{ item.text }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    `,

    props: {
        items: Array,
    },
}

let designExperience = {
    template: `
    <section class="good-design onescroll-page">
        <div class="top-content" style="margin-top: 75px;">
                <div class="row">
                    <h2>设计&amp;体验</h2>
                </div>
        </div>
        <div class="box-site">
            <div class="single-grid"></div>
            <div class="box-content">
                <ul class="box-table">
                    <li v-for="item in items">
                        <a :href="item.href" class="website">{{ item.value }}</a>
                        <p class="description">{{ item.text }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    `,

    props: {
        items: Array,
    },
}

let root = new Vue({
    el: '#app',
    template: `
    <div class="home">
        <nav-component :items="navItems"></nav-component>
        <div class="canvas-container">
            <canvas id="canvas"></canvas>
        </div>
        <div class="content">
            <top-title></top-title>
            <good-site :items="siteItems"></good-site>
            <design-experience :items="siteItems"></design-experience>
        </div>
    </div>
    `,
    data: {
        navItems: navItems,
        siteItems: siteItems,

    },
    computed: {
        canvas: function () {
            return document.getElementById('canvas')
        },
        ctx: function () {
            log('canvas', this.canvas)
            return this.canvas.getContext('2d')
        },
        canvasDrawInit: function () {
            let self = this
            return {
                size: 0,
                circlePos: {
                    x: 0,
                    y: 0
                },
                setCvsSize: function() {
                    let cs = ball.radiu / ball.disToEye; //arcsin
                    let theta = Math.asin(cs);
                    // self.canvasDrawInit.size = 2 * Math.tan(theta) * (ball.disToCanvas + ball.disToEye);
                    self.canvasDrawInit.size = $('#canvas').width()
                    self.canvas.width = $('#canvas').width();
                    self.canvas.height = $('#canvas').height();
                    self.ctx.translate(self.canvas.width / 2, self.canvas.height / 2);
                }
            }
        },
    },
    components: {
        'nav-component': topNav,
        'top-title': topTitle,
        'good-site': goodSite,
        'design-experience': designExperience,
    },
    methods: {
        drawCircle: function() {
            // log('draw', ball.radiu)
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.strokeStyle = '#000';
            this.ctx.fillStyle = '#000';
            this.ctx.arc(this.canvasDrawInit.circlePos.x, this.canvasDrawInit.circlePos.y, this.canvasDrawInit.size / 2, 0, 2 * Math.PI, false);
            this.ctx.stroke();
            this.ctx.fill();
            this.ctx.closePath();
        },

        canvasLoad: function () {
            this.canvasDrawInit.setCvsSize();
            let self = this
            let trangle = [];
            for (var i = 0; i < ball.trangleCount; i++) {
                // log('radiu', ball.radiu)
                trangle[i] = new LittleTrangle();
                trangle[i].verRotate(Math.random() * 360);
                trangle[i].horRotate(Math.random() * 360);
            }
            setInterval(function() {
                self.ctx.clearRect(-self.canvas.width, -self.canvas.width, self.canvas.width * 2, self.canvas.height * 2);
                for (i = 0; i < ball.trangleCount; i++) {
                    // self.drawCircle()
                    trangle[i].horRotate(360 / 8000);
                    trangle[i].transTo2d();
                    trangle[i].draw();
                }
            }, 10)
        },
    },

    mounted: function () {
        let self = this
        ball.radiu = $('#canvas').width()
        ball.disToCanvas = 2 * ball.radiu
        ball.disToEye = 2 * ball.disToCanvas
        log('', ball.radiu)
        LittleTrangle.prototype.draw = function() {

            self.ctx.beginPath();
            self.ctx.lineWidth = 1;
            self.ctx.globalAlpha = this.alpha
            self.ctx.moveTo(this.pos2d.posA1.x, this.pos2d.posA1.y)
            /* point function
            // self.ctx.moveTo(this.pos2d[0].x, this.pos2d[0].y);
            // for (var i = 1; i < this.pos2d.length; i++) {
            //     if(i % 3 != 0){
            //         self.ctx.lineTo(this.pos2d[i].x, this.pos2d[i].y)
            //     }else {
            //         self.ctx.moveTo(this.pos2d[i - 3].x, this.pos2d[i - 3].y)
            //     }
            // }
            */
            self.ctx.lineTo(this.pos2d.posA2.x, this.pos2d.posA2.y);
            self.ctx.lineTo(this.pos2d.posA3.x, this.pos2d.posA3.y);
            self.ctx.strokeStyle = '#fff';
            self.ctx.fillStyle = '#fff';
            self.ctx.stroke();
            self.ctx.fill();
            self.ctx.closePath();
        }
        this.canvasLoad()
    }
})
