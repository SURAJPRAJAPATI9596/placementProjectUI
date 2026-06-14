import React, { useState } from "react";

const Resume = ({ dark }) => {
  const [projects, setProjects] = useState([
    {
      name: "",
      tech: "",
      description: "",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      company: "",
      role: "",
      description: "",
    },
  ]);

  const addProject = () => {
    setProjects([
      ...projects,
      {
        name: "",
        tech: "",
        description: "",
      },
    ]);
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        company: "",
        role: "",
        description: "",
      },
    ]);
  };

  return (
    <div
      className={`min-h-screen p-6 ${
        dark ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Header */}

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Placify Resume Builder</h1>

        <p className="mt-3 opacity-70">Create ATS friendly resume with AI</p>
      </div>

      {/* Fields selection  */}
      <div
        className={`rounded-2xl p-5 mb-8 ${dark ? "bg-gray-900" : "bg-white"}`}
      >
        <h2 className="text-2xl font-bold mb-5">Select Resume Sections</h2>

        <div
          className="
        grid
        grid-cols-2
        md:grid-cols-4
        gap-4
        "
        >
          {[
            "Personal Info",
            "Summary",
            "Skills",
            "Projects",
            "Experience",
            "Education",
            "Certifications",
            "Achievements",
            "Languages",
          ].map((item) => (
            <label
              key={item}
              className="
          flex
          items-center
          gap-3
          p-4
          border
          rounded-xl
          cursor-pointer
          hover:border-blue-500
          "
            >
              <input type="checkbox" className="w-5 h-5" />

              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Templates */}
      <div
        className={`p-5 rounded-xl mb-8 ${dark ? "bg-gray-900" : "bg-white"}`}
      >
        <h2 className="text-2xl font-bold">Choose Template</h2>

        <div className="flex gap-5 mt-5 flex-wrap">
          {["Modern", "Minimal", "Professional", "Developer"].map((t) => (
            <button
              key={t}
              className="
              px-6 py-3
              border rounded-xl
              hover:bg-blue-600
              hover:text-white"
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* LEFT SIDE */}

        <div className="space-y-6">
          <Section title="Personal Details" dark={dark} className="">
            <Input placeholder="Full Name" />

            <Input placeholder="Email" />

            <Input placeholder="Phone" />

            <Input placeholder="Location" />

            <Input placeholder="Github" />

            <Input placeholder="LinkedIn" />
          </Section>

          <Section title="Professional Summary" dark={dark}>
            <textarea className="box" placeholder="Write summary..." />

            <button className="ai">✨ Generate With AI</button>
          </Section>

          <Section title="Experience" dark={dark}>
            {experience.map((e, i) => (
              <div key={i} className="space-y-3">
                <Input placeholder="Company" />

                <Input placeholder="Role" />

                <textarea className="box" placeholder="Description" />
              </div>
            ))}

            <button onClick={addExperience} className="btn">
              + Add Experience
            </button>
          </Section>

          <Section title="Projects" dark={dark}>
            {projects.map((p, i) => (
              <div key={i} className="space-y-3">
                <Input placeholder="Project Name" />

                <Input placeholder="Technology Used" />

                <textarea className="box" placeholder="Project Description" />

                <button className="ai">✨ Generate Description</button>
              </div>
            ))}

            <button onClick={addProject} className="btn">
              + Add Project
            </button>
          </Section>

          <Section title="Skills" dark={dark}>
            <Input placeholder="React, Javascript, Node..." />

            <button className="ai">✨ Suggest Skills</button>
          </Section>

          <Section title="Education" dark={dark}>
            <Input placeholder="Degree" />

            <Input placeholder="College" />

            <Input placeholder="Year" />

            <Input placeholder="CGPA" />
          </Section>
        </div>

        {/* RIGHT PREVIEW */}

        <div>
          <div
            className={`
          sticky top-5
          rounded-xl
          p-8
          min-h-200
          ${dark ? "bg-gray-900" : "bg-white"}`}
          >
            <div className="text-center">
              <h1 className="text-3xl font-bold">Your Name</h1>

              <p>Frontend Developer</p>
            </div>

            <hr className="my-5" />

            <h2 className="title">SUMMARY</h2>

            <p className="opacity-70">
              Your professional summary will appear here.
            </p>

            <h2 className="title">SKILLS</h2>

            <p>React • JavaScript • Tailwind</p>

            <h2 className="title">PROJECTS</h2>

            {projects.map((p, i) => (
              <div key={i}>
                <h3 className="font-bold">{p.name || "Project Name"}</h3>

                <p className="text-sm">
                  {p.description || "Project description"}
                </p>
              </div>
            ))}

            <h2 className="title">EXPERIENCE</h2>

            {experience.map((e, i) => (
              <div key={i}>
                <h3 className="font-bold">{e.company || "Company"}</h3>

                <p>{e.description || "Experience"}</p>
              </div>
            ))}

            <button
              className="
            mt-8
            w-full
            bg-blue-600
            text-white
            py-3
            rounded-xl
            "
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children, dark }) => (
  <div className={`p-5 rounded-xl ${dark ? "bg-gray-900" : "bg-white"}`}>
    <h2 className="text-2xl font-bold mb-4">{title}</h2>

    {children}
  </div>
);

const Input = ({ placeholder }) => (
  <input
    placeholder={placeholder}
    className="
w-full
p-3
rounded-lg
border
bg-transparent
"
  />
);

export default Resume;
