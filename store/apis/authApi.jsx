import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
  }),
  endpoints(builder) {
    return {
      fetchUsers: builder.query({
        providesTags: (result, error, user) => {
          const users = result.map((user) => {
            return { type: 'user', id: user.id };
          });
          return users;
        },
        query: (user) => {
          return {
            url: '/users',
            params: {
              userId: user.id,
            },
            method: 'GET',
          };
        },
      }),
      signinUser: builder.mutation({
        query: (body) => {
          return {
            url: "/user/signin",
            method: "post",
            body,
          };
        },
      }),
      signupUser: builder.mutation({
        query: (body) => {
          return {
            url: "/user/signup",
            method: "post",
            body,
          };
        },
      }),
      sendMailForVerification: builder.mutation({
        query: (body) => {
          return {
            url: "/user/send-verification-mail",
            method: "post",
            body,
          };
        },
      }),
      verifyUser: builder.mutation({
        query: (body) => {
          console.log(body.token);

          return {
            url: "/user/verfiy-user-mail",
            method: "post",
            body,
          };
        },
      }),
      sendMailForgotPassword: builder.mutation({
        query: (body) => {
          return {
            url: "/user/forgot-password",
            method: "post",
            body,
          };
        },
      }),
      resetPassword: builder.mutation({
        query: (body) => {
          return {
            url: "/user/verify-forgot-mail",
            method: "post",
            body,
          };
        },
      }),
    };
  },
});


export const {
  useFetchUsersQuery,
  useSigninUserMutation,
  useSignupUserMutation,
  useSendMailForVerificationMutation,
  useVerifyUserMutation,
  useSendMailForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
export { authApi };
