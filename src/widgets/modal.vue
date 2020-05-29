<template>
    <div class="modal" :class="{ 'is-active': show }">
        <div class="modal-background"></div>
        <div class="modal-card is-primary">
        <header class="modal-card-head is-primary">
            <p class="modal-card-title">{{ title }}</p>
            <button class="delete" aria-label="close" @click.prevent="close"></button>
        </header>
        <section class="modal-card-body">
            {{ body }}
        </section>
        <footer class="modal-card-foot">
            <button class="button" @click.prevent="close">Close</button>
        </footer>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'title',
            'body',
            'show'
        ],
        methods: {
            close() {
                this.$emit('close');
            },
        }
    }
</script>

<style scoped>
    .modal {
        animation: fadeIn 0.5s linear;
    }

    @keyframes fadeIn {
        from {opacity: 0;}
        to {opacity: 1;}
    }
</style>