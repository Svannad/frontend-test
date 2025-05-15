import { IoSearchOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="w-full pt-8">
      <section className="flex flex-row justify-between items-start mb-16 px-36">
        <div>
          <p className="font-bold text-2xl">
            DERMA{" "}
            <span className="font-serif relative group after:content-[''] after:absolute after:left-1 after:-bottom-1 after:h-[3px] after:w-full after:bg-sky-200">
              World
            </span>
          </p>
          <p className="text-xs">
            by <span className="font-bold">LEO Pharma</span>
          </p>
        </div>
        <div className="w-[30%]">
          <label className="flex flex-row justify-between items-center border-[1px] border-[#e6e7e8] rounded-full  py-4 px-6 w-full">
            <input type="text" placeholder="SEARCH" className="text-[12px]" />
            <IoSearchOutline size={20} />
          </label>
        </div>
      </section>
      <section className="flex justify-self-start px-36 pb-6">
        <ul className="flex flex-row gap-8 font-normal">
          <li>
            <a href="#">Bedingungen</a>
          </li>
          <li>
            <a href="#" className="italic relative inline-block">
              Behandlungen
              <span className="absolute left-1/2 -translate-x-1/2 top-9 mt-1 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-100"></span>
            </a>
          </li>
          <li>
            <a href="#">Veranstaltungen</a>
          </li>
          <li>
            <a href="#">Werkzeuge</a>
          </li>
          <li>
            <a href="#">Forschung und Erkenntnisse</a>
          </li>
        </ul>
      </section>
      <div className="flex justify-self-start bg-[#e6e7e8] w-full px-36 py-6">
        <ul className="flex flex-row gap-8 font-light text-[#01619d]">
          <li>
            <a
              href="#"
              className="relative group after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-current after:transition-all after:duration-300 italic"
            >
              Adtralza
              <span className="absolute left-1/2 -translate-x-1/2 top-9 mt-1 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#01619d]"></span>
            </a>
          </li>
          <li>
            <a href="#">Diavonex</a>
          </li>
          <li>
            <a href="#">Diavobet</a>
          </li>
          <li>
            <a href="#">Enstilar</a>
          </li>
          <li>
            <a href="#">Fucidin</a>
          </li>
          <li>
            <a href="#">Kyntheum</a>
          </li>
          <li>
            <a href="#">Protopic</a>
          </li>
          <li>
            <a href="#">Skinoren</a>
          </li>
          <li>
            <a href="#">Tralokinumab</a>
          </li>
          <li>
            <a href="#">Xamiol</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-self-start bg-[#01619d] w-full px-36 py-6">
        <ul className="flex flex-row gap-8 font-light text-[#e6e7e8]">
          <li>
            <a
              href="#"
              className="relative group after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:bg-current after:transition-all after:duration-300 italic"
            >
              Overview
            </a>
          </li>
          <li>
            <a href="#">Mode of action</a>
          </li>
          <li>
            <a href="#">Efficacy</a>
          </li>
          <li>
            <a href="#">Quality of Life</a>
          </li>
          <li>
            <a href="#">Safety</a>
          </li>
          <li>
            <a href="#">Dosing</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Technical Information</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
