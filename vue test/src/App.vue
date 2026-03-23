<script setup>
import Header from './components/Header.vue';
import ListNotes from './components/listNotes.vue';
import NewNoteForm from './components/newNoteForm.vue';
import { ref, watch } from 'vue'

const listNotes = ref(
  JSON.parse(localStorage.getItem('notes')) || []
)
const isFormShow = ref(false)

const addNewNote = (newNote) => {
  listNotes.value.push({
    'id': Date.now(),
    'title': newNote.titleNote,
    'contenu': newNote.contenuNote
  })
  isFormShow.value = !isFormShow.value
}

const showForm = () => {
  isFormShow.value = !isFormShow.value
}

const removeNote = (noteId) => {
  listNotes.value = listNotes.value.filter(t => t.id !== noteId)
}

const showFormEditNote = (noteId) => {
  const note = listNotes.value.find(n => n.id === noteId)
  if (!note) return
  const newTitle = prompt('Modifier le titre', note.title)
  const newContent = prompt('Modifier le contenu', note.contenu)

  if (newTitle !== null) note.title = newTitle
  if (newContent !== null) note.contenu = newContent
}

watch(listNotes, (newValue) => {
  localStorage.setItem('notes', JSON.stringify(newValue))
}, { deep: true })

</script>

<template>
  <Header @toggle-form="showForm" />
  <NewNoteForm v-if="isFormShow" @add="addNewNote" />
  <ListNotes :notes="listNotes" @removeNote="removeNote" @editNote="showFormEditNote" />
</template>

<style scoped></style>
