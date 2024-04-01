<script setup lang="ts">
    const props = defineProps<{
        isOpen?: boolean
    }>()
</script>

<template>
    <div class="flyout" :class="{open: isOpen}">
        <slot></slot>
    </div>
</template>

<style scoped>
    .flyout {
        position: fixed;
        top: 0;
        right: 0;
        width: 20rem;
        height: 100%;
        background-color: lightgray;
        border: 1px solid gray;
        padding: 1rem;
        z-index: 100;
        box-shadow: -1px 0 5px 10 rgba(0, 0, 0, 0.25);
        transform: translateX(90%);
        transition: transform 1s;
    }
    .flyout.open, .flyout:hover {
        transform: translateX(0);
    }
    .price {
        font-weight: bold;
        font-size: xx-large;
        color: red;
        float: right;
    }
</style>