import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);
      const response = await axios.post("http://localhost:3000/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setUploadedUrl(response.data.url);
      alert("Upload successful!");
    } catch (error) {
      console.error("Upload failed", error);
      alert("Upload failed!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h2>Upload File</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {uploadedUrl && (
        <div>
          <p>Uploaded File:</p>
          {uploadedUrl.match(/\.(jpeg|jpg|png|gif)$/) ? (
            <img src={uploadedUrl} alt="Uploaded" width="300" />
          ) : (
            <a href={uploadedUrl} target="_blank" rel="noopener noreferrer">
              View File
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default FileUpload;