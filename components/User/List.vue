<template>
  <div class="content_inner">
    <div class="page_header_area">
      <h2 class="page_header_title_area">
        <span class="header_sub">ユーザー一覧</span>
      </h2>
    </div>
    <!-- コンテントエリア -->
    <div class="content_area">
      <v-flex
        v-for="company of companies"
        :key="company.userId"
      >
        <v-card
          @click="clickCard(company.userID)"
        >
          <v-card-title>{{ company.userName }}</v-card-title>
        </v-card>
      </v-flex>
      <v-row dense>
        <v-col
          v-for="(item, i) in companies"
          :key="i"
          cols="12"
        >
          <v-card
            @click="clickCard(item.userID)"
          >
            <v-card-title>{{ item.userName }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts" src="@/assets/ts/list_user.ts"></script>
