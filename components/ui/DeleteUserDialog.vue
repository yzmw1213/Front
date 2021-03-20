<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
  >
    <template v-slot:activator="{ on, attrs }">
      <div class="button_area">
        <v-btn
          color="primary"
          dark
          small
          v-bind="attrs"
          v-on="on"
        >
          退会
        </v-btn>
      </div>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">退会</span>
      </v-card-title>
      <v-card-text>
        <p>退会します。よろしいですか?</p>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="error"
          @click="dialog = false"
        >
          やめる
        </v-btn>
        <v-btn
          color="primary"
          @click="confirmDelete()"
        >
          退会
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" src="@/assets/ts/delete_user_dialog.ts"></script>
