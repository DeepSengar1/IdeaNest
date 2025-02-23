const projectData = [
  {
    id: 1,
    type: "Approved",
    title: "Project Alpha",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien eu facilisis placerat, lacus quam consequat quam, quis scelerisque justo metus vel eros. More text here...",
    category: "Tech-stack",
  },
  {
    id: 2,
    type: "Not Approved",
    title: "Project Beta",
    description:
      "Praesent eu bibendum lectus. Cras sit amet arcu at justo blandit viverra sed at elit. Pellentesque habitant morbi tristique senectus et netus.",
    category: "Tech-stack",
  },
  {
    id: 3,
    type: "Approved",
    title: "Project Gamma",
    description:
      "Aenean sodales nulla vel justo hendrerit, et pharetra metus malesuada. Vivamus sed nunc eget orci porta pulvinar quis a lectus.",
    category: "Tech-stack",
  },
];

function ProjectCard({ project }) {
  // Color logic for "Approved" vs. "Not Approved"
  const typeColor =
    project.type.toLowerCase() === "approved"
      ? "text-green-500"
      : "text-red-500";

  return (
    <div className="bg-neutral-800 rounded-lg shadow-md p-4 flex flex-col">
      {/* Top row: Type + Star button */}
      <div className="flex items-center justify-between">
        <span className={`text-xs uppercase font-bold ${typeColor}`}>
          {project.type}
        </span>
        <button
          className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
          aria-label="Star this project"
        >
          Star the proj
        </button>
      </div>

      <h2 className="text-lg font-semibold mt-2">{project.title}</h2>
      <div className="bg-neutral-700 rounded-lg h-32 mt-3 mb-3"></div>
      <p className="text-neutral-300 text-sm line-clamp-3">
        {project.description}
      </p>
      <div className="mt-auto pt-3 text-xs text-neutral-400">
        Category: {project.category}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="text-white p-6">
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projectData.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
