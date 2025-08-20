<script setup>
const props = defineProps({
    titolo: String,
    obbiettivo: Number
})

</script>

<template>
    <v-col>
        <v-card>
            <v-card-title>{{ props.titolo }}</v-card-title>
            <v-card-text v-if="props.obbiettivo">{{ props.obbiettivo }}</v-card-text>
        </v-card>
    </v-col>
</template>