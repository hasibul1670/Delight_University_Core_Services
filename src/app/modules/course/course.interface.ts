export type ICoursesFilterRequest = {
  searchTerm?: string;
};

export type ICoursesCreateData = {
  title: string;
  credits: number;
  code: string;
  preRequisiteCourses: {
    courseId: string;
  }[];
};
