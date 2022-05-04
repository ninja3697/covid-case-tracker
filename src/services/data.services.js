import ApiCall from "../interceptor/app.interceptor";

class DataService {
  static getTotalRecords() {
    const apiPayload = {
      method: "GET",
      url: "http://localhost:3000/totalRecords"
    };
    return ApiCall.call(apiPayload);
  }

  static getStateRecords() {
    const apiPayload = {
      method: "GET",
      url: "http://localhost:3000/stateRecords"
    };
    return ApiCall.call(apiPayload);
  }
}

export default DataService;
