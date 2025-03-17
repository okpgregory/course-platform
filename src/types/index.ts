export interface ICourseData {
  status: number;
  course:
    | {
        id: string;
        name: string;
        category: string;
        thumbnail: string | null;
        gallery: string[];
        jsonDescription: string | null;
        htmlDescription: string | null;
        privacy: boolean;
        active: boolean;
        creactedAt: Date;
        authorId: string;
        icon: string;
      }
    | undefined;
}

export interface IChapter {
  id: string;
  name: string;
  icon: string;
  createdAt: Date;
  courseId: string;
}

export interface ICoursesData {
  status: number;
  courses:
    | {
        icon: string | null;
        id: string;
        name: string;
      }[]
    | [];
}
