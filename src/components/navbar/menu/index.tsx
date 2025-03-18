"use client";

import { useNavigation } from "@/hooks/navigation";
import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";

type Props = {
  orientation?: "mobile" | "desktop";
};

function Menu({ orientation }: Props) {
  const { section, onSetSection } = useNavigation();
  switch (orientation) {
    case "mobile":
      return <MobileMenu section={section} onSection={onSetSection} />;
    case "desktop":
      return <DesktopMenu section={section} onSetSection={onSetSection} />;
    default:
      return <></>;
  }
}

export default Menu;
