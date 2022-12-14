import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6315b41c5b85ba9b11e54536.mockapi.io' }),
    tagTypes: ['Contact'],
    endpoints: (builder) => ({
      getContacts: builder.query({
        query: () => `/contacts`,
        providesTags: ['Contact']
      }),
      addContact: builder.mutation({
        query: ({name, phone}) => ({
            url: `/contacts`,
            method: 'POST',
            body: {name, phone}
         }),
         invalidatesTags: ['Contact']
      }),
      deleteContact: builder.mutation({
        query: (id) =>
        ({
            url: `/contacts/${id}`,
            method: 'DELETE',
         }), 
         invalidatesTags: ['Contact']
      })
    }),
  })

  export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi
