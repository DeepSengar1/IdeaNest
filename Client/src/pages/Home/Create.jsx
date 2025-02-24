import { useState } from "react";
import { Plus } from "lucide-react";
import { GoFileMedia } from "react-icons/go";
import axios from "axios";

function Create() {
  const [isOpen, setIsOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [fileURL, setFileURL] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

  // Form data state
  const [formData, setFormData] = useState({
    // userId: '',
    title: "",
    description: "",
    file: "",
  });

  // Handle text input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);
      const response = await axios.post(
        "http://localhost:3000/api/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.url) {
        setFileURL(response.data.url); // URL from Cloudinary
        setFileName(file.name);
        setFileType(file.type);
        setUploading(false);
        setIsUploaded(true);
        setFormData((prev) => ({ ...prev, file: response.data.url }));
        alert("Upload successful!");
      } else {
        alert("Upload failed: " + response.data.message);
      }
    } catch (error) {
      console.error("Upload failed", error);
      alert("Upload failed!");
    } finally {
      setUploading(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/api/ideas", formData);
      alert("Idea submitted successfully!");
      setIsOpen(false); // Close modal on success
      setFormData({ title: "", description: "", file: "" });
      setIsUploaded(false);
    } catch (error) {
      console.error("Error submitting idea", error);
      alert("Error submitting idea");
    }
  };

  return (
    <>
      <div
        className="py-2 px-4 flex items-center gap-2 rounded-lg bg-slate-600 cursor-pointer hover:bg-slate-700 text-md"
        onClick={() => setIsOpen(true)}
      >
        <Plus /> Create 
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
                  placeholder="What's name of your project?"
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
              <div className="">
                <label
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
                </label>
                <input
                  id="file-upload"
                  name="file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  disabled={uploading || isUploaded}
                  accept="*/*"
                />
                {fileURL && isUploaded && (
                  <div className="mt-2 text-sm text-zinc-300">
                    Uploaded File:{" "}
                    <span className="text-blue-400">{fileName}</span>
                    {fileType.includes("video") && (
                      <video controls className="mt-2 w-full rounded-md">
                        <source src={fileURL} type={fileType} />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                )}
              </div>
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
            {/* New Field: Tech Stacks Used */}
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
