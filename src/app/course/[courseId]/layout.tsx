import Sidebar from "@/components/sidebar";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: {
    courseId: string;
  };
};

async function CourseLayout({ children, params }: Props) {
  const query = new QueryClient();
  const user = { id: "1" };
  if (!user.id) redirect("/sign-in");

  //   course info
  await query.prefetchQuery({
    queryKey: ["course-info"],
    // queryFn: () => onGetCourseInfo(params.courseId)
  });

  //   user courses
  await query.prefetchQuery({
    queryKey: ["user-courses"],
    // queryFn: () => onGetUserCourses(user.id as string),
  });

  //   course chapters
  await query.prefetchQuery({
    queryKey: ["course-chapters"],
    // queryFn: () => onGetCoursesChapters(params.courseId),
  });

  //   students chat
  await query.prefetchQuery({
    queryKey: ["student-chats"],
    // queryFn: () => onGetAllCourseStudents(user.id as string),
  });

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="flex h-screen md:pt-5">
        <Sidebar courseId={params.courseId} userId={user.id} />
      </div>
    </HydrationBoundary>
  );
}

export default CourseLayout;
