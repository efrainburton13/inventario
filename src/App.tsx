import { Redirect, Route } from "react-router-dom";
import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import MainTabs from "./tabs/MainTabs";
import { Provider } from "react-redux";
import store from "./store";
import LoginPage from "./auth/LoginPage";
import { isAuthenticated } from "./utils/auth";

setupIonicReact();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <IonApp>
        <IonReactRouter>
          <Route path="/login" component={LoginPage} exact />
          <Route
            path="/"
            render={() =>
              isAuthenticated() ? <MainTabs /> : <Redirect to="/login" />
            }
          />
          <Redirect
            exact
            from="/"
            to={isAuthenticated() ? "/pages/home" : "/login"}
          />
        </IonReactRouter>
      </IonApp>
    </Provider>
  );
};

export default App;
