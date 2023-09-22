import type { Route } from "next";
import {
  HiOutlineCalendar,
  HiOutlineChartPie,
  HiOutlineDocumentDuplicate,
  HiOutlineFolder,
  HiOutlineHome,
  HiOutlineUsers,
} from "react-icons/hi2";

type NavItem = {
  title: string;
  href: Route;
  icon?: React.ComponentType;
};

export const navigation = [
  { title: "Dashboard", href: "/", icon: HiOutlineHome },
  { title: "Team", href: "#", icon: HiOutlineUsers },
  { title: "Projects", href: "#", icon: HiOutlineFolder },
  { title: "Calendar", href: "#", icon: HiOutlineCalendar },
  { title: "Documents", href: "#", icon: HiOutlineDocumentDuplicate },
  { title: "Reports", href: "#", icon: HiOutlineChartPie },
] as const satisfies NavItem[];

export const teams = [
  { title: "Heroicons", href: "#" },
  { title: "Tailwind Labs", href: "#" },
  { title: "Workcation", href: "#" },
] as const satisfies NavItem[];

export const userNavigation = [
  { title: "Your profile", href: "/profile" },
  { title: "Sign out", href: "#" },
] as const satisfies NavItem[];
