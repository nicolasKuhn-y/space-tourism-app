import { NavListItems } from "../NavListItems";
import { StyledNavBar, StyledNavList } from "./styles";

export const NavigationBar = () => {
  return (
    <StyledNavBar>
      <StyledNavList>
        <NavListItems />
      </StyledNavList>
    </StyledNavBar>
  );
};
