import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

export const userAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: {
          ...data,
        },
      }),
    }),

    register: builder.mutation({
      query: (data) => ({
        url: "/user/register",
        method: "POST",
        body: {
          ...data,
        },
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: "/user/logout",
        method: "DELETE",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } =
  userAPI;
