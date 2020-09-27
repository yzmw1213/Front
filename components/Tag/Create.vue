<template>
  <div class="content_inner">
    <v-data-table
      :headers="headers"
      :items="tags"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>タグ管理</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          />
          <v-spacer />
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                New Item
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle() }}</span>
              </v-card-title>
              <v-form>
                <validation-observer ref="obs" v-slot="{ invalid }">
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <validation-provider
                            v-slot="{ errors, valid }"
                            name="タグ名"
                            rules="required|max:12"
                          >
                            <v-text-field
                              v-model="editedItem.tagName"
                              label="タグ名"
                              :error-messages="errors"
                              placeholder="何か書こう"
                              :success="valid"
                            />
                          </validation-provider>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
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
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer />
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="close"
                    >
                      キャンセル
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      :disabled="invalid"
                      @click="save"
                    >
                      保存する
                    </v-btn>
                  </v-card-actions>
                </validation-observer>
              </v-form>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
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
      <v-col
        class="pb-1"
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
  </div>
</template>

<script lang="ts" src="@/assets/ts/create_tag.ts"></script>
