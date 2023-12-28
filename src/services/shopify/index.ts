import { env } from "@/config/env";
import { shopifyUrls } from "./urls";
env;

shopifyUrls;

export const getProducts = async () => {
  try {
    const products = await fetch(shopifyUrls.products.all, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });
    const data = await products.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
