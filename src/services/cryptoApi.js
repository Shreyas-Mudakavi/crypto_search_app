import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import axios from 'axios';

const crptoApiHeaders = {
  "X-RapidAPI-Key": "83dc8650f6msh3fd3710e5b40f61p1a3dcdjsned9a61c505f3",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseURL = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({
  url,
  headers: crptoApiHeaders,
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': '83dc8650f6msh3fd3710e5b40f61p1a3dcdjsned9a61c505f3',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };
