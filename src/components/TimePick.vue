<template>
  <div id="container">
    <v-btn v-show="showButtons" base-color="green" @click="selectMorning">Утро</v-btn>
    <v-btn v-show="showButtons" base-color="orange" @click="selectEvening">Вечер</v-btn>
    <v-btn v-show="showButtons" base-color="grey" @click="openClock">Своё время</v-btn>

    <v-card v-show="showStartTimeClock" class="timeCard">
      <v-time-picker
        v-model="startTime"
        color="cyan-lighten-1"
        format="24hr"
        max="20:15"
        min="7:30"
        title="Начало смены:"
      />
      <div class="buttonsCard">
        <v-btn class="NextButton" @click="closeClock">Назад</v-btn>
        <v-btn class="NextButton" color="green" @click="switchClock">Далее</v-btn>
      </div>
    </v-card>

    <v-card v-show="showEndTimeClock" class="timeCard">
      <v-time-picker
        v-model="endTime"
        color="purple-darken-2"
        format="24hr"
        max="21:15"
        min="9:30"
        title="Конец смены:"
      />
      <div class="buttonsCard">
        <v-btn @click="switchClock">Назад</v-btn>
        <v-btn color="green" @click="selectTime">Готово</v-btn>
      </div>
    </v-card>

    <v-btn base-color="red" @click="selectDayOff">Убрать время</v-btn>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const { dayIndex } = defineProps({ dayIndex: Number })
  const emit = defineEmits<{
    (e: 'close-window', dayIndex: number, startTime: string, endTime: string): void
  }>()
  const startTime = ref('')
  const endTime = ref('')

  const showStartTimeClock = ref(false)
  const showEndTimeClock = ref(false)
  const showButtons = ref(true)

  function openClock () {
    showStartTimeClock.value = !showStartTimeClock.value
    showButtons.value = !showButtons.value
  }

  function closeClock () {
    showStartTimeClock.value = false
    showEndTimeClock.value = false
    showButtons.value = true
  }

  function switchClock () {
    showStartTimeClock.value = !showStartTimeClock.value
    showEndTimeClock.value = !showEndTimeClock.value
  }

  function selectTime () {
    if (dayIndex === undefined) {
      return null
    }
    emit('close-window', dayIndex, startTime.value, endTime.value)
  }

  function selectDayOff () {
    if (dayIndex === undefined) {
      return null
    }
    emit('close-window', dayIndex, '', '')
  }

  function selectMorning () {
    if (dayIndex === undefined) {
      return null
    }
    startTime.value = '7:30'
    endTime.value = '15:00'
    emit('close-window', dayIndex, startTime.value, endTime.value)
  }

  function selectEvening () {
    if (dayIndex === undefined) {
      return null
    }
    startTime.value = '14:45'
    endTime.value = '21:15'
    emit('close-window', dayIndex, startTime.value, endTime.value)
  }
</script>

<style lang="scss" scoped>
#container {
  display: flex;
  margin: 10px;
}

.component-transition {

  &-enter-active,
  &-leave-active {
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: scale(0.2);
    filter: hue-rotate(90deg);
  }
}

.timeCard {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.buttonsCard {
  display: flex;
  justify-content: space-between;
}
</style>
