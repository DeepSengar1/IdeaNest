import React from "react";
import { Search } from "lucide-react";
import MentorCard from "../Mentors/MentorCard";
import { Link } from "react-router-dom";

const SearchMentors = () => {
  const mentors = [
    {
      name: "Hardik Langewar",
      title: "Mechanics",
      description:
        "A very passionate person about mechanical engineering and innovation. Hardik has over 10 years of experience in the field and has worked on numerous projects that have made significant impacts in the industry.",
      experience: "10+ years",
      skills: ["CAD", "FEA", "Project Management"],
      location: "San Francisco, CA",
    },
    {
      name: "Jane Doe",
      title: "Software Engineering",
      description:
        "Jane is a seasoned software engineer with expertise in full-stack development. She has worked on various high-profile projects and is passionate about teaching and mentoring.",
      experience: "8 years",
      skills: ["JavaScript", "React", "Node.js"],
      location: "New York, NY",
    },
    {
      name: "John Smith",
      title: "Data Science",
      description:
        "John is a data scientist with a strong background in machine learning and artificial intelligence. He has published several papers and enjoys sharing his knowledge with others.",
      experience: "5 years",
      skills: ["Python", "Machine Learning", "Data Analysis"],
      location: "Boston, MA",
    },
    {
      name: "Alice Johnson",
      title: "Cybersecurity",
      description:
        "Alice is an expert in cybersecurity with a focus on network security and ethical hacking. She has helped numerous organizations secure their systems.",
      experience: "7 years",
      skills: ["Network Security", "Ethical Hacking", "Penetration Testing"],
      location: "Los Angeles, CA",
    },
    {
      name: "Michael Brown",
      title: "Cloud Computing",
      description:
        "Michael is a cloud computing specialist with extensive experience in AWS and Azure. He has architected and managed cloud solutions for various enterprises.",
      experience: "6 years",
      skills: ["AWS", "Azure", "Cloud Architecture"],
      location: "Seattle, WA",
    },
    {
      name: "Emily Davis",
      title: "Artificial Intelligence",
      description:
        "Emily is an AI researcher with a strong background in deep learning and natural language processing. She has published several papers and enjoys mentoring students.",
      experience: "4 years",
      skills: ["Deep Learning", "NLP", "TensorFlow"],
      location: "Chicago, IL",
    },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center p-4 gap-2">
      <div className="searchbar w-full h-fit flex justify-center py-2">
        <Link
          to="/searchStudents"
          className="p-2 absolute right-10 font-mono font-bold bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-md "
        >
          To Studedents
        </Link>
        <div className="relative">
          <input
            type="text"
            className="text-black w-72 h-7 rounded-2xl px-3"
            placeholder="Search mentors..."
          />
          <div className="absolute top-0 right-2 ">
            <Search color="black" />
          </div>
        </div>
      </div>

      <div className="h-full w-full bg-neutral-900 rounded-md p-4 grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
        {mentors.map((mentor, index) => (
          <MentorCard
            key={index}
            name={mentor.name}
            title={mentor.title}
            description={mentor.description}
            experience={mentor.experience}
            skills={mentor.skills}
            location={mentor.location}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchMentors;
