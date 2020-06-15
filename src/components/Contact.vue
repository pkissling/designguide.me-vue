<template>
  <div id="contact">
    <section class="hero hero-image">
      <div class="hero-body">
        Work with me!
      </div>
    </section>

    <div class="content has-text-left-touch has-text-centered-desktop">
      <h1 class="title">Erzähl‘ mir von deinem Projekt!</h1>

      <p>Interesse an einem individuellem Designkonzept? Dann erzähle mir von deinem Vorhaben & kontaktiere mich bitte über das Formular. Ich melde mich im Anschluss bei dir zur Terminvereinbarung für ein Erstgespräch.</p>
      <p>Wir starten das Projekt mit einem kurzen Kick Off zur Klärung der konkreten Aufgabenstellung, deiner Wünsche & Vorstellungen. Auf dieser Basis wird das Designkonzept ausgearbeitet.</p>
      <p>Der vorab ausgefüllte Fragebogen dient dabei als gute Grundlage für die nächsten Schritte. Darin sind die wichtigsten Fragen inbegriffen und durch den Upload von Fotos und Plänen, kann ich mir vorab ein Bild von der Fläche machen - bevor es an die Konzeptentwicklung geht.</p>
      <p>Ich freue mich über deine Anfrage.</p>

      <div class="form is-fluid">
        <div class="field">
          <label class="label is-uppercase">Name</label>
          <div class="control">
            <input
              v-model="form.name"
              class="input"
              :class="{ 'is-warning': !formNameValid }"
              type="text"
            />
          </div>
          <p v-show="!formNameValid" class="help is-warning">Dieses Feld muss ausgefüllt werden.</p>
        </div>

        <div class="field">
          <label class="label is-uppercase">Mailadresse</label>
          <div class="control">
            <input
              v-model.trim="form.email"
              class="input"
              :class="{ 'is-warning': !formEmailValid }"
              type="email"
            />
          </div>
          <p v-show="!formEmailValid" class="help is-warning">Dieses Feld muss ausgefüllt werden.</p>
        </div>

        <div class="field">
          <label class="label is-uppercase">Telefonnummer</label>
          <div class="control">
            <input v-model.trim="form.phone" class="input" type="tel" />
          </div>
        </div>

        <div class="field">
          <label class="label is-uppercase">Das Projekt in drei Sätzen</label>
          <div class="control">
            <ResizeAuto>
              <template v-slot:default="{resize}">
                <textarea v-model.trim="form.description" rows="3" class="textarea" @input="resize"></textarea>
              </template>
            </ResizeAuto>
          </div>
        </div>

        <div class="field">
          <label class="label">WOFÜR SOLL DER DESIGNGUIDE ERSTELLT WERDEN? Bitte anklicken.</label>
          <br />
          <div class="control">
            <div class="columns">
              <div class="column">
                <a>
                  <div class="circle">
                    <table>
                      <tr class="title is-4">Privat</tr>
                      <ul>
                        <li>Homeoffice</li>
                        <li>Living Indoor</li>
                        <li>Living Outdoor</li>
                        <li>Sonstige</li>
                      </ul>
                    </table>
                  </div>
                </a>
              </div>

              <div class="column">
                <a>
                  <div class="circle">
                    <table>
                      <tr class="title is-4">Kommerziell</tr>
                      <ul>
                        <li>Office</li>
                        <li>Restaurant, Cafè, Bar</li>
                        <li>Hotelzimmer, -lobby</li>
                        <li>Sonstige</li>
                      </ul>
                    </table>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label is-uppercase">Wie groß ist die Fläche zirka?</label>
          <div class="field has-addons">
            <p class="control">
              <input v-model.trim="form.surfaceArea" class="input" type="number" />
            </p>
            <p class="control">
              <a class="button is-static" style="width: 5%;">qm</a>
            </p>
          </div>
        </div>

        <div class="field">
          <label class="label is-uppercase">Hast du bereits eigene Ideen im Kopf?</label>
          <div class="control">
            <ResizeAuto>
              <template v-slot:default="{resize}">
                <textarea v-model.trim="form.ownIdeas" rows="1" class="textarea" @input="resize"></textarea>
              </template>
            </ResizeAuto>
          </div>
        </div>

        <div class="field">
          <label class="label is-uppercase">Gibt es für dich bestimmte "No - GO's"?</label>
          <div class="control">
            <ResizeAuto>
              <template v-slot:default="{resize}">
                <textarea v-model.trim="form.noGos" rows="1" class="textarea" @input="resize"></textarea>
              </template>
            </ResizeAuto>
          </div>
        </div>

        <div class="field">
          <label class="label is-uppercase">Gibt es bestimmte räumliche Anforderungen?</label>
          <div class="control">
            <ResizeAuto>
              <template v-slot:default="{resize}">
                <textarea v-model.trim="form.requirments" rows="1" class="textarea" @input="resize"></textarea>
              </template>
            </ResizeAuto>
          </div>
        </div>

        <div class="field">
          <label class="label is-uppercase">Sollte ich sonst noch etwas wissen?</label>
          <div class="control">
            <ResizeAuto>
              <template v-slot:default="{resize}">
                <textarea
                  v-model.trim="form.somethingElse"
                  rows="1"
                  class="textarea"
                  @input="resize"
                ></textarea>
              </template>
            </ResizeAuto>
          </div>
        </div>

        <div class="field">
          <label class="label is-uppercase">Bitte lade aussagekräftige Fotos und Pläne hoch!</label>

          <span class="tags are-medium">
            <a class="tag button is-primary">
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
          <label class="label is-uppercase">Wie bist du auf mich aufmerksam geworden?</label>
          <div class="control">
            <ResizeAuto>
              <template v-slot:default="{resize}">
                <textarea
                  v-model.trim="form.promotionChannel"
                  rows="1"
                  class="textarea"
                  @input="resize"
                ></textarea>
              </template>
            </ResizeAuto>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button
              id="sendMessage"
              class="button"
              :disabled="!formAgreeToc || this.isSuccess || this.isLoading"
              :class="submitButtonClass"
              @click.prevent="sendMessage()"
            >
              <p v-if="!isSuccess">Submit</p>
              <i v-else class="fas fa-check" />
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
      ></modal>
    </div>
  </div>
