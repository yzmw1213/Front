<template>
  <v-form>
    <v-row>
      <v-text-field
        v-model="inputValue"
        clearable
        hide-details
        filled
        rounded
        outlined
        placeholder="キーワードを入力"
        dense
        prepend-inner-icon="mdi-magnify"
        autocomplete="off"
      >
        <!-- <template v-slot:append>
            <v-fade-transition leave-absolute>
              <v-progress-circular
                v-if="loading"
                size="24"
                color="info"
                indeterminate
              ></v-progress-circular>
            </v-fade-transition>
          </template> -->
      </v-text-field>
    </v-row>
  </v-form>
</template>

<script lang="ts" src="@/assets/ts/search_form.ts"></script>
