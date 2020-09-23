import Vue from "vue"
import {
  ValidationProvider,
  ValidationObserver,
  localize,
  extend
} from "vee-validate"

// 使用するvalidate rule
import { required, max, min, email, numeric, regex } from "vee-validate/dist/rules"

// エラーメッセージの日本語化用
const ja = require("vee-validate/dist/locale/ja.json")

extend("required", required)
extend("email", email)
extend("max", max)
extend("min", min)
extend("numeric", numeric)
extend("regex", regex)

Vue.component("ValidationProvider", ValidationProvider)
Vue.component("ValidationObserver", ValidationObserver)
localize("ja", ja)
