
<template>
  <div id="container">
    <v-container gap="10">
      <h2 id="text">Добро пожаловать, {{userName}}</h2>
      <v-select
        label="Выберите точку"
        default="Scandis"
        :items="['Scandis','Smart', 'БЦ']"
        variant="outlined"
        density="compact"

      ></v-select>
      <div id="buttonsContainer">
      <v-btn @click="openSchedule" base-color='blue'>Создать расписание</v-btn>
      <v-btn @click="openSchedule" base-color='blue'>Изменить расписание</v-btn>
      <v-btn @click="viewSchedule" base-color='blue'>Просмотреть расписание</v-btn>
    </div>
  </v-container>
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  const userName = ref("user")

  function openSchedule(){
    window.location.href = '/schedule';
  }

  function viewSchedule(){
    window.open("http://google.com")
  }
</script>

<style scoped>
  #text{
    margin-bottom: 10px;
  }

  #container{
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #buttonsContainer{
    display: flex;

    gap: 15px;
    flex-direction: column;
    justify-content: center;
  }
</style>
