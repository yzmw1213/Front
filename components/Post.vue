<template>
  <div class="content_inner">
    <div class="page_header_area">
      <div class="page_header_logo_area">
        <span>some logos</span>
      </div>
      <h2 class="page_header_title_area">
        <span class="header_main">POST</span>
        <span class="header_sub">投稿しよう</span>
      </h2>
    </div>

    <validation-observer ref="obs" v-slot="{ invalid }">
      <v-form>
        <validation-provider
          v-slot="{ errors, valid }"
          name="本文"
          rules="required|max:140"
        >
          <v-textarea
            v-model="content"
            class="py-3"
            row-height="30"
            autofocus
            clearable
            counter
            dense
            no-resize
            outlined
            rounded
            label="本文"
            :error-messages="errors"
            placeholder="何か書こう"
            :success="valid"
            required
            rows="5"
          />
          <v-file-input
            accept="image/png, image/jpeg, image/bmp"
            prepend-icon="mdi-paperclip"
            :clearable="false"
            @blur="onImageUploaded($event)"
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
              @click="cancelPost"
            >
              キャンセル
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </validation-observer>

    <!-- 画像アップロード -->
  </div>
</template>

<script lang="ts" src="@/assets/ts/post.ts"></script>
