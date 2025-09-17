<template>
  <v-container ga>
    <h1>Ваше расписание на неделю: {{currentWeek}} на точке: {{currentPoint}} </h1>
    <div id="container">
[     <v-card  v-for="(item, index) in days" @click="openDialog(index+1)" :title="item.title" text="Смена: 14:45 - 21:00" variant="tonal" link>
      </v-card>
      <v-btn base-color="blue">Сохранить</v-btn>
    </div>

    <div class="text-center pa-4">
        <v-dialog
          v-model="dialog"
          width="auto"
        >
          <v-card
            max-width="400"
            prepend-icon="mdi-update"
            :text="curEditDay.startTime"
            :title="curEditDay"
          >
            <template v-slot:actions>
              <v-btn
                class="ms-auto"
                text="Ok"
                @click="dialog = false"
              ></v-btn>
            </template>
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
      endTime: "21:00"
    },
    {
      title: 'Вторник',
      startTime: "14:45",
      endTime: "21:00"
    },
    {
      title: 'Среда',
      startTime: "14:45",
      endTime: "21:00"
    },
    {
      title: 'Четверг',
      startTime: "14:45",
      endTime: "21:00"
    },
    {
      title: 'Пятница',
      startTime: "14:45",
      endTime: "21:00"
    },
    {
      title: 'Суббота',
      startTime: "14:45",
      endTime: "21:00"
    },
    {
      title: 'Воскресенье',
      startTime: "14:45",
      endTime: "21:00"
    },
  ]);

  const dialog = ref(false)
  let curEditDay = ref({
    startTime: "15:00",
    endTime: "21:00",
    }
  )

  function openDialog(index){
    curEditDay.value.startTime = index;
    dialog.value = true;
  }
</script>

<style scoped>
  #container{
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
</style>
