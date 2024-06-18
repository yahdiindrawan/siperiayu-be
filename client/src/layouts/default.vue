<template>
    <div>
        <TheHeader/>
        <main class="my-8">
            <slot/>
        </main>
        <TheFooter/>
    </div>
</template>

<script>
import TheHeader from "@/components/partials/TheHeader.vue";
import TheFooter from "@/components/partials/TheFooter.vue";
export default {
    components: {
    TheHeader,
    TheFooter
}
}
</script>