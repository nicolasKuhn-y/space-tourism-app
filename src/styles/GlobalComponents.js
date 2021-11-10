import styled, { css } from "styled-components";

const headingCommonStyles = css`
  text-transform: uppercase;
  font-weight: 400;
`;

const TopText = styled.h5`
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 0.16rem;
  font-size: clamp(1rem, 2.6vw, 1.75rem);
  ${headingCommonStyles}
  color: ${(props) => props.color || props.theme.colors.lightGrey};

  span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.grey};
    margin-right: 0.5rem;
  }

  @media (min-width: 1000px) {
    letter-spacing: 0.2975rem;
  }
`;

const Text = styled.p`
  font-family: "Barlow Condensed", sans-serif;
  font-size: clamp(1rem, 1vw, 1.125rem);
  line-height: 1.8rem;

  color: ${({ theme }) => theme.colors.lightGrey};

  @media (min-width: 768px) {
    line-height: 2rem;
  }
`;

const PageHeading = styled.h1`
  font-size: 5rem;
  ${headingCommonStyles}

  @media (min-width: 768px) {
    font-size: 9.4rem;
  }
`;

const MediumHeading = styled.h2`
  font-size: clamp(1.5rem, 5.2vw, 3.5rem);
  ${headingCommonStyles}
`;

const GreySubtitleHeading = styled.h3`
  font-size: clamp(1rem, 3.25vw, 2rem);
  color: #828282;
  ${headingCommonStyles};
`;

const PlanetHeading = styled.h2`
  font-size: clamp(3.5rem, 10.45vw, 6.25rem);
  ${headingCommonStyles}
`;

const InfoTitle = styled.p`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1475rem;
  color: ${({ theme }) => theme.colors.lightGrey};
`;

const InfoText = styled.span`
  font-family: "Bellefair", serif;
  font-size: 28px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`;

export {
  TopText,
  PageHeading,
  MediumHeading,
  Text,
  PlanetHeading,
  InfoTitle,
  InfoText,
  GreySubtitleHeading,
};
