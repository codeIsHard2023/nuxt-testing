<template>
    <header class="Header min-h-16 flex justify-center items-center bg-gray-600 text-white border-b border-b-slate-400">
        <ul class="flex items-center justify-left flex-wrap h-full text-center">
            <li>
                <NuxtLink to="/" class="p-4 hover:underline">Home
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/events" class="p-4 hover:underline">Events</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/test-custom" class="p-4 hover:underline">Custom Layout</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/content-module" class="p-4 hover:underline">Content</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/state-management" class="p-4 hover:underline">useState</NuxtLink>
            </li>
        </ul>
    </header>
</template>

<script setup lang="ts">

</script>