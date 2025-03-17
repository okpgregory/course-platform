import { SwiperProps, SwiperSlide } from "swiper/react";
import Slider from "./slider";
import Link from "next/link";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import GroupListItem from "./group-list-item";
import "swiper/css/bundle";

type Props = {
  overlay?: boolean;
  label?: string;
  register?: any; //UseFormRegister<any>
  selected?: string;
  route?: boolean;
} & SwiperProps;

function GroupListSlider({
  overlay,
  label,
  register,
  selected,
  route,
  ...rest
}: Props) {
  return (
    <Slider
      slidesPerView={"auto"}
      spaceBetween={10}
      loop
      freeMode
      label={label}
      overlay={overlay}
      {...rest}
    >
      {[{ id: "", path: "", label: "", icon: <span /> }].map((item, idx) => (
        <SwiperSlide key={item.id} className="content-width-slide">
          {!register ? (
            route ? (
              <Link href={`/explore/${item.path}`}>
                <GroupListItem {...item} selected={selected} />
              </Link>
            ) : (
              <GroupListItem {...item} />
            )
          ) : (
            idx > 0 && (
              <Label htmlFor={`item-${item.id}`}>
                <span>
                  <Input
                    id={`item-${item.id}`}
                    type="radio"
                    className="hidden"
                    value={item.path}
                    {...register("category")}
                  />
                  <GroupListItem {...item} selected={selected} />
                </span>
              </Label>
            )
          )}
        </SwiperSlide>
      ))}
    </Slider>
  );
}

export default GroupListSlider;
