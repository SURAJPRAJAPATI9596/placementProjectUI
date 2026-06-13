import React from "react";

const FileUploader = ({ dark }) => {
  return (
    <div
      className={`p-6 rounded-xl border ${
        dark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-300"
      }`}
    >
      <h2 className="text-2xl font-bold mb-5">Upload Resume</h2>

      <div
        className="h-48 border-2 border-dashed border-blue-500 
            rounded-xl flex flex-col items-center justify-center"
      >
        <p className="text-lg">📄 Drag & Drop your resume</p>

        <p className="my-3 opacity-70">or</p>

        <label
          className="
              bg-blue-600 text-white px-6 py-2 
              rounded-lg cursor-pointer"
        >
          Choose File
          <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
        </label>

        <p className="mt-3 text-sm">PDF / DOCX only</p>
      </div>
    </div>
  );
};

export default FileUploader;
