/**
 * Created by shen on 2017/3/16.
 */
class Captcha {
    constructor() {
        this.startX = 0
        this.preLeft = 0
        this.slider = document.getElementById('slider')
        this.init()
    }
    init() {
        this.slider.addEventListener('touchstart', this.handleTouchStart)
        this.slider.addEventListener('touchmove', this.handleTouchMove)
    }
    getClientX(e) {
        console.log('1')
        return e.changedTouches[0].clientX
    }
    handleTouchStart(e) {
        this.preLeft = document.getElementById('slider').style.left || 0
        this.startX = parseInt(this.getClientX(e), 10)
        console.log('startX', this.startX)
    }
    handleTouchMove(e) {
        this.endX = e.changedTouches[0].clientX
        console.log('this.endX', this.endX)
    }
}

const captcha = new Captcha()
