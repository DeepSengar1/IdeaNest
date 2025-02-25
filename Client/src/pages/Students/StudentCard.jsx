import React from "react";
import { UserRound } from "lucide-react";

const StudentCard = ({ name, major, description, year, skills, location }) => {
  return (
    <div className="w-[300px] h-[500px] bg-green-300 rounded-xl relative mx-auto">
      <div className="flex w-full justify-center p-4">
        <div className="rounded-full bg-white aspect-square w-fit p-5 z-10">
          <UserRound color="black" size={84} />
        </div>
      </div>
      <div className="absolute bottom-0 h-[80%] w-full bg-neutral-800 rounded-b-lg p-4 pt-16">
        <h1 className="text-white text-xl font-semibold">{name}</h1>
        <h3 className="text-green-300 text-lg">{major}</h3>
        <p className="text-neutral-400 mt-2 line-clamp-3">{description}</p>
        <p className="text-neutral-400 mt-2">
          <strong>Year:</strong> {year}
        </p>
        <p className="text-neutral-400 mt-2">
          <strong>Skills:</strong> {skills.join(", ")}
        </p>
        <p className="text-neutral-400 mt-2">
          <strong>Location:</strong> {location}
        </p>
        <div className="mt-4">
          <button className="bg-green-500 text-white py-2 px-4 rounded-md w-full hover:bg-green-600">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
