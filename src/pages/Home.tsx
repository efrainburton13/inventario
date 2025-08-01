import { IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import SearchBarComponent from "../components/SearchBar";
import { useEffect } from "react";
import { setProducts } from "../store/productSlice";
import axios from "axios";
import { getAccessToken } from "../utils/auth";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const token = getAccessToken();
  /*   const favorites = useSelector((state: RootState) => state.productFavorite); */

  useEffect(() => {
    if (products.length === 0) {
      const fetchProducts = async () => {
        try {
          const response = await axios.get(
            "http://localhost:5025/api/product",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(response.data);
          dispatch(setProducts(response.data));
        } catch (error) {
          console.error("Failed to fetch products:", error);
        }
      };
      fetchProducts();
    }
  }, [products]);
  /* const products = [
    {
      name: "Product 1",
      imageUrl: "https://ionicframework.com/docs/img/demos/avatar.svg",
      price: 9.99,
      onBuy: () => {},
      onAddToFavorites: () => {},
    },
    {
      name: "Product 2",
      imageUrl: "https://ionicframework.com/docs/img/demos/avatar.svg",
      price: 19.99,
      onBuy: () => {},
      onAddToFavorites: () =>
        dispatch(
          addFavorite({
            id: "2",
            name: "Product 2",
            imageUrl: "https://ionicframework.com/docs/img/demos/avatar.svg",
            price: 19.99,
          })
        ),
    },
    // Add more products as needed
  ]; */
  return (
    <IonPage>
      <SearchBarComponent />
      <IonContent className="ion-padding-top ion-ma">
        <IonGrid>
          <IonRow>
            {/*             <div>{favorites.length > 0 ? "Favorites" : "No Favorites"}</div> */}
            {products.map((product, index) =>
              product.productStocks.length > 1 ? (
                product.productStocks.map((stock: any, stockIndex: number) => (
                  <ProductCard
                    key={`${index}-${stockIndex}`}
                    name={product.name}
                    imageUrl={
                      "https://ionicframework.com/docs/img/demos/avatar.svg"
                    }
                    price={stock.price}
                    onBuy={() => {}}
                    onAddToFavorites={() => {}}
                  />
                ))
              ) : (
                <ProductCard
                  key={`${index}`}
                  name={product.name}
                  imageUrl={
                    "https://ionicframework.com/docs/img/demos/avatar.svg"
                  }
                  price={product.productStocks[0].price}
                  onBuy={() => {}}
                  onAddToFavorites={() => {}}
                />
              )
            )}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
