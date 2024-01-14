import { apiSlice } from './apiSlice';

const USER_URL = '/api//v1/users';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //@ ---> Google Auth User
    googleAuthFB: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/googleAuthFB`,
        method: 'POST',
        body: data,
      }),
    }),

    //? ---> Login User
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/login`,
        method: 'POST',
        body: data,
      }),
    }),
    //? ---> Logout User
    logout: builder.mutation({
      query: () => ({
        url: `${USER_URL}/logout`,
        method: 'POST',
      }),
    }),
    //? ---> Register User
    register: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/register`,
        method: 'POST',
        body: data,
      }),
    }),
    //? ---> Update User
    updateUser: builder.mutation({
      query: ({ _id, ...rest }) => ({
        url: `${USER_URL}/updateUser/${_id}`,
        method: 'PATCH',
        body: rest,
      }),
    }),
    //? ---> Upload Image
    uploadImage: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/uploadImage`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useGoogleAuthFBMutation,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useUploadImageMutation,
} = userApiSlice;
