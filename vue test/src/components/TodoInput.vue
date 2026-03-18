<template>
  <div>
    <input v-model="text" @keyup.enter="submit" placeholder="Add a task" />
    <button @click="submit">Add</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add'])
const text = ref('')

const submit = () => {
  if (!text.value.trim()) return
  emit('add', text.value)
  text.value = ''
}
</script>