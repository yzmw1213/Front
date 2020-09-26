<template>
  <div class="content_inner">
    <div class="page_header_area">
      <div class="page_header_logo_area">
        <span>some logos</span>
      </div>
      <h2 class="page_header_title_area">
        <span class="header_main">企業ログイン</span>
      </h2>
    </div>

    <validation-observer ref="obs" v-slot="{ invalid }">
      <v-form>
        <validation-provider
          v-slot="{ errors, valid }"
          name="企業ID"
          rules="required"
        >
          <v-text-field
            v-model="email"
            label="企業ID"
            :error-messages="errors"
            placeholder="COMPANY1234"
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
              @click="demoLogin"
            >
              デモ企業アカウントでログインする
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </validation-observer>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/login.scss"></style>

<script lang="ts" src="@/assets/ts/company_login.ts"></script>
