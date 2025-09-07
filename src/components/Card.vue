<script setup>
import { nProgScelto, titProgScelto, dataInizioScelto, saldoProgScelto, objProgScelto, progetti } from '../varGlob';
const props = defineProps({
    titolo: String,
    obbiettivo: String,
    path: String,
    colore: String,
    idTitolo: String,
    classTitolo: String
})

function setProgettoScelto(){

    progetti.value.forEach(prog => {
        if (prog.TITOLO === props.titolo){
            nProgScelto.value = prog.ID;
            titProgScelto.value = prog.TITOLO;
            dataInizioScelto.value = prog.DATA_CREAZIONE;
            objProgScelto.value = prog.OBBIETTIVO;
            saldoProgScelto.value = prog.SALDO;
        }
    });

}

</script>

<template>
    <v-col>
        <v-card :to="props.path" :class="props.classTitolo" @click="setProgettoScelto()">
            <v-card-title :id="props.idTitolo" >{{ props.titolo }}</v-card-title>
            <v-card-text v-if="props.obbiettivo">{{ Number.parseFloat(props.obbiettivo) }}€</v-card-text>
        </v-card>
    </v-col>
</template>

<style>

</style>