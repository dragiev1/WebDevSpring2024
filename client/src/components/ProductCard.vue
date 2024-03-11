<script setup lang="ts">
import type { Product } from '@/model/products';

    const props = defineProps<{
        product: Product
    }>()

    const emit = defineEmits<{
        addToCart: [product: Product]
    }>()
</script>

<template>
    <div class="card">
        <div class="card-image">
            <img :src="product.thumbnail" alt="product.name" />
        </div>
        <div class="card-content">
            <h3>{{ product.title }}</h3>
            <i>{{ product.brand }}</i>
            <p>{{ product.description }}</p>
            <p class="price">${{ product.price }}</p>
            <button @click="emit('addToCart', product)" class="button is-primary">Add to Cart</button>
        </div>
    </div>
    
</template>

<style scoped>
    .card {
        flex-basis: 15rem;
        flex-grow: 1;
        margin: 0.5rem;
        box-shadow: 3px 3px 10 rgba(0, 0, 0, 0.25);
    }
    h3 {
        font-weight: bold;
    }
    .price {
        font-weight: bold;
        font-size: xx-large;
        color: red;
        float: right;
    }
</style>