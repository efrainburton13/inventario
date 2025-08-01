import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonText,
} from "@ionic/react";
import { useState } from "react";
import axios from "axios";
import { login } from "../services/authService";
import { setAccessToken } from "../utils/auth";

const LoginPage: React.FC = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const { token } = await login(userName, password);
      setAccessToken(token);

      window.location.href = "/tabs/home";
    } catch (err) {
      console.error("Error al iniciar sesión", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <IonPage>
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <IonContent
          fullscreen
          className="flex items-center justify-center min-h-screen bg-gray-100"
          slot="center"
        >
          <div className="w-full max-w-md p-6 bg-white mx-4">
            <h1 className="text-2xl font-bold text-center mb-6">
              Iniciar Sesión
            </h1>

            <div className="space-y-4">
              <IonInput
                placeholder="Correo electrónico"
                className="border border-gray-300 rounded px-3 py-2"
                onIonChange={(e) => setUsername(e.detail.value!)}
                type="email"
              />
              <IonInput
                placeholder="Contraseña"
                className="border border-gray-300 rounded px-3 py-2"
                onIonChange={(e) => setPassword(e.detail.value!)}
                type="password"
              />
              <IonButton expand="block" onClick={handleLogin}>
                Iniciar sesión
              </IonButton>
            </div>
          </div>
        </IonContent>
      )}
    </IonPage>
  );
};

export default LoginPage;
