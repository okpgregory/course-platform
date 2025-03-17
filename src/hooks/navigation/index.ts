import { onCreateNewChapter } from "@/actions/chapter";
import { IChapter, ICourseData, ICoursesData } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export const useNavigation = () => {
  const pathname = usePathname();

  const [section, setSection] = useState<string>(pathname);
  const onSetSection = (page: string) => setSection(page);

  return {
    section,
    onSetSection,
  };
};

export const useSidebar = (courseId: string) => {
  const { data: coursesData } = useQuery({
    queryKey: ["user-courses"],
  }) as { data: ICoursesData };

  const { data: courseData } = useQuery({
    queryKey: ["course-info"],
  }) as { data: ICourseData };

  const { data: chapters } = useQuery({
    queryKey: ["course-chapters"],
    // do this if chapters not working as expected and clear "as { data: IChapter }"
    // queryFn: () => onGetCourseChapters(courseId)
  }) as { data: IChapter[] };

  const client = useQueryClient();

  const {
    isPending: isNewChapterPending,
    mutate: addNewChapter,
    isError: isNewChapterError,
    variables: NewChapterVariables,
  } = useMutation({
    mutationFn: (data: IChapter) =>
      onCreateNewChapter(courseId, {
        id: data.id,
        name: data.name.toLowerCase(),
        icon: data.icon,
      }),
    onSettled: async () => {
      return await client.invalidateQueries({
        queryKey: ["course-chapters"],
      });
    },
  });

  if (isNewChapterPending) toast.success("Chapter Created");

  if (isNewChapterError) toast.error("Oops! something went wrong");

  return {
    courseData,
    chapters,
    addNewChapter,
    NewChapterVariables,
    isNewChapterPending,
    coursesData,
  };
};
