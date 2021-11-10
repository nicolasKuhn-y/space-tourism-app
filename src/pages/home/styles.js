import styled from "styled-components";
import { Text } from "../../styles/GlobalComponents";
import { slideLeft, slideUp } from "../../styles/keyframes";

export const HomeHero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 2rem auto;

  > a {
    margin: 5rem 0 1rem 0;
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    margin: 6rem auto 0;
  }

  @media (min-width: 1024px) {
    margin: 8rem 0 1rem 0;
    flex-direction: row;
    justify-content: space-around;
    text-align: start;

    > a {
      align-self: flex-end;
      margin: 0;
    }
  }
`;

export const TextContainer = styled.div`
  margin: 0 0.8rem;
  max-width: 34.5rem;
  animation: ${slideLeft} 350ms;

  h1 {
    margin: 2rem 0;
  }

  p {
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.25rem;
    }
  }

  @media (min-width: 1000px) {
    max-width: 28rem;
    margin: 0;

    ${Text} {
      text-align: justify;
    }
  }
`;

export const WhiteCircle = styled.div`
  cursor: pointer;
  padding: 4.5rem 3.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  transition: box-shadow 300ms ease-in-out;
  animation: ${slideUp} 350ms;

  :hover {
    box-shadow: 0 0 0 2.5rem rgba(151, 151, 151, 0.4);
  }

  span {
    font-family: "Barlow Condensed", sans-serif;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.black};
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  @media (min-width: 1000px) {
    padding: 6.5rem 4rem;
    margin-bottom: 0;
    align-self: end;

    span {
      font-size: 2rem;
      letter-spacing: 2px;
    }
  }
`;
