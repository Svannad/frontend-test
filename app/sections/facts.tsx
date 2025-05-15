import FactCard from "~/components/factCard";
import { LuHandHeart } from "react-icons/lu";
import { GoShieldCheck } from "react-icons/go";
import { MdOutlineMoreTime } from "react-icons/md";
import { useEffect } from "react";

export default function Facts() {
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
    <div className="flex flex-row justify-between items-start px-36 py-16 fade-in-section opacity-0 translate-y-8 transition-all duration-700">
    <FactCard
      Icon={MdOutlineMoreTime}
      title="Long term sustained improvement"
      description="9 out of 10 respondents experienced sustained disease control in clinical trials 10, providing sustained improvements in the burden of disease(1,2, 1, 8*)."
      linkText="See efficacy and trial data"
    />
    <FactCard
      Icon={LuHandHeart}
      title="Improvements in the burden of disease"
      description="Patients in clinical trials saw an improvement in Quality of Life with early symptom relief and sustained improvements from week 16 to 32 (12,13)."
      linkText="Learn more about quality of life improvements"
    />
    <FactCard
      Icon={GoShieldCheck}
      title="Good safety profile"
      description="Adtralza® demonstrated a favorable safety profile in clinical trials, with most adverse events being mild or moderate and consistent with those observed in other biologics for atopic dermatitis (5,6)."
      linkText="See safety profile"
    />
    </div>
  )
}