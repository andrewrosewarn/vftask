// Service to fetch data from the api, using redux toolkit query.

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../interfaces/product";
import { ProductApiResponse } from "../interfaces/productApi";

// An optional transform function which accepts data from the api response and returns a transformed
// structure to be cached.  Used in this case to flatten the api response as agreed.

function transformResponse(response: ProductApiResponse) {
  const products: Product[] = [];

  // Iterate over the products from the response
  response.products.forEach((product) => {
    // Iterate over the variants as these need to be the unique products, not the parent product.
    product.variants.forEach((variant) => {
      const p: Product = {
        id: variant.id,
        productTitle: product.title,
        variantTitle: variant.title,
        price: +variant.price,
        image: variant.featured_image.src,
      };

      products.push(p);
    });
  });

  return products;
}

//  Api which defines end points to be used by this service, at present a single getProducts endpoint..

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://efuktshirts.com/" }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], null>({
      query: () => "products.json",
      transformResponse: transformResponse,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
