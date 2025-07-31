import { IonSearchbar } from "@ionic/react";
import { useState } from "react";

const SearchBarComponent: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <IonSearchbar
      value={searchText}
      placeholder="Buscar productos..."
      animated
      onIonInput={(e) => setSearchText(e.detail.value!)}
    />
  );
};

export default SearchBarComponent;
