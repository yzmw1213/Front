<template>
  <v-layout
    wrap
  >
    <p
      v-if="searchTag > 0"
      class="search_tag"
    >
      「{{ vt[searchTag] }}」の検索結果
    </p>

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

<style lang="scss" scoped src="@/assets/scss/list_post.scss"></style>

<script lang="ts" src="@/assets/ts/list_post.ts"></script>
