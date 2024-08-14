<template>
    <div class="MainPage">
        <TheAlert>Alert from Home</TheAlert>
        <div ref="imageContainer" class="grid grid-cols-2 gap-2 items-center justify-items-center mt-10">
            <img src="@/assets/images/image-1.jpg" alt="cofeeshop interior" class="h-5/6 rounded-md">

            <img src="@/assets/images/image-2.jpg" alt="cofeeshop exterior" class="h-5/6 rounded-md">
        </div>
        <div class="flex justify-center text-xl">
            <ContentDoc class="text-center" />
        </div>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
    middleware: 'auth'
})

const { saySomething } = useUtils()
const phrase = ref("your component is ")
const status = ref("")
const imageContainer = ref<HTMLDivElement>()
const imageContainerWidth = ref<number>()

const { $sayHello } = useNuxtApp()

onBeforeMount(() => {
    status.value = "ready"
    saySomething(phrase.value, status.value)
})

onMounted(() => {
    status.value = "mounted"
    saySomething(phrase.value, status.value)
    imageContainerWidth.value = imageContainer.value!.clientWidth
    console.log(imageContainer.value!.clientWidth)
})

</script>