<template>
  <ul>
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle="$emit('toggle', todo.id)"
      @remove="$emit('remove', todo.id)"
    />
  </ul>
</template>

<script setup>
import TodoItem from './TodoItem.vue'

defineProps({
  todos: Array
})
</script>