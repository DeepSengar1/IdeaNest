import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Star } from "lucide-react";

// 1️⃣ Import useUser from Clerk
import { useUser } from "@clerk/clerk-react";

function ShowProjectDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [commentText, setCommentText] = useState("");

  // 2️⃣ Get the Clerk user
  const { user } = useUser();

  // Fetch submission details and its comments
  useEffect(() => {
    if (!id) return;
    axios
      .get(`http://localhost:3000/api/submissions/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) =>
        console.error("Error fetching project details:", error)
      );
  }, [id]);

  // Handle comment submission
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      // 3️⃣ Pass clerkId along with the comment
      await axios.post(`http://localhost:3000/api/submissions/${id}/comment`, {
        comment: commentText,
        clerkId: user?.id, // user.id if you're sure user is not null
      });

      // Refresh details to show the new comment
      const response = await axios.get(
        `http://localhost:3000/api/submissions/${id}`
      );
      setData(response.data);
      setCommentText("");
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  // Handle star update for the project
  const handleStar = async () => {
    try {
      await axios.put(`http://localhost:3000/api/submissions/${id}/star`);
      const response = await axios.get(
        `http://localhost:3000/api/submissions/${id}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error updating star:", error);
    }
  };

  // Handle approve action (for authorized users)
  const handleApprove = async () => {
    try {
      await axios.put(`http://localhost:3000/api/submissions/${id}/approve`);
      const response = await axios.get(
        `http://localhost:3000/api/submissions/${id}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error approving submission:", error);
    }
  };

  if (!data) return <p className="text-white p-6">Loading...</p>;

  const { submission, comments } = data;

  return (
    <div className="p-6 text-white">
      {/* nav-bar */}
      <nav className="flex mb-8 justify-between">
        {submission.user && (
          <div className="flex gap-4 items-center">
            <img
              src={submission.user.avatar}
              alt={submission.user.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-lg font-bold">{submission.user.name}</p>
              <p className="text-sm text-gray-400">
                {new Date(submission.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        )}
        <div className="flex items-center gap-8">
          <button
            className="flex items-center py-2 px-4 rounded-lg text-yellow-400 hover:text-yellow-300 hover:bg-yellow-900"
            onClick={handleStar}
          >
            <Star size={18} />
            <span className="ml-1 text-sm">{submission.starCount} stars</span>
          </button>
          {!submission.approved && (
            <button
              className="px-4 py-2 bg-green-700 rounded-md hover:bg-green-800"
              onClick={handleApprove}
            >
              Approve
            </button>
          )}
        </div>
      </nav>

      <div className="flex gap-8 mb-10">
        {/* left side */}
        <div className="flex-1 space-y-8">
          <h1 className="text-3xl font-bold mb-4 mt-6">{submission.title}</h1>
          <p className="mt-4 text-neutral-300">{submission.description}</p>
          <div>
            <p className="mt-2 text-white font-bold text-lg">Category:</p>
            <p className="text-md font-semibold text-neutral-300">
              {submission.category}
            </p>
          </div>
          <div>
            <p className="mt-2 text-white font-bold text-lg">Tech stack:</p>
            <div className="mt-2 flex gap-2.5 flex-wrap">
              {submission.techStacks.map((tech, i) => (
                <span
                  key={i}
                  className="bg-neutral-700 text-sm px-2.5 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="flex-1 max-[800px]">
          <div className="mt-4">
            <img
              src={submission.imageUrl}
              alt={submission.title}
              className="w-full aspect-auto object-cover rounded-lg"
            />
          </div>
          {/* If approved and a GitHub link exists, show it */}
          <p className="bg-zinc-700 my-8 w-fit px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Go to github Repo
          </p>
          {submission.approved && submission.githubLink && (
            <div className="mt-4">
              <a
                href={submission.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                View GitHub Repository
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Discussion Section */}
      <div className="m-10 border bg-neutral-900 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-8">Discussion</h2>
        {comments.map((comm) => (
          <div key={comm._id} className="mb-3">
            <div className="flex gap-4">
              <img src={comm.user.avatar} className="h-7 w-7 rounded-full" />
              <div className="bg-gray-800/70 py-1 px-4 rounded-xl rounded-tl-none">
                <div className="flex gap-8 text-zinc-400 items-center">
                  <p className="text-sm font-bold">{comm.user.name}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(comm.createdAt).toLocaleString()}
                  </p>
                </div>
                <p>{comm.comment}</p>
              </div>
            </div>
          </div>
        ))}
        <form onSubmit={handleCommentSubmit} className="mt-6 flex gap-4 mx-12">
          <input
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add your comment..."
            className="w-full p-2 bg-neutral-800 rounded-md"
            required
          />
          <button
            type="submit"
            className="mt- px-4 py-2 bg-blue-600 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ShowProjectDetails;
