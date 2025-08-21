<script setup>
import { ref } from 'vue'
import { creaProgetto } from '../varGlob'

const newProgTitolo = ref("")
const newProgObb = ref(0)
const form = ref(true)
function crea(){
    if (form.value.validate){
        return creaProgetto(newProgTitolo.value, newProgObb.value);
    } else {
        console.error("campi non validi");
    }
}

const rules = {
    required: value => !!value || 'Campo obbligatorio',
    valid: value => value > 0 || 'Inserire una cifra valida',
}



</script>
<template>
    <v-container id="cont">
        <v-btn prepend-icon="mdi-arrow-left" to="/" id="btn" class="campi"> Back</v-btn>
        <v-form @submit.prevent ref="form">
            <v-text-field clearable label="Titolo Progetto" v-model="newProgTitolo" :rules="[rules.required]" class="campi" ></v-text-field>
            <v-text-field label="Amount" v-model="newProgObb" prefix="€" :rules="[rules.valid]"></v-text-field>
            <v-row class="text-center">
                <v-col>
                    <v-btn @click="crea">Crea</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<style>
.campi{
    margin: 5vh 0 5vh 0;
}
</style>