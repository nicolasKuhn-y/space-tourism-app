import { Link } from "react-router-dom";
import { PageHeading, Text, TopText } from "../../styles/GlobalComponents";
import { HomeHero, TextContainer, WhiteCircle } from "./styles";

const HomeScreen = () => {
  return (
    <>
      <HomeHero>
        <TextContainer>
          <TopText>So, you want to travel to</TopText>

          <PageHeading>Space</PageHeading>

          <Text>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Text>
        </TextContainer>

        <Link to="/destination">
          <WhiteCircle>
            <span>Explore</span>
          </WhiteCircle>
        </Link>
      </HomeHero>
    </>
  );
};

export default HomeScreen;
