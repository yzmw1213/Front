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
          プロフィール編集
        </v-btn>
      </div>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">プロフィール編集</span>
      </v-card-title>
      <validation-observer ref="obs" v-slot="{ invalid }">
        <v-form>
          <validation-provider
            v-slot="{ errors, valid }"
            name="ユーザー名"
            rules="required|max:16|min:3"
          >
            <v-text-field
              v-model="editedUser.userName"
              :counter="16"
              label="ユーザー名"
              :error-messages="errors"
              :success="valid"
            />
          </validation-provider>
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
              :disabled="invalid"
              @click="update()"
            >
              更新
            </v-btn>
          </v-card-actions>
        </v-form>
      </validation-observer>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" src="@/assets/ts/update_user_dialog.ts"></script>
