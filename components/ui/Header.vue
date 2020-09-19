<template>
      <!-- src="https://picsum.photos/1920/1080?random" -->

  <v-card class="overflow-hidden">
    <v-app-bar
      app
      color="#6A76AB"
      floating
      fade-img-on-scroll
      prominent
    >
      <v-app-bar-nav-icon @click="openNav()"></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- 画面サイズが小さい時は非表示、各コンポーネントで呼び出すなど -->
      <search-form
        class="header_form "
        @search="searchEvent"
      />
    </v-app-bar>
  </v-card>
</template>

<script lang="ts" src="@/assets/ts/header.ts"></script>
