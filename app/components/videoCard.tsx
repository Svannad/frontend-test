import { FaPlay } from "react-icons/fa";

type VideoCardProps = {
  title: string;
  description: string;
};

export default function VideoCard({ title, description }: VideoCardProps) {
  return (
    <div className="flex items-center gap-8">
      <div className="w-[50%] h-38 bg-white flex items-center justify-center">
        <div className="w-12 h-12 bg-[#c123a5] rounded-full flex items-center justify-center pl-1">
          <FaPlay color="white" size={24} />
        </div>
      </div>
      <div className="w-[40%]">
        <h2 className="italic font-extralight text-[#01619d]">{title}</h2>
        <p className="italic font-extralight">{description}</p>
      </div>
    </div>
  );
}
