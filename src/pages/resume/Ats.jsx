import ProgressBar from "../../components/ui/ProgressBar";
import React from "react";
import FileUploader from "../../components/ui/FileUploader";
import { AtsResultCard } from "../../components/ui/AtsResultCard";
const Ats = ({ dark }) => {
  return (
    <div
      className={`min-h-screen px-5 py-10 ${
        dark ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold">PLACIFY ATS CHECKER</h1>

        <p className="mt-4 text-lg opacity-80">
          Optimize Your Resume for Applicant Tracking Systems
        </p>

        <p className="mt-2 opacity-70">
          Upload your resume, compare it with job description, and receive ATS
          score with improvement suggestions.
        </p>
      </section>

      {/* Upload Section */}
      <section className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <FileUploader dark={dark} />
        {/* Job Description */}

        <div
          className={`p-6 rounded-xl border ${
            dark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-300"
          }`}
        >
          <h2 className="text-2xl font-bold mb-5">Job Description</h2>

          <textarea
            placeholder="Paste job description here..."
            className="
            w-full h-48 p-4 rounded-xl
            border outline-none
            bg-transparent"
          />

          <button
            className="
            mt-5 w-full
            bg-blue-600
            text-white
            py-3 rounded-xl"
          >
            Analyze Resume
          </button>
        </div>
      </section>

      {/* Results */}

      <section className="max-w-6xl mx-auto mt-14">
        <h2 className="text-3xl font-bold mb-8">Analysis Result</h2>

        {/* Score */}

        <div
          className={`rounded-xl p-8 text-center mb-8 ${
            dark ? "bg-gray-900" : "bg-white"
          }`}
        >
          <h2 className="text-2xl font-bold mb-6">ATS SCORE</h2>

          <ProgressBar dark={dark} textSize="4xl" circleSize={90} />

          <h3 className="mt-6 text-xl font-semibold text-green-500">
            Excellent Match
          </h3>
          <p className="mt-2 text-center opacity-70">
            Your resume is highly optimized for ATS.
          </p>
        </div>

        {/* Performance */}

        <div className="grid md:grid-cols-4 gap-5">
          {[
            ["Keywords", "88%"],
            ["Skills", "82%"],
            ["Formatting", "95%"],
            ["Experience", "76%"],
            ["Structure", "90%"],
          ].map((item, index) => (
            <AtsResultCard
              key={index}
              title={item[0]}
              score={item[1]}
              dark={dark}
            />
          ))}
        </div>

        {/* Two column data */}

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <Card dark={dark} title="Keywords Found">
            {[
              "React",
              "JavaScript",
              "HTML",
              "CSS",
              "Tailwind CSS",
              "Git",
              "REST API",
            ].map((x) => (
              <p key={x}>✅ {x}</p>
            ))}
          </Card>

          <Card dark={dark} title="Missing Keywords">
            {["TypeScript", "Redux", "Docker", "CI/CD"].map((x) => (
              <p key={x}>❌ {x}</p>
            ))}
          </Card>

          <Card dark={dark} title="Strengths">
            {[
              "Well structured resume",
              "Strong projects",
              "Good skills",
              "ATS friendly format",
            ].map((x) => (
              <p key={x}>✓ {x}</p>
            ))}
          </Card>

          <Card dark={dark} title="Improvements">
            {[
              "Add certifications",
              "Add achievements",
              "Mention measurable results",
            ].map((x) => (
              <p key={x}>⚠ {x}</p>
            ))}
          </Card>
        </div>

        {/* Verdict */}

        <div
          className={`mt-10 p-8 rounded-xl text-center ${
            dark ? "bg-gray-900" : "bg-white"
          }`}
        >
          <h2 className="text-3xl font-bold">🟢 ATS Friendly</h2>

          <p className="mt-3">Your resume can successfully pass ATS systems.</p>

          <button
            className="
          mt-6 bg-blue-600
          px-8 py-3
          rounded-xl
          text-white"
          >
            Download Report
          </button>
        </div>
      </section>
    </div>
  );
};

const Card = ({ title, children, dark }) => (
  <div className={`p-6 rounded-xl ${dark ? "bg-gray-900" : "bg-white"}`}>
    <h2 className="text-2xl font-bold mb-5">{title}</h2>

    <div className="space-y-3">{children}</div>
  </div>
);

export default Ats;
