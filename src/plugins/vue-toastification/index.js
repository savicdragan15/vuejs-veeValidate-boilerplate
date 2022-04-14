import Vue from 'vue'
import Toast, { POSITION } from 'vue-toastification'

// Import the CSS or use your own!
import 'vue-toastification/dist/index.css'

const options = {
  position: POSITION.TOP_CENTER,
  timeout: 5000,
  hideProgressBar: false,
}

Vue.use(Toast, options)
