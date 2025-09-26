<template>
  <v-container ga>
    <h1>Создание расписания на неделю: {{currentWeek}} на точке: {{currentPoint}} </h1>
    <div id="container">
      <ScheduleCard v-for="(item, index) in days"
        :index="index"
        :title="item.title"
        :dayOff="item.dayOff"
        :startTime="item.startTime"
        :endTime="item.endTime"
        @openDialog="openDialog"/>
      <v-btn @click="saveSchedule" base-color="blue">Сохранить</v-btn>
    </div>

    <div class="text-center pa-4">
        <v-dialog
          v-model="dialog"
          width="auto"
        >
          <v-card
            max-width="400"
            prepend-icon="mdi-update"
            :title="curEditDay.title"
          >
          <TimePick :dayIndex="curEditDay.index" @closeWindow="closeDialog"></TimePick>
          </v-card>
        </v-dialog>
      </div>
  </v-container>
</template>

<script setup lang="ts">
  import { ref } from "vue"
  const currentWeek = ref("Сен 14 - Сен 20")
  const currentPoint = ref("Scandis")

  const days = ref([
    {
      title: 'Понедельник',
      startTime: "14:45",
      endTime: "21:15",
      dayOff: true,
    },
    {
      title: 'Вторник',
      startTime: "14:45",
      endTime: "21:00",
      dayOff: true,
    },
    {
      title: 'Среда',
      startTime: "14:45",
      endTime: "21:00",
      dayOff: true,
    },
    {
      title: 'Четверг',
      startTime: "14:45",
      endTime: "21:00",
      dayOff: true,
    },
    {
      title: 'Пятница',
      startTime: "14:45",
      endTime: "21:00",
      dayOff: true,
    },
    {
      title: 'Суббота',
      startTime: "14:45",
      endTime: "21:00",
      dayOff: true,
    },
    {
      title: 'Воскресенье',
      startTime: "14:45",
      endTime: "21:00",
      dayOff: true,
      //TODO: Исправить выбор времени для воскресенья
    },
  ]);

  const dialog = ref(false)

  let curEditDay = ref({
    index: 0,
    title: "",
    startTime: "15:00",
    endTime: "21:00",
    }
  )

  function openDialog(index){
    curEditDay.value.title = days.value[index].title;
    curEditDay.value.index = index;
    dialog.value = true;
  }

  function closeDialog(a, b, c){
  console.log(a, b.value, c.value)
  days.value[a].startTime = b.value;
  days.value[a].endTime = c.value;
  if(c.value && b.value ){
    days.value[a].dayOff = false;
  }
  else{
    days.value[a].dayOff = true;
  }
  dialog.value = false;
  }

  function saveSchedule(){
    console.log(days.value)
  }
</script>

<style scoped>
  #container{
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
</style>
