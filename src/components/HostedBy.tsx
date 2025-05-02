import person from "../assets/Frame 1984079473.png";

export default function HostedBy() {
  return (
    <div className="min-h-[330px] my-auto flex flex-col items-start justify-center py-10 md:py-0 ">
      <div className="w-full mx-auto">
        <h2 className="text-[32px] leading-[28px] tracking-[0%] font-bold text-night-black mb-6">
          Hosted by
        </h2>

        <div className="bg-gray-blue py-[27px] px-6 rounded-2xl w-full max-w-[720px]">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="size-[96px] rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={person}
                  alt="Alex Mercer profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
                <h3 className="text-2xl font-bold leading-[22px] tracking-[0%] text-white mb-[6px]">
                  Alex Mercer
                </h3>
                <p className="text-[#F6F6F6] text-[16px] leading-[22px] font-normal">
                  <span className="font-medium text-white">23</span> activities
                  hosted
                </p>
                <p className=" text-[#F6F6F6] text-[16px] leading-[22px] font-normal">
                  <span className="font-medium text-white">4.5</span> host
                  rating
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-0">
              <button className="bg-light-apricot px-[27px] py-[10px] rounded-full hover:bg-[#f5d4b0] transition-colors font-medium text-night-black text-[16px] leading-[22px] cursor-pointer">
                Message
              </button>
              <button className="border border-light-apricot text-light-apricot px-4 py-[10px] rounded-full hover:bg-gray-600 transition-colors cursor-pointer font-medium text-[16px] leading-[22px]">
                View profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
