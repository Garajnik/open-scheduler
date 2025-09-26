<script lang="ts" setup>
import { ref } from "vue";
import { createCssTransition } from "vuetify/util/transitions";

const { dayIndex } = defineProps({ dayIndex: Number });
const emit = defineEmits(["closeWindow"]);

const startTime = ref(null)
const endTime = ref(null)

const ComponentTransition = createCssTransition("component-transition");
const showStartTimeClock = ref(false);
const showEndTimeClock = ref(false);

function openClock() {
  showStartTimeClock.value = !showStartTimeClock.value;
}

function switchClock() {
  showStartTimeClock.value = !showStartTimeClock.value;
  showEndTimeClock.value = !showEndTimeClock.value;
}

function selectTime() {
  emit("closeWindow", dayIndex, startTime, endTime);
}

function selectDayOff(){
  emit("closeWindow", dayIndex, 0, 0);
}

function selectMorning(){
  startTime.value = "7:30";
  endTime.value = "15:00";
  emit("closeWindow", dayIndex, startTime, endTime);
}

function selectEvening(){
  startTime.value = "14:45";
  endTime.value = "21:15";
  emit("closeWindow", dayIndex, startTime, endTime);
}
</script>

<template>
  <div id="container">
    <v-btn @click="selectMorning" base-color="green">Утро</v-btn>
    <v-btn @click="selectEvening" base-color="orange">Вечер</v-btn>
    <v-btn base-color="grey" @click="openClock">Своё время</v-btn>
    <ComponentTransition>
      <v-card v-show="showStartTimeClock">
        <v-time-picker min="7:30" max="20:15" v-model="startTime" title="Начало смены:" format="24hr"></v-time-picker>
        <v-btn @click="switchClock">Далее</v-btn>
      </v-card>
    </ComponentTransition>
    <ComponentTransition>
      <v-card v-show="showEndTimeClock">
        <v-time-picker min="9:30" max="21:15" v-model="endTime" title="Конец смены:" format="24hr"></v-time-picker>
        <v-btn @click="switchClock">Назад</v-btn>
        <v-btn @click="selectTime">Готово</v-btn>
      </v-card>
    </ComponentTransition>
    <v-btn @click="selectDayOff" base-color="red">Убрать время</v-btn>
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
