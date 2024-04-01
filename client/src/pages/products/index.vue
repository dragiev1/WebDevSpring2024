<script setup lang="ts">
    import {ref, computed} from 'vue'
    import { type Product, getProducts } from "@/model/products";
    import ProductCard from '@/components/ProductCard.vue';
<<<<<<< HEAD
    import FlyOut from '@/components/FlyOut.vue';
    import {addToCart} from "@/viewModel/cart";
import ShoppingCart from '@/components/ShoppingCart.vue';
=======
>>>>>>> b2abc149debd2f3c0377a229e45dc51ba98f7227
    
    
    const products = ref([] as Product[])
    
    products.value = getProducts()
    
    type CartItem = {
        product: Product,
        quantity: number
    }
    const cart = ref([] as CartItem[])

    function addToCart(product: Product) {
        
        const item = cart.value.find(item => item.product.id === product.id)
        if(item) {
            item.quantity++
        } else {
            cart.value.push({product, quantity: 1})
        }
    }
    
    const total = computed( () => cart.value.reduce((total, item) => total + item.product.price * item.quantity, 0))


</script>

<template>
    <div class="product-list">
        <ProductCard    v-for="product in products" 
                        :key="product.id" 
                        :product="product" @addToCart = "addToCart" 
                    />
    </div>

    <FlyOut :isOpen="isOpen">
        <ShoppingCart />
    </Flyout>
    
</template>

<style scoped>
    
</style>