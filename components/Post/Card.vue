<template>
  <v-card
    class="mx-auto list_card"
  >
    <div
      class="card_main_area"
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
      <v-card-text>{{ post.content }}</v-card-text>
    </div>
    <!-- ユーザーがlikeしている場合はlikeをredにする -->
    <v-card-actions>
      <v-icon
        class="mr-1"
        :class="{red_text: post.likedByLoginUser}"
        @click="changeLikeStatus(post)"
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
      <v-list-item
        @click="selectUser(post.createUserID)"
      >
        <v-list-item-avatar
          color="grey"
        />
        <span>{{ post.createUserName }}</span>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" scoped src="@/assets/scss/post_card.scss"></style>

<script lang="ts" src="@/assets/ts/post_card.ts"></script>
