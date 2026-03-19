<template>
    <div class="note-form-container" id="addNewNoteForm">
        <div class="note-form">
            <h2>Nouvelle note</h2>

            <div class="form-group">
                <label for="title">Titre</label>
                <input type="text" id="title" placeholder="Titre de la note..." v-model="titleNote" required>
            </div>

            <div class="form-group">
                <label for="content">Contenu</label>
                <textarea id="content" rows="6" placeholder="Écris ta note ici..." v-model="contenuNote"
                    required></textarea>
            </div>

            <div class="form-actions">
                <button type="submit" class="btn primary" @click="submitNewNote">Enregistrer</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add'])
const titleNote = ref('')
const contenuNote = ref('')

const submitNewNote = () => {
    emit('add', {
        'titleNote': titleNote.value,
        'contenuNote': contenuNote.value
    })
    
    titleNote.value = ''
    contenuNote.value = ''
    
}

</script>