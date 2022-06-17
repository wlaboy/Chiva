import { createContext, ReactNode, useState } from "react";
import { SettingsContextType } from "../@types/settings";

export const SettingsContext = createContext<SettingsContextType | null>(null);

type Props = {
  children: ReactNode;
};

function SettingsProvider({ children }: Props) {
  const [teamOneName, setTeamOneName] = useState("Team #1");
  const [teamTwoName, setTeamTwoName] = useState("Team #2");
  const [usePrizes, setUsePrizes] = useState(true);

  const updateTeamOneName = (newName: string) => {
    setTeamOneName(newName);
  };

  const updateTeamTwoName = (newName: string) => {
    setTeamTwoName(newName);
  };

  const updateUsePrizes = () => {
    setUsePrizes(!usePrizes);
  };

  return (
    <SettingsContext.Provider
      value={{
        teamOneName,
        teamTwoName,
        usePrizes,
        updateTeamOneName,
        updateTeamTwoName,
        updateUsePrizes,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
