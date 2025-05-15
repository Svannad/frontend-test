import { useEffect } from "react";
import Dermititis from "~/assets/dermititis.jpg";

export default function Info() {
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
    <div className="w-full pl-36 bg-[#e6e7e8] flex fade-in-section opacity-0 translate-y-8 transition-all duration-700">
      <section className="w-[50%] flex flex-col gap-8 items-start  py-16">
        <p className="italic font-extralight text-3xl text-[#01619d] pb-6">
          Adtralza&reg; neutralizes IL-13, a key driver of Atopic Dermatitis
          signs and symptoms.
        </p>
        <p className="italic font-extralight">
          By specifically targeting the IL-13 cytokine, Adtralza&reg; inhibits
          the interaction with type II receptors and prevents IL-13-induced
          inflammatory responses in the skin(1,2).
        </p>
        <p className="italic font-extralight">
          Adtralza&reg; selectively modulates the dysregulated immune system
          by(1):
        </p>
        <ul className="italic font-extralight space-y-1">
          <li className="flex items-center gap-2">
            <span className="w-6 h-px bg-[#01619d]"></span>
            <span>Reducing markers of skin inflammation</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-6 h-px bg-[#01619d]"></span>
            <span>Improving markers of skin barrier integrity</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-6 h-px bg-[#01619d]"></span>
            <span>Reducing epidermal thickness</span>
          </li>
        </ul>

        <a
          href="#"
          className="bg-[#c123a5] rounded-full px-8 py-4 font-light text-xl text-white italic"
        >
          Watch the video
        </a>
        <p className="italic font-extralight text-sm">Duration: 2:43</p>
      </section>
      <section className="w-[40%] relative">
        <img
          src={Dermititis}
          alt="Dermatitis"
          className="absolute top-0 right-[-130px] h-full w-full object-cover"
        />
      </section>
    </div>
  );
}
