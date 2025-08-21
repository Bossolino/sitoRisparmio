<template>
  <v-container>
    <v-row>
      <v-col>
        <Card titolo="+" class="card" path="/"></Card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {router} from '@/router/router'
import axios from 'axios';

axios({
  url: "",
  headers: "Application/json"
}.then(response => {
  console.log(response)
}).catch(error =>{
  console.log(error)
})
);

</script>
<style>

.card{
  width: 10vw;
  height: 5vh;
  text-align: center;
}

</style>