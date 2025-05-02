import AboutEvent from "./AboutEvent";
import Location from "./Location";
import TagsDisplay from "./TagsDisplay";

export default function InfoTab(){
  return (
    <div className="mx-auto w-full">
      <TagsDisplay />
      <AboutEvent />
      <Location />
    </div>
  );
};