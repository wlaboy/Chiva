import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonInput,
  IonItem,
} from "@ionic/react";
import { useState } from "react";

interface TeamProps {
  name: string;
  score: number;
}

function Team({ name, score }: TeamProps) {
  const [text, setText] = useState<string>();
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>
          Score: <span>{score}</span>
        </p>
        <IonItem>
          <IonInput
            value={text}
            placeholder="Enter score"
            onIonChange={(e) => setText(e.detail.value!)}
          />
        </IonItem>
        <IonButton expand="full">Enter</IonButton>
      </IonCardContent>
    </IonCard>
  );
}

export default Team;
