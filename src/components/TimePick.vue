<script lang="ts" setup>
  import { ref } from 'vue'
  import { createCssTransition } from 'vuetify/util/transitions'

  const { dayIndex } = defineProps({ dayIndex: Number })
  const emit = defineEmits<{
    (e: 'close-window', dayIndex: number, startTime: string, endTime: string): void
  }>()
  const startTime = ref('')
  const endTime = ref('')

  const ComponentTransition = createCssTransition('component-transition')
  const showStartTimeClock = ref(false)
  const showEndTimeClock = ref(false)

  function openClock () {
    showStartTimeClock.value = !showStartTimeClock.value
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
    emit('close-window', dayIndex, '0', '0')
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

<template>
  <div id="container">
    <v-btn base-color="green" @click="selectMorning">Утро</v-btn>
    <v-btn base-color="orange" @click="selectEvening">Вечер</v-btn>
    <v-btn base-color="grey" @click="openClock">Своё время</v-btn>
    <ComponentTransition>
      <v-card v-show="showStartTimeClock">
        <v-time-picker
          v-model="startTime"
          format="24hr"
          max="20:15"
          min="7:30"
          title="Начало смены:"
        />
        <v-btn @click="switchClock">Далее</v-btn>
      </v-card>
    </ComponentTransition>
    <ComponentTransition>
      <v-card v-show="showEndTimeClock">
        <v-time-picker
          v-model="endTime"
          format="24hr"
          max="21:15"
          min="9:30"
          title="Конец смены:"
        />
        <v-btn @click="switchClock">Назад</v-btn>
        <v-btn @click="selectTime">Готово</v-btn>
      </v-card>
    </ComponentTransition>
    <v-btn base-color="red" @click="selectDayOff">Убрать время</v-btn>
  </div>
</template>

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
</style>
