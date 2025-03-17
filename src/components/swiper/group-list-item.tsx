"use client";

import { cn } from "@/lib/utils";
import { JSX } from "react";

type Props = {
  icon: JSX.Element;
  label: string;
  selected?: string;
};

function GroupListItem({ icon, label, selected }: Props) {
  return (
    <div
      className={cn(
        "flex gap-3 items-center py-2 px-4 rounded-2xl bg-themeGray border-2 cursor-pointer",
        {
          "border-themeTextGray": label === selected,
          "border-themeGray": label !== selected,
        }
      )}
    >
      {icon}
      {label}
    </div>
  );
}

export default GroupListItem;
