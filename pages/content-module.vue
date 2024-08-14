<template>
    <div>
        <ContentDoc />
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: "auth",
})
</script>
