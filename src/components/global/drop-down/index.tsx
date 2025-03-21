import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import React, { JSX, ReactNode, RefObject } from "react";

type Props = {
  title: string;
  trigger: JSX.Element;
  children: ReactNode;
  ref?: RefObject<HTMLButtonElement>;
};

function DropDown({ title, trigger, children, ref }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild ref={ref}>
        {trigger}
      </PopoverTrigger>
      <PopoverContent className="rounded-2xl w-56 items-start bg-themeBlack border-background bg-clip-padding backdrop-blur-4xl p-4">
        <h4 className="text-sm pl-3">{title}</h4>
        <Separator className="bg-themeGray my-3" />
        {children}
      </PopoverContent>
    </Popover>
  );
}

export default DropDown;
