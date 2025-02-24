import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  // Fetch approved projects
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/submissions/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  const handleStar = async (id, e) => {
    e.stopPropagation();
    try {
      await axios.put(`http://localhost:3000/api/submissions/${id}/star`);
      const res = await axios.get("http://localhost:3000/api/submissions/projects");
      setProjects(res.data);
    } catch (error) {
      console.error("Error updating star:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white p-6 2xl:grid-cols-4 3xl:grid-cols-5">
      {projects.map((project) => {
        const techStackArray = project.techStacks;
        return (
          <div
            key={project._id}
            className="relative bg-neutral-800 p-6 rounded-lg shadow hover:shadow-lg border border-gray-500/50 cursor-pointer hover:shadow-neutral-500/50 hover:border-slate-500 text-sm space-y-4"
            onClick={() => navigate(`/home/projects/${project._id}`)}
          >
            <div className="flex">
              <button
                className="absolute top-3 right-4 flex items-center text-neutral-400 hover:text-yellow-400"
                onClick={(e) => handleStar(project._id, e)}
              >
                <Star size={18} />
                <span className="ml-1 text-sm">{project.starCount} stars</span>
              </button>
              <h2 className="text-xl font-semibold mt-1.5 line-clamp-1">
                {project.title}
              </h2>
            </div>
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <p className="line-clamp-2 ">{project.description}</p>
            <p className=" text-neutral-400 font-bold">
              Category: {project.category}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {techStackArray.map((stack, i) => (
                <span
                  key={i}
                  className="bg-neutral-700 text-xs px-2 py-1 rounded-md"
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
