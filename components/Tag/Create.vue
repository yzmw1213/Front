<template>
  <div class="content_inner">
    <div class="page_header_area">
      <div class="page_header_logo_area">
        <span>some logos</span>
      </div>
      <h2 class="page_header_title_area">
        <span class="header_main">Tag</span>
        <span class="header_sub">タグ編集</span>
      </h2>
    </div>
    <!-- ここにタグのフォームを設ける -->
    <v-row class="flex-column">
      <v-col
        class="pb-1"
      >
        <v-btn
          color="primary"
          block
          small
          @click="post"
        >
          投稿する
        </v-btn>
      </v-col>
      <v-col
        class="button_dividor"
      >
        <span>または</span>
      </v-col>
      <v-col
        class="pb-1"
      >
        <v-btn
          color="secondary"
          block
          small
          @click="goList"
        >
          キャンセル
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" src="@/assets/ts/create_tag.ts"></script>
