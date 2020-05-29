import { httpClient } from "./http-client";

export default {

    sendMessage(name, email, select, message) {
        const payload = JSON.stringify({ name, email, select, message });
        return httpClient.post("", payload);
    }

};
