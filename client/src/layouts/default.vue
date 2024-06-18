<template>
    <div>
        <p>Test</p>
        <main class="my-8">
            <slot/>
        </main>
        <TheFooter/>
    </div>
</template>

<script>
import TheFooter from "@/components/partials/TheFooter.vue";
export default {
    components: {
        TheFooter
    }
}
</script>