import React, { useEffect, useState } from "react";
import { useSelectedCitizenContext } from "../CitizenDashBoard.context";
import { CitizenDetail } from "../CitizenDashBoard.types";
import { useTransformCitizenDetail } from "./citizenCard.hook/useTransformCitizenDetail";
import { mockCitizenDetailInfo } from "./CitizenCard.mock";
import CitizenCardView from "./CitizenCardView";

// Unused import since we do not call actual API and use mock data instead, but i leave them here for demo purposes
import { RestClient } from "../../../utils/RestClient";
import { GET_CITIZEN_DETAIL_INFO } from "../CitizenDashBoard.constant";

/**
* Container component of citizen detail card, used for handling all logic and pass processed resources to the view component
*/
const CitizenCardContainer: React.FC = () => {
  const [citizenDetail, setCitizenDetail] = useState<CitizenDetail>({} as CitizenDetail)
  const currentCitizenContext = useSelectedCitizenContext();

  /**
  * Method used for transforming the detail data
  */
  const transformDetailInfo = useTransformCitizenDetail()

  useEffect(() => {
    const getCitizenDetailInfo = async (selectedCitizenId: string): Promise<void> => {
      // NOTE: send request to BE here, yet since this is a demo project, mock data would be used here
      // const result = await RestClient.get(`${GET_CITIZEN_DETAIL_INFO}/:${selectedCitizenId}`)
      const result = mockCitizenDetailInfo[selectedCitizenId];
      result && transformDetailInfo(result)
      setCitizenDetail(result)
    };
    getCitizenDetailInfo(currentCitizenContext.selectedCitizenId);
  }, [currentCitizenContext.selectedCitizenId, transformDetailInfo]);

  return <CitizenCardView citizenDetail={citizenDetail} />;
};

export default React.memo(CitizenCardContainer);
