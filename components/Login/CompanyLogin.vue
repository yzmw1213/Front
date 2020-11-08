<template>
  <div class="content_inner">
    <!-- ログイン画面では、page_header_areaの代わりにアプリのロゴを表示するなど -->
    <div class="page_header_area">
      <h2 class="page_header_title_area">
        <span class="header_main">企業ログイン</span>
      </h2>
    </div>

    <validation-observer ref="obs" v-slot="{ invalid }">
      <v-form>
        <validation-provider
          v-slot="{ errors, valid }"
          name="メールアドレス"
          rules="required|email"
        >
          <v-text-field
            v-model="email"
            label="メールアドレス"
            :error-messages="errors"
            placeholder="example@app.com"
            :success="valid"
            required
          />
        </validation-provider>
        <!-- パスワードは、登録画面で alpha_num|min:6|max:32 などのルールを設ける-->
        <validation-provider
          v-slot="{ errors, valid }"
          name="パスワード"
          rules="required"
        >
          <v-text-field
            v-model="password"
            label="パスワード"
            :error-messages="errors"
            :success="valid"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
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
              @click="login"
            >
              ログイン
            </v-btn>
          </v-col>
          <v-col
            class="pb-1"
          >
            <v-btn
              class="indigo--text"
              color="secondary"
              block
              small
              @click="demoCompanyLogin"
            >
              デモ企業アカウントでログインする
            </v-btn>
          </v-col>
          <v-col
            class="pb-1"
          >
            <v-btn
              class="indigo--text"
              color="tertiary"
              block
              small
              @click="createUser"
            >
              アカウント新規登録
            </v-btn>
          </v-col>
          <v-col
            class="pb-1"
          >
            <v-btn
              class="white--text"
              color="negative"
              block
              small
              @click="goHome"
            >
              戻る
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </validation-observer>
  </div>
</template>

<script lang="ts" src="@/assets/ts/company_login.ts"></script>
