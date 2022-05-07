import ApiCall from "../interceptor/app.interceptor";

const SERVICE_BASE_URL =
  "https://peaceful-mesa-18231.herokuapp.com/data-service/";

class DataService {
  static getTotalRecords() {
    const apiPayload = {
      method: "GET",
      url: `${SERVICE_BASE_URL}totalRecords`,
    };
    return ApiCall.call(apiPayload);
  }

  static getStateRecords() {
    const apiPayload = {
      method: "GET",
      url: `${SERVICE_BASE_URL}stateRecords`,
    };
    return ApiCall.call(apiPayload);
  }
}

export default DataService;
