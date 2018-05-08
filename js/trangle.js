// export default

// let canvas = document.getElementById('canvas')
// let ctx = canvas.getContext('2d')

function LittleTrangle() {
    this.bright = 1; //明亮程度 [0,1]
    this.size = 0.2; //大小程度 [0,1]
    this.alpha = Math.max(.1, Math.random() / 2)
    this.pos3d = { //四个尖角和四个内角坐标
            posA1: {
                x: Math.max(0.5, Math.random()) * 200,
                y: Math.max(0.5, Math.random()) * 300,
                z: Math.max(0.5, Math.random()) * 100,
            },
            posA2: {
                x: Math.max(0.5, Math.random()) * 200,
                y: Math.max(0.5, Math.random()) * 300,
                z: Math.max(0.5, Math.random()) * 100,
            },
            posA3: {
                x: Math.max(0.5, Math.random()) * 200,
                y: Math.max(0.5, Math.random()) * 300,
                z: -Math.max(0.5, Math.random()) * 100,
            },
            posCenter: {
                x: 0,
                y: 0,
                z: 0,
            }
        },
        this.pos2d = {};
}
LittleTrangle.prototype.transTo2d = function() {
    this.pos2d.posA1 = transUtil.trans3Dto2DAll(this.pos3d.posA1);
    this.pos2d.posA2 = transUtil.trans3Dto2DAll(this.pos3d.posA2);
    this.pos2d.posA3 = transUtil.trans3Dto2DAll(this.pos3d.posA3);
};
LittleTrangle.prototype.horRotate = function(theta) {
    this.pos3d.posA1 = transUtil.horRotate3d(this.pos3d.posA1, theta);
    this.pos3d.posA2 = transUtil.horRotate3d(this.pos3d.posA2, theta);
    this.pos3d.posA3 = transUtil.horRotate3d(this.pos3d.posA3, theta);
};
LittleTrangle.prototype.verRotate = function(theta) {
    this.pos3d.posA1 = transUtil.verRotate3d(this.pos3d.posA1, theta);
    this.pos3d.posA2 = transUtil.verRotate3d(this.pos3d.posA2, theta);
    this.pos3d.posA3 = transUtil.verRotate3d(this.pos3d.posA3, theta);
};


// let pushPoint = function () {
//     let disToPoint = 50
//     let count = 1
//     // let _x = Math.max(0.5, Math.random()) * 200
//     // let _y = Math.max(0.5, Math.random()) * 300
//     // let _z = Math.max(0.5, Math.random()) * 100
//     let _x = 50
//     let _y = 100
//     let _z = -50
//     return function () {
//         let x = _x + disToPoint * count
//         let y = _y + disToPoint * count
//         let z = _z + disToPoint * count++
//         log(count)
//         // log(x, y, z)
//         return {x: x, y: y, z: z}
//     }
// }
//
// function LittlePoint() {
//     this.bright = 1; //明亮程度 [0,1]
//     this.size = 1; //大小程度 [0,1]
//     this.alpha = Math.max(.1, Math.random() / 2)
//     this.pos3d = [ //四个尖角和四个内角坐标
//             // {
//             //     x: Math.max(0.5, Math.random()) * 200,
//             //     y: Math.max(0.5, Math.random()) * 300,
//             //     z: Math.max(0.5, Math.random()) * 100,
//             // },
//         ],
//     this.pos2d = []
//     this.extendPointCount(5)
// }
// LittlePoint.prototype.extendPointCount = function (pointNum) {
//
//
//     for (var i = 0; i < pointNum; i++) {
//         let newPoint = pushPoint()
//         this.pos3d.push(newPoint())
//     }
//     log('3d', this.pos3d)
//
// }
// LittlePoint.prototype.transTo2d = function() {
//     this.pos2d.posA1 = (this.pos3d.posA1);
//     for (var i = 0; i < this.pos3d.length; i++) {
//         this.pos2d.push(transUtil.trans3Dto2DAll(this.pos3d[i]))
//     }
// };
// LittlePoint.prototype.horRotate = function(theta) {
//     for (var i = 0; i < this.pos3d.length; i++) {
//         this.pos3d[i] = transUtil.horRotate3d(this.pos3d[i], theta)
//     }
// };
// LittlePoint.prototype.verRotate = function(theta) {
//     for (var i = 0; i < this.pos3d.length; i++) {
//         this.pos3d[i] = transUtil.verRotate3d(this.pos3d[i], theta)
//     }
// };
//
// let LittleTrangle = LittlePoint
