<template>
    <div class="app-header">
        <div class="logo">
            📝 <span>MyNotes</span>
        </div>

        <div class="search-bar">
            <input type="text" placeholder="Rechercher une note..." />
        </div>

        <div class="actions">
            <button class="btn add" @click="showFormNotes">+ Nouvelle note</button>
        </div>
    </div>
</template>

<script setup>

    import { ref } from 'vue'

    const emit = defineEmits(['toggle-form'])

    const isFormShow = ref(false)

    const showFormNotes = () => {
        emit('toggle-form', isFormShow.value)
    }

</script>

