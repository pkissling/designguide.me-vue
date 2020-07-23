import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'https://api.designguide.me/v1',
    timeout: 5000,
    headers: {'Content-Type': 'application/json'}
});

export default {

    sendMessage(name, email, phone, purpose, other, attachments) {
        const payload = JSON.stringify({ name, email, phone, purpose, other, attachments: attachments.map(a => a.url) });
        return httpClient.post("/messages", payload);
    },

    createAttachmentUploadUrl(fileName, fileType, context) {
        const payload = JSON.stringify({ fileName, fileType, context });
        return httpClient.post("/attachments", payload)
    }

};
