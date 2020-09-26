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
            v-model="postContent.title"
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
          rules="required|max:140"
        >
          <v-textarea
            v-model="postContent.content"
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
        <v-row>
          <v-col
            class=""
            cols="5"
          >
            <validation-provider
              v-slot="{ errors, valid }"
              name="最大人数"
              rules="oneOf:2,3,4,5,6,7,8,9,10"
            >
              <v-select
                v-model="postContent.maxNum"
                :items="numChoices"
                label="最大人数"
                :error-messages="errors"
                :success="valid"
                dense
                outlined
              />
            </validation-provider>
          </v-col>
          <v-col
            class=""
            cols="7"
          >
            <validation-provider
              v-slot="{ errors, valid }"
              name="性別"
              rules="oneOf:1,2,3"
            >
              <v-select
                v-model="postContent.gender"
                :items="genderChoices"
                item-text="text"
                item-value="key"
                label="性別"
                :error-messages="errors"
                :success="valid"
                dense
                outlined
              />
            </validation-provider>
          </v-col>
        </v-row>
        <validation-provider
          v-slot="{ errors, valid }"
          name="タグ"
        >
          <v-select
            v-model="postContent.tags"
            chips
            :items="tagChoices"
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
