import styled from "styled-components";
import { SidebarList } from "../Sidebar/styles";

export const StyledNavBar = styled.nav`
  display: none;
  padding: 0 1.5rem;
  max-width: 80%;
  backdrop-filter: blur(5rem) contrast(85%);

  @media (min-width: 768px) {
    & {
      display: block;
    }
  }

  @media (min-width: 1000px) {
    & {
      padding: 0 1.5rem;
      ::before {
        content: "";
        position: absolute;
        top: 50%;
        right: 42rem;
        height: 1.5px;
        width: 12.5rem;
        background-color: #979797;
        backdrop-filter: blur(5rem) contrast(85%);
        opacity: 0.4;
      }
    }
  }

  @media (min-width: 1360px) {
    & {
      padding: 0 4.5rem;
      ::before {
        right: 46rem;
        width: 31.25rem;
      }
    }
  }
`;

export const StyledNavList = styled(SidebarList)`
  display: flex;
  gap: 2rem;
  margin-top: 0;

  li {
    cursor: pointer;
    padding: 0;
  }

  a {
    padding: 2rem 0;
  }

  @media (min-width: 768px) and (max-width: 1000px) {
    span {
      display: none;
    }
  }

  @media (min-width: 1000px) {
    gap: 3rem;

    li:last-of-type {
      margin-right: 3rem;
    }
  }
`;
