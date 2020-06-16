<template>
  <div id="contact">
    <section class="hero hero-image">
      <div class="hero-body">Work with me!</div>
    </section>

    <div class="content has-text-left-touch has-text-centered-desktop">
      <h1 class="title">Erzähl‘ mir von deinem Projekt!</h1>

      <p>
        Interesse an einem individuellem Designkonzept?
        <br />Dann erzähle mir von deinem Vorhaben & kontaktiere mich bitte über das Formular. Ich melde mich im Anschluss bei dir zur Terminvereinbarung für ein Erstgespräch.
      </p>
      <p>Wir starten das Projekt mit einem kurzen Kick Off zur Klärung der konkreten Aufgabenstellung, deiner Wünsche & Vorstellungen. Auf dieser Basis wird das Designkonzept ausgearbeitet.</p>
      <p>Durch den Upload von Fotos und Plänen kann ich mir vorab ein Bild von der Fläche machen - bevor es an die Konzeptentwicklung geht.</p>
      <p>Ich freue mich über deine Anfrage.</p>

      <form>
        <div id="form" class="form box">
          <div class="field">

            <label for="name" class="label is-size-7 is-uppercase">Name*</label>
            <div class="control" id="name">
              <input
                name="name"
                v-model="form.name"
                class="input"
                @change="validate.name = true"
                :class="{ 'is-warning': isFormNameInvalid }"
                type="text"
                required autocomplete="name"
              />
            </div>
            <p
              v-if="this.isFormNameInvalid"
              class="help is-warning"
            >Dieses Feld muss ausgefüllt werden.</p>
          </div>

          <div class="field">
            <label for="email" class="label is-size-7 is-uppercase">Mailadresse*</label>
            <div class="control" id="email">
              <input
                name="email"
                class="input"
                type="email"
                required autocomplete="email"
                v-model.trim="form.email"
                @change="validate.email = true"
                :class="{ 'is-warning': isFormEmailInvalid }"
              />
            </div>
            <p v-if="isFormEmailInvalid" class="help is-warning">Dieses Feld muss ausgefüllt werden.</p>
          </div>

          <div class="field">
            <label for="tel" class="label is-size-7 is-uppercase">Telefonnummer</label>
            <div class="control">
              <input
                name="tel"
                class="input"
                type="tel"
                autocomplete="tel"
                v-model.trim="form.phone"
              />
            </div>
          </div>

          <div class="field">
            <label class="label is-size-7 is-uppercase">Wofür soll der Designguide erstellt werden?</label>

            <div class="field-body">
              <div class="field">
                <div class="control">
                  <div class="select is-fullwidth">
                    <select v-model="form.purpose" autocomplete="false">
                      <optgroup label="Privat">
                        <option value="Privat - Homeoffice">Homeoffice</option>
                        <option value="Privat - Living Indoor">Living Indoor</option>
                        <option value="Privat - Living Outdoor">Living Outdoor</option>
                        <option value="Privat - Sonstiges">Sonstiges</option>
                      </optgroup>
                      <optgroup label="Kommerziell">
                        <option value="Kommerziell - Office">Office</option>
                        <option value="Kommerziell - Restaurant, Cafè, Bar">Restaurant, Cafè, Bar</option>
                        <option value="Kommerziell - Hotelzimmer, -lobby">Hotelzimmer, -lobby</option>
                        <option value="Kommerziell - Sonstiges">Sonstiges</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div v-if="this.showPurposeDetailField" class="field">
            <label for="tel" class="label is-size-7 is-uppercase">Platzhalter</label>
            <div class="control">
              <input
                class="input"
                type="text"
                autocomplete="off"
                v-model.trim="form.purposeDetail"
              />
            </div>
          </div>

          <div class="field">
            <label
              class="label is-size-7 is-uppercase"
            >Bitte lade aussagekräftige Fotos und Pläne hoch!</label>

            <span class="tags are-medium">
              <a class="tag button">
                <input
                  class="file-input"
                  type="file"
                  @change="uploadAttachments($event.target.files)"
                />
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                Hochladen
              </a>

              <span v-for="attachment in form.attachments" :key="attachment.name" class="tag">
                {{ attachment.name }}
                <a
                  class="delete is-small"
                  @click.prevent="deleteAttachment(attachment)"
                ></a>
              </span>
            </span>
          </div>

          <div class="field">
            <label
              class="label is-size-7 is-uppercase"
            >Was möchten du mir vorab zu deinem Projekt mitteilen?</label>
            <div class="control">
              <textarea v-model.trim="form.other" rows="5" class="textarea" autocomplete="true"></textarea>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <div class="has-text-centered">
                <a id="sendMessage" class="button is-primary" @click.prevent="sendMessage()">
                  <span class="icon is-small">
                    <i class="far fa-envelope" />
                  </span>
                  <strong class="is-uppercase">Erzähl mir von Deinem Projekt!</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>

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
      ></modal>
    </div>
  </div>
