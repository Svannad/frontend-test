import { useEffect } from "react";
import Female from "~/assets/female.png";

export default function LandingPage() {
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
    <div className="w-full animated-ombre-bg py-16 fade-in-section opacity-0 translate-y-8 transition-all duration-700">
      <section className="text-white px-36 flex justify-between">
        <div className="pb-6 w-[50%]">
          <h1 className="text-4xl font-light">
            Adtralza<span className="font-extralight">&reg;</span>
          </h1>
          <p>(tralokinumab)</p>
          <p className="italic font-extralight text-3xl mt-6">
            Adtralza&reg; is a new treatment for adult patients with moderate-to-serve
            atopic dermatitis(eczema) who are candidates for systemic therapy
          </p>
        </div>
        <div className="w-[45%] flex justify-end mb-[-64px]">
          <img
            src={Female}
          />
        </div>
      </section>
    </div>
  );
}
