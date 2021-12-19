// An interface describing the data from the api response.  The Api returns more data however
// this indicates the data to be used in the application.

export interface ProductApiResponse {
  products: {
    title: string;
    variants: {
      id: number;
      title: string;
      featured_image: {
        src: string;
      };
      price: string;
    }[];
  }[];
}
