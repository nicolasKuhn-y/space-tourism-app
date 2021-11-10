import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  transition: border-bottom linear 300ms;
  border-bottom: 0.2rem solid transparent;

  &.active {
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.white};
  }

  :hover {
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.lightGrey};
  }

  @media (max-width: 768px) {
    border-right: 0.25rem solid transparent;
    border-bottom: none;

    &.active {
      border-right: 0.25rem solid ${({ theme }) => theme.colors.white};
      border-bottom: none;
    }

    :hover {
      border-bottom: none;
    }
  }
`;
