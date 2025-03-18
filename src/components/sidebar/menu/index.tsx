"use client";

import { SIDEBAR_SETTINGS_MENU } from "@/constants/menus";
import { useChapterInfo } from "@/hooks/chapters";
import { IChapter } from "@/types";
import { usePathname } from "next/navigation";
import SettingsMenu from "./settings-menu";

type Props = {
  chapters: IChapter[];
  optimisticChapter: IChapter | undefined;
  loading: boolean;
  courseId: string;
  courseAuthorId: string | undefined;
  userId: string;
};

function SidebarMenu({
  chapters,
  courseAuthorId,
  courseId,
  loading,
  optimisticChapter,
  userId,
}: Props) {
  const pathname = usePathname();
  const currentPage = pathname.split("/").pop();

  const {
    chapter: current,
    onEditChapter,
    chapterRef,
    inputRef,
    deleteVariables,
    edit,
    icon,
    isUpdateChapterPending,
    triggerRef,
    onChapterDelete,
    onSetIcon,
    updateChapterVariables,
  } = useChapterInfo();

  if (pathname.includes("settings"))
    return (
      <SettingsMenu
        sidebarSettingsMenu={SIDEBAR_SETTINGS_MENU}
        courseAuthorId={courseAuthorId}
        courseId={courseId}
        currentPage={currentPage}
        userId={userId}
      />
    );
}

export default SidebarMenu;
