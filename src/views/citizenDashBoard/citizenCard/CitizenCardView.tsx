import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useResolvedMessages } from "../../../shared/hooks";
import { CitizenDetail } from "../CitizenDashBoard.types";
import { CitizenCardMessage } from "./CitizenCard.messages";

const CitizenCardWarp = styled("div")(() => ({
  padding: '20px 300px',
}));

export interface CitizenCardViewProps {
  /**
   * Detail of the current selected citizen
   */
  citizenDetail: CitizenDetail;
}

/**
* View component of citizen detail information card
* Normally i would not use style directly inside components yet using makeStyle and className instead, yet this is a small demo, and the react 18
* is not compatible with mui makeStyles, so i would use sx style this time
*/
const CitizenCardView: React.FC<CitizenCardViewProps> = (props) => {
  const { citizenDetail } = props;
  const { profileId, name, currentlyWorking, country, jobType, city, age, dummyProperty } = citizenDetail || {};

  const resolvedMessages = useResolvedMessages(CitizenCardMessage);

  return (
    <CitizenCardWarp>
      <h3>{resolvedMessages.MESSAGE_CITIZEN_INFORMATION}</h3>
      <br />
      {citizenDetail && (
        <Card variant="outlined">
          <React.Fragment>
            <CardContent>
              <Typography
                variant="h5"
                color="text.secondary"
                gutterBottom
              >
                {resolvedMessages.MESSAGE_PROFILEID + profileId}
              </Typography>
              <br />
              <Typography component="div">
                {resolvedMessages.MESSAGE_NAME + name}
              </Typography>
              <Typography component="div">
                {resolvedMessages.MESSAGE_COUNTRY + country}
              </Typography>
              <br />
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {resolvedMessages.MESSAGE_CURRENT_WORKING + currentlyWorking}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {resolvedMessages.MESSAGE_JOB + jobType}
              </Typography>
              <br />
              <Typography variant="body2">
                {resolvedMessages.MESSAGE_CITY + city}
              </Typography>
              <Typography variant="body2">
                {resolvedMessages.MESSAGE_AGE + age}
              </Typography>
              {
                dummyProperty && (
                  <Typography variant="body2">
                    {resolvedMessages.MESSAGE_ADDITIONAL + dummyProperty}
                  </Typography>
                )
              }
            </CardContent>
          </React.Fragment>
        </Card>
      )}
    </CitizenCardWarp>
  );
};

export default React.memo(CitizenCardView);
