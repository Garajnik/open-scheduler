<template>
  <v-card link :title="title" variant="tonal" @click="$emit('open-dialog', index)">
    <div v-if="dayOff === false" class="container">
      <v-chip>{{ startTime }}</v-chip>
      <p>-</p>
      <v-chip>{{ endTime }}</v-chip>
    </div>
    <div v-else class="container">
      <v-chip color="red">Выходной</v-chip>
    </div>
  </v-card>
</template>

<script setup lang="ts">
  defineProps(['index', 'title', 'startTime', 'endTime', 'dayOff', 'openFn'])
  defineEmits(['open-dialog'])
</script>

<style lang="scss" scoped>
  .container{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
  }
</style>
