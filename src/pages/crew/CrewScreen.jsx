import { useState } from "react";
import {
  MediumHeading,
  GreySubtitleHeading,
  TopText,
  Text,
} from "../../styles/GlobalComponents";

import {
  CrewContainer,
  CrewImageContainer,
  DotContainer,
  CrewInfoContainer,
} from "./styles";

import data from "../../data/data.json";

const CrewScreen = () => {
  const [crewMenber, setCrewMenber] = useState(0);

  const { name, images, role, bio } = data.crew[crewMenber];

  return (
    <CrewContainer>
      <TopText>
        <span>02</span>
        Meet your crew
      </TopText>

      <CrewInfoContainer>
        <DotContainer>
          {data.crew.map((_, index) => (
            <div
              className={index === +crewMenber ? "active" : null}
              key={index}
              onClick={() => setCrewMenber(index)}
            ></div>
          ))}
        </DotContainer>

        <GreySubtitleHeading>{role}</GreySubtitleHeading>

        <MediumHeading>{name}</MediumHeading>

        <Text>{bio}</Text>
      </CrewInfoContainer>

      <CrewImageContainer>
        <img src={images.webp} alt="crew member" />
        <hr />
      </CrewImageContainer>
    </CrewContainer>
  );
};

export default CrewScreen;
