<template>
  <v-container>
    <p v-if="!progTrovati.value">Nessun progetto trovato, creane uno cliccando su '+'.</p>
    <v-row>
      <v-col>
        <Card titolo="+" class="card" path="/" idTitolo="new"></Card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {router} from '@/router/router'
import axios from 'axios';
import { getProgetti, progTrovati } from '@/varGlob';
import { onMounted } from 'vue';

onMounted(()=>{
  getProgetti();
})

</script>
<style>

.card{
  width: 10vw;
  height: 5vh;
  text-align: center;
}

#new:hover{
  color: green;
  border: 3px solid green;
  transition: all 0.1s ease-in-out;
}

</style>