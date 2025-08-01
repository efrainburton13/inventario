import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonTitle,
  isPlatform,
} from "@ionic/react";
import { ellipse, personRemove, star, home, settings } from "ionicons/icons";
import { IonAvatar } from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Settings from "../pages/Settings";
import ProductDetails from "../pages/product";

const router = [
  {
    path: "/pages/home",
    component: Home,
    icon: home,
  },
  {
    path: "/pages/favorites",
    component: Favorites,
    icon: star,
  },
  {
    path: "/pages/logout",
    component: Settings,
    icon: personRemove,
  },
];

const MainTabs: React.FC = () => (
  <>
    <IonHeader className="">
      <IonToolbar>
        <IonTitle slot="start">Tab 1</IonTitle>
        <IonAvatar slot="end">
          <img
            alt="Silhouette of a person's head"
            src="https://ionicframework.com/docs/img/demos/avatar.svg"
          />
        </IonAvatar>
      </IonToolbar>
    </IonHeader>
    <IonTabs>
      <IonRouterOutlet className={`${!isPlatform("ios") ? "mt-20" : ""}`}>
        {router.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact
          />
        ))}
        <Route path="/product" component={ProductDetails} />
        <Route exact path="/">
          <Redirect to="/pages/home" />
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        {router.map((route) => (
          <IonTabButton key={route.path} tab={route.path} href={route.path}>
            <IonIcon aria-hidden="true" icon={route.icon} />
            <IonLabel>{route.path.split("/").pop()}</IonLabel>
          </IonTabButton>
        ))}
      </IonTabBar>
    </IonTabs>
  </>
);

export default MainTabs;
