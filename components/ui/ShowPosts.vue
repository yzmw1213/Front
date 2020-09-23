<template>
  <!-- 一覧表示 -->
  <!-- できれば無限スクロール -->
  <v-layout wrap>
    <v-flex 
      md4
      v-for="post of posts"
      :key="post.post_id"
    >
      <v-card
        class="mx-auto"
      >
        <!-- タブレット、PCなどはcol幅を別途調整 -->
        <v-row>
          <v-col
            :cols="2"
          >
            <v-list-item>
              <v-list-item-avatar 
                @click="showUser(post.user_id)"
                color="grey"
              />
            </v-list-item>
          </v-col>

          <v-col
            :cols="10"
          >
            <v-card-title
              @click="showUser(post.user_id)"
            >
              {{ post.user_name }}
            </v-card-title>
            <v-card-text>{{ post.content }}</v-card-text>
            <v-card-actions>
              <v-row
                align="center"
              >
                <v-icon class="mr-1">mdi-heart</v-icon>
                <span class="subheading mr-2">256</span>
                <span class="mr-1">·</span>
                <v-icon class="mr-1">mdi-share-variant</v-icon>
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
