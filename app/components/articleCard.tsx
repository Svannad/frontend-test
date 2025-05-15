type ArticleCardProps = {
  image: string;
  title: string;
  description: string;
  linkText: string;
};

export default function ArticleCard({
  image,
  title,
  description,
  linkText,
}: ArticleCardProps) {
  return (
    <section className="bg-[#e6e7e8] w-[50%]">
      <div className="w-full h-[300px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-8 py-6 flex flex-col gap-4">
        <h2 className="italic font-extralight text-2xl text-[#01619d]">
          {title}
        </h2>
        <p className="italic font-extralight">{description}</p>
        <a
          href="#"
          className="text-normal text-[#c123a5] font-light italic"
        >
          {linkText}
        </a>
      </div>
    </section>
  );
}
