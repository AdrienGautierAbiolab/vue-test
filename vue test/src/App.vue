<script setup>
import AddProduct from './components/AddProduct.vue';
import { ref, computed } from 'vue'
import ListProduct from './components/ListProduct.vue';

const listProduct = ref([])
const addProduct = (newProduct) => {
  listProduct.value.push({
    'id': Date.now(),
    'product': newProduct.product,
    'qty': newProduct.qty,
    'category': newProduct.category,
    'buy': false
  })
}

const removeProduct = (productId) => {
  listProduct.value = listProduct.value.filter(t => t.id !== productId)
}

const updateBuy = (productId) => {
  const item = listProduct.value.find(p => p.id === productId)

  if (item) {
    item.buy = !item.buy
  }
}

const totalProduct = computed(() => {
  return listProduct.value
    .filter(item => item.buy)
    .reduce((qty, item) => qty + item.qty, 0)
})


</script>

<template>
  <div class="container">
    <h1>🛒 Liste de courses intelligente</h1>
    <AddProduct @add-product="addProduct" />
    <ListProduct :listProduct="listProduct" @removeProduct="removeProduct" @updateBuy="updateBuy" />
    
    <h2>Nombre de produits achetés en tout : {{ totalProduct }}</h2>
  </div>

</template>

<style scoped></style>
