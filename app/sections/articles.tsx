import ArticleCard from "~/components/articleCard";
import Expert from "~/assets/expert.jpeg";
import Injection from "~/assets/injections.jpeg";
import { useEffect } from "react";

export default function Articles() {
   useEffect(() => {
      const fadeInSections = document.querySelectorAll(".fade-in-section");
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("opacity-100", "translate-y-0");
              entry.target.classList.remove("opacity-0", "translate-y-8");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
  
      fadeInSections.forEach((section) => observer.observe(section));
  
      return () => observer.disconnect();
    }, []);

  return (
    <div className="flex flex-col gap-6 py-24 px-36 fade-in-section opacity-0 translate-y-8 transition-all duration-700">
      <h1 className="italic font-extralight text-3xl text-[#01619d]">
        Clinical tools - at a glance
      </h1>
      <section className="flex flex-row items-center justify-start gap-6">
        <ArticleCard
          image={Expert}
          title="Dosing Guide"
          description="Adtralza&reg; has a straightforward dosing regimen, with 150 mg prefilled syringes(1)."
          linkText="Learn more about application and dosing"
        />
        <ArticleCard
          image={Injection}
          title="Patient injection made simple"
          description="This step by step video guide shows the patient how to self inject using the two syringes that come in the Adtralza&reg; carton"
          linkText="Watch the video"
        />
      </section>
    </div>
  );
}
