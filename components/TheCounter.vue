<template>
    <div class="flex flex-col items-center justify-center gap-2">
        <span> Count : {{ count }}</span>
        <div class="flex gap-2">
            <button @click="count++" class="w-10 rounded bg-slate-400 hover:bg-slate-600">+</button>
            <button @click="count--" class="w-10 rounded bg-slate-400 hover:bg-slate-600">-</button>
        </div>

    </div>
</template>

<script setup lang="ts">
//default value shared everywhere in my app  
const count = useCounter()
</script>
