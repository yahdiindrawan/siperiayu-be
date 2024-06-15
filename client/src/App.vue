<template>
  <h1>{{dataMessage?.message}}</h1>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const dataMessage = ref(null)

const getMessage = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/")
    dataMessage.value = data;
  } catch (error) {
    console.log(error)
  }
};

onMounted(() => {
  getMessage();
});
</script>