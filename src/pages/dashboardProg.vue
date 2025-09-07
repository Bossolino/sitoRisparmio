<script setup>
import { dataInizioScelto, nProgScelto, objProgScelto, titProgScelto, saldoProgScelto } from '../varGlob';
import HomeBtn from '@/components/HomeBtn.vue';
import TransactionViewer from '../components/TransactionViewer.vue';

</script>
<template>
    <v-container>
        <HomeBtn />
        <v-card>
            <v-card-title>{{ titProgScelto }}</v-card-title>
            <v-card-text>Numero progetto: {{ nProgScelto }}</v-card-text>
            <v-card-text>Data creazione: {{ dataInizioScelto }}</v-card-text>
            <v-card-text>Obbiettivo: {{ objProgScelto }}€</v-card-text>
            <v-card-text>Saldo attuale: {{ saldoProgScelto }}€</v-card-text>
        </v-card>
        <v-card>
            <v-card-text>
                <TransactionViewer />
            </v-card-text>
        </v-card>
    </v-container>

</template>