import { navigation, teams } from "@/navigation";
import type { ReactComponent } from "@/types";
import Link from "next/link";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { NavGroup } from "./NavGroup";

export const Nav: ReactComponent = () => {
  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <NavGroup
          items={navigation
            .slice()
            .map((item) => ({ ...item, icon: <item.icon /> }))}
        />

        <NavGroup
          title="Your teams"
          items={teams.slice().map((team) => ({
            ...team,
            title: <span className="truncate">{team.title}</span>,
            icon: (
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                {team.title.trim().charAt(0).toUpperCase()}
              </span>
            ),
          }))}
        />

        <li className="mt-auto">
          <Link
            href="/settings"
            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
          >
            <HiOutlineCog6Tooth
              className="h-6 w-6 shrink-0"
              aria-hidden="true"
            />
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};
