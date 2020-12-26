<template>
  <div class="footer_button_area">
    <v-col
    >
      <v-btn
        :color="$vuetify.theme.themes.light.negative"
        block
        small
        @click="goHome()"
      >
        戻る
      </v-btn>
    </v-col>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/footer_button_area.scss"></style>

<script lang="ts" src="@/assets/ts/footer_button_area.ts"></script>
