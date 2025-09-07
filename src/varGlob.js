import {ref} from 'vue'
import axios from 'axios'
import { router } from './router/router'
import dashboardProg from './pages/dashboardProg.vue'

export const progTrovati = ref(false)

export const progetti = ref({})
// export const nProgetto = ref(0)
// export const obbiettivo = ref(0)


export const nProgScelto = ref(0)
export const titProgScelto = ref("")
export const dataInizioScelto = ref("")
export const objProgScelto = ref(0)
export const saldoProgScelto = ref(0)


export function getProgetti(){
    axios.post("https://f18superhornet.altervista.org/getProgetti.php")
        .then(response=>{
            console.log(response)
            if (response.data) {
                progTrovati.value = true;
                progetti.value = response.data;
                console.log(progetti.value)
                response.data.map(prog => {
                    router.addRoute({path: `/${prog.TITOLO}`, component: dashboardProg, name: `${prog.TITOLO}` });
                    console.log(router.getRoutes())
                });
            } else {
                progTrovati.value = false;
            }
        })
        .catch(error=>{
            console.error(error);
        });
}

export function creaProgetto(newTitolo, newPrezzo){
    axios.post("https://f18superhornet.altervista.org/creaProgetto.php", {
            titolo: newTitolo,
            prezzo: newPrezzo
        }).then(response=>{console.log(response)}).catch(error=>{console.error(error)})
}