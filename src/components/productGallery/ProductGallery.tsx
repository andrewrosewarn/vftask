import React, { useEffect, useState } from "react";
import {
  FilterType,
  selectFilterType,
  setFilterType,
} from "../../features/productGallery";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { Product } from "../../interfaces/product";
import { useGetProductsQuery } from "../../services/products";
import { Divider } from "../common/Divider";
import Loader from "../common/Loader";
import ProductControlBar from "./ProductControlBar";
import ProductList from "./ProductList";
import { Select } from "../common/Select";

// Sort function to sort products based on the filter type provided.
const sortProducts = (filterType: FilterType, products: Product[]) => {
  switch (filterType) {
    case "titleA-Z":
      return products.sort((a: Product, b: Product) =>
        a.productTitle > b.productTitle ? 1 : -1
      );

    case "titleZ-A":
      return products.sort((a: Product, b: Product) =>
        a.productTitle < b.productTitle ? 1 : -1
      );

    case "highPrice":
      return products.sort((a: Product, b: Product) =>
        a.price < b.price ? 1 : -1
      );

    case "lowPrice":
      return products.sort((a: Product, b: Product) =>
        a.price > b.price ? 1 : -1
      );

    default:
      return products;
  }
};

export default function ProductGallery() {
  const filter = useAppSelector(selectFilterType);
  const dispatch = useAppDispatch();
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const { data, isLoading, isError } = useGetProductsQuery(null);

  useEffect(() => {
    // Sort products based on either a change to the filter selection or a refresh of the data
    if (data) {
      const dataToSort = [...data];
      setFilteredData(sortProducts(filter, dataToSort));
    }
  }, [filter, data]);

  const onFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilterType(e.target.value as FilterType));
  };

  if (isError) {
    return <p>An error occurrred while loading products</p>;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (data) {
    return (
      <>
        <ProductControlBar>
          <Select value={filter} onChange={onFilterChange}>
            <option value="titleA-Z">Title A - Z</option>
            <option value="titleZ-A">Title Z - A</option>
            <option value="highPrice">Highest Price</option>
            <option value="lowPrice">Lowest Price</option>
          </Select>
        </ProductControlBar>
        <Divider />
        <ProductList products={filteredData} />
      </>
    );
  }

  return null;
}
