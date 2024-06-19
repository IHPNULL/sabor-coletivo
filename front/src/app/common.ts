export const API = {
  BaseURL: "http://localhost:8080",
  timeout: 30000,
  contentType: "application/json",
  endpoints: {},
  errorMessages: {
    none2xx:
      "The request was made and the server responded with a status code that falls out of the range of 2xx",
    noResponse: "The request was made but no response was received",
    timeout:
      "We are unable to fetch data at this time, kindly check your internet connection and we'll reconnect you.",
    unexpectedError:
      "Something happened in setting up the request that triggered an Error",
  },
};
