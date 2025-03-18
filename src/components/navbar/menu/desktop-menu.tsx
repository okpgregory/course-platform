import { Card, CardContent } from "@/components/ui/card";
import { CODE_ED_TECH_CONSTANTS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  section: string;
  onSetSection: (section: string) => void;
};

function DesktopMenu({ section, onSetSection }: Props) {
  return (
    <Card
      className="bg-background border-background bg-clip-padding backdrop-blur-2xl p-1
   lg:flex hidden rounded-xl"
    >
      <CardContent className="p-0 flex gap-2">
        {CODE_ED_TECH_CONSTANTS.explorePageMenu.map((item) => (
          <Link
            href={item.path}
            {...(item.section && { onClick: () => onSetSection(item.path) })}
            className={cn("rounded-xl flex gap-2 px-4 items-center", {
              "bg-[#09090B] border-[#27272A]": item.path === section,
            })}
            key={item.id}
          >
            {section === item.path && item.Icon}
            {item.label}
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}

export default DesktopMenu;
