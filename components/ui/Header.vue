<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      app
      color="#6A76AB"
      floating
      fade-img-on-scroll
    >
      <!-- サイドナビゲーションはスマートフォンサイズで表示 -->
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
        @click="openNav()"
      />
      <v-toolbar-title
        @click="home()"
      >
        Title
      </v-toolbar-title>
      <!-- PC・タブレットで表示 -->
      <ul
        v-if="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
        class="header_nav"
      >
        <li
          v-if="getAuthKind > 0"
          class="button_item"
          @click="showAuthUser"
        >
          <v-icon>mdi-account</v-icon>
          マイページ
        </li>
        <li
          v-if="getAuthKind > 0"
          class="button_item"
          @click="logout"
        >
          ログアウト
        </li>
        <li
          v-if="getAuthKind < 1"
          class="button_item"
          @click="login"
        >
          <v-icon>mdi-account</v-icon>
          ログイン
        </li>
        <li
          v-if="getAuthKind < 1"
          class="button_item"
          @click="signUp"
        >
          <v-icon>mdi-account-plus</v-icon>
          アカウント新規登録
        </li>
      </ul>
      <v-spacer />
      <!-- PC・タブレットで表示 -->
      <search-form
        v-if="$vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl"
        class="header_form"
        @search="searchEvent"
      />
    </v-app-bar>
  </v-card>
</template>

<style lang="scss" scoped src="@/assets/scss/header.scss"></style>

<script lang="ts" src="@/assets/ts/header.ts"></script>
