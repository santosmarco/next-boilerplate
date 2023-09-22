import type { ReactComponent } from "@/types";
import { Nav } from "./Nav";
import {
  ResponsiveSidebar,
  type ResponsiveSidebarProps,
} from "./ResponsiveSidebar";
import { SidebarLogo } from "./SidebarLogo";

export type SidebarProps = ResponsiveSidebarProps;

export const Sidebar: ReactComponent<SidebarProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <>
      <ResponsiveSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <SidebarLogo />
          </div>

          <Nav />
        </div>
      </div>
    </>
  );
};
