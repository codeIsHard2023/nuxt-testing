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
    <div class="mt-5 flex gap-2 justify-center">
        <div class="flex flex-col gap-2 ">
            <span>Counter from pinia store</span>
            <span> Count : {{ store.count }}</span>
            <span>Double count : {{ store.doubleCount }}</span>
        </div>
        <button @click="store.increment" class="w-15 px-2 rounded bg-slate-400 hover:bg-slate-600"> increment </button>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/testStore';

definePageMeta({
    middleware: "auth",
    layout: "custom"
})

const store = useCounterStore()
console.log(store)
// const count = useState('counter', () => Math.round(Math.random() * 100))

//default value shared everywhere in my app  
const count = useCounter()
</script>
