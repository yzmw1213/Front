<template>
  <div>
    <div
      v-show="showMessenger == true"
      :class="(isSuccess)? 'header_message success':'header_message error'"
    >
      <p>{{ getMessage }}</p>
    </div>
  </div>
</template>

<script lang="ts" src="@/assets/ts/message.ts"></script>
