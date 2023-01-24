import { useState, createContext } from "react";

export const SelectedTeamContext = createContext();

function SelectedTeamContextProvider(props) {
  const [selectedTeam, setSelectedTeam] = useState("");

  function handleChange(event) {
    setSelectedTeam(event.target.value);
  }

  const value = { selectedTeam, handleChange };

  return (
    <SelectedTeamContext.Provider value={value}>
      {props.children}
    </SelectedTeamContext.Provider>
  );
}

export default SelectedTeamContextProvider;
