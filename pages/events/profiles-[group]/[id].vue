<script setup>

//we can stocke params value in a variable
const route = useRoute()
const { group, id } = route.params

console.log(route) // route is a proxy object
</script>

<template>
    <div>
        <p>
            <!-- {{ $route.params.group }} - {{ $route.params.id }} -->
            <!-- /profiles-admin/13 | group or other word must be in single -->
            {{ group }} - {{ id }}
        </p>
    </div>
</template>