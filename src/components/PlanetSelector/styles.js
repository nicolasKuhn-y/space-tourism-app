import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
  letter-spacing: 2.36px;
  font-size: 14px;
  font-family: "Barlow Condensed", sans-serif;
  color: ${({ theme }) => theme.colors.lightGrey};

  p {
    cursor: pointer;
    border-bottom: 3px solid transparent;
    padding-bottom: 0.3rem;
    transition: border-bottom linear 300ms;

    &.active {
      color: ${({ theme }) => theme.colors.white};
      border-bottom: 3px solid ${({ theme }) => theme.colors.white};
    }

    :hover {
      border-bottom: 3px solid ${({ theme }) => theme.colors.lightGrey};
    }
  }

  @media (min-width: 768px) {
    font-size: 16px;
    column-gap: 2.5rem;
    margin-top: 1rem;
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;
