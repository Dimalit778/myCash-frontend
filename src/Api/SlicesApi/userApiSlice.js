import { apiSlice } from './apiSlice';

const USER_URL = '/api/v1/users';
const AUTH_URL = '/api/v1/auth';

export const userApiSlice = apiSlice.injectEndpoints({
  // ---------->   { AUTH URL ROUTES  }
  endpoints: (builder) => ({
    //@ ---> Google Auth User
    googleAuth: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/googleAuth`,
        method: 'POST',
        body: data,
      }),
    }),

    //? ---> Login User
    login: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/login`,
        method: 'POST',
        body: data,
      }),
    }),
    //? ---> Register User
    register: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/register`,
        method: 'POST',
        body: data,
      }),
    }),

    // ---------->   { USER URL ROUTES  }

    //? ---> Logout User
    logout: builder.mutation({
      query: () => ({
        url: `${USER_URL}/logout`,
        method: 'POST',
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
  useGoogleAuthMutation,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useUploadImageMutation,
} = userApiSlice;
