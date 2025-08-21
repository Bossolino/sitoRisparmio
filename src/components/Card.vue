<script setup>
import {router} from '@/router/router'
const props = defineProps({
    titolo: String,
    obbiettivo: Number,
    path: String,
    colore: String,
    idTitolo: String,
    classTitolo: String
})

</script>

<template>
    <v-col>
        <v-card :to="props.path" :class="props.classTitolo">
            <v-card-title :id="props.idTitolo" >{{ props.titolo }}</v-card-title>
            <v-card-text v-if="props.obbiettivo">{{ props.obbiettivo }}€</v-card-text>
        </v-card>
    </v-col>
</template>

<style>

</style>