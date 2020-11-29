<template>
  <div class="content_inner">
    <div class="page_header_area">
      <div class="page_header_logo_area">
        <span>some logos</span>
      </div>
      <h2 class="page_header_title_area">
        <span class="header_main">POST</span>
        <span class="header_sub">物件を投稿しよう</span>
      </h2>
    </div>

    <validation-observer ref="obs" v-slot="{ invalid }">
      <v-form>
        <validation-provider
          v-slot="{ errors, valid }"
          name="タイトル"
          rules="required|max:32"
        >
          <v-textarea
            v-model="editedItem.title"
            class="py-3"
            row-height="30"
            autofocus
            clearable
            counter
            dense
            no-resize
            label="タイトル"
            :error-messages="errors"
            placeholder="駅から徒歩5分!冷蔵庫、洗濯機つき"
            :success="valid"
            required
            rows="3"
          />
        </validation-provider>

        <validation-provider
          v-slot="{ errors, valid }"
          name="本文"
          rules="required|max:240"
        >
          <v-textarea
            v-model="editedItem.content"
            class="py-3"
            row-height="30"
            clearable
            counter
            dense
            no-resize
            outlined
            rounded
            label="本文"
            :error-messages="errors"
            placeholder="とても住みやすいお部屋です"
            :success="valid"
            required
            rows="5"
          />
        </validation-provider>
        <validation-provider
          v-slot="{ errors, valid }"
          name="タグ"
        >
          <v-select
            v-model="editedItem.tags"
            chips
            :items="validTags"
            item-text="text"
            item-value="key"
            label="タグ"
            multiple
            :error-messages="errors"
            :success="valid"
            dense
          />
        </validation-provider>
        <!-- 画像アップロード -->
        <v-file-input
          accept="image/png, image/jpeg, image/bmp"
          prepend-icon="mdi-paperclip"
          :clearable="false"
          @blur="onImageUploaded($event)"
        />
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
  </div>
</template>

<script lang="ts" src="@/assets/ts/create_post.ts"></script>
