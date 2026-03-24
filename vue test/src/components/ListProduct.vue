<template>

    <ul>
        <ViewProduct 
        v-for="product in listProduct"
        :key="product.id"
        :product="product"
        @removeProduct="$emit('removeProduct', product.id)"
        @updateBuy="$emit('updateBuy', product.id)" />
    </ul>

</template>

<script setup>
import ViewProduct from './ViewProduct.vue';

    defineProps({
        listProduct: Array
    })
</script>