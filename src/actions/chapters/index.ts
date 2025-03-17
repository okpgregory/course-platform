export const onCreateNewChapter = async (
  courseId: string,
  data: {
    id: string;
    name: string;
    icon: string;
  }
) => {
  try {
    const chapter = undefined;

    if (chapter) {
      return { status: 200, chapter };
    }
    return { status: 404, message: "Chapter could not be created" };
  } catch (error) {
    return { status: 400, message: "Oops!, something went wrong" };
  }
};

export const onUpdateNewChapter = async (
  courseId: string,
  name: string,
  icon: string
) => {
  try {
    const chapter = undefined;

    if (chapter) {
      return { status: 200, chapter };
    }
    return { status: 404, message: "Chapter could not be created" };
  } catch (error) {
    return { status: 400, message: "Oops!, something went wrong" };
  }
};

export const onDeleteChapter = async (chapterId: string) => {
  try {
    const chapter = undefined;

    if (chapter) {
      return { status: 200, chapter };
    }
    return { status: 404, message: "Chapter could not be created" };
  } catch (error) {
    return { status: 400, message: "Oops!, something went wrong" };
  }
};
