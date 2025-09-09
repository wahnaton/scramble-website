import { HttpTypes } from "@medusajs/types";

export type PriceResult = {
  amount: number;
  currency_code: string;
};

const extractVariantPrice = (
  variant: HttpTypes.StoreProductVariant,
): PriceResult | null => {
  const calculatedPrice = variant.calculated_price;
  if (
    !calculatedPrice ||
    calculatedPrice.calculated_amount == null ||
    !calculatedPrice.currency_code
  )
    return null;

  return {
    amount: calculatedPrice.calculated_amount,
    currency_code: calculatedPrice.currency_code,
  };
};

export const getCheapestPrice = (
  product: HttpTypes.StoreProduct,
): PriceResult => {
  const variants = product.variants || [];
  const prices = variants
    .map((v) => extractVariantPrice(v))
    .filter((p): p is PriceResult => Boolean(p));

  if (prices.length === 0) {
    const fallbackCurrency =
      variants[0]?.calculated_price?.currency_code || "USD";
    return { amount: 0, currency_code: fallbackCurrency };
  }

  return prices.reduce(
    (min, p) => (p.amount < min.amount ? p : min),
    prices[0],
  );
};

export const priceForVariant = (
  variant: HttpTypes.StoreProductVariant,
): PriceResult =>
  extractVariantPrice(variant) || {
    amount: 0,
    currency_code: variant.calculated_price?.currency_code || "USD",
  };

export const formatPrice = (
  amountInCents: number,
  currencyCode: string,
): string =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode.toUpperCase(),
  }).format(amountInCents / 100);
