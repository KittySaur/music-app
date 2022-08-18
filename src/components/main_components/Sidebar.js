import { StyledSidebar } from "../../styles/Sidebar.styled";
import Personal from "./sidebar_components/Personal";
import SidebarBlock from "./sidebar_components/SidebarBlock";

function Sidebar() {
  return (
    <StyledSidebar>
      <Personal />
      <SidebarBlock />
    </StyledSidebar>
  );
}

export default Sidebar;
