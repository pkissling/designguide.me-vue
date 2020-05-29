<template>
    <div id="contact">

        <section  class="hero is-bold has-text-centered is-primary">
            <div class="hero-body">
                <h1 class="title">Contact</h1>
            </div>
        </section>

        <div class="content container is-fluid">

            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input v-model=formName class="input" type="text" placeholder="e.g. Patrick Kissling">
                </div>
            </div>

            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input v-model=formEmail class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
                </div>
            </div>

            <div class="field">
                <label class="label">Subject</label>
                <div class="control">
                    <div class="select">
                    <select v-model=formSelect>
                        <option>Select dropdown</option>
                        <option>With options</option>
                    </select>
                    </div>
                </div>
            </div>

            <div class="field">
                <label class="label">Message</label>
                <div class="control">
                    <textarea v-model=formMessage class="textarea" placeholder="Textarea"></textarea>
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <label class="checkbox">
                    <input v-model=formAgreeToc type="checkbox">
                    I agree to the <a @click.prevent="toggleToc()" @close="toggleToc()">terms and conditions</a>
                    </label>
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <button class="button" width=200px :disabled="!formAgreeToc || this.isSuccess || this.isLoading" :class="submitButtonClass" @click.prevent="sendMessage()">
                        <p v-if=!isSuccess>Submit</p>
                        <i v-else class="fas fa-check"/>
                    </button>
                </div>
            </div>

        </div>

        <notification
            :show="this.showNotification"
            :body="this.notificationBody"
            :type="this.notificationType"
            @close="dismissNotification()"
        />

        <modal
            :show="this.modalContent"
            :title="this.modalContent ? this.modalContent.title : null"
            :body="this.modalContent ? this.modalContent.body : null"
            @close="toggleToc()"
        >
        </modal>

    </div>
</template>

<script>
    import backendClient from '@/clients/backend';
    import modal from '../widgets/modal.vue'
    import notification from '../widgets/notification.vue'

    export default {

        components: {
            modal,
            notification
        },

        data: () => {
            return {
                formName: null,
                formEmail: null,
                formSelect: null,
                formMessage: null,
                formAgreeToc: false,
                isLoading: false,
                isSuccess: false,
                showNotification: false,
                error: false,
                modalContent: null,
                notificationBody: "test",
                notificationText: "test",
                notificationType: "is-danger"
            }
        },

        methods: {
            sendMessage() {
                this.isLoading = true
                this.error = null
                backendClient.sendMessage(this.formName, this.formEmail, this.formSelect, this.formMessage)
                    .then(() => this.isSuccess = true)
                    .catch((err) => {
                        this.error = err;
                        this.showNotification = true;
                    })
                    .finally(() => this.isLoading = false)
            },

            dismissNotification() {
                this.showNotification = false;
            },

            toggleToc() {
                if (this.modalContent != null) {
                    this.modalContent = null
                } else {
                    this.modalContent = {
                        body: "Body",
                        title: "Terms and Conditions"
                    }
                }
            }
        },

        computed: {
            submitButtonClass() {
                if (this.isLoading) {
                    return 'is-loading'
                }

                return 'is-primary';
            }
        }
    }
</script>

<style scoped>
    .button {
        width: 8rem;
        -webkit-transition: all 1s linear;
        -moz-transition: all 1s linear;
        -o-transition: all 1s linear;
        transition: all 1s linear;
    }
</style>