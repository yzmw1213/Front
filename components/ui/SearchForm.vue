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
        append-outer-icon="mdi-magnify"
        autocomplete="off"
        @click:append-outer="search"
      >
        <template v-slot:append>
          <v-progress-circular
            v-if="loading"
            size="24"
            color="info"
            indeterminate
          />
        </template>
      </v-text-field>
    </v-row>
  </v-form>
</template>

<script lang="ts" src="@/assets/ts/search_form.ts"></script>
