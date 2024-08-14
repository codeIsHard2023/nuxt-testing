<template>
    <TheAlert class="mb-4">Here custom layout applied</TheAlert>
    <div class="flex flex-col items-center justify-center gap-2">
        <span>Counter from state-management.vue</span>
        <span> Count : {{ count }}</span>
        <div class="flex gap-2">
            <button @click="count++" class="w-10 rounded bg-slate-400 hover:bg-slate-600">+</button>
            <button @click="count--" class="w-10 rounded bg-slate-400 hover:bg-slate-600">-</button>
        </div>
        <span>Counter from a component</span>
        <TheCounter />
    </div>
    <p class="mt-4 text-center">Here is when and why use useState vs Pinia
        <NuxtLink to="https://www.vuemastery.com/blog/nuxt-3-state-mangement-pinia-vs-usestate/ " class="underline">here
        </NuxtLink>
    </p>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: "auth",
    layout: "custom"
})
// create random value
// const count = useState('counter', () => Math.round(Math.random() * 100))

//default value shared everywhere in my app  
const count = useCounter()
</script>
