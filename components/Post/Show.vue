<template>
  <div class="content_inner">
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    />
    <!-- 付与されているタグをforで表示する -->
    <div class="content_lower_area">
      <p class="title_text">{{ item.title }}</p>
      <!-- ユーザー詳細に遷移できる -->
      <div class="create_user_area">
        <div class="user_img" />
        <span>{{ item.createUserName }}</span>
        <div class="action_area">
          <v-icon
            class="mr-1"
            :class="{red_text: item.likedByLoginUser}"
            @click="changeLikeStatus()"
          >
            mdi-heart
          </v-icon>
          <span
            v-if=" item.likeUsersNum > 0"
            class="subheading mr-2"
          >
            {{ item.likeUsersNum }}
          </span>
        </div>
      </div>
      <div class="content_area">
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/show_post.scss"></style>

<script lang="ts" src="@/assets/ts/show_post.ts"></script>
