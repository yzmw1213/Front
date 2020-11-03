<template>
  <!-- トップ画面に戻るボタンをつける -->
  <div class="content_inner">
    <v-data-table
      :headers="headers"
      :items="tags"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>タグ管理</v-toolbar-title>
        </v-toolbar>
        <v-btn
          color="primary"
          dark
          class="mb-2"
          @click="createTag"
        >
          タグ追加
        </v-btn>
      </template>

      <template v-slot:[`item.actions`]="{item}">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">
          Reset
        </v-btn>
      </template>
    </v-data-table>
    <v-row class="flex-column">
      <!-- csvダウンロード等の機能を設ける -->
    </v-row>
  </div>
</template>

<script lang="ts" src="@/assets/ts/list.ts"></script>
