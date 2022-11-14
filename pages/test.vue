<template>
    <div>
    <h1 v-if="submit">Form Submitted</h1>
    <form @submit.prevent="submitForm">
        <input type="text" v-model="name" />
        <button type="submit">Submit</button>
    </form>
</div>

</template>
<script setup>

import { ref } from 'vue'

const submit = ref(false)
// submitForm function with a fake promise
const submitForm = async () => {

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    
    })
    submit.value = true
    

}

</script>