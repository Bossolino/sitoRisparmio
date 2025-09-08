<template>
  <v-container>
    <v-row>
      <v-alert v-if="notification.value==!{}" closable :icon='"$"+notification.value.status' :title="notification.value.status" :text="notification.value.messaggio" :type="notification.value.status" :color="notification.value.status"></v-alert>
    </v-row>
    <v-row>
      <p v-if="!progTrovati">Nessun progetto trovato, creane uno cliccando su '+'.</p>
      <p v-if="progTrovati">Scegli un progetto o creane uno.</p>
    </v-row>
    <v-row>
      <Card v-for="prog in progetti" :key="prog" :titolo="prog.TITOLO" :path="'/'+prog.TITOLO" classTitolo="card" :obbiettivo="prog.OBBIETTIVO"></Card>
      <v-col>
        <!-- <Card titolo="+" class="card" path="/create" idTitolo="new"></Card> -->
        <v-card to="create" title="+" id="new"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {router} from '@/router/router'
import axios from 'axios';
import { getProgetti, progTrovati, notification } from '@/varGlob';
import { onMounted } from 'vue';
import { progetti } from '../varGlob';

onMounted(()=>{
  getProgetti();
})

</script>
<style>

.card{
  width: fit-content;
  /* height: 5vh;
  text-align: center; */
}

.card:hover{
  color: lightblue;
  border: 3px solid lightblue;
  transition: all 0.1s ease-in-out;
}
#new {
  width: fit-content;
}
#new:hover{
  color: green;
  border: 3px solid green;
  transition: all 0.1s ease-in-out;
}

</style>