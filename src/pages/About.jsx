import Footer from "../components/layout/homeLayout/footer";
import React from "react";
import {
  FaUserGraduate,
  FaFileAlt,
  FaRobot,
  FaChartLine,
  FaBookOpen,
  FaBullseye,
} from "react-icons/fa";

const About = ({ dark }) => {
  return (
    <div
      className={`min-h-screen ${
        dark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">
          About <span className="text-blue-600">Placement Help</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          Placement Help is an AI-powered career support platform designed
          specifically for college students. Our mission is to simplify
          placement preparation by providing resume building, ATS analysis, mock
          interviews, study materials, and career guidance—all in one place.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div
          className={`rounded-2xl p-8 shadow-lg ${
            dark ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Our Mission</h2>

          <p className="text-center text-lg leading-relaxed">
            Many students struggle with placement preparation because they don't
            know where to start. Placement Help aims to bridge this gap by
            providing smart tools and personalized guidance that help students
            become industry-ready and confident.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <FaFileAlt />,
              title: "Resume Builder",
              desc: "Create professional resumes easily and download them as PDF.",
            },
            {
              icon: <FaRobot />,
              title: "AI Resume Analysis",
              desc: "Get ATS score, identify weak points, and improve your resume.",
            },
            {
              icon: <FaUserGraduate />,
              title: "AI Mock Interview",
              desc: "Practice interview questions generated according to your profile.",
            },
            {
              icon: <FaChartLine />,
              title: "Career Guidance",
              desc: "Get suggestions on skills and technologies required for placements.",
            },
            {
              icon: <FaBookOpen />,
              title: "Study Materials",
              desc: "Access aptitude notes, coding resources, and interview preparation content.",
            },
            {
              icon: <FaBullseye />,
              title: "Placement Readiness",
              desc: "Track progress and prepare systematically for jobs and internships.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${
                dark ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="text-4xl text-blue-600 mb-4">{item.icon}</div>

              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Why Choose Placement Help?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            className={`p-8 rounded-xl ${
              dark ? "bg-gray-800" : "bg-white"
            } shadow-md`}
          >
            <h3 className="text-2xl font-semibold mb-4">All-in-One Platform</h3>

            <p>
              No need to switch between multiple websites. Everything related to
              placement preparation is available in a single platform.
            </p>
          </div>

          <div
            className={`p-8 rounded-xl ${
              dark ? "bg-gray-800" : "bg-white"
            } shadow-md`}
          >
            <h3 className="text-2xl font-semibold mb-4">AI-Powered Support</h3>

            <p>
              Smart recommendations, resume analysis, ATS scoring, and interview
              preparation powered by AI technology.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Vision</h2>

        <p className="max-w-4xl mx-auto text-lg leading-relaxed">
          We envision a future where every student has equal access to quality
          placement preparation resources. Placement Help aims to become the
          go-to platform for students seeking jobs, internships, and career
          growth opportunities.
        </p>
      </section>
      <Footer dark={dark} />
    </div>
  );
};

export default About;
