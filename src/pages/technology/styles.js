import styled from "styled-components";
import {
  InfoTitle,
  MediumHeading,
  Text,
  TopText,
} from "../../styles/GlobalComponents";

import { slideLeft, slideRight } from "../../styles/keyframes";

export const TechContainer = styled.section`
  text-align: center;
  margin: 1rem 0;

  img {
    max-width: 100%;
    margin: 2rem 0;
    animation: ${slideRight} 350ms;
  }

  ${InfoTitle}, ${MediumHeading} {
    margin-bottom: 1rem;
  }

  ${Text} {
    line-height: 25px;
  }

  @media (min-width: 768px) {
    ${TopText} {
      margin: 2rem;
      text-align: start;
    }
  }

  @media (min-width: 1000px) {
    ${TopText} {
      margin-left: 9rem;
    }
  }
`;

export const MainContentWrapper = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-between;

    img {
      order: 3;
      margin: 0;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 1000px) {
    flex-direction: column;
    margin-right: 5rem;

    button {
      margin: 1rem 0;
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  width: clamp(2.5rem, 7.85vw, 5rem);
  height: clamp(2.5rem, 7.85vw, 5rem);
  font-size: clamp(1rem, 3.15vw, 2rem);
  font-family: "Bellefair", sans-serif;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  transition: all 350ms ease-out;

  :hover {
    border: 2px solid ${({ theme }) => theme.colors.white};
  }

  &.active {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
  }
`;

export const TextContainer = styled.div`
  margin: 0 1rem;
  animation: ${slideLeft} 350ms ;

  @media (min-width: 768px) and (max-width: 1000px) {
    max-width: 28.625rem;
    margin: 1.5rem auto;
  }

  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
    margin: 0 auto;

    div {
      max-width: 500px;
    }
  }
`;
