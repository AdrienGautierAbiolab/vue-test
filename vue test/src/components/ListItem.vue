<template>
    <li>

        <h2>{{ note.title }}</h2>
        <h3>{{ note.contenu }}</h3>
        <button @click="$emit('removeNote')">Supprimer</button>
    </li>

</template>

<script setup>

    defineProps({
        note: Object
    })
</script>