import { Middleware, isRejectedWithValue } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MiddlewareAPI } from "redux";
import { API } from "../app/common";
import { setIsGetMethodError } from "../services/uiSlice";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API.BaseURL,
    timeout: API.timeout,
    credentials: "include",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("jwt-token");
      headers.set("Content-Type", API.contentType);
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["posts"],
  endpoints: () => ({}),
});

export const rtkQueryGetHttpErrorEmitter: Middleware =
  (api: MiddlewareAPI) => (next) => (action: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (
      isRejectedWithValue(action) &&
      String(action.meta?.arg?.endpointName).includes("get")
    ) {
      api.dispatch(setIsGetMethodError(true));
    }

    return next(action);
  };
