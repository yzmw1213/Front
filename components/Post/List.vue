<template>
  <v-layout
    wrap
  >
    <v-flex
      v-for="(post, index) of posts"
      :key="post.post_id"
    >
      <post-card
        :key="index"
        :post="post"
        @do-login="moveToLogin"
        @show-post="showPost"
        @show-user="showUser"
      />
    </v-flex>
  </v-layout>
</template>

<script lang="ts" src="@/assets/ts/list_post.ts"></script>
