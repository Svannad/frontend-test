import { useEffect } from "react";
import Product from "~/assets/adtralza.png";

export default function ProductSection() {
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
    <div className="w-full py-16 px-36 bg-[#e6e7e8] fade-in-section opacity-0 translate-y-8 transition-all duration-700">
      <section className="flex items-center gap-12">
        <div className="w-[30%] mr-36">
          <img src={Product}/>
        </div>
        <section className="w-[50%]">
          <p className="italic font-extralight text-3xl text-[#01619d] pb-6">
            It is the first and only biologic developed to specifically neutralize IL-13, a key driver of atopic dermatitis signs and symptoma(1,2)
          </p>
          <p className="italic font-extralight text-xl">
            Learn more about how Adtralza&reg; works and how to use it in treatment.
          </p>
        </section>
      </section>
    </div>
  );
}
