import { CODE_ED_TECH_CONSTANTS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  section: string;
  onSection: (section: string) => void;
};

function MobileMenu({ section, onSection }: Props) {
  return (
    <div
      className="flex flex-col mt-10
  "
    >
      {CODE_ED_TECH_CONSTANTS.explorePageMenu.map((item) => (
        <Link
          href={item.path}
          {...(item.section && { onClick: () => onSection(item.path) })}
          className={cn("rounded-xl flex gap-2 py-2 px-4 items-center", {
            "bg-background border-[#27272A]": item.path === section,
          })}
          key={item.id}
        >
          {item.Icon}
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default MobileMenu;
