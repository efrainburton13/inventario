import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonImg,
  IonCardSubtitle,
} from "@ionic/react";
import { heartOutline, cartOutline } from "ionicons/icons";
import { useIonRouter } from "@ionic/react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
  onBuy: () => void;
  onAddToFavorites: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  imageUrl,
  onBuy,
  onAddToFavorites,
}) => {
  const history = useHistory();
  const favorites = useSelector((state: RootState) => state.productFavorite);
  const router = useIonRouter();

  const handleImageClick = () => {
    router.push("/product", "forward", "push");
  };

  return (
    <IonCard className="flex flex-col rounded-xl shadow-md overflow-hidden max-md:h-54 max-md:w-40 ">
      <IonImg onClick={handleImageClick} src={imageUrl} alt={name} />

      <IonCardHeader>
        <IonCardTitle className="flex text-lg">{name}</IonCardTitle>
        <IonCardSubtitle className="text-md text-turquoise">
          ${price.toFixed(2)}
        </IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent className="flex items-start justify-start ml-0">
        <IonButton
          className="max-md:w-22 text-[10px] font-semibold"
          expand="block"
          onClick={onBuy}
        >
          <IonIcon className="" icon={cartOutline} slot="start" />
          Comprar
        </IonButton>

        <IonButton
          fill="clear"
          color={favorites.some((fav) => fav.id === "2") ? "danger" : "medium"}
          onClick={onAddToFavorites}
        >
          <IonIcon icon={heartOutline} />
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default ProductCard;
