import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Ideas() {
  const [ideas, setIdeas] = useState([]);
  const navigate = useNavigate();

  // Fetch ideas (non-approved submissions)
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/submissions/ideas")
      .then((response) => {
        setIdeas(response.data);
      })
      .catch((error) => {
        console.error("Error fetching ideas:", error);
      });
  }, []);

  // Handle updating the star count
  const handleStar = async (id, e) => {
    e.stopPropagation(); // prevent card click navigation
    try {
      await axios.put(`http://localhost:3000/api/submissions/${id}/star`);
      // Refresh ideas after starring
      const res = await axios.get(
        "http://localhost:3000/api/submissions/ideas"
      );
      setIdeas(res.data);
    } catch (error) {
      console.error("Error updating star:", error);
    }
  };

  return (
<<<<<<< Updated upstream
    <div className="grid  lg:grid-cols-3">
<<<<<<< Updated upstream
      <div className="grid col-span-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6 text-white p-6 2xl:grid-cols-2 3xl:grid-cols-3">
=======
    <div className="grid  md:grid-cols-3">
      <div className="grid col-span-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white p-6 2xl:grid-cols-4 3xl:grid-cols-5">
>>>>>>> Stashed changes
=======
      <div className="grid col-span-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 text-white p-6 xl:grid-cols-2 3xl:grid-cols-3">
>>>>>>> Stashed changes
        {ideas.map((idea) => {
          // techStacks is assumed to be an array from the backend
          const techStackArray = idea.techStacks;
          return (
            <div
              key={idea._id}
              className="relative bg-neutral-800  rounded-lg shadow hover:shadow-lg border border-gray-500/50 cursor-pointer hover:shadow-neutral-500/50 hover:border-slate-500 text-sm "
              onClick={() => navigate(`/home/ideas/${idea._id}`)}
            >
              <img
                src={idea.imageUrl}
                alt={idea.title}
<<<<<<< Updated upstream
                className="w-full h-60 object-cover rounded-md "
              />
              <div className="grid h-40 px-6">
                <div className="flex flex-row-reverse justify-between items-center">
                  <button
                    className="flex items-center text-neutral-400 hover:text-yellow-400"
                    onClick={(e) => handleStar(idea._id, e)}
                  >
                    <Star size={18} />
                    <span className="ml-1 text-sm">{idea.starCount} stars</span>
                  </button>
                  <h2 className="text-xl font-semibold  line-clamp-1">
                    {idea.title}
                  </h2>
                </div>
                <div className="">
                  <p className="line-clamp-2  ">{idea.description}</p>
                </div>
                <p className=" text-neutral-400 font-bold px-2">
                  Category: {idea.category}
                </p>
                <div className="flex  w-full">
                  <div className="flex w-full justify-between">
                    <div className="flex flex-wrap py-2 gap-3 items-center ">
                      {techStackArray.map((stack, i) => (
                        <span
                          key={i}
                          className="bg-neutral-700 text-xs box-content px-2 py- h-fit  rounded-md"
                        >
                          {stack}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
=======
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <div className="flex flex-row-reverse p-2  lg:mb-3 sm:mb-4 justify-between items-center">
                <button
                  className="flex items-center text-neutral-400 hover:text-yellow-400"
                  onClick={(e) => handleStar(idea._id, e)}
                >
                  <Star size={18} />
                  <span className="ml-1 text-sm">{idea.starCount} stars</span>
                </button>
                <h2 className="text-xl font-semibold  line-clamp-1">
                  {idea.title}
                </h2>
              </div>
              <p className="line-clamp-2  px-2 mb-2">{idea.description}</p>
              <p className=" text-neutral-400 font-bold px-2">
                Category: {idea.category}
              </p>
              <div className="flex flex-wrap gap-2 mt-3 px-2">
                {techStackArray.map((stack, i) => (
                  <span
                    key={i}
                    className="bg-neutral-700 text-xs px-2 py-1 mb-1 rounded-md"
                  >
                    {stack}
                  </span>
                ))}
>>>>>>> Stashed changes
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Ideas;
