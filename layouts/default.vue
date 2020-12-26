<template>
  <v-app
    :style="{ background: $vuetify.theme.themes.light.backgound }"
  >
    <nuxt />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({
  components: {
  },
})

export default class Layout extends Vue {
}
</script>
