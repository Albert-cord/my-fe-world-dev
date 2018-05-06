

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

let designExperience = {
    template: `
    <section class="good-site onescroll-page">
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
            <canvas class="animate"></canvas>
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
    components: {
        'nav-component': topNav,
        'top-title': topTitle,
        'good-site': goodSite,
        'design-experience': designExperience,
    },

})
