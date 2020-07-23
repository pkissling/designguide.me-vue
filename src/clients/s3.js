import axios from 'axios'

const httpClient = axios.create({
  timeout: 60000
});

export default {

  uploadAttachment(url, fileType, file) {
    var options = {
      headers: {
        'Content-Type': fileType
      }
    };
    return httpClient.put(url, file, options)
  }

};
