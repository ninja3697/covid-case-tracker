import axios from "axios";

const _axios = axios.create();

class ApiCall {
  static call(apiPayload) {
    return new Promise((resolve, reject) => {
      _axios(apiPayload)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  }
}

export default ApiCall;
