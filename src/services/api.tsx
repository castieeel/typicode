import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type iPost, type iComments } from '../models'

export const typicodeApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getPosts: builder.query <iPost[], null>({
      query: () => ({
        url: '/posts'
      })
    }),
    getComments: builder.query <iComments[], number >({
      query: (idPost: number) => ({
        url: `/posts/${idPost}/comments`
      })
    }),
    getUser: builder.query <iPost[], number >({
      query: (idUser: number) => ({
        url: `/posts?userId=${idUser}`
      })
    })
  })
})

export const { useGetPostsQuery, useLazyGetCommentsQuery, useGetUserQuery } = typicodeApi
