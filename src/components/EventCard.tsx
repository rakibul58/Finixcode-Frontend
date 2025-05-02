import difficultyIcon from "../assets/Difficulty Icons (1).png";
import mapPin from "../assets/location_on.png";
import takaIcon from "../assets/currency-bangladeshi.png";

interface EventCardProps {
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  spotsLeft: string;
  attending: string;
  price: string;
  tags: string[];
}

const EventCard = ({
  title,
  image,
  date,
  time,
  location,
  spotsLeft,
  attending,
  price,
  tags,
}: EventCardProps) => {
  return (
    <div className="rounded-[30px] border-[1.25px] border-light-gray-stroke overflow-hidden shadow-sm flex-shrink-0 w-full">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-[116px] object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex gap-1 mb-1">
          {tags.map((tag: string, index: number) => (
            <span
              key={index}
              className={`text-xs leading-[10px] tracking-[0%] font-normal px-[10px] py-2 rounded-full ${
                index === 0
                  ? "bg-[#D9F2E6] text-[#4A4A4A]"
                  : "bg-[#EFEDFF] text-[#4A4A4A]"
              }`}
            >
              {tag}
            </span>
          ))}

          <div className="ml-auto flex items-center">
            <img
              className="size-5 mr-[6px]"
              src={difficultyIcon}
              alt="Difficulty Icon"
            />
            <span className="text-xs font-normal text-[#4A4A4A] leading-[20px] tracking-[0%]">
              Advanced
            </span>
          </div>
        </div>

        <h3 className="text-2xl leading-[100%] tracking-[0%] font-medium text-pure-green mb-1">
          {title}
        </h3>

        <div className="flex items-center text-sm font-normal text-[#171717] leading-[100%] tracking-[0%] mb-1">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{time}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600 mb-7">
          <img className="size-[17.5px] mr-[5px]" src={mapPin} alt="Map Pin" />
          <span>{location}</span>
        </div>

        <div className="flex items-end justify-between border-gray-200 ">
          <span className="text-sm font-normal leading-[100%] tracking-[0%] text-[#171717]">{attending}</span>

          <div className="flex flex-col items-end gap-1">
            <span className="text-sm text-[#AA3333] font-normal leading-[100%] tracking-[0%]">
              {spotsLeft}
            </span>

            <div className="flex items-center">
              <div className="flex items-center">
                <img className="size-[22px] mr-[2px]" src={takaIcon} alt="Taka Icon" />
                <span className="font-normal text-2xl text-[#171717] leading-[100%] tracking-[0%]">{price}</span>
              </div>
              <span className="text-lg text-[#808080] font-normal leading-[100%] tracking-[0%]">/person</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
