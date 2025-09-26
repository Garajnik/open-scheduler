<template>
  <v-card @click="$emit('openDialog', index)" :title="title" variant="tonal" link>
    <div class="container" v-if="dayOff === false">
      <v-chip>{{startTime}}</v-chip>
      <p>-</p>
      <v-chip>{{endTime}}</v-chip>
    </div>
    <div class="container" v-else="dayOff === true">
      <v-chip color="red">Выходной</v-chip>
    </div>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps(['index', 'title', 'startTime', 'endTime', 'dayOff', 'openFn'])
const emits = defineEmits(['openDialog'])
</script>

<style lang="scss" scoped>
  .container{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
  }
</style>
