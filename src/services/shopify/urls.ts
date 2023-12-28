import { env } from "@/config/env";

export const shopifyUrls = {
  products: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2021-07/products.json`,
  },
};
