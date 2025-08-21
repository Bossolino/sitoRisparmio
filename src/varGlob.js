import {ref} from 'vue'
import axios from 'axios'

export const progTrovati = ref(false)

export const progetti = ref({})
export const nProgetto = ref(0)
export const obbiettivo = ref(0)

export const nProgScelto = ref(0)


export function getProgetti(){
//     axios({
//   url: "https://f18superhornet.altervista.org/getProgetti.php",
//   method: "POST",
//   headers: "Application/json",
// }).then(response => {
//   console.log(response.data)
// }).catch(error =>{
//   console.log(error)
// });
    axios.post("https://f18superhornet.altervista.org/getProgetti.php")
    .then(response=>{
        console.log(response)
        if (response.data) {
            progTrovati.value = true
        } else {
            progTrovati.value = false
        }
    })
    .catch(error=>{
        console.error(error)
    });
}