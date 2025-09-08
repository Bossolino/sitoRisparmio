<script setup>
import { dataInizioScelto, nProgScelto, objProgScelto, titProgScelto, saldoProgScelto, aggSaldo, notification } from '../varGlob';
import HomeBtn from '@/components/HomeBtn.vue';
import TransactionViewer from '../components/TransactionViewer.vue';
import { ref, watch } from 'vue';

const newImporto = ref(1.00);
const tipoImporto = ref("");

const btnDisabled = ref(true);

const percSaldo = ref(Math.round((saldoProgScelto.value/objProgScelto.value)*10000)/100);

function setTipoImporto(tipo){
    if (tipoImporto.value === tipo) {
        document.getElementById("btnMeno").style.backgroundColor = "rgb(33, 33, 33)";
        document.getElementById("btnPiu").style.backgroundColor = "rgb(33, 33, 33)";
        tipoImporto.value = "";
    } else if(tipo === "+"){
        tipoImporto.value = "+";
        document.getElementById("btnPiu").style.backgroundColor = "green";
        document.getElementById("btnMeno").style.backgroundColor = "rgb(33, 33, 33)";
        tipoImporto.value = "+";
    } else if (tipo === "-"){
        tipoImporto.value = "-";
        document.getElementById("btnMeno").style.backgroundColor = "red";
        document.getElementById("btnPiu").style.backgroundColor = "rgb(33, 33, 33)";
        tipoImporto.value = "-";
    }
}

function setImporto(){
    aggSaldo(nProgScelto.value, tipoImporto.value, newImporto.value);
}

watch(newImporto, (newVal, oldVal) => {
    if (tipoImporto.value === "" || newImporto.value === 0.00) {
        btnDisabled.value = true;
        return;
    }
    btnDisabled.value = false;
})
watch(tipoImporto, (newVal, oldVal) => {
    if (tipoImporto.value === "" || newImporto.value === 0.00) {
        btnDisabled.value = true;
        return;
    }
    btnDisabled.value = false;
})
</script>
<template>
    <v-container>
        <v-row>
            <v-alert v-if="notification.value==!{}" closable :icon='"$"+notification.value.status' :title="notification.value.status" :text="notification.value.messaggio" :type="notification.value.status" :color="notification.value.status"></v-alert>
        </v-row>
        <HomeBtn />
        <v-card>
            <v-card-title>{{ titProgScelto }}</v-card-title>
            <v-card-text>Numero progetto: {{ nProgScelto }}</v-card-text>
            <v-card-text>Data creazione: {{ dataInizioScelto }}</v-card-text>
            <v-card-text>Obbiettivo: {{ objProgScelto }}€</v-card-text>
            <v-card-text>Saldo attuale: {{ saldoProgScelto }}€</v-card-text>
        </v-card>
    </v-container>
    <v-container>
        <v-card>
            <v-card-title>
                <h4>Linea progressione</h4>
            </v-card-title>
            <v-card-text>
                <p>Sei al {{ percSaldo }}% di {{ objProgScelto }}€.</p>
            </v-card-text>
            <v-card-text>
                <v-row>
                    <v-col class="text-end">
                        <p>0</p>
                    </v-col>
                    <v-col>
                        <v-progress-linear color="primary" :model-value="percSaldo" :height="20"><strong>{{ percSaldo }}%</strong></v-progress-linear>
                    </v-col>
                    <v-col>
                        <p>{{ objProgScelto }}</p>
                    </v-col>
                </v-row>
                
            </v-card-text>
        </v-card>
    </v-container>
    <v-container>
        <v-card>
            <v-card-text>
                <h4>Aggiorna saldo</h4>
            </v-card-text>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-btn id="btnPiu" style="border: 1px solid green;" class="items" @click="setTipoImporto('+')">+</v-btn>
                        </v-col>
                        <v-col>
                            <v-btn id="btnMeno" style="border: 1px solid red;" class="items" @click="setTipoImporto('-')">-</v-btn>
                        </v-col>
                        <v-col class="align-start">
                            <v-row>
                                <v-icon style="vertical-align: middle;" icon="mdi-currency-eur" class="items"></v-icon>
                                <v-number-input id="nInput" class="items" :precision="2" controlVariant="stacked" inset v-model="newImporto" :step="0.10" :min="0.00"></v-number-input>
                            </v-row>               
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="text-center">
                            <v-btn id="btnMod" style="border: 1px solid blue;" :disabled="btnDisabled" @click="setImporto()">Modifica importo</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
        <v-card>
            <v-card-text>
                <TransactionViewer />
            </v-card-text>
        </v-card>
    </v-container>

</template>
