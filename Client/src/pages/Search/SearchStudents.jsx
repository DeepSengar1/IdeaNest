import { Search } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import StudentCard from "../Students/StudentCard";

const SearchStudents = () => {
  const students = [
    {
      name: "Alex Johnson",
      major: "Computer Science",
      description:
        "Alex is a dedicated computer science student with a passion for software development and artificial intelligence.",
      year: "Sophomore",
      skills: ["Java", "Python", "Machine Learning"],
      location: "San Francisco, CA",
    },
    {
      name: "Maria Garcia",
      major: "Electrical Engineering",
      description:
        "Maria is an enthusiastic electrical engineering student with a focus on renewable energy and smart grid technologies.",
      year: "Junior",
      skills: ["Circuit Design", "MATLAB", "Power Systems"],
      location: "New York, NY",
    },
    {
      name: "David Lee",
      major: "Mechanical Engineering",
      description:
        "David is a mechanical engineering student who loves working on robotics and automation projects.",
      year: "Senior",
      skills: ["CAD", "Robotics", "3D Printing"],
      location: "Boston, MA",
    },
    {
      name: "Sophia Martinez",
      major: "Biomedical Engineering",
      description:
        "Sophia is a biomedical engineering student interested in developing medical devices and improving healthcare technology.",
      year: "Freshman",
      skills: ["Biomaterials", "Medical Imaging", "LabVIEW"],
      location: "Los Angeles, CA",
    },
    {
      name: "James Wilson",
      major: "Civil Engineering",
      description:
        "James is a civil engineering student passionate about sustainable construction and urban planning.",
      year: "Junior",
      skills: ["AutoCAD", "Structural Analysis", "Project Management"],
      location: "Seattle, WA",
    },
    {
      name: "Olivia Brown",
      major: "Chemical Engineering",
      description:
        "Olivia is a chemical engineering student focused on process optimization and environmental sustainability.",
      year: "Senior",
      skills: ["Process Simulation", "ChemCAD", "Environmental Engineering"],
      location: "Chicago, IL",
    },
  ];
  return (
    <div className="h-full flex flex-col items-center justify-center p-4 gap-2">
      <div className="searchbar w-full h-fit flex justify-center py-2">
        <Link
          to="/searchMentors"
          className="p-2 absolute right-10 font-mono font-bold bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-md "
        >
          To Mentors
        </Link>
        <div className="relative">
          <input
            type="text"
            className="text-black w-72 h-7 rounded-2xl px-3"
            placeholder="Search students..."
          />
          <div className="absolute top-0 right-2 ">
            <Search color="black" />
          </div>
        </div>
      </div>

      <div className="h-full w-full bg-neutral-900 rounded-md p-4 grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            major={student.major}
            description={student.description}
            year={student.year}
            skills={student.skills}
            location={student.location}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchStudents;
