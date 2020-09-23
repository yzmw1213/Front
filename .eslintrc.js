module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "plugin:vue/recommended",
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
  ],
  plugins: [
    "vue"
  ],
  rules: {
    quotes: ["error", "double"],
    "comma-dangle": ["off", {
      arrays: "always-multiline",
    }],
    "no-console": "off",
    "space-before-function-paren": ["error", "never"],
  }
}
