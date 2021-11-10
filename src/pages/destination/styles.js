import styled from "styled-components";
import { InfoTitle, Text, TopText } from "../../styles/GlobalComponents";
import { slideLeft, slideRight, slideUp } from "../../styles/keyframes";

export const DestinationContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 2rem 1rem;
  row-gap: 1rem;

  .last-div {
    animation: ${slideRight} 350ms;
  }

  ${Text} {
    margin: 1rem auto;
    max-width: 30rem;
  }

  img {
    max-width: 12.5rem;
    margin-top: 2rem;
  }

  hr {
    margin-bottom: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.grey};
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    column-gap: 10rem;
    margin-bottom: 0;

    > div:nth-child(2) {
      text-align: start;
    }
  }
`;

export const TopContainer = styled.div`
  animation: ${slideLeft} 350ms;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;

    img {
      max-width: 18.75rem;
    }

    ${TopText} {
      text-align: start;
      margin-left: 1rem;
    }
  }

  @media (min-width: 1024px) {
    width: 50%;
    animation: ${slideUp} 350ms;

    img {
      max-width: 450px;
      text-align: center;
      margin-top: 3rem;
    }

    ${TopText} {
      text-align: start;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-top: 1rem 0;

  ${InfoTitle} {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;
    column-gap: 5rem;
  }
`;
