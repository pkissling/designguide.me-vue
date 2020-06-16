<template>
     <transition name="slide-fade">
            <div v-show="this.show" :class="this.type" class="notification">
                <button class="delete" @click.prevent="dismissNotification()"/>
                <p class="title is-4">Oops!</p>
                Ein Fehler ist aufgetreten. Bitte versuche es später erneut.
            </div>
        </transition>
</template>

<script>
export default {
    props: [
        'body',
        'show',
        'type'
    ],

    methods: {
        dismissNotification() {
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
    .notification {
        position: fixed !important;
        z-index: 1 !important;
        right: 0% !important;
        margin-left: 1rem !important;
        margin-right: 1rem !important;
        bottom: 1rem !important;
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(500px);
        opacity: 0;
    }
</style>