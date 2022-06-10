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
        <IonCardTitle>{name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>
          Score: <span>{score}</span>
        </p>
        <IonItem>
          <IonInput
            type="number"
            value={text}
            placeholder="Enter score"
            onIonChange={(e) => setText(e.detail.value!)}
          />
        </IonItem>
        <IonButton onClick={handleButtonClick} expand="full">
          Enter
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
}

export default Team;
