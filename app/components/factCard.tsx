type FactCardProps = {
  title: string;
  description: string;
  linkText: string;
};

export default function FactCard({
  Icon,
  title,
  description,
  linkText,
}: FactCardProps) {
  return (
    <div className="flex flex-col justify-between items-center text-center px-10 w-[30%]">
      <section className="pb-6">
        <div className="w-45 h-45 flex flex-col items-center justify-center rounded-full bg-white shadow-lg shadow-[#01619d]"
        style={{ boxShadow: "0 6px 8px rgba(1, 97, 157, 0.3)" }}>
          {Icon && <Icon size={80} color="#01619d" />}
        </div>
      </section>
      <section className="font-light italic py-6">
        <h3 className="text-[#01619d] text-xl">{title}</h3>
        <p className="text-normal">{description}</p>
      </section>
      <a href="#" className="text-normal text-[#c123a5] font-light italic">
        {linkText}
      </a>
    </div>
  );
}

