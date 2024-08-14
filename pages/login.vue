<template>
    <form action="submit" class="w-4/12 m-auto mt-10 flex flex-col align-middle justify-center gap-2">
        <label for="userName">Username</label>
        <input v-model="userName" type="text" name="userName" id="userName" class="rounded-md py-2 text-black">
        <label for="password">Password</label>
        <input v-model="password" type="text" name="password" id="password" class="rounded-md py-2 text-black">
        <button type="submit" @click="" class="bg-sky-500 hover:bg-slate-400 rounded-md py-2">Log
            in</button>
    </form>
</template>

<script setup lang="ts">
const userName = ref('')
const password = ref('')
const logged = ref(false)

</script>