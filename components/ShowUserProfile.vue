<template>
  <div class="content_inner">
    <!-- ユーザーのプロフィールを閲覧できる -->
    <!-- フォロー機能 -->
    <!-- ログインユーザーの場合、プロフィール編集できる -->
    <v-card
      class="mx-auto"
      tile
    >
      <v-img
        height="100%"
        src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
      >
        <v-row
          align="end"
          class="fill-height"
          justify="space-around"
        >
          <v-col
            align-self="start"
            class="pa-0"
            cols="12"
          >
            <v-avatar
              class="profile"
              color="grey"
              size="164"
            >
              <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" />
            </v-avatar>
          </v-col>
          <v-col class="py-0">
            <v-list-item
              color="rgba(0, 0, 0, .4)"
              dark
            >
              <v-list-item-content>
                <v-list-item-title class="title">
                  Marcus Obrien
                </v-list-item-title>
                <v-list-item-subtitle>Network Engineer</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-img>
      <v-card-actions>
        <v-list-item class="grow">
          <v-row
            align="center"
          >
            <v-icon class="mr-1">
              mdi-heart
            </v-icon>
            <span class="mr-2">Followers</span>
            <span class="subheading mr-2">256</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1">
              mdi-share-variant
            </v-icon>
            <span class="mr-2">Share</span>
            <span class="subheading">45</span>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
    <v-tabs
      v-model="tab"
      fixed-tabs
      centered
      background-color="indigo"
      dark
    >
      <v-tab
        v-for="item in items"
        :key="item.tab"
        :href="'#tab-' + item.tab"
        @click="changeTab(item.tab)"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>
    <!-- 選択タブに以下の表示を切り替える -->
    <v-tabs-items
      v-model="tab"
    >
      <v-tab-item
        v-for="item in items"
        :key="item.tab"
        :value="&quot;tab-&quot; + item.tab"
      >
        <component
          :is="item.component"
          :target="item.target"
          :user-id="detailUserId"
        />
      </v-tab-item>
    </v-tabs-items>
    <!-- ユーザーの投稿一覧 -->
    <!-- ユーザーのいいね一覧 -->
    <!-- フォローしているタグ -->
    <!-- フォローしているユーザー一覧 -->
  </div>
</template>

<script lang="ts" src="@/assets/ts/show_user_profile.ts"></script>
