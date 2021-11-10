import data from "../../data/data.json";
import {
  TopText,
  PlanetHeading,
  Text,
  InfoTitle,
  InfoText,
} from "../../styles/GlobalComponents";

import { DestinationContainer, InfoContainer, TopContainer } from "./styles";

import { useState } from "react";
import { PlanetSelector } from "../../components/PlanetSelector";

const DestinationScreen = () => {
  const [planetToShow, setPlanetToShow] = useState(0);

  const { name, description, distance, travel, images } =
    data.destinations[planetToShow];

  return (
    <DestinationContainer>
      <TopContainer>
        <TopText>
          <span>01</span>
          Pick your destination
        </TopText>

        <img src={images.webp} alt={name} />
      </TopContainer>

      <div className="last-div">
        <PlanetSelector
          planetIndex={+planetToShow}
          selectPlanet={setPlanetToShow}
          planets={data.destinations}
        />

        <PlanetHeading>{name}</PlanetHeading>
        <Text>{description}</Text>

        <hr />

        <InfoContainer>
          <div>
            <InfoTitle>avg. distance</InfoTitle>
            <InfoText>{distance}</InfoText>
          </div>
          <div>
            <InfoTitle>est. travel time</InfoTitle>
            <InfoText>{travel}</InfoText>
          </div>
        </InfoContainer>
      </div>
    </DestinationContainer>
  );
};

export default DestinationScreen;
