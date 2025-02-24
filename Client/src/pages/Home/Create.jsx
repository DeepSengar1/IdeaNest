import { useState } from "react";
import { Plus } from "lucide-react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

function Create() {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    techStacks: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.description ||
      !formData.category ||
      !formData.techStacks ||
      !formData.imageUrl
    ) {
      alert("Please fill out all fields.");
      return;
    }
    try {
      const payload = { clerkId: user.id, ...formData };
      await axios.post("http://localhost:3000/api/submissions", payload);
      alert("Submission successful!");
      setIsOpen(false);
      setFormData({
        title: "",
        category: "",
        description: "",
        techStacks: "",
        imageUrl: "",
      });
    } catch (error) {
      console.error("Error submitting idea", error);
      alert("Error submitting idea");
    }
  };

  return (
    <>
      <div
        className="py-2 px-4 font-medium flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 cursor-pointer text-md shadow-sm shadow-violet-100"
        onClick={() => setIsOpen(true)}
      >
        <Plus /> Create project
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-10">
          <div className="bg-zinc-900 rounded-xl shadow-lg p-6 w-full max-w-xl relative space-y-1">
            <button
              className="absolute top-2 right-4 text-zinc-400 hover:text-white text-3xl h-0"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <div className="flex gap-6">
              <div className="flex-1">
                <input
                  name="title"
                  className="w-full p-2 mb-4 bg-transparent border-b border-neutral-700 focus:border-b-slate-500 focus:ring focus:ring-transparent focus:outline-none"
                  placeholder="What's the name of your project?"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
                <br />
                <input
                  name="category"
                  className="w-full p-2 mb-4 bg-transparent border-b border-neutral-700 focus:border-b-slate-500 focus:ring focus:ring-transparent focus:outline-none"
                  placeholder="Category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                />
                <br />
              </div>
              <div className="flex-1">
                {/* Image URL input instead of file upload */}
                <input
                  name="imageUrl"
                  className="w-full p-2 mb-4 bg-transparent border-b border-neutral-700 focus:border-b-slate-500 focus:ring focus:ring-transparent focus:outline-none"
                  placeholder="Image URL"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* <label
                  htmlFor="file-upload"
                  className={`flex flex-col items-center justify-center text-neutral-300 gap-2 cursor-pointer p-2 bg-zinc-800 rounded-md hover:bg-zinc-700 h-20 mt-6 ${
                    isUploaded ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <GoFileMedia className="text-xl text-green-400" />
                  <span className="text-sm">
                    {uploading
                      ? "Uploading..."
                      : isUploaded
                      ? "Uploaded"
                      : "Add image"}
                  </span>
                </label> */}
            </div>
            <br />
            <textarea
              name="description"
              className="w-full p-2 mb-4 bg-zinc-800 rounded-md focus:outline focus:outline-slate-500 focus:outline-none"
              placeholder="Describe your project in detail..."
              value={formData.description}
              onChange={handleChange}
              rows={8}
              required
            />
            <br />
            <br />
            <input
              name="techStacks"
              className="w-full p-2 mb-4 bg-transparent border-b border-neutral-700 focus:border-b-slate-500 focus:ring focus:ring-transparent focus:outline-none"
              placeholder="Tech Stacks Used (comma separated)"
              value={formData.techStacks}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 bg-zinc-700 rounded-md hover:bg-zinc-600"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500"
                onClick={handleSubmit}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Create;
