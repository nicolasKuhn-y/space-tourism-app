import styled from "styled-components";
import {
  GreySubtitleHeading,
  MediumHeading,
  Text,
  TopText,
} from "../../styles/GlobalComponents";

import { slideRight, slideUp } from "../../styles/keyframes";

export const CrewContainer = styled.section`
  display: grid;
  text-align: center;
  margin: 1rem;

  img {
    width: 12.5rem;
    vertical-align: bottom;
    animation: ${slideRight} 350ms;
  }

  ${TopText} {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 1.5rem;
  }

  hr {
    margin-bottom: 1rem;
    border: 0.5px solid #828282;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;

    ${TopText} {
      text-align: start;
      margin-bottom: 3rem;
    }

    img {
      width: 28.75rem;
      animation: ${slideUp} 350ms;
    }

    hr {
      display: none;
    }
  }

  @media (min-width: 1000px) {
    grid-template-columns: 1fr;
    margin: 5rem 4rem 0;

    img {
      width: 35.625rem;
      max-height: 37.5rem;
    }

    ${TopText} {
      grid-column-start: 1;
      grid-row-start: 1;
      justify-self: center;
      margin-left: -13rem;
    }
  }
`;

export const CrewImageContainer = styled.div`
  grid-row-start: 2;

  @media (min-width: 768px) and (max-width: 1000px) {
    grid-row-start: 4;
  }

  @media (min-width: 1000px) {
    grid-column-start: 4;
    grid-row-start: 1;
  }
`;

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1rem;
  margin: 1rem 0;

  div {
    cursor: pointer;
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 50%;
    background-color: #828282;
    transition: background-color 300ms linear;

    :hover {
      background-color: ${({ theme }) => theme.colors.grey};
    }

    &.active {
      background-color: ${({ theme }) => theme.colors.white};
    }

    @media (min-width: 1024px) {
      width: 1rem;
      height: 1rem;
    }
  }

  @media (min-width: 1000px) {
    justify-content: flex-start;
    column-gap: 2rem;
  }
`;

export const CrewInfoContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 23.75rem;

    ${DotContainer} {
      order: 4;
    }
  }

  @media (min-width: 1000px) {
    grid-row-start: 1;
    grid-column-start: 1;
    align-self: center;
    text-align: start;
    max-width: 500px;
    row-gap: 1rem;

    ${Text} {
      max-width: 28.125rem;
    }
  }

  ${GreySubtitleHeading}, ${MediumHeading} {
    margin-bottom: 0.5rem;
  }
`;
