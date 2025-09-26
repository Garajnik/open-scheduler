<template>
  <v-app>
    <v-main>
      <v-app-bar :elevation="2">
        <template #prepend>
          <v-btn v-if="enableReturnBtn" icon="mdi-arrow-left" size="large" @click="handleReturn" />
        </template>
        <v-app-bar-title>Иван Иванов</v-app-bar-title>
      </v-app-bar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const enableReturnBtn = ref(true)

  function handleReturn () {
    window.location.href = '/'
  }

  const currentPath = ref(window.location)

  enableReturnBtn.value = currentPath.value.pathname === '/' ? false : true
</script>
