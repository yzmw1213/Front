<template>
  <div class="content_inner">
    <div class="page_header_area">
      <h2 class="page_header_title_area">
        <span class="header_main">Tag</span>
        <span class="header_sub">タグ編集</span>
      </h2>
    </div>
    <div class="form">
      <validation-observer>
        <v-row
          justify="center"
        >
          <v-col
            cols="8"
            xs="6"
            sm="6"
            md="6"
            lg="4"
            xl="4"
          >
            <validation-provider
              v-slot="{ errors, valid }"
              name="タグ名"
              rules="required|min:1|max:12"
            >
              <v-text-field
                v-model="editedItem.tagName"
                label="タグ名"
                :error-messages="errors"
                :success="valid"
              />
            </validation-provider>
          </v-col>
        </v-row>
        <v-row
          justify="center"
        >
          <v-col
            cols="8"
            xs="6"
            sm="6"
            md="6"
            lg="4"
            xl="4"
          >
            <validation-provider
              v-slot="{ errors, valid }"
              name="公開ステータス"
              rules="oneOf:1,2"
            >
              <v-select
                v-model="editedItem.status"
                :items="rStatus"
                item-text="value"
                item-value="key"
                label="公開ステータス"
                :error-messages="errors"
                :success="valid"
              />
            </validation-provider>
          </v-col>
        </v-row>
      </validation-observer>
      <v-row
        justify="center"
      >
        <v-col
          class="pb-1"
          cols="4"
        >
          <v-btn
            color="secondary"
            block
            small
            @click="goList"
          >
            戻る
          </v-btn>
        </v-col>
        <v-col
          class="pb-1"
          cols="4"
        >
          <v-btn
            color="primary"
            block
            small
            @click="post"
          >
            投稿する
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts" src="@/assets/ts/create_tag.ts"></script>
