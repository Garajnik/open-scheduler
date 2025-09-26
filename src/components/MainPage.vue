<template>
  <div id="container">
    <v-container gap="10">
      <h2 id="text">Добро пожаловать, {{ userName }}</h2>
      <v-select
        default="Scandis"
        density="compact"
        :items="['Scandis', 'Smart', 'БЦ']"
        label="Выберите точку"
        variant="outlined"
      />
      <div id="buttonsContainer">
        <v-btn base-color="blue" @click="openSchedule">Создать расписание</v-btn>
        <v-btn base-color="blue" @click="openSchedule">Изменить расписание</v-btn>
        <v-btn base-color="blue" @click="viewSchedule">Просмотреть расписание</v-btn>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const userName = ref('user')

  function openSchedule () {
    window.location.href = '/schedule'
  }

  function viewSchedule () {
    window.open('http://google.com')
  }
</script>

<style scoped>
  #text {
    margin-bottom: 10px;
  }

  #container {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #buttonsContainer {
    display: flex;

    gap: 15px;
    flex-direction: column;
    justify-content: center;
  }
</style>
