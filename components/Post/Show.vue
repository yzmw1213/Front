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
      <div class="user_area">
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
    <div class="comment_area">
      <span v-if=" item.comments.length > 0">コメント</span>
      <div
        v-for="(comment, index) of item.comments"
        :key="comment.commentID"
        class="comment"
      >
        <div class="user_area">
          <div class="user_img" />
          <span>{{ comment.createUserName }}</span>
          <div class="action_area">
            <v-icon
              v-if="!commentEditing && comment.createdByLoginUser"
              class="mr-1"
              @click="editComment(index)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              v-if="!commentEditing && comment.createdByLoginUser"
              class="mr-1"
              @click="deleteComment(index)"
            >
              mdi-trash-can-outline
            </v-icon>
          </div>
        </div>
        <div class="comment_content">
          <p>{{ comment.commentContent }}</p>
        </div>
      </div>
      <validation-observer ref="obs" v-slot="{ invalid }">
        <v-form>
          <validation-provider
            v-slot="{ valid }"
            name="コメント"
            rules="required|max:120"
          >
            <v-textarea
              v-model="formComment.commentContent"
              class="py-3"
              row-height="30"
              counter
              dense
              no-resize
              outlined
              rounded
              label="コメント"
              placeholder="コメントを入力してください"
              :success="valid"
              required
              rows="5"
            />
          </validation-provider>
          <v-row
            class="flex-column"
          >
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
                コメントする
              </v-btn>
            </v-col>
            <v-col
              class="pb-1"
            >
              <v-btn
                color="secondary"
                block
                small
                :disabled="invalid"
                @click="cancelComment"
              >
                コメントをやめる
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </validation-observer>
    </div>
  </div>
</template>

<style lang="scss" scoped src="@/assets/scss/show_post.scss"></style>

<script lang="ts" src="@/assets/ts/show_post.ts"></script>
