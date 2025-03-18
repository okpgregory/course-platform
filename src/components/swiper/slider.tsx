"use client";

import { ReactNode } from "react";
import { Swiper, SwiperProps } from "swiper/react";
import { Label } from "../ui/label";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";

type Props = {
  children: ReactNode;
  overlay?: boolean;
  label?: string;
} & SwiperProps;

function Slider({ children, overlay, label, ...rest }: Props) {
  return (
    <div className="w-full max-w-full overflow-x-hidden mt-5 relative">
      {overlay && (
        <>
          <div className="absolute w-[40px] slider-overlay left-0 h-full z-50" />
          <div className="absolute w-[40px] slider-overlay right-0 h-full z-50" />
        </>
      )}
      {label && <Label className="pl-7 mb-3 text-secondary">{label}</Label>}
      <Swiper modules={[Navigation, Pagination, Autoplay, FreeMode]} {...rest}>
        {children}''
      </Swiper>
    </div>
  );
}

export default Slider;
