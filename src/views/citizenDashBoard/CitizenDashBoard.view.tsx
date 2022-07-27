import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import React from "react";
import CitizenCardContainer from "./citizenCard/CitizenCard.container";
import { useSelectedCitizenContext } from "./CitizenDashBoard.context";
import { CitizenShortInfo } from "./CitizenDashBoard.types";

// NOTE: Most calculating units should be dynamic and used along side with theme and spacing, yet since this is just
// for demo purposes, i used fixed unit here

const CitizensSelectionWarp = styled("div")(() => ({
  height: "80vh",
  display: "flex",
}));

const CitizensSelectionSection = styled("div")(() => ({
  height: "100%",
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '30px',
  borderLeft: "solid 1px gray",
}));

const CitizenDetailSection = styled("div")(() => ({
  height: "100%",
  flexGrow: 3,
}));

const Item = styled(Paper)(() => ({
  borderTop: 'solid 5px #419ace',
  margin: '10px 10px',
  padding: '20px',
  textAlign: "center",
  color: 'darkblue',
  cursor: 'pointer',
}));

export interface CitizenDashBoardViewProps {
  /**
   * List of short information of citizens
   */
  allCitizenShortInfo: CitizenShortInfo[];
}

/**
* View component of citizen dashboard, used for showing citizen-selection section and detail section
*/

const CitizenDashBoardView: React.FC<CitizenDashBoardViewProps> = (props) => {
  const { allCitizenShortInfo } = props;
  const { setSelectedCitizenId } = useSelectedCitizenContext();

  return (
    <CitizensSelectionWarp>
      <CitizenDetailSection>
        <CitizenCardContainer />
      </CitizenDetailSection>
      <CitizensSelectionSection>
        {allCitizenShortInfo.length > 0 &&
          allCitizenShortInfo.map((citizen) => (
            <Item key={citizen.profileId} onClick={() => setSelectedCitizenId(citizen.profileId)}>{citizen.name}</Item>
          ))}
      </CitizensSelectionSection>
    </CitizensSelectionWarp>
  );
};

export default React.memo(CitizenDashBoardView);
