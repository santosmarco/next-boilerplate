import type { ReactComponent } from "@/types";
import { HiOutlineBars3 } from "react-icons/hi2";
import { NotificationsBell } from "./NotificationsBell";
import { SearchBar } from "./SearchBar";
import { UserMenu } from "./UserMenu";

export type HeaderProps = {
  onSidebarOpen: () => void;
};

export const Header: ReactComponent<HeaderProps> = ({ onSidebarOpen }) => {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={onSidebarOpen}
      >
        <span className="sr-only">Open sidebar</span>
        <HiOutlineBars3 className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Separator */}
      <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <SearchBar />

        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <NotificationsBell />

          {/* Separator */}
          <div
            className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
            aria-hidden="true"
          />

          <UserMenu />
        </div>
      </div>
    </div>
  );
};
