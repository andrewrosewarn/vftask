// Product interface consists of properties from the productApi interface and
// flattened for use within the store requirements as agreed.

export interface Product {
  id: number;
  productTitle: string;
  variantTitle: string;
  image: string;
  price: number;
}
