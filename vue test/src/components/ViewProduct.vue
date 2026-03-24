<template>
      <li>
        <input type="checkbox" @click="$emit('updateBuy')" />
        <span>{{ product.product }} (x{{ product.qty }}) - {{ product.category }}</span>
        <button @click="$emit('removeProduct')">❌</button>
      </li>
</template>

<script setup>
    defineProps({
        product: Object
    })

</script>