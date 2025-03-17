import { QueryClient } from "@tanstack/react-query";

type Props = {
  params: {
    courseId: string;
    chapterId: string;
  };
};

async function CourseChapterPage({ params }: Props) {
  const client = new QueryClient();

  await client.prefetchQuery({
    queryKey: ["chapter-info"],
    // queryFn:() => onGetChapterInfo(params.chapterId)
  });

  //   await client.prefetchQuery({
  //     queryKey: ["about-course-info"],
  //     // queryFn: () => onGetCou
  //   })

  return <div>CourseChapterPage</div>;
}

export default CourseChapterPage;
