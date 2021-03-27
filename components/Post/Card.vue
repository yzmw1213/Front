<template>
  <v-card
    class="mx-auto list_card"
  >
    <div
      class="card_main_area"
    >
      <v-row no-gutters>
        <v-col
          class="main_left_area"
          cols="4"
          @click="showItem(post)"
        >
          <v-img
            :src="post.image"
            class="post_image"
          />
        </v-col>
        <v-col
          class="main_right_area"
          cols="8"
        >
          <p
            class="post_user_name"
            @click="selectUser(post.createUserID)"
          >
            {{ post.createUserName }}
          </p>
          <p
            class="post_title"
            @click="showItem(post)"
          >
            {{ post.title }}
          </p>
          <p
            class="post_content"
          >
            {{ post.content }}
          </p>
          <v-card-actions>
            <v-icon
              class="mr-1 post_action_icon"
              :class="{red_text: post.likedByLoginUser}"
              @click="changeLikeStatus(post)"
            >
              mdi-heart
            </v-icon>
            <span
              v-if=" post.likeUsersNum > 0"
              class="subheading mr-2"
            >
              {{ post.likeUsersNum }}
            </span>
          </v-card-actions>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<style lang="scss" scoped src="@/assets/scss/post_card.scss"></style>

<script lang="ts" src="@/assets/ts/post_card.ts"></script>