</template>

<script>
import backendClient from "@/clients/backend";
import modal from "../widgets/modal.vue";
import notification from "../widgets/notification.vue";
import ResizeAuto from "./ResizeAuto";

export default {
  components: {
    modal,
    notification,
    ResizeAuto
  },

  data: () => {
    return {
      form: {
        name: null,
        email: null,
        phone: null,
        description: null,
        surfaceArea: null,
        ownIdeas: null,
        noGos: null,
        requirments: null,
        somethingElse: null,
        promotionChannel: null,
        attachments: []
      },
      formAgreeToc: false,
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
      this.isLoading = true;
      this.error = null;
      backendClient
        .sendMessage(
          this.formName,
          this.formEmail,
          this.formSelect,
          this.formMessage
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

    toggleToc() {
      if (this.modalContent != null) {
        this.modalContent = null;
      } else {
        this.modalContent = {
          body: "Body",
          title: "Terms and Conditions"
        };
      }
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
    }
  },

  computed: {
    submitButtonClass() {
      if (this.isLoading) {
        return "is-loading";
      }

      return "is-primary";
    },

    formNameValid() {
      return this.form.name;
    },

    formEmailValid() {
      return this.form.email;
    }
  }
};
</script>

<style scoped>
#sendMessage {
  width: 8rem;
  -webkit-transition: all 1s linear;
  -moz-transition: all 1s linear;
  -o-transition: all 1s linear;
  transition: all 1s linear;
}

.form {
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
    background-position: 0% 60%;
}
</style>