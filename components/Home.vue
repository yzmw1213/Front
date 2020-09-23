<template>
  <div class="content_inner">
    <!-- ヘッダーエリア -->
    <div class="page_header_area">
      <div class="page_header_logo_area">
        <span>some logos</span>
      </div>
      <h2 class="page_header_title_area">
        <span class="header_main">POSTS</span>
        <span class="header_sub">コンテンツ</span>
      </h2>
    </div>

    <!-- フォロー、いいねの通知 -->

    <!-- 検索エリア -->
    <div class="search_area" />
    <!-- コンテントエリア -->
    <div class="content_area">
      <!-- テキスト入力 -->

      <!-- 一覧表示 -->
      <ShowPosts
        :posts="posts"
        target="index"
        @show-user="showUser"
      />
    </div>
  </div>
</template>

<script lang="ts" src="@/assets/ts/home.ts"></script>
