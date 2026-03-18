<script setup>
  import SaisieForm from './components/SaisieForm.vue';
  import { ref } from 'vue'

  function handleData(data){
    

  }
  const isActive = ref(false)
  function changeValueIsActive(){
    isActive.value = !isActive.value
  }

  const titleEl = ref('pipi')
  const titleClass = 'test'

</script>

<template>
  <h1>You did it!</h1>
  <p :class="titleClass">{{ titleEl }}</p>
  <saisie-form @field-submitted="handleData"/>
  <button @click="changeValueIsActive">Change value</button>
  <p v-if="isActive">Visibilité</p>
</template>

<style>
.test{
  color: red
}
</style>