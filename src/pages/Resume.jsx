import Button from "@mui/material/Button";
import React, { useState } from "react";

const Resume = ({ dark }) => {
  let [fields, setFields] = useState({
    Personal: false,
    Summary: false,
    Skills: false,
    Projects: false,
    Experience: false,
    Education: false,
    Certifications: false,
    Achievements: false,
    Languages: false,
  });
  const isSelectedField = (item, e) => {
    setFields({ ...fields, [item]: e.target.checked });
  };

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

  const [education, setEducation] = useState([
    {
      degree: "",
      college: "",
      year: "",
      cgpa: "",
    },
  ]);

  const [certificate, setCertificate] = useState([
    {
      name: "",
      organization: "",
      date: "",
      credentialId: "",
      url: "",
    },
  ]);

  const [language, setLanguage] = useState([
    {
      name: "",
      level: "",
    },
  ]);
  const [achievement, setAchievement] = useState([
    {
      title: "",
      description: "",
      date: "",
    },
  ]);
  const addCertificate = () => {
    setCertificate([
      ...certificate,
      {
        name: "",
        organization: "",
        date: "",
        credentialId: "",
        url: "",
      },
    ]);
  };

  const addLanguage = () => {
    setLanguage([
      ...language,
      {
        name: "",
        level: "",
      },
    ]);
  };
  const addAchievement = () => {
    setAchievement([
      ...achievement,
      {
        title: "",
        description: "",
        date: "",
      },
    ]);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        degree: "",
        college: "",
        year: "",
        cgpa: "",
      },
    ]);
  };

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
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Placify Resume Builder</h1>

        <p className="mt-3 opacity-70">Create ATS friendly resume with AI</p>
      </div>

      {/* Sections */}

      <div
        className={`rounded-2xl p-5 mb-8 ${dark ? "bg-gray-900" : "bg-white"}`}
      >
        <h2 className="text-2xl font-bold mb-5">Select Resume Sections</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Personal",
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
            flex items-center gap-3
            p-4 border rounded-xl
            cursor-pointer
            hover:border-blue-500
            "
            >
              <input
                type="checkbox"
                className="w-5 h-5"
                onChange={(e) => {
                  isSelectedField(item, e);
                }}
              />

              {item}
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
            hover:text-white
            "
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Editor */}

        <div className="space-y-6">
          {fields.Personal ? (
            <Section title="Personal Details" dark={dark}>
              <Input placeholder="Full Name" />

              <Input placeholder="Email" />

              <Input placeholder="Phone" />

              <Input placeholder="Location" />

              <Input placeholder="Github" />

              <Input placeholder="LinkedIn" />
            </Section>
          ) : (
            ""
          )}

          {fields.Summary ? (
            <Section title="Professional Summary" dark={dark}>
              <textarea
                placeholder="Write summary..."
                className="
            w-full p-3 rounded-lg border
            bg-transparent
            min-h-30
            "
              />

              <button
                className="
                bg-purple-600 text-white
                px-5 py-3 rounded-xl
                "
              >
                Generate Summary
              </button>
            </Section>
          ) : (
            ""
          )}

          {fields.experience ? (
            <Section title="Experience" dark={dark}>
              {experience.map((e, i) => (
                <div key={i} className="space-y-3">
                  <Input placeholder="Company" />

                  <Input placeholder="Role" />

                  <textarea
                    placeholder="Description"
                    className="
                w-full p-3 rounded-lg border
                bg-transparent
                min-h-25
                "
                  />
                </div>
              ))}

              <button
                onClick={addExperience}
                className="
            bg-blue-600 text-white
            px-5 py-3 rounded-xl
            "
              >
                + Add Experience
              </button>
            </Section>
          ) : (
            ""
          )}
          {fields.Projects ? (
            <Section title="Projects" dark={dark}>
              {projects.map((p, i) => (
                <div key={i} className="space-y-3">
                  <Input placeholder="Project Name" />

                  <Input placeholder="Technology Used" />

                  <Input placeholder="Source Code URL" />

                  <Input placeholder="Live Project URL" />

                  <textarea
                    placeholder="Project Description"
                    className="
                w-full p-3 rounded-lg border
                bg-transparent
                min-h-25
                "
                  />
                </div>
              ))}

              <button
                className="
                bg-purple-600 text-white
                px-5 py-3 rounded-xl
                "
              >
                Generate Description
              </button>
              <button
                onClick={addProject}
                className="
            bg-blue-600 text-white
            px-5 py-3 rounded-xl ml-4
            "
              >
                + Add Project
              </button>
            </Section>
          ) : (
            ""
          )}
          {fields.Skills ? (
            <Section title="Skills" dark={dark}>
              <Input placeholder="React, Javascript, Node" />

              <button
                className="
            bg-purple-600 text-white
            px-5 py-3 rounded-xl
            "
              >
                ✨ Suggest Skills
              </button>
            </Section>
          ) : (
            ""
          )}
          {fields.Education ? (
            <Section title="Education" dark={dark}>
              {education.map((v, i) => {
                return (
                  <div key={i} className="space-y-3">
                    <Input placeholder="Degree" />

                    <Input placeholder="College" />

                    <Input placeholder="Year" />

                    <Input placeholder="CGPA" />
                  </div>
                );
              })}
              <button
                onClick={addEducation}
                className="
            bg-blue-600 text-white
            px-5 py-3 rounded-xl
            "
              >
                + Add Education
              </button>
            </Section>
          ) : (
            ""
          )}

          {fields.Achievements ? (
            <Section title="Achievements" dark={dark}>
              {achievement.map((v, i) => {
                return (
                  <div key={i} className="space-y-3">
                    <Input placeholder="Title" />

                    <Input placeholder="Description" />

                    <Input placeholder="Date" />
                  </div>
                );
              })}
              <button
                onClick={addAchievement}
                className="
            bg-blue-600 text-white
            px-5 py-3 rounded-xl
            "
              >
                + Add Education
              </button>
            </Section>
          ) : (
            ""
          )}
          {fields.Languages ? (
            <Section title="Language" dark={dark}>
              {language.map((v, i) => {
                return (
                  <div key={i} className="space-y-3">
                    <Input placeholder="Name" />
                    <Input placeholder="Level" />
                  </div>
                );
              })}
              <button
                onClick={addLanguage}
                className="
            bg-blue-600 text-white
            px-5 py-3 rounded-xl
            "
              >
                + Add Language
              </button>
            </Section>
          ) : (
            ""
          )}

          {fields.Certifications ? (
            <Section title="Certifications" dark={dark}>
              {certificate.map((v, i) => {
                return (
                  <div key={i} className="space-y-3">
                    <Input placeholder="Name" />

                    <Input placeholder="Organization" />

                    <Input placeholder="Date" />

                    <Input placeholder=" credentialId" />
                    <Input placeholder=" url" />
                  </div>
                );
              })}
              <button
                onClick={addCertificate}
                className="
            bg-blue-600 text-white
            px-5 py-3 rounded-xl
            "
              >
                + Add Certification
              </button>
            </Section>
          ) : (
            ""
          )}
        </div>

        {/* Preview */}

        <div>
          <div
            className={`
          sticky top-5
          rounded-xl
          p-8
          min-h-18.5
          ${dark ? "bg-gray-900" : "bg-white"}
          `}
          >
            <div className="text-center">
              <h1 className="text-3xl font-bold">Preview</h1>

              <p>Frontend Developer</p>
            </div>

            <hr className="my-5" />

            <Preview title="SUMMARY" />

            <Preview title="SKILLS" />

            <Preview title="PROJECTS" />

            <Preview title="EXPERIENCE" />

            <button
              className="
            mt-8 w-full
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

    <div className="space-y-4">{children}</div>
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

const Preview = ({ title }) => (
  <div className="mb-6">
    <h2 className="text-xl font-bold mt-5">{title}</h2>

    <div
      className="
h-3
bg-gray-300
rounded-full
mt-2
"
    />
  </div>
);

export default Resume;
