import type { ReactComponent } from "@/types";
import _ from "lodash";
import { NavItem, type NavItemProps } from "./NavItem";

export type NavGroupProps = {
  items: NavItemProps[];
  title?: React.ReactNode;
};

export const NavGroup: ReactComponent<NavGroupProps> = ({ items, title }) => {
  return (
    <li>
      {title && (
        <div className="text-xs font-semibold leading-6 text-gray-400">
          {title}
        </div>
      )}

      <ul role="list" className="-mx-2 mt-2 space-y-1">
        {items.map((item) => (
          <NavItem
            key={_.uniqueId()}
            title={item.title}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </ul>
    </li>
  );
};
