<template>
  <v-layout
    wrap
  >
    <v-col
      v-for="(post, index) of posts"
      :key="post.post_id"
      cols="12"
    >
      <post-card
        :key="index"
        :post="post"
        @do-login="moveToLogin"
        @show-post="showPost"
        @show-user="showUser"
      />
    </v-col>
  </v-layout>
</template>

<script lang="ts" src="@/assets/ts/list_post.ts"></script>
