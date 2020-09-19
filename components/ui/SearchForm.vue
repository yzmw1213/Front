<template>
    <v-form>
      <v-text-field
        v-model="inputValue"
        clearable
        hide-details
        filled
        rounded
        outlined
        placeholder="キーワードを入力"
        dense
      >
        <template v-slot:append>
          <v-fade-transition leave-absolute>
            <v-progress-circular
              v-if="loading"
              size="24"
              color="info"
              indeterminate
            ></v-progress-circular>
            <v-btn
              icon
              @click="search"
            >
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-fade-transition>
        </template>
      </v-text-field>    
    </v-form>
</template>


<script lang="ts" src="@/assets/ts/search_form.ts"></script>
