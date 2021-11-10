import { useState } from "react";
import {
  InfoTitle,
  MediumHeading,
  TopText,
  Text,
} from "../../styles/GlobalComponents";

import data from "../../data/data.json";
import {
  TechContainer,
  MainContentWrapper,
  ButtonContainer,
  Button,
  TextContainer,
} from "./styles";

const TechnologyScreen = () => {
  const [selectedTech, setselectedTech] = useState(0);

  const { name, images, description } = data.technology[selectedTech];

  const windowWidth = window.innerWidth;

  return (
    <TechContainer>
      <TopText color="#FFF">
        <span>03</span>
        SPACE LAUNCH 101
      </TopText>

      <MainContentWrapper>
        <img
          src={windowWidth < 1000 ? images.landscape : images.portrait}
          alt=""
        />
        <TextContainer>
          <ButtonContainer>
            {data.technology.map((_, index) => (
              <Button
                className={index === +selectedTech ? "active" : null}
                key={index}
                onClick={() => setselectedTech(index)}
              >
                {index + 1}
              </Button>
            ))}
          </ButtonContainer>

          <div>
            <InfoTitle>THE TERMINOLOGY…</InfoTitle>
            <MediumHeading>{name}</MediumHeading>
            <Text>{description}</Text>
          </div>
        </TextContainer>
      </MainContentWrapper>
    </TechContainer>
  );
};

export default TechnologyScreen;
