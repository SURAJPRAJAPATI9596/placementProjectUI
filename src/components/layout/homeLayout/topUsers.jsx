import { useEffect, useState } from "react";
import { users } from "../../../data/topUserData";
import Counter from "../../ui/Counter.jsx";
import { GrDocumentPdf } from "react-icons/gr";
function TopUsers({ dark, setDark }) {
  return (
    <section
      className={`py-16 px-6 ${dark ? "bg-[#0F172A] text-[#FFFFFF]" : "bg-[#FFFFFF] text-[#111827]"}`}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2
          className={`text-3xl md:text-5xl font-bold ${dark ? "bg-[#0F172A] text-[#FFFFFF]" : "bg-[#FFFFFF] text-[#111827]"}`}
        >
          Success Stories
        </h2>

        <p
          className={`mt-4 text-gray-500 ${dark ? "bg-[#0F172A] text-[#FFFFFF]" : "bg-[#FFFFFF] text-[#111827]"}`}
        >
          Students who improved their resumes and achieved their career goals.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="text-center p-4 shadow rounded-xl">
          <h3 className="text-2xl font-bold">
            <Counter number={10000} time={0.01} />
          </h3>
          <p>Resumes Created</p>
        </div>

        <div className="text-center p-4 shadow rounded-xl">
          <h3 className="text-2xl font-bold">
            <Counter number={10000} time={1} />
          </h3>
          <p>ATS Checks</p>
        </div>

        <div className="text-center p-4 shadow rounded-xl">
          <h3 className="text-2xl font-bold">
            <Counter number={100} time={1} />
          </h3>
          <p>Interview Prep</p>
        </div>

        <div className="text-center p-4 shadow rounded-xl">
          <h3 className="text-2xl font-bold">
            <Counter number={1000} time={1} />
          </h3>
          <p>Success Stories</p>
        </div>
      </div>

      {/* User Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className={`rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition duration-300 border border-b-blue-50 ${dark ? "bg-[#1E293B] text-[#FFFFFF] border-[#334155]" : "bg-[#F8FAFC] text-[#111827] border-[#CBD5E1]"}`}
          >
            <img
              src={user.img}
              alt={user.name}
              className="w-24 h-24 rounded-full mx-auto object-cover"
            />

            <h3 className="mt-4 text-xl font-semibold">{user.name}</h3>

            <p className="text-gray-500">{user.role}</p>

            <p className="mt-2 font-medium">{user.company}</p>

            <p className="mt-2">
              ATS Score: <span className="font-bold">{user.score}</span>
            </p>

            <button className="mt-4 px-4 py-2 rounded-lg bg-black text-white">
              View Profile
            </button>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <button className="px-6 py-3 rounded-xl bg-blue-600 text-white">
          View All Success Stories
        </button>
      </div>
    </section>
  );
}

export default TopUsers;
