<template>
  <div class="content_wrapper">
    <!-- ヘッダー -->
    <Header
      :authed="auth"
      @open-nav="openNav"
      @do-search="search"
      @do-login="login"
      @do-logout="logout"
      @show-user="user"
    />
    <v-container
      class="px-3"
    >
      <message />
      <!-- スマートフォンサイズで表示するサイドナビゲーション -->
      <v-navigation-drawer
        v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
        v-model="drawer"
        temporary
        app
        left
      >
        <search-form
          class="header_form"
          :nav-drawer="drawer"
          @search="search"
        />
        <v-list
          nav
          dense
        >
          <!-- 認証済時 -->
          <v-list-item-group
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item
              @click="home"
            >
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>トップ画面</v-list-item-title>
            </v-list-item>
            <v-list-item
              v-if="auth"
              @click="user"
            >
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>マイページ</v-list-item-title>
            </v-list-item>
            <!-- 企業アカウントの場合に表示 -->
            <v-list-item
              @click="post"
            >
              <v-list-item-icon>
                <v-icon>mdi-lead-pencil</v-icon>
              </v-list-item-icon>
              <v-list-item-title>記事を投稿する</v-list-item-title>
            </v-list-item>
            <!-- 管理者アカウントの場合に表示 -->
            <v-list-item
              @click="tagPost"
            >
              <v-list-item-icon>
                <v-icon>mdi-lead-pencil</v-icon>
              </v-list-item-icon>
              <v-list-item-title>タグを管理する</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <template
          v-slot:append
        >
          <div
            v-if="!auth"
            class="pa-2"
            @click="login"
          >
            <v-btn block>
              ログイン
            </v-btn>
          </div>
          <div
            v-if="auth"
            class="pa-2"
            @click="logout"
          >
            <v-btn block>
              ログアウト
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-main>
        <component
          :is="currentPage"
          :detail-user-id="detailUserId"
          @authenticated="authed"
          @go-home="home"
          @go-tag-list="tagList"
          @edit-tag="createTag"
          @show-user="user"
        />
      </v-main>
    </v-container>
    <!-- フッター -->
    <Footer />
  </div>
</template>

<script lang="ts" src="../assets/ts/index.ts"></script>
