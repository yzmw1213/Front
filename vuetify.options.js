import colors from "vuetify/es5/util/colors"
import ja from "vuetify/es5/locale/ja.js"

export default {
  // UIコンポーネントのメッセージ表記を日本語化
  lang: {
    locales: { ja },
    current: "ja",
  },
  theme: {
    dark: false,
    default: "dark",
    themes: {
      light: {
        primary: colors.indigo.lighten1,
        accent: colors.grey.darken3,
        secondary: colors.lime.lighten2,
        tertiary: colors.amber.darken3,
        super: colors.pink.lighten3,
        negative: colors.grey.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
        backgound: colors.brown.lighten5,
      },
      dark: {
        primary: colors.indigo.lighten1,
        accent: colors.grey.darken3,
        secondary: colors.lime.lighten2,
        tertiary: colors.amber.darken3,
        super: colors.pink.lighten3,
        negative: colors.grey.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
        backgound: colors.brown.lighten5,
      },
    },
  }
}
