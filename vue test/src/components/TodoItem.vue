<template>
  <li>
    <span
      :style="{ textDecoration: todo.done ? 'line-through' : 'none' }"
      @click="$emit('toggle')"
    >
      {{ todo.text }}
    </span>
    <button @click="$emit('remove')">❌</button>
  </li>
</template>

<script setup>
defineProps({
  todo: Object
})
</script>