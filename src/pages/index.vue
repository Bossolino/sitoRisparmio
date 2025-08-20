<template>
  <v-container>
    <v-row>
      <v-col>
        <Card titolo="+" class="card" @click="router.replace('/')"></Card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {router} from '@/router/router'
</script>
<style>

.card{
  width: 10vw;
  height: 5vh;
  text-align: center;
}

</style>