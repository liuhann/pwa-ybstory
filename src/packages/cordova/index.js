import Toast from 'vant/lib/toast'
import 'vant/lib/vant-css/toast.css'

export default {
  onload (ctx, next) {
    document.addEventListener('deviceready', onDeviceReady, false)
    function onDeviceReady () {
      document.addEventListener('backbutton', onBackKeyDown, false)

      let clicked = 0
      function onBackKeyDown () {
        const now = new Date().getTime()
        if (now - clicked > 800) {
          Toast('连续按两次返回键退出元宝故事')
          clicked = now
        } else {
          navigator.app.exitApp()
        }
      }
    }
  }
}
