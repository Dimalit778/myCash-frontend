import { apiSlice } from './apiSlice';

const USER_URL = 'https://mycash-ra2a-yxco.onrender.com/api/users';
const AUTH_URL = 'https://mycash-ra2a-yxco.onrender.com/api/auth';

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
      providesTags: ['User'],
    }),
    //? ---> Login User
    login: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/login`,
        method: 'POST',
        body: data,
      }),
      providesTags: ['User'],
    }),
    //? ---> Register User
    register: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/register`,
        method: 'POST',
        body: data,
      }),
      providesTags: ['User'],
    }),
    //? --->   Verify Email
    verifyEmail: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/verify-email/${data.emailToken}`,
        method: 'POST',
        body: data,
      }),
    }),
    //? --->   Forgot password
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/forgot-password`,
        method: 'POST',
        body: data,
      }),
    }),
    //? --->   Verify reset Link
    verifyLink: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/reset-password/${data.id}/${data.token}`,
        method: 'GET',
      }),
    }),
    //? --->   Reset password
    resetPassword: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/reset-password/${data.id}/${data.token}`,
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
    //@ ---> Upload Image
    uploadImage: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/uploadImage`,
        method: 'POST',
        body: data,
      }),
    }),
    //@ ---> Delete Image From Cloudinary
    deleteImage: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/deleteImage`,
        method: 'POST',
        body: data,
      }),
    }),
    //?~~~~~~~~~~ -- ADMIN -> GET ALL USERS
    allUsers: builder.query({
      query: (id) => `${USER_URL}/getAll/${id}`,
      providesTags: ['User'],
    }),
    //?~~~~~~~~~~ -- DELETE USER
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `${USER_URL}/deleteUser/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useGoogleAuthMutation,
  useVerifyEmailMutation,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useUploadImageMutation,
  useDeleteImageMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useVerifyLinkMutation,
  useAllUsersQuery,
  useDeleteUserMutation,
} = userApiSlice;
