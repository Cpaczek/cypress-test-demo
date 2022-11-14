<template>
    <!-- Createing a test form with a promise to test cypress -->
    <form @submit.prevent="submitForm">
        <input type="text" v-model="name" />
        <button type="submit">Submit</button>
    </form>

</template>
<script setup>

// submitForm function with a fake promise
const submitForm = async () => {

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
    //alert
    alert('Form submitted')
}

</script>