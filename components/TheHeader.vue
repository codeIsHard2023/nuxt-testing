<template>
    <header class="Header h-16 bg-gray-600 text-white border-b border-b-slate-400">
        <ul class="flex items-center justify-left h-full">
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
        </ul>
    </header>
</template>

<script setup lang="ts">

</script>