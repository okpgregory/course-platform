"use client";

import { useCourseChatOnline } from "@/hooks/courses";
import { useSidebar } from "@/hooks/navigation";
import { cn } from "@/lib/utils";
import DropDown from "../global/drop-down";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronsUpDown, Group, Plus } from "lucide-react";
import { isPending } from "@reduxjs/toolkit";
import SidebarMenu from "./menu";

type Props = {
  courseId: string;
  userId: string;
  mobile?: boolean;
};

function Sidebar({ courseId, userId, mobile }: Props) {
  const {
    courseData,
    chapters,
    addNewChapter,
    isNewChapterPending,
    NewChapterVariables,
    coursesData,
  } = useSidebar(courseId);

  useCourseChatOnline(userId);

  return (
    <div
      className={cn("h-screen flex-col gap-y-10 sm:px-5", {
        "hidden bg-black md:w-[300px] fixed md:flex": mobile,
        "w-full flex": !mobile,
      })}
    >
      {/* courses dropdown menu */}
      {coursesData.courses && coursesData.courses.length > 0 && (
        <DropDown
          title="Courses"
          trigger={
            <div className="w-full flex items-center justify-between text-themeTextGray md:border-[1px] border-themeGray p-3 rounded-xl">
              <div>
                <img
                  src={`https://ucarecdn.com/${
                    courseData.course?.icon as string
                  }`}
                  alt="icon"
                  className="w-10 rounded-lg"
                />
                <p className="text-sm">{courseData.course?.name}</p>
              </div>
              <span>
                <ChevronsUpDown className="size-4" />
              </span>
            </div>
          }
        >
          {coursesData &&
            coursesData.courses.length > 0 &&
            coursesData.courses.map(
              (item) =>
                item.id !== courseId && (
                  <Link
                    key={item.id}
                    href={`/courses/${item.id}/chapter/${chapters?.[0].id}`}
                  >
                    <Button
                      variant="ghost"
                      className="flex gap-2 w-full justify-start hover:bg-themeGray items-center"
                    >
                      <Group />
                      {item.name}
                    </Button>
                  </Link>
                )
            )}
        </DropDown>
      )}

      {/* chapters */}
      <div className="flex flex-col gap-y-5">
        <div className="flex justify-between items-center">
          <p className="text-xs text-[#F7ECE9]">CHAPTERS</p>
          {userId === courseData.course?.authorId && (
            <Plus
              size={16}
              className={cn("text-themeTextGray cursor-pointer", {
                "opacity-70": isPending,
              })}
              {...(isNewChapterPending && {
                onClick: () =>
                  addNewChapter({
                    id: "1",
                    icon: "general",
                    name: "unnamed",
                    createdAt: new Date(),
                    courseId,
                  }),
              })}
            />
          )}
        </div>
        <SidebarMenu
          chapters={chapters}
          optimisticChapter={NewChapterVariables}
          loading={isNewChapterPending}
          courseId={courseId}
          courseAuthorId={courseData.course?.authorId}
          userId={userId}
        />
      </div>
    </div>
  );
}

export default Sidebar;
