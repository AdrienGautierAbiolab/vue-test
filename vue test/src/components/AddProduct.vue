<template>
    <!-- Formulaire d'ajout -->
    <div class="form">
        <input v-model="product" placeholder="Produit" />
        <input type="number" min="1" placeholder="Quantité" v-model="qty"/>
        <select v-model="category">
            <option>Fruits</option>
            <option>Légumes</option>
            <option>Boissons</option>
            <option>Autres</option>
        </select>
        <button @click="submitNewProduct">Ajouter</button>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    const emit = defineEmits(['addProduct'])
    const product = ref('')
    const qty = ref('')
    const category = ref('')

    const submitNewProduct = () => {
        emit('addProduct', {
            'product': product.value,
            'qty': qty.value,
            'category': category.value,
        })

        product.value = ''
        qty.value = ''
        category.value = ''
    }
</script>
