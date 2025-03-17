"use client";

import { IChapter } from "@/types";
import { usePathname } from "next/navigation";

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

  return <div>SidebarMenu</div>;
}

export default SidebarMenu;
