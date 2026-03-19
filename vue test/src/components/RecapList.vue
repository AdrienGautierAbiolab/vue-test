<template>
    <ul>
        <ListItem 
            v-for="note in listNotes"
            :key="note.id"
            :note="note"
            @removeNote="$emit('removeNote', note.id)"
        />
    </ul>
</template>


<script setup>
    import ListItem from './ListItem.vue';

    defineProps({
        listNotes: Array
    })

</script>