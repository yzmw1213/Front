<template>
  <!-- 一覧表示 -->
  <!-- できれば無限スクロール -->
  <v-layout wrap>
    <v-flex
      v-for="post of posts"
      :key="post.post_id"
      md4
    >
      <v-card
        class="mx-auto"
      >
        <!-- 上部は画像表示 -->
        <!-- タブレット、PCなどはcol幅を別途調整 -->
        <v-row>
          <v-col
            :cols="2"
          >
            <v-list-item>
              <v-list-item-avatar
                color="grey"
                @click="showUser(post.userId)"
              />
            </v-list-item>
          </v-col>

          <v-col
            :cols="10"
          >
            <!-- 単票画面へのリンク -->
            <v-card-title
            >
              {{ post.title }}
            </v-card-title>
            <v-card-subtitle
              @click="showUser(post.userId)"
            >
              {{ post.createUserName }}
            </v-card-subtitle>
            <v-card-text>{{ post.content }}</v-card-text>
            <v-card-actions>
              <v-row
                align="center"
              >
                <v-icon class="mr-1">
                  mdi-heart
                </v-icon>
                <!-- お気に入りユーザ数を表示 -->
                <span class="subheading mr-2">256</span>
                <span class="mr-1">·</span>
                <v-icon class="mr-1">
                  mdi-share-variant
                </v-icon>
                <span class="subheading">45</span>
              </v-row>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts" src="@/assets/ts/show_posts.ts"></script>
