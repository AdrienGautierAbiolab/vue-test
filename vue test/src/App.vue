<template>
  <div class="app">
    <h1>Todo List</h1>
    <TodoInput @add="addTodo" />
    <TodoList :todos="todos" @toggle="toggleTodo" @remove="removeTodo" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

const todos = ref([])

const addTodo = (text) => {
  todos.value.push({ id: Date.now(), text, done: false })
}

const toggleTodo = (id) => {
  const todo = todos.value.find(t => t.id === id)
  if (todo) todo.done = !todo.done
}

const removeTodo = (id) => {
  todos.value = todos.value.filter(t => t.id !== id)
}
</script>

<style>
.app {
  max-width: 500px;
  margin: auto;
  font-family: Arial;
}
</style>