export type SettingsContextType = {
  teamOneName: string;
  teamTwoName: string;
  usePrizes: boolean;
  updateTeamOneName: (newTeamName: string) => void;
  updateTeamTwoName: (newTeamName: string) => void;
  updateUsePrizes: () => void;
};
