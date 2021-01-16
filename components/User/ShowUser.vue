<template>
  <div class="content_inner">
    <!-- ユーザーのプロフィールを閲覧できる -->
    <!-- フォロー機能 -->
    <!-- ログインユーザーの場合、プロフィール編集できる -->
    <div class="user_area">
      <div class="user_head_area">
        <div class="user_img" />
        <span>{{ item.userName }}</span>
        <div class="action_area">
          <!-- フォローする -->
        </div>
      </div>
      <div class="user_lower_area">
        <p>{{ item.profileText }}</p>
      </div>
    </div>
    <div class="tab_button_area">
      <v-tabs
        fixed-tabs
      >
        <v-tab
          v-for="(tab, index) of tabs"
          :key="index"
        >
          {{ tab.name }}
      </v-tab>
      </v-tabs>
    </div>
    <ListPosts
      @show-user="user"
    />
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/show_user.scss"></style>

<script lang="ts" src="@/assets/ts/show_user.ts"></script>
