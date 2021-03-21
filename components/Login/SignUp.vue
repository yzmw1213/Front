<template>
  <div class="content_inner">
    <div class="page_header_area">
      <h2 class="page_header_title_area">
        <span class="header_main">ユーザー登録</span>
        <!-- <span class="header_sub">コンテンツ</span> -->
      </h2>
    </div>

    <!-- ログインユーザーのプロフィールを編集できる -->

    <!-- 文字数のバリデーションを行える -->

    <validation-observer ref="obs" v-slot="{ invalid }">
      <v-form>
        <validation-provider
          v-slot="{ errors, valid }"
          name="ユーザー名"
          rules="required|max:16|min:3"
        >
          <v-text-field
            v-model="editedUser.userName"
            :counter="10"
            label="ユーザー名"
            :error-messages="errors"
            :success="valid"
          />
        </validation-provider>
        <validation-provider
          v-slot="{ errors, valid }"
          name="Eメールアドレス"
          rules="required|email"
        >
          <v-text-field
            v-model="editedUser.email"
            label="Eメールアドレス"
            :error-messages="errors"
            :success="valid"
          />
        </validation-provider>
        <!-- kind 個人ユーザー/企業アカウントの設定 -->
        <!-- 1度登録した後は、変更できない -->
        <!-- セレクトボックス/ラジオボタン -->

        <validation-provider
          v-slot="{ errors, valid }"
          name="パスワード"
          rules="required|max:12|min:6"
        >
          <v-text-field
            v-model="editedUser.password"
            label="パスワード"
            :error-messages="errors"
            :success="valid"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
          />
        </validation-provider>
        <validation-provider
          v-slot="{ errors, valid }"
          name="確認用パスワード"
          rules="required"
        >
          <v-text-field
            v-model="confirmPassword"
            label="確認用パスワード"
            :error-messages="errors"
            :success="valid"
            :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showConfirmPassword ? 'text' : 'password'"
            @click:append="showConfirmPassword = !showConfirmPassword"
          />
        </validation-provider>
        <v-row class="flex-column">
          <v-col
            class="pb-1"
          >
            <v-btn
              color="primary"
              block
              small
              :disabled="invalid"
              @click="post"
            >
              投稿する
            </v-btn>
          </v-col>
          <v-col
            class="button_dividor"
          >
            <span>または</span>
          </v-col>
          <v-col
            class="pb-1"
          >
            <v-btn
              color="secondary"
              block
              small
              @click="cancelCreateUser"
            >
              キャンセル
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </validation-observer>
    <!-- アイコン・背景画像をアップロードできる -->
    <!-- <v-file-input
      accept="image/png, image/jpeg, image/bmp"
      prepend-icon="mdi-paperclip"
      :clearable="false"
      @blur="onImageUploaded($event)"
    /> -->
    <!-- 保存 -->
    <!-- 編集をやめる -->

    <!-- お気に入りのタグを追加 -->
    <!--  v-autocomplete など-->
  </div>
</template>

<script lang="ts" src="@/assets/ts/sign_up.ts"></script>
