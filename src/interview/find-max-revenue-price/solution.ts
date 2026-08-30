interface Customer {
  price: number;
  willBuy: () => Promise<boolean>;
}

export const findMaxRevenuePrice = async (
  buyers: Customer[],
): Promise<number | null> => {
  const sorted = buyers.toSorted((a, b) => b.price - a.price);

  for (const buyer of sorted) {
    const willBuy = await buyer.willBuy();
    if (willBuy) {
      return buyer.price;
    }
  }

  return null;
};
