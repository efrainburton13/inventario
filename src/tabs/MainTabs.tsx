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
} from "@ionic/react";
import { ellipse, square, triangle, home } from "ionicons/icons";
import { IonAvatar } from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import Tab1 from "../pages/Tab1";
import Tab2 from "../pages/Tab2";
import Tab3 from "../pages/Tab3";
import ProductDetails from "../pages/product";

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
      <IonRouterOutlet className="mt-12">
        <Route exact path="/pages/tab1" component={Tab1}></Route>
        <Route exact path="/pages/tab2" component={Tab2} />
        <Route path="/pages/tab3" component={Tab3} />
        <Route path="/product" component={ProductDetails} />
        <Route exact path="/">
          <Redirect to="/pages/tab1" />
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/pages/tab1">
          <IonIcon aria-hidden="true" icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/pages/tab2">
          <IonIcon aria-hidden="true" icon={ellipse} />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/pages/tab3">
          <IonIcon aria-hidden="true" icon={square} />
          <IonLabel>Tab 3</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </>
);

export default MainTabs;
