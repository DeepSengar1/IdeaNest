import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Star } from "lucide-react";

function ShowProjectDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [commentText, setCommentText] = useState("");

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
      await axios.post(`http://localhost:3000/api/submissions/${id}/comment`, {
        comment: commentText,
      });
      // Refresh details to show the new comment
      const response = await axios.get(`http://localhost:3000/api/submissions/${id}`);
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
      const response = await axios.get(`http://localhost:3000/api/submissions/${id}`);
      setData(response.data);
    } catch (error) {
      console.error("Error updating star:", error);
    }
  };

  // Handle approve action (only for authorized users, e.g. mentors/admins)
  const handleApprove = async () => {
    try {
      await axios.put(`http://localhost:3000/api/submissions/${id}/approve`);
      const response = await axios.get(`http://localhost:3000/api/submissions/${id}`);
      setData(response.data);
    } catch (error) {
      console.error("Error approving submission:", error);
    }
  };

  if (!data) return <p className="text-white p-6">Loading...</p>;

  const { submission, comments } = data;

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-2">{submission.title}</h1>
      <p className="text-sm text-gray-400">
        Created at: {new Date(submission.createdAt).toLocaleString()}
      </p>
      {submission.user && (
        <p className="text-sm text-gray-400">
          Created by: {submission.user.name}
        </p>
      )}
      <div className="mt-4">
        <img
          src={submission.imageUrl}
          alt={submission.title}
          className="w-full h-64 object-cover rounded-md"
        />
      </div>
      <p className="mt-4">{submission.description}</p>
      <p className="mt-2 font-bold">Category: {submission.category}</p>
      <div className="mt-2 flex gap-2">
        {submission.techStacks.map((tech, i) => (
          <span key={i} className="bg-neutral-700 text-xs px-2 py-1 rounded-md">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-4">
        <button
          className="flex items-center text-neutral-400 hover:text-yellow-400"
          onClick={handleStar}
        >
          <Star size={18} />
          <span className="ml-1 text-sm">{submission.starCount} stars</span>
        </button>
        {/* Show Approve button if submission is not approved */}
        {!submission.approved && (
          <button
            className="px-4 py-2 bg-green-600 rounded-md hover:bg-green-500"
            onClick={handleApprove}
          >
            Approve
          </button>
        )}
      </div>
      {/* If approved and a GitHub link exists, show it */}
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
      {/* Discussion Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Discussion</h2>
        {comments.map((comm) => (
          <div key={comm._id} className="mb-3 border-b border-gray-500 pb-2">
            <p className="text-sm font-bold">{comm.user.name}</p>
            <p className="text-xs text-gray-400">
              {new Date(comm.createdAt).toLocaleString()}
            </p>
            <p>{comm.comment}</p>
          </div>
        ))}
        <form onSubmit={handleCommentSubmit} className="mt-4">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add your comment..."
            className="w-full p-2 bg-neutral-800 rounded-md"
            required
          />
          <button type="submit" className="mt-2 px-4 py-2 bg-blue-600 rounded-md">
            Submit Comment
          </button>
        </form>
      </div>
    </div>
  );
}

export default ShowProjectDetails;
