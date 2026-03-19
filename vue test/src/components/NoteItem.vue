<template>

    <div class="note-card">
        <h3 class="note-title">{{  note.title  }}</h3>
        <p class="note-content">
            {{ note.contenu }}
        </p>
        <div class="note-actions">
            <button class="edit-btn" @click="$emit('editNote')">✏️</button>
            <button class="delete-btn" @click="$emit('removeNote')">🗑️</button>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        note: Object
    })

</script>