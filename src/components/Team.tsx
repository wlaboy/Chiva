import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonInput,
  IonItem,
} from "@ionic/react";

interface TeamProps {
  name: string;
  score: number;
}

function Team({ name, score }: TeamProps) {
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
          <IonInput placeholder="Enter score" />
        </IonItem>
        <button>Enter</button>
      </IonCardContent>
    </IonCard>
  );
}

export default Team;
