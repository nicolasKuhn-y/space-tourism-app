import { useState } from "react";
import { NavigationBar } from "../NavigationBar";
import { Sidebar } from "../Sidebar";
import { StyledHeader } from "./styles";

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <StyledHeader>
        <img src="/assets/shared/logo.svg" alt="company logo" />

        <img
          src="/assets/shared/icon-hamburger.svg"
          alt="hamburger menu"
          onClick={() => setIsSidebarOpen(true)}
        />

        <NavigationBar />
      </StyledHeader>

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
};
