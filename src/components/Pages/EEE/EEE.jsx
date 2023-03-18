import React from "react";
import SemesterButton from "../SemesterButton/SemesterButton";

const EEE = () => {
  const moduleSemester = [
    {
      title: "eee",
      route: "module",
      name: "Module",
    },
    {
      title: "eee",
      route: "1stSemester",
      name: "1st Semester",
    },
    {
      title: "eee",
      route: "2ndSemester",
      name: "2nd Semester",
    },
    {
      title: "eee",
      route: "3rdSemester",
      name: "3rd Semester",
    },
    {
      title: "eee",
      route: "4thSemester",
      name: "4th Semester",
    },
    {
      title: "eee",
      route: "5thSemester",
      name: "5th Semester",
    },
    {
      title: "eee",
      route: "6thSemester",
      name: "6th Semester",
    },
    {
      title: "eee",
      route: "7thSemester",
      name: "7th Semester",
    },
    {
      title: "eee",
      route: "8thSemester",
      name: "8th Semester",
    },
  ];
  return (
    <div className=" my-40 mx-10 md:mr-20 lg:mr-72">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {moduleSemester?.map((data, i) => (
          <SemesterButton key={i} data={data}></SemesterButton>
        ))}
      </div>
    </div>
  );
};

export default EEE;
