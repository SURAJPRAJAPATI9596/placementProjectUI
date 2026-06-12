import React from "react";

const Resume = () => {
  return (
    <>
      <section>
        <h1> </h1>
        <p></p>
      </section>

      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">
          PLACIFY <span className="text-blue-600">ATS CHECKER</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-left">
          <b> Optimize Your Resume for Applicant Tracking Systems</b>
          <br />
          Upload your resume, compare it with a job description, and receive an
          ATS score along with detailed recommendations to improve your chances
          of getting shortlisted.
        </p>
      </section>

      <section>
        <h1>Upload Resume</h1>
        <div className="border-2">
          <input type="file"></input>
        </div>
      </section>
    </>
  );
};

export default Resume;
