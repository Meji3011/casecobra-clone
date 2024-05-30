// you can add underscores to numbers for visual clarity, for example, you can make one million as 1_000_000 and the compiler will read it as one million.

export const PRODUCT_PRICES = {
  material: {
    silicone: 0,
    polycarbonate: 5_00,
  },
  finish: {
    smooth: 0,
    textured: 3_00,
  },
} as const;

export const BASE_PRICE = 20_00;
