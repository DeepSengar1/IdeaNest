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
    <div className="grid  lg:grid-cols-3">
      <div className="grid col-span-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6 text-white p-6 2xl:grid-cols-2 3xl:grid-cols-3">
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
                <div className="">
                  <div className="flex flex-wrap py-2 gap-3 ">
                    {techStackArray.map((stack, i) => (
                      <span
                        key={i}
                        className="bg-neutral-700 text-xs px-2 py-1 mb-1 rounded-md"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Ideas;
