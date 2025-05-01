import difficultyIcon from "../assets/Difficulty Icons.png";

const TagsDisplay = () => {
  const tags = [
    { label: "Football", color: "bg-[#E6F8F8]" },
    { label: "Relay", color: "bg-[#E6F8F8]" },
    { label: "Female", color: "bg-[#FFE8F0]" },
    { label: "Age: Below 25", color: "bg-[#EFEDFF]" },
  ];

  return (
    <div className="flex items-center border-b-2 border-light-gray-stroke h-[177px] my-auto">
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <div
            key={index}
            className={`${tag.color} px-6 py-5 rounded-full text-2xl leading-[20px] tracking-[0%] font-normal text-[#4A4A4A]`}
          >
            {tag.label}
          </div>
        ))}
      </div>

      <div className="ml-auto flex items-center gap-2">
        <img src={difficultyIcon} alt="Difficulty image" />
        <span className="text-[#4A4A4A] font-normal text-2xl">Beginner</span>
      </div>
    </div>
  );
};

export default TagsDisplay;
