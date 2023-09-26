import { cn } from "@/lib/utils";
import type { ReactComponent } from "@/types";
import { Slot } from "@radix-ui/react-slot";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavItemProps = {
  title: React.ReactNode;
  href: Route;
  icon?: React.ReactNode;
};

export const NavItem: ReactComponent<NavItemProps> = ({
  title,
  href,
  icon,
}) => {
  const pathname = usePathname();

  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
          isActive
            ? "bg-gray-800 text-white"
            : "text-gray-400 hover:bg-gray-800 hover:text-white",
        )}
      >
        <Slot className="h-6 w-6 shrink-0">{icon}</Slot>
        {title}
      </Link>
    </li>
  );
};
