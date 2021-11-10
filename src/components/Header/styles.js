import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    & {
      padding: 0;
    }

    img:first-of-type {
      padding: 1rem 1.5rem;
    }

    img:last-of-type {
      display: none;
    }
  }

  @media (min-width: 1000px) {
    & {
      margin-top: 2rem;
    }
  }
`;
