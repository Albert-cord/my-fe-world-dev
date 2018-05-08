log = console.log.bind()

const ball = {
    radiu: null,
    trangleCount: 10,
    disToCanvas: 500,
    disToEye: 1000
}
const navItems = [
    {
        text: '首页',
        hide: true,
    },
    {
        text: '优秀站点',
    },
    {
        text: '设计体验',
    },
]

const siteItems = [
    {
        href: 'http://www.zhihu.com/',
        value: '知乎',
        text: '专业的知识问答社区，帮助你寻找答案，分享知识',
    },
    {
        href: 'http://www.stackoverflow.com/',
        value: 'Stack OverFlow',
        text: '全球IT界最受欢迎的与程序相关的IT技术问答网站',
    },
    {
        href: 'http://www.w3cplus.com/',
        value: 'W3cplus',
        text: '记述前端那些事，引领web前沿，打造精品css3教程，优秀的前端资源站点',
    },
    {
        href: 'https://github.com/',
        value: 'Github',
        text: '基于Git的开源代码库及版本控制系统，是管理软件开发首选',
    },
    {
        href: 'http://www.w3school.com.cn/',
        value: 'w3school',
        text: 'W3C的标准技术,全面的教程、完善的参考手册以及庞大的代码库,适合入门者',
    },
    {
        href: 'http://www.bootcss.com/',
        value: 'Bootstrap中文网',
        text: 'Bootstrap的中文翻译文档，简洁、直观、强悍的前端开发框架',
    },
    {
        href: 'http://www.qdfuns.com/',
        value: '前端网（W3Cfuns）',
        text: '最受欢迎、最贴心的Web前端开发综合性门户网站',
    },
    {
        href: 'http://www.yyyweb.com',
        value: '前端里',
        text: '专注 Web 开发技术和资源分享',
    },
    {
        href: 'http://www.css88.com/',
        value: '前端观察',
        text: '众多干货前端翻译文档，专注前端开发，关注用户体验',
    },
    {
        href: 'https://segmentfault.com/',
        value: 'Segmentfault',
        text: '开发者技术社区',
    },
    {
        href: 'http://www.html-js.com/',
        value: '前端乱炖',
        text: '最专业的前端技术内容社区',
    },
    {
        href: 'https://www.v2ex.com/',
        value: 'V2EX',
        text: '一个关于分享和探索的地方',
    },
]

var transUtil = {
    tans3DTo2DProj: function(pos3D) {
        var pos2D = {};
        var scale = (ball.disToEye - pos3D.y) / (ball.disToEye + ball.disToCanvas);
        pos2D.x = pos3D.x / scale;
        pos2D.y = pos3D.z / scale;
        return pos2D;
    },
    horRotate3d: function(pos3D, theta) {
        var nexPos = {};
        nexPos.z = pos3D.z;
        nexPos.x = pos3D.x * Math.cos(theta / 180 * Math.PI) - pos3D.y * Math.sin(theta / 180 * Math.PI);
        nexPos.y = pos3D.x * Math.sin(theta / 180 * Math.PI) + pos3D.y * Math.cos(theta / 180 * Math.PI);
        return nexPos;
    },
    verRotate3d: function(pos3D, theta) {
        var nexPos = {};
        nexPos.x = pos3D.x;
        nexPos.y = pos3D.y * Math.cos(theta / 180 * Math.PI) - pos3D.z * Math.sin(theta / 180 * Math.PI);
        nexPos.z = pos3D.y * Math.sin(theta / 180 * Math.PI) + pos3D.z * Math.cos(theta / 180 * Math.PI);
        return nexPos;
    },
    transToCanvasPos: function(pos2D) {
        var nexPos = {};
        nexPos.x = pos2D.x;
        nexPos.y = -pos2D.y;
        return nexPos;
    },
    trans3Dto2DAll: function(pos3D) {
        var res = transUtil.transToCanvasPos(transUtil.tans3DTo2DProj(pos3D));
        return res;
    }
};
