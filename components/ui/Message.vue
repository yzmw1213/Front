<template>
  <div
    v-show="showMessenger == true"
    :class="(isSuccess)? 'header_message success':'header_message error'"
  >
    <p>{{ getMessage }}</p>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/message.scss"></style>

<script lang="ts" src="@/assets/ts/message.ts"></script>
