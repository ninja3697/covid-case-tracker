import ApiCall from "../interceptor/app.interceptor";

const SERVICE_BASE_URL = "https://demo2805718.mockable.io/data-service/";

class DataService {
  static getTotalRecords() {
    const apiPayload = {
      method: "GET",
      url: `${SERVICE_BASE_URL}fetch/totalRecords`,
    };
    return ApiCall.call(apiPayload);
  }

  static getStateRecords() {
    const apiPayload = {
      method: "GET",
      url: `${SERVICE_BASE_URL}fetch/stateRecords`,
    };
    return ApiCall.call(apiPayload);
  }
}

export default DataService;