</template>

<script>
import backendClient from "@/clients/backend";
import modal from "../widgets/modal.vue";
import notification from "../widgets/notification.vue";
import VueScrollTo from "vue-scrollto";

export default {
  components: {
    modal,
    notification
  },

  data: () => {
    return {
      form: {
        name: null,
        email: null,
        phone: null,
        purpose: null,
        purposeDetail: null,
        attachments: [],
        other: null
      },

      validate: {
        name: false,
        email: false
      },
      warnings: {
        name: false,
        email: false
      },

      isLoading: false,
      isSuccess: false,
      showNotification: false,
      error: false,
      modalContent: null,
      notificationBody: "test",
      notificationText: "test",
      notificationType: "is-danger"
    };
  },

  methods: {
    sendMessage() {
      const formIsValid = this.doValidate();
      if (!formIsValid) {
        return;
      }

      this.isLoading = true;
      this.error = null;

      backendClient
        .sendMessage(
          this.form.name,
          this.form.email,
          this.form.phone,
          this.form.purpose,
          this.form.attachments,
          this.form.other
        )
        .then(() => (this.isSuccess = true))
        .catch(err => {
          this.error = err;
          this.showNotification = true;
        })
        .finally(() => (this.isLoading = false));
    },

    dismissNotification() {
      this.showNotification = false;
    },

    uploadAttachments(fileList) {
      if (!fileList.length) return;

      fileList.forEach(uploadedFile => {
        const isDuplicate = this.form.attachments.some(
          file => this.hashFile(file) == this.hashFile(uploadedFile)
        );
        if (!isDuplicate) {
          this.form.attachments.push(uploadedFile);
        }
      });
    },

    deleteAttachment(deleteFile) {
      this.form.attachments = this.form.attachments.filter(
        file => file.name != deleteFile.name
      );
    },

    hashFile(file) {
      return file.name + file.size + file.lastModified;
    },

    doValidate() {
      this.validate.name = true;
      this.validate.email = true;

      if (this.isFormNameInvalid || this.isFormEmailInvalid) {
        VueScrollTo.scrollTo("#form", { offset: -70 });
        return false;
      }

      return true;
    }
  },

  computed: {
    submitButtonClass() {
      if (this.isLoading) {
        return "is-loading";
      }

      return "is-primary";
    },

    isFormNameInvalid() {
      return this.validate.name && !this.form.name;
    },

    isFormEmailInvalid() {
      return this.validate.email && !this.form.email;
    },

    showPurposeDetailField() {
      // TODO
      return false
      // return this.form.purpose == 'Kommerziell - Sonstiges' || this.form.purpose == 'Privat - Sonstiges'
    }
  }
};
</script>

<style scoped>
#sendMessage {
  margin-top: 3rem;
  -webkit-transition: all 1s linear;
  -moz-transition: all 1s linear;
  -o-transition: all 1s linear;
  transition: all 1s linear;
}

.form {
  margin-top: 4rem;
  text-align: left;
}

.circle {
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  height: 300px;
  width: 300px;
  background: lightgrey;
}

.hero-image {
  background-image: url("../assets/img/contact.jpg");
  background-position: 0% 50%;
}
</style>