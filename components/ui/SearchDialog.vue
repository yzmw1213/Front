<template>
  <v-row>
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
            v-bind="attrs"
            v-on="on"
          >
            検索条件を指定する
          </v-btn>
        </div>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">検索条件</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <!-- タグ -->
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  v-model="tag"
                  :items="validTags"
                  label="タグ"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="accent"
            @click="clear()"
          >
            条件をクリア
          </v-btn>
          <v-btn
            color="error"
            @click="dialog = false"
          >
            やめる
          </v-btn>
          <v-btn
            color="primary"
            @click="doSearch()"
          >
            検索
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts" src="@/assets/ts/search_dialog.ts"></script>
