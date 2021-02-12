<template>
  <div class="content_wrapper">
    <!-- ヘッダー -->
    <Header
      :authed="auth"
      @open-nav="openNav"
      @do-login="userLogin"
      @do-logout="logout"
      @go-home="home"
      @show-user="user"
      @sign-up="signUp"
    />
    <v-container
      class="px-3"
      :class="{ wide_screen: $vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl }"
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
        <!-- <search-form
          class="header_form"
          :nav-drawer="drawer"
          @search="search"
        /> -->
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
              @click="myPage"
            >
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>マイページ</v-list-item-title>
            </v-list-item>
            <!-- ユーザー一覧 -->
            <v-list-item
              @click="listUser"
            >
              <v-list-item-icon>
                <v-icon>mdi-office-building</v-icon>
              </v-list-item-icon>
              <v-list-item-title>ユーザー一覧</v-list-item-title>
            </v-list-item>
            <!-- 一般アカウントの場合に表示 -->
            <v-list-item
              v-if="isNormalUser() == true"
              @click="post"
            >
              <v-list-item-icon>
                <v-icon>mdi-lead-pencil</v-icon>
              </v-list-item-icon>
              <v-list-item-title>物件を投稿する</v-list-item-title>
            </v-list-item>
            <!-- 管理者アカウントの場合に表示 -->
            <v-list-item
              v-if="isSuperUser() == true"
              @click="listTag"
            >
              <v-list-item-icon>
                <v-icon>mdi-lead-pencil</v-icon>
              </v-list-item-icon>
              <v-list-item-title>タグを管理する</v-list-item-title>
            </v-list-item>
            <!-- アカウント新規登録 -->
            <v-list-item
              v-if="getAuthKind < 1"
              @click="signUp"
            >
              <v-list-item-icon>
                <v-icon>mdi-account-plus</v-icon>
              </v-list-item-icon>
              <v-list-item-title>新規アカウント登録</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <template
          v-slot:append
        >
          <!-- 未認証時に表示 -->
          <div
            v-if="getAuthKind < 1"
            class="pa-2"
            @click="userLogin"
          >
            <v-btn block>
              ログイン
            </v-btn>
          </div>
          <!-- 認証済時に表示 -->
          <div
            v-if="getAuthKind > 0"
            class="pa-2"
            @click="logout"
          >
            <v-btn block>
              ログアウト
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <!-- <search-dialog
        @do-search="search"
      /> -->

      <component
        :is="currentPage"
        @authenticated="authed"
        @do-login="userLogin"
        @sign-up="signUp"
        @go-home="home"
        @go-tag-list="listTag"
        @edit-tag="createTag"
        @show-post="showPost"
        @show-user="user"
      />
      <!-- フッターボタンエリア -->
      <FooterButtonArea
        v-if="showFooterButton"
        @go-home="home"
      />
    </v-container>
    <!-- フッター -->
    <Footer />
  </div>
</template>

<script lang="ts" src="../assets/ts/index.ts"></script>
