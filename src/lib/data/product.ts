"use server";

import { HttpTypes } from "@medusajs/types";
import { sdk } from "../config";

const productFieldSelection = [
  "*variants",
  "*variants.calculated_price",
  "*variants.options",
  "*variants.options.option",
  "*variants.images",
  "*images",
  "+metadata",
  "+tags",
].join(",");

export const listProducts = async ({
  pageParam = 1,
  queryParams,
}: {
  pageParam?: number;
  queryParams?: HttpTypes.FindParams & HttpTypes.StoreProductParams;
}): Promise<{
  response: { products: HttpTypes.StoreProduct[]; count: number };
  nextPage: number | null;
  queryParams?: HttpTypes.FindParams & HttpTypes.StoreProductParams;
}> => {
  const limit = queryParams?.limit || 12;
  const _pageParam = Math.max(pageParam, 1);
  const offset = _pageParam === 1 ? 0 : (_pageParam - 1) * limit;

  return sdk.client
    .fetch<{ products: HttpTypes.StoreProduct[]; count: number }>(
      `/store/products`,
      {
        method: "GET",
        query: {
          limit,
          offset,
          fields: productFieldSelection,
          ...queryParams,
        },
        cache: "force-cache",
      },
    )
    .then(({ products, count }) => {
      const nextPage = count > offset + limit ? pageParam + 1 : null;

      return {
        response: {
          products,
          count,
        },
        nextPage: nextPage,
        queryParams,
      };
    });
};

export const retrieveProductByHandle = async (
  handle: string,
  queryParams?: HttpTypes.StoreProductParams,
): Promise<HttpTypes.StoreProduct | null> => {
  return sdk.client
    .fetch<{ products: HttpTypes.StoreProduct[]; count: number }>(
      `/store/products`,
      {
        method: "GET",
        query: {
          handle,
          limit: 1,
          // Ensure we retrieve metadata, variant option details, and images
          // so downstream utilities have full product context
          fields: productFieldSelection,
          ...queryParams,
        },
        cache: "force-cache",
      },
    )
    .then(({ products }) => products?.[0] ?? null);
};
