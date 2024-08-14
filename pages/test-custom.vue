<template>
    <div class="CustomPage">
        <TheAlert>Alert from Custom Layout</TheAlert>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: "auth",
    layout: "custom"
})
</script>
