// 确定初始比例
const scale = {
  width: 1,
  height: 1
}
// 设计稿尺寸
const baseWidth = 1920
const baseheight = 1080
// 屏幕宽高的比例 16：9
const baseProportion = parseFloat(baseWidth / baseheight).toFixed(5)
console.log(scale, baseWidth, baseheight, baseProportion)

export default {
  data () {
    return {
      drawTiming: null
    }
  },
  mounted () {
    this.scaleRate()
    window.addEventListener('resize', this.resize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    scaleRate () {
      const appRef = this.$refs.appRef
      // 当前视口的宽高
      const currentWidth = window.innerWidth
      const currentHeight = window.innerHeight
      // 当前视口的比例
      const currentProportion = parseFloat(currentWidth / currentHeight).toFixed(5)
      console.log(currentProportion)
      if (appRef) {
        // 当前视口的宽高比和标准的宽高比进行比较
        if (currentProportion >= baseProportion) { // 表示过宽,则需要调节宽度，保留当前高度
          scale.height = parseFloat(currentHeight / baseheight).toFixed(3) // 即当前高度和标准高度1080的比值
          appRef.style.transform = `scale(${scale.height},${scale.height})`
        } else { // 表示过高，则需要调节当前高度，保留当前宽度
          scale.width = parseFloat(currentWidth / baseWidth).toFixed(3) // 即当前高度和标准高度1080的比值
          appRef.style.transform = `scale(${scale.width},${scale.width})`
        }
      }
    },
    resize () {
      clearTimeout(this.drawTiming)
      this.drawTiming = setTimeout(() => {
        this.scaleRate()
      }, 100)
    }
  }
}
