<template>
  <v-container ga>
    <h1>Создание расписания на неделю: {{ currentWeek }} на точке: {{ currentPoint }} </h1>
    <div id="container">
      <ScheduleCard
        v-for="(item, index) in days"
        :key="index"
        :day-off="item.dayOff"
        :end-time="item.endTime"
        :index="index"
        :start-time="item.startTime"
        :title="item.title"
        @open-dialog="openDialog"
      />
      <v-btn base-color="blue" @click="saveSchedule">Сохранить</v-btn>
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
          <TimePick :day-index="curEditDay.index" @close-window="closeDialog" />
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>

<script setup lang="ts">
  import type { Ref } from 'vue'
  import { ref } from 'vue'
  const currentWeek = ref('Сен 14 - Сен 20')
  const currentPoint = ref('Scandis')

  const days = ref([
    {
      title: 'Понедельник',
      startTime: '14:45',
      endTime: '21:15',
      dayOff: true,
    },
    {
      title: 'Вторник',
      startTime: '14:45',
      endTime: '21:00',
      dayOff: true,
    },
    {
      title: 'Среда',
      startTime: '14:45',
      endTime: '21:00',
      dayOff: true,
    },
    {
      title: 'Четверг',
      startTime: '14:45',
      endTime: '21:00',
      dayOff: true,
    },
    {
      title: 'Пятница',
      startTime: '14:45',
      endTime: '21:00',
      dayOff: true,
    },
    {
      title: 'Суббота',
      startTime: '14:45',
      endTime: '21:00',
      dayOff: true,
    },
    {
      title: 'Воскресенье',
      startTime: '14:45',
      endTime: '21:00',
      dayOff: true,
      // TODO: Исправить выбор времени для воскресенья
    },
  ])

  const dialog = ref(false)

  const curEditDay = ref({
    index: 0,
    title: '',
    startTime: '15:00',
    endTime: '21:00',
  },
  )

  function openDialog (index: number) {
    curEditDay.value.title = days.value[index].title
    curEditDay.value.index = index
    dialog.value = true
  }

  function closeDialog (a: number, b: string, c: string) {
    console.log(a, b, c)
    days.value[a].startTime = b
    days.value[a].endTime = c
    // TODO: fix fay off check
    days.value[a].dayOff = c && b ? false : true
    dialog.value = false
  }

  function saveSchedule () {
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
