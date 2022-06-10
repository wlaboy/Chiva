import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonInput,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
} from "@ionic/react";
import { useState } from "react";

interface TeamProps {
  name: string;
  score: number;
  onScoreUpdate: (newScore: number) => void;
}

function Team({ name, score, onScoreUpdate }: TeamProps) {
  const [text, setText] = useState<string>();

  const handleButtonClick = () => {
    let newScore = parseInt(text!);
    onScoreUpdate(newScore);
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonLabel>{name}</IonLabel>
        <IonCardTitle>
          Score: <span>{score}</span>
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonItemGroup>
          <IonItem>
            <IonInput
              className="ion-padding-vertical"
              type="number"
              inputmode="numeric"
              value={text}
              placeholder="Enter score"
              onIonChange={(e) => setText(e.detail.value!)}
            />
          </IonItem>
          <IonItemDivider></IonItemDivider>
          <IonButton onClick={handleButtonClick} expand="full">
            Enter
          </IonButton>
        </IonItemGroup>
      </IonCardContent>
    </IonCard>
  );
}

export default Team;
