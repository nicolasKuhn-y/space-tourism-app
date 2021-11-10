import styled from "styled-components";

export const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  right: -100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem 1rem 1.5rem;
  height: 100vh;
  min-width: 70%;
  backdrop-filter: blur(5rem);
  transition: right 700ms;
  z-index: 1;

  ${({ showSidebar }) => showSidebar && "right: 0;"};

  img {
    margin-left: auto;
    width: 25px;
    margin-top: 0.5rem;
    margin-right: 1.5rem;
  }

  a {
    display: block;
    padding: 0.5rem 0;
  }
`;

export const SidebarList = styled.ul`
  color: ${(props) => props.theme.colors.white};
  list-style: none;
  font-family: "Barlow Condensed", sans-serif;
  text-transform: uppercase;
  margin-top: 1.5rem;

  span {
    font-weight: 700;
    margin-right: 1rem;
  }

  li {
    padding: 1rem 0;
    letter-spacing: 0.2rem;
  }
`;
