import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Scoreboard from "../components/Scoreboard";

function Home() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chiva</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Chiva</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Scoreboard />
      </IonContent>
    </IonPage>
  );
}

export default Home;
