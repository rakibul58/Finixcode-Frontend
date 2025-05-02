const Location = () => {
  return (
    <div
      className="flex flex-col items-start justify-center
     border-b-2 border-light-gray-stroke min-h-[290px] my-auto"
    >
      <div className="w-full">
        <h2 className="text-[32px] leading-[28px] tracking-[0%] font-bold text-night-black">
          Location
        </h2>
        <div className="flex flex-col md:flex-row md:items-start justify-between w-full mt-10">
          <div className="">
            <h3 className="text-2xl font-bold text-gray-blue">NDE Field</h3>
            <p className="text-[#4A4A4A] text-lg font-normal mt-1">
              Jean Baptiste Point du Sable Lake Shore Drive, Chicago, Illinois
            </p>
          </div>
          <div>
            <button className="border border-gray-400 rounded-full py-2 px-6 text-gray-700 hover:bg-gray-50 transition-colors">
              Open maps
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
