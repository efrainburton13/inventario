import { IonContent, IonHeader, IonPage } from "@ionic/react";

export default function ProductDetails(producto: {
  imageUrl: string;
  name: string;
  description: string;
  price: number;
}) {
  const product = {
    imageUrl: "https://ionicframework.com/docs/img/demos/avatar.svg",
    name: "Tab 1",
    description: "Telefono inteligente con pantalla de 6.5 pulgadas",
    price: 699.99,
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ width: "100%" }}
        />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>${product.price.toFixed(2)}</h3>
      </IonContent>
    </IonPage>
  );
}
