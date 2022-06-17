import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import { useContext, useState } from "react";
import { SettingsContextType } from "../@types/settings";
import { SettingsContext } from "../context/SettingsContext";

function Settings() {
  const [text, setText] = useState("");
  const { usePrizes, updateTeamOneName, updateTeamTwoName, updateUsePrizes } =
    useContext(SettingsContext) as SettingsContextType;

  const handleTeamTwoUpdate = () => {
    updateTeamTwoName(text);
    setText("");
  };

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
        <IonList>
          <IonItemDivider>Enter Team #1 Name</IonItemDivider>
          <IonItem>
            <IonLabel></IonLabel>
            <IonInput onIonChange={(e) => setText(e.detail.value!)}></IonInput>
            <IonButton onClick={() => updateTeamOneName(text)}>
              Update Name
            </IonButton>
          </IonItem>
        </IonList>
        <div style={{ padding: "2rem" }}>
          <label htmlFor="team-two-name">Enter Team #2 Name</label>
          <input
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
            id="team-two-name"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <IonButton onClick={handleTeamTwoUpdate}>Update Name</IonButton>
        </div>
        <div style={{ padding: "2rem" }}>
          <IonItemDivider>Use prizes when scoring</IonItemDivider>
          <IonItem>
            <IonToggle onIonChange={updateUsePrizes} checked={usePrizes} />
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Settings;
