<template>
  <div id="contact">
    <div class="hero">
      <div class="is-hidden-touch">
        <img class="hero-img" loading="lazy" src="../assets/img/contact.png" />
      </div>
      <div class="is-hidden-desktop">
        <img class="hero-img" loading="lazy" src="../assets/img/contact_small.png" />
      </div>
    </div>

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
                v-model.trim="form.name"
                class="input"
                @change="validate.name = true"
                :class="{ 'is-warning': isFormNameInvalid }"
                type="text"
                required
                autocomplete="name"
              />
            </div>
            <p v-if="isFormNameInvalid" class="help is-warning">{{ isFormNameInvalid }}</p>
          </div>

          <div class="field">
            <label for="email" class="label is-size-7 is-uppercase">Mailadresse*</label>
            <div class="control" id="email">
              <input
                name="email"
                class="input"
                type="email"
                required
                autocomplete="email"
                v-model.trim="form.email"
                @change="validate.email = true"
                :class="{ 'is-warning': isFormEmailInvalid }"
              />
            </div>
            <p v-if="isFormEmailInvalid" class="help is-warning">{{ isFormEmailInvalid }}</p>
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
              <input class="input" type="text" autocomplete="off" v-model.trim="form.purposeDetail" />
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

              <span v-for="attachment in form.attachments" :key="attachment.size" class="tag">
                {{ attachment.name }}
                <a
                  class="delete is-small"
                  @click.prevent="deleteAttachment(attachment)"
                ></a>
              </span>

              <span v-for="attachment in attachmentsUploadQueue" :key="attachment.lastModified" class="tag">
                <i class="fa fa-spinner fa-pulse fa-fw"></i>
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
            >Was möchtest du mir vorab zu deinem Projekt mitteilen?</label>
            <div class="control">
              <textarea v-model.trim="form.other" rows="5" class="textarea" autocomplete="true"></textarea>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <div class="has-text-centered">
                <button
                  id="sendMessage"
                  class="button is-primary"
                  :disabled="this.isSuccess || this.isLoading || this.attachmentsUploadQueue.length != 0"
                  :class="{ 'is-loading' : this.attachmentsUploadQueue.length != 0 || this.isLoading }"
                  @click.prevent="sendMessage()"
                >
                  <span class="icon is-small">
                    <span v-show="this.isSuccess">
                      <i class="fas fa-check"/>
                    </span>
                    <span v-show="!this.isSuccess">
                      <i class="far fa-envelope" />
                    </span>
                  </span>
                  <p class="is-uppercase">Erzähl mir von Deinem Projekt!</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <notification
        :show="this.showNotification"
        :type="this.notificationType"
        @close="dismissNotification()"
      />
    </div>
  </div>
</template>

<script>
import backendClient from "@/clients/backend";
import s3Client from "@/clients/s3";
import notification from "../widgets/notification.vue";
import VueScrollTo from "vue-scrollto";

export default {
  components: {
    notification,
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
        other: null,
        context: new Date().getTime(),
      },

      attachmentsUploadQueue: [],

      validate: {
        name: false,
        email: false
      },

      isLoading: false,
      isSuccess: false,
      showNotification: false,
      error: false,
      notificationType: "is-danger",
    };
  },

  methods: {
    sendMessage() {
      if (!this.doValidate()) {
        return;
      }

      this.isLoading = true;
      this.error = null;

      backendClient.sendMessage(
          this.form.name,
          this.form.email,
          this.form.phone,
          this.form.purpose,
          this.form.other,
          this.form.attachments
        )
        .then(() => this.isSuccess = true)
        .catch(err => {
          this.error = err;
          this.showNotification = true;
        })
        .finally(() => this.isLoading = false);
    },

    dismissNotification() {
      this.showNotification = false;
    },

    uploadAttachments(fileList) {
      if (!fileList.length) return;

      fileList.forEach(file => {
        this.attachmentsUploadQueue.push(file);

        const fileType = file.type || "undefined";

        backendClient
          .createAttachmentUploadUrl(file.name, fileType, this.form.context)
          .then(response => s3Client.uploadAttachment(response.data, fileType, file))
          .then(response => {
            this.attachmentsUploadQueue = this.attachmentsUploadQueue.filter(f => f != file);
            this.form.attachments.push({ name: file.name, url: response.config.url });
          });
      });
    },

    deleteAttachment(deleteFile) {
      this.form.attachments = this.form.attachments.filter(file => file.name != deleteFile.name);
      this.attachmentsUploadQueue = this.attachmentsUploadQueue.filter(file => file.name != deleteFile.name);
    },

    hashFile(file) {
      return file.name + file.size + file.lastModified;
    },

    doValidate() {
      this.validate.name = true;
      this.validate.email = true;

      if (this.isFormNameInvalid ||this.isFormEmailInvalid) {
        VueScrollTo.scrollTo("#form", { offset: -70 });
        return false;
      }

      return true;
    },
  },

  computed: {
    isFormNameInvalid() {
      if (!this.validate.name) {
        return null;
      }

      if (!this.form.name) {
        return "Dieses Feld muss ausgefüllt werden.";
      }

      return null;
    },

    isFormEmailInvalid() {
      if (!this.validate.email) {
        return null;
      }

      if (!this.form.email) {
        return "Dieses Feld muss ausgefüllt werden.";
      }

      if (!/\S+@\S+\.\S+/.test(this.form.email)) {
        return "Bitte überprüfe die angegebene Mailadresse.";
      }

      return null;
    },

    showPurposeDetailField() {
      // TODO
      return false;
      // return this.form.purpose == 'Kommerziell - Sonstiges' || this.form.purpose == 'Privat - Sonstiges'
    },
  },
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

.hero-img {
  width: 100%;
}
</style>