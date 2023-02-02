import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IProducts {
  id: number;
  name: string;
  brand?: string;
  description: string;
  price: number;
  photo: string;
  quantity: number;
}


export interface Iprops {
  products: Array<IProducts> | [];
  count?: number;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mks-challenge-api-frontend.herokuapp.com/api/v1/',
    prepareHeaders(headers) {
      
      return headers.set('access-control-allow-origin', '*')
    }
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Iprops, number | string>({
        query(sortBy = 'id') {
          return `products?page=1&rows=8&sortBy=${sortBy}&orderBy=DESC`
        }
      })
    }
  }
})

export const { useFetchBreedsQuery } = apiSlice;