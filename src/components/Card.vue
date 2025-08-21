<script setup>
import {router} from '@/router/router'
const props = defineProps({
    titolo: String,
    obbiettivo: Number,
    path: String,
    colore: String,
    idTitolo: String
})

</script>

<template>
    <v-col>
        <v-card @click="router.replace(`${path}`)">
            <v-card-title :id="props.idTitolo">{{ props.titolo }}</v-card-title>
            <v-card-text v-if="props.obbiettivo">{{ props.obbiettivo }}</v-card-text>
        </v-card>
    </v-col>
</template>

<style>

</style>