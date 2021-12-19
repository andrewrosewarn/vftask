import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";
import Hero from "./components/Hero";
import ProductsContainer from "./components/productGallery/ProductsContainer";
import ShopBody from "./components/ShopBody";
import { Provider } from "react-redux";
import { store } from "./store";
import ProductGallery from "./components/productGallery/ProductGallery";

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <Hero />
      <ShopBody>
        <ProductsContainer>
          <ProductGallery />
        </ProductsContainer>
        <Cart />
      </ShopBody>
    </Provider>
  );
}
