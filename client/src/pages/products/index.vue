<script setup lang="ts">
    import {ref} from 'vue'
    import { type Product, getProducts } from "@/model/products";
    const products = ref([] as Product[])

    products.value = getProducts()

</script>

<template>
    <div class="product-list">
        <div v-for="product in products" :key="product.id" class="card">
            <div class="card-image">
                <img :src="product.image" alt="product.name" />
            </div>
            <div class="card-content">
                <h3>{{ product.title }}</h3>
                <p>{{ product.description }}</p>
                <p class="price">${{ product.price }}</p>
            </div>
        </div>
    </div>
    
</template>

<style scoped>
    .product-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
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