<template>
    <div>
        <h1>Nouvelle note : </h1>
        <input type="text" placeholder="Titre" v-model="titleNote" />
        <input type="text" placeholder="Contenu" v-model="contenuNote" />
        <button type="submit" @click="addNote">Ajouter</button>
    </div>

</template>

<script setup>
import { ref } from 'vue'

const titleNote = ref('')
const contenuNote = ref('')
const emit = defineEmits(['add'])

function addNote() {
    emit('add', {
        'title' : titleNote.value,
        'contenu' : contenuNote.value
    })
    titleNote.value = ''
    contenuNote.value = ''
}
</script>