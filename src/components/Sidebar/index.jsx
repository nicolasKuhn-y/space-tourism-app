import { useEffect } from "react";
import { NavListItems } from "../NavListItems";
import { StyledSidebar, SidebarList } from "./styles";

export const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  useEffect(() => {
    const closeSidebarOnResize = window.addEventListener("resize", () =>
      setIsSidebarOpen(false)
    );

    return () => window.removeEventListener("resize", closeSidebarOnResize);
  });

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <StyledSidebar showSidebar={isSidebarOpen}>
      <img
        src="/assets/shared/icon-close.svg"
        alt="close sidebar button"
        onClick={closeSidebar}
      />
      <SidebarList>
        <NavListItems onClickAction={closeSidebar} />
      </SidebarList>
    </StyledSidebar>
  );
};
