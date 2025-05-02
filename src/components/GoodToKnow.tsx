import calendarIcon from "../assets/calendar (2).png";
import clockIcon from "../assets/clock.png";
import tableIcon from "../assets/tabler_soccer-field.png";

const GoodToKnow = () => {
  return (
    <div
      className="flex flex-col items-start justify-center
     border-b-2 border-light-gray-stroke min-h-[424px] my-auto
    "
    >
      <div className="w-full py-10 md:py-0">
        <h2 className="text-[32px] leading-[22px] tracking-[0%] font-bold text-night-black mb-8">
          Good to know
        </h2>

        <div className="flex flex-wrap gap-3">
          <div className="bg-terra-cotta w-[300px] text-[#F7F7F7] p-6 rounded-2xl">
            <h3 className="text-2xl leading-[100%] tracking-[0%] font-bold mb-4">
              Highlights
            </h3>

            <div className="space-y-[9px]">
              <div className="flex items-center gap-2">
                <img
                  className="size-[18px]"
                  src={calendarIcon}
                  alt="Calendar Icon"
                />
                <span className="font-medium text-[18px] leading-[100%] tracking-[0%]">
                  Mon, 2 Dec
                </span>
              </div>

              <div className="flex items-center gap-2">
                <img className="size-[18px]" src={clockIcon} alt="Clock Icon" />
                <span className="font-medium text-[18px] leading-[100%] tracking-[0%]">
                  7.30 AM - 8.30 AM
                </span>
              </div>

              <div className="flex items-center gap-2">
                <img className="size-[18px]" src={clockIcon} alt="Clock Icon" />
                <span className="font-medium text-[18px] leading-[100%] tracking-[0%]">
                  Arrive 18 min before start
                </span>
              </div>

              <div className="flex items-center gap-2">
                <img className="size-[18px]" src={tableIcon} alt="Table Icon" />
                <span className="font-medium text-[18px] leading-[100%] tracking-[0%]">
                  Venue booked
                </span>
              </div>
            </div>
          </div>

          <div className="bg-pure-green text-[#F7F7F7] p-6 w-[523px] rounded-2xl">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">
                Refund & cancellation policy
              </h3>
            </div>

            <ul className="list-disc pl-5 font-medium leading-[100%] tracking-[0%] space-y-[6px] list mb-4 text-lg">
              <li>Full refund if host cancels the game</li>
              <li>Full refund if you cancel 24+ hours in advance</li>
              <li>Full refund if game is cancelled due to low attendance</li>
            </ul>

            <div className="text-right mr-4">
              <button className="text-white hover:underline text-[16px] font-normal leading-[100%] tracking-[0%]">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodToKnow;
