<script setup lang="ts">
    import {refCart, addToCart, total} from "@/viewModel/cart";

    const cart = refCart()
</script>

<template>
    <div>
        <h1 class="title">
            The Cart
        </h1>
        <u1 class="cart">
            <li v-for="item in cart" :key="item.product.id">
                <img :src="item.product.thumbnail" alt="product.name" />
                {{ item.product.title }} x {{ item.quantity }} = ${{ item.product.price * item.quantity }}
            </li>
        </u1>
        {{ cart.length }} items; total: ${{ total }}
    </div>
</template>

<style scoped>
    .product-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .cart li {
        display: flex;
        align-items: center;
        margin: 1rem 0;
    }
    .cart img {
        width: 3rem;
        height: 3rem;
        margin-right: 1rem;
    }
</style>