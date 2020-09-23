<template>
  <div class="content_wrapper">
    <!-- ヘッダー -->
    <Header
      @open-nav="openNav"
      @do-search="search"
    />
    <v-container
      class="px-3"
    >
      <!-- prop isAuth -->
      <v-navigation-drawer
        v-model="drawer"
        temporary
        app
        left
      >
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
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
            <v-list-item
              @click="post"
            >
              <v-list-item-icon>
                <v-icon>mdi-lead-pencil</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Post</v-list-item-title>
            </v-list-item>
          </v-list-item-group>

          <!-- 未認証時 -->
          <!-- <v-list-item-group
              active-class="deep-purple--text text--accent-4"
              v-if="!auth"
            >
              <v-list-item
                @click="home"
              >
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>
            </v-list-item-group> -->
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
          @show-user="user"
        />
      </v-main>
    </v-container>
    <!-- フッター -->
    <Footer />
  </div>
</template>

<script lang="ts" src="../assets/ts/index.ts"></script>
