import { apiSlice } from './apiSlice';

const USER_URL = '/api/users';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //@ ---> Firebase Auth User
    firebaseAuth: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/firebaseAuth`,
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
  useFirebaseAuthMutation,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useUploadImageMutation,
} = userApiSlice;
