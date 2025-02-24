import { Star } from "lucide-react";

const dummyData = [
  {
    title: "Eccentric",
    imageUrl:
      "https://images.unsplash.com/photo-1530435460869-d13625c69bbf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds",
    description:
      "Something about this character calls to you. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Art",
    starCount: 12,
    techStacks: "React, Tailwind, Lucide-React",
  },
  {
    title: "Whimsical",
    imageUrl:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Another short description goes here. This Ideas is about creating magical user experiences and whimsical designs.",
    category: "UI/UX",
    starCount: 7,
    techStacks: "Next.js, Tailwind, TypeScript",
  },
  {
    title: "Mystic",
    imageUrl:
      "https://images.unsplash.com/photo-1530435460869-d13625c69bbf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A mysterious Ideas that delves deep into unknown territories of the codebase, pushing boundaries and exploring new frontiers. It's quite intriguing!",
    category: "Experiment",
    starCount: 25,
    techStacks: "React, Redux, Node.js",
  },
  {
    title: "Galactic",
    imageUrl:
      "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "An interstellar journey through code and design, bridging the gap between creativity and logic.",
    category: "Space",
    starCount: 3,
    techStacks: "Vue, Tailwind, Firebase",
  },
];

function Ideas() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white p-6 2xl:grid-cols-4 3xl:grid-cols-5">
      {dummyData.map((Ideas, index) => {
        const techStackArray = Ideas.techStacks
          .split(",")
          .map((item) => item.trim());

        return (
          <div
            key={index}
            className="relative bg-neutral-800 p-6 rounded-lg shadow hover:shadow-lg border border-gray-500/50 cursor-pointer hover:shadow-neutral-500/50 hover:border-slate-500 text-sm space-y-4"
          >
            <div className="flex">
              <button
                className="absolute top-3 right-4 flex items-center text-neutral-400 hover:text-yellow-400"
                // onClick={() => handleStar(Ideas.id)} // Example if you want to handle star onClick
              >
                <Star size={18} />
                <span className="ml-1 text-sm">{Ideas.starCount} stars</span>
              </button>
              <h2 className="text-xl font-semibold mt-1.5 line-clamp-1">
                {Ideas.title}
              </h2>
            </div>

            <img
              src={Ideas.imageUrl}
              alt={Ideas.title}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <p className="line-clamp-2 ">{Ideas.description}</p>

            <p className=" text-neutral-400 font-bold">
              Category: {Ideas.category}
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

export default Ideas;
