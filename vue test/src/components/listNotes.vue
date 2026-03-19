<script setup lang="ts">
import NoteItem from './NoteItem.vue';

defineProps({
    notes: Array
})
</script>

<template>
    <div class="notes-container">

        <NoteItem v-for="note in notes"
        :key="note.id"
        :note="note"
        @removeNote="$emit('removeNote', note.id)"
        @editNote="$emit('editNote', note.id)"/>
    </div>

</template>

