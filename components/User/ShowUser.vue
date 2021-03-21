<template>
  <div class="content_inner">
    <!-- ユーザーのプロフィールを閲覧できる -->
    <!-- フォロー機能 -->
    <!-- ログインユーザーの場合、プロフィール編集できる -->
    <div class="user_area">
      <div class="user_head_area">
        <div class="user_img" />
        <span>{{ item.userName }}</span>
        <!-- プロフィール文、プロフィール修正のUI -->
        <div
          class="action_area"
        >
          <!-- ログインユーザー未フォロー -->
          <v-btn
            v-if="!item.followByLoginUser && !item.isLoginUser"
            color="primary"
            @click="changeFollowStatus()"
          >
            フォロー
          </v-btn>
          <!-- ログインユーザーフォロー済 -->
          <v-btn
            v-if="item.followByLoginUser"
            color="error"
            @click="changeFollowStatus()"
          >
            フォローを外す
          </v-btn>
        </div>
      </div>
      <v-row>
        <update-user-dialog
          v-if="item.isLoginUser"
          @reload="getUser()"
        />
        <!-- 退会ボタンは、一般ユーザーのみ有効 -->
        <delete-user-dialog
          v-if="item.isLoginUser && loginUserAuthority == 1"
          @logout="moveToLogin()"
        />
      </v-row>
      <div class="user_lower_area">
        <p v-if="item.profileText">{{ item.profileText }}</p>
      </div>
    </div>
    <div class="tab_button_area">
      <v-tabs
        v-model="tab"
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
      :tab="target"
      @show-user="user"
      @show-post="post"
    />
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/show_user.scss"></style>

<script lang="ts" src="@/assets/ts/show_user.ts"></script>
