import { StyledNavLink } from "./styles";

export const NavItem = ({ path, number, description, onClickAction }) => (
  <li>
    <StyledNavLink to={path} onClick={onClickAction}>
      <span>{number}</span>
      {description}
    </StyledNavLink>
  </li>
);
