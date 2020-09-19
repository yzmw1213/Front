import Vue from "vue";
import {
  ValidationProvider,
  ValidationObserver,
  localize,
  extend
} from "vee-validate"

// エラーメッセージの日本語化用
const ja = require("vee-validate/dist/locale/ja.json")

// 使用するvalidate rule
import { required, max, min, email, alpha_num, numeric, regex } from "vee-validate/dist/rules"

extend("required", required)
extend("email", email)
extend("max", max)
extend("min", min)
extend("numeric", numeric)
extend("regex", regex)
extend("alpha_num", alpha_num)

Vue.component("ValidationProvider", ValidationProvider)
Vue.component("ValidationObserver", ValidationObserver)
localize("ja", ja)
