import {
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.css";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import SearchBarComponent from "../components/SearchBar";
import { add } from "ionicons/icons";
import { addFavorite } from "../store/productFavoriteSlice";

const Tab1: React.FC = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.productFavorite);
  const products = [
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
  ];
  return (
    <IonPage>
      <SearchBarComponent />
      <IonContent className="ion-padding-top ion-ma">
        <IonGrid>
          <IonRow>
            {/*             <div>{favorites.length > 0 ? "Favorites" : "No Favorites"}</div> */}
            {...products.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                imageUrl={product.imageUrl}
                price={product.price}
                onBuy={product.onBuy}
                onAddToFavorites={product.onAddToFavorites}
              />
            ))}
          </IonRow>
        </IonGrid>

        {/*         <ProductCard
          name="Tab 1 page"
          imageUrl="https://ionicframework.com/docs/img/demos/avatar.svg"
          price={9.99}
          onBuy={() => {}}
          onAddToFavorites={() => {}}
        /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
