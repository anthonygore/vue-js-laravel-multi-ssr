<template>
    <h3>{{ name }}</h3>
</template>
<script>
    export default {
        computed: {
            name() {
                let name = this.$router.name || this.$router.currentRoute.name;
                return `Hello from the ${name} page`;
            }
        }
    }
</script>
