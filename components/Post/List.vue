<template>
  <!-- 一覧表示 -->
  <!-- できれば無限スクロール -->
  <div>
    <v-card
      v-for="(post, index) of posts"
      :key="post.post_id"
      class="mx-auto"
      @click="showItem(post)"
    >
      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      />
      <!-- 上部は画像表示 -->
      <!-- タブレット、PCなどはcol幅を別途調整 -->
      <!-- 単票画面へのリンク -->
      <v-card-title>
        {{ post.title }}
      </v-card-title>
      <v-card-subtitle
        @click="showUser(post.userId)"
      >
        {{ post.createUserName }}
      </v-card-subtitle>
      <v-card-text>{{ post.content }}</v-card-text>
      <!-- ユーザーがlikeしている場合はlikeをredにする -->
      <v-card-actions>
        <v-icon
          class="mr-1"
          :class="{red_text: post.likedByLoginUser}"
          @click="changeLikeStatus(post, index)"
        >
          mdi-heart
        </v-icon>
        <span
          v-if=" post.likeUsersNum > 0"
          class="subheading mr-2"
        >
          {{ post.likeUsersNum }}
        </span>
      </v-card-actions>
      <v-card-actions>
        <v-list-item>
          <v-list-item-avatar
            color="grey"
            @click="showUser(post.userId)"
          />
          <span>Create User</span>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts" src="@/assets/ts/list_post.ts"></script>
