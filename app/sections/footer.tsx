import LeoLogo from "~/assets/leo-logo.svg";
import { FiChevronDown } from "react-icons/fi";
import { useEffect } from "react";

export default function Footer() {
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
    <div className="w-full fade-in-section opacity-0 translate-y-8 transition-all duration-700">
      <section className="flex items-start gap-3  px-36 py-4 bg-gray-300">
        <div className="w-12 h-12 rounded-full bg-[#01619d] flex items-center justify-center pt-1">
          <FiChevronDown color="white" size={30} />
        </div>
        <p className="italic font-extralight text-2xl text-[#01619d] pl-4">
          References
        </p>
      </section>
      <div className="bg-[#01619d] px-36 py-16 flex flex-row justify-between items-end text-gray-300 font-extralight text-sm">
        <section className="self-start">
          <img src={LeoLogo} alt="Leo" className="w-25 h-25" />
        </section>
        <section>
          <ul className="flex flex-row justify-center items-center gap-4 text-sm">
            <li>Contact</li>
            <li className="border-l border-gray-400 pl-4">Imprint</li>
            <li className="border-l border-gray-400 pl-4">Conditions</li>
            <li className="border-l border-gray-400 pl-4">Term of Use</li>
            <li className="border-l border-gray-400 pl-4">Privacy</li>
            <li className="border-l border-gray-400 pl-4">Cookie Content</li>
          </ul>
        </section>
        <section>
          <ul className="text-right italic flex flex-col gap-2">
            <li>&copy; Copyright LEO Pharma 2020</li>
            <li>LEO and the LEO Lion Design</li>
            <li>are registered trademarks</li>
            <li>of LEO Pharma</li>
            <li className="pb-8">All rights reserved</li>
            <li className="underline">LEO Pharma corporate website</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
