export default function AboutEvent() {
  return (
    <div
      className="flex flex-col items-start justify-center
     border-b-2 border-light-gray-stroke min-h-[290px] my-auto"
    >
      <h2 className="font-bold text-[32px] leading-[32px] tracking-[0%] text-night-black mb-10">
        About this event
      </h2>
      <p className="text-[16px] leading-[24px] tracking-[0%] font-normal text-night-black max-w-[720px]">
        Learn about the capital&apos;s first beavers in 400 years from the
        Ealing Beaver project, make your own mushroom growing starter kit with
        urban agriculture experts, before joining Roma the Engineer to get into
        the nuts and bolts of tomorrow&apos;s high-rise buildings.
      </p>
      <a
        className="text-primary-blue underline mt-3 font-normal text-[16px] leading-[24px] tracking-[0%]"
        href=""
      >
        Read more
      </a>
    </div>
  );
}
