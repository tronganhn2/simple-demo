import React, { useState } from "react";
import { EMPTY_STRING } from "../../shared/constants/constants";
import { useMounting } from "../../shared/hooks";
import { SelectedCitizenContext } from "./CitizenDashBoard.context";
import { mockAllCitizenInfo } from "./CitizenDashBoard.mock";
import { CitizenShortInfo } from "./CitizenDashBoard.types";
import CitizenDashBoardView from "./CitizenDashBoard.view";

// Unused import since we do not call actual API and use mock data instead, but i leave them here for demo purposes
import { RestClient } from "../../utils/RestClient";
import { GET_ALL_CITIZEN_SHORT_INFO } from "./CitizenDashBoard.constant";

/**
* Container component of citizen dashboard, used for handling all logic and pass processed resources to the view component
*/
const CitizenDashBoardContainer: React.FC = () => {
  const [selectedCitizenId, setSelectedCitizenId] = useState<string>(EMPTY_STRING);
  const [allCitizenShortInfo, setAllCitizenShortInfo] = useState<CitizenShortInfo[]>([]);

  /**
  * Call API to get the data (all citizen short information) from server when first loaded
  */
  useMounting(() => {
    const getAllCitizenShortInfo = async (): Promise<void> => {
      // NOTE: send request to BE here, yet since this is a demo project, mock data would be used here 
      // const result = await RestClient.get(GET_ALL_CITIZEN_SHORT_INFO)
      const result = mockAllCitizenInfo as CitizenShortInfo[];
      setAllCitizenShortInfo(result);
    };
    getAllCitizenShortInfo();
  });

  return (
    <SelectedCitizenContext.Provider
      value={{ selectedCitizenId, setSelectedCitizenId }}
    >
      <CitizenDashBoardView allCitizenShortInfo={allCitizenShortInfo} />
    </SelectedCitizenContext.Provider>
  );
};

export default React.memo(CitizenDashBoardContainer);
