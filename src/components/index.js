import imageView from './ImageView/index.vue'
import XtxSku from './XtxSku/index.vue'
export const componentsPlugin = {
  install(app){
    app.component('XtxImageView', imageView)
    app.component('XtxSku', XtxSku)
  }
}
