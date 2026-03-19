<script setup>
import ListInput from './components/ListInput.vue';
import { ref } from 'vue'
import RecapList from './components/RecapList.vue';

const listNotes = ref([])

const addNote = (infosNote) => {
  listNotes.value.push({ 'id': listNotes.value.length + 1, 'contenu': infosNote.contenu, 'title': infosNote.title })
  // localStorage.setItem('listNotes', JSON.stringify(listNotes.value))
}

const removeNote = (noteId) => {
  listNotes.value = listNotes.value.filter(t => t.id !== noteId)
  // localStorage.setItem('listNotes', JSON.stringify(listNotes.value))
}
</script>

<template>
  <ListInput @add="addNote"></ListInput>
  <h2 v-if="!listNotes.length">Aucune note !</h2>
  <RecapList :list-notes="listNotes" @removeNote="removeNote"></RecapList>
</template>

<style scoped></style>
