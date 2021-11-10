import { NavItem } from "../NavItem/";

export const NavListItems = ({ onClickAction }) => (
  <>
    <NavItem
      path="/"
      number="00"
      description="Home"
      onClickAction={onClickAction}
    />

    <NavItem
      path="/destination"
      number="01"
      description="Destination"
      onClickAction={onClickAction}
    />

    <NavItem
      path="/crew"
      number="02"
      description="Crew"
      onClickAction={onClickAction}
    />

    <NavItem
      path="/technology"
      number="03"
      description="Technology"
      onClickAction={onClickAction}
    />
  </>
);
