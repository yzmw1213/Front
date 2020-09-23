<template>
  <v-simple-table height="150px">
    <template v-slot:default>
      <!-- <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
        </tr>
      </thead> -->
      <tbody>
        <tr v-for="profile in profiles" :key="profile.name">
          <td>{{ profile.name }}</td>
          <td>{{ profile.value }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script lang="ts" src="@/assets/ts/profile.ts"></script>
