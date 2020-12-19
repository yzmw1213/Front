<template>
  <div class="content_inner">
    <!-- ヘッダーエリア -->
    <div class="page_header_area">
      <h2 class="page_header_title_area">
        <span class="header_main">POSTS</span>
        <span class="header_sub">コンテンツ</span>
      </h2>
    </div>

    <!-- フォロー、いいねの通知 -->

    <!-- 検索エリア -->
    <div class="search_area" />
    <!-- コンテントエリア -->
    <div
      :class="{ wide_content_area: $vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl }"
    >
      <!-- テキスト入力 -->

      <!-- 一覧表示 -->
      <ListPosts
        target="index"
        @show-user="showUser"
        @do-login="moveToLogin"
        @show-post="showPost"
      />
    </div>
  </div>
</template>

<script lang="ts" src="@/assets/ts/home.ts"></script>
