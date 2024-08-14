<template>
    <div>
        <TheAlert>Alert from Events</TheAlert>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'auth'
})
</script>

<style scoped></style>