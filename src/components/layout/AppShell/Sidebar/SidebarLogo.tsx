import { COMPANY_NAME } from "@/constants/company";
import type { ReactComponent } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const SidebarLogo: ReactComponent = () => {
  return (
    <Link href="/">
      <Image
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
        alt={COMPANY_NAME}
        className="h-8 w-auto"
        width={32}
        height={32}
      />
    </Link>
  );
};
