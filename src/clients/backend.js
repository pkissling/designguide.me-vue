import { httpClient } from "./http-client";

export default {

    sendMessage(name, email, phone, purpose, other) {
        const payload = JSON.stringify({ name, email, phone, purpose, other });
        return httpClient.post("", payload);
    }

};
