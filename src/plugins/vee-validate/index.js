import Vue from 'vue'
import {
  required, email, confirmed, min, max, numeric,
} from 'vee-validate/dist/rules'
import {
  localize, ValidationProvider, ValidationObserver, extend,
} from 'vee-validate'

import enMessages from 'vee-validate/dist/locale/en.json'

// built-in validators
extend('required', required)
extend('email', email)
extend('confirmed', confirmed)
extend('confirmed', confirmed)
extend('min', min)
extend('max', max)
extend('numeric', numeric)

// custom validator
extend('required_checkbox', value => !!value)

localize('en', enMessages)

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
