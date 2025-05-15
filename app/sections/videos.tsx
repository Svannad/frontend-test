import { useEffect } from "react";
import VideoCard from "~/components/videoCard";

export default function Videos() {
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
    <div className="bg-[#e6e7e8] py-24 px-36 w-full fade-in-section opacity-0 translate-y-8 transition-all duration-700">
      <h1 className="italic font-extralight text-3xl text-[#01619d]">
        KOL videos - get expert insight here
      </h1>
      <p className="italic font-extralight pb-18">
        See what key opinion leaders have to say about their experiences with
        Adtralza&reg;
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <VideoCard
          title="Understanding Atopic Dermatitis: Expert Overview"
          description="Key opinion leaders discuss the underlying causes of Atopic Dermatitis."
        />
        <VideoCard
          title="Adtralza&reg; in Clinical Practice: Real-World Experiences"
          description="Leading dermatologists share their firsthand experiences prescribing Adtralza&reg; and the impact it has made on their patients’ quality of life."
        />
        <VideoCard
          title="Future Directions: The Role of IL-13 Inhibition in Dermatology"
          description="Thought leaders explore ongoing research and the potential future applications of IL-13 inhibitors like Adtralza&reg; in skin disease management."
        />
        <VideoCard
          title="Managing Side Effects and Patient Care with Adtralza&reg;"
          description="Specialists provide insights into safety profiles, common side effects."
        />
      </div>
    </div>
  );
}
