import Link from "next/link";
import CourseCard from "../card/CourseCard";

export const LearnWithUs = ({ courses }) => {
  console.log(courses, "LEARN");
  return (
    <div className="bg-blue w-auto h-auto flex flex-col justify-center items-center ">

      <div className="flex lg:flex-row items-center flex-col ">
        {courses &&
          courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
      </div>
      <div className="h-32">BENEFICIOS</div>
    </div>
  );
};
