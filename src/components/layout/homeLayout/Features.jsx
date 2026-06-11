import featuresData from "../../../data/featuresData";
import MultiActionAreaCard from "../../ui/MultiActionAreaCard";

const Features = ({ dark, setDark }) => {
  return (
    <section
      className={`py-16 px-6 ${dark ? "bg-[#342727] text-white" : "bg-white text-black"}`}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">Success Stories</h2>

        <p className="mt-4 text-gray-500">
          Students who improved their resumes and achieved their career goals.
        </p>
      </div>

      {/* User Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-6">
        {featuresData.map((item) => (
          <MultiActionAreaCard
            key={item.featureTitle}
            featureTitle={item.featureTitle}
            featureDescription={item.featureDescription}
            featureImg={item.featureImg}
            featureLink={item.featureLink}
          ></MultiActionAreaCard>
        ))}
      </div>
    </section>
  );
};

export default Features;
