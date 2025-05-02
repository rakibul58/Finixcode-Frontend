import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import img1 from "../assets/Date drop-down box.png";
import img2 from "../assets/Date drop-down box (1).png";

const EventsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  // Sample events data
  const events = [
    {
      id: 1,
      title: "Legends Rise on the Field",
      image: img1,
      date: "Thu, Dec 5",
      time: "12:30AM - 12:30PM",
      location: "Bashundhara Sports Complex",
      spotsLeft: "2 spots left",
      attending: "6/8 attending",
      price: "320",
      tags: ["Football", "Below 25y"],
    },
    {
      id: 2,
      title: "Chasing Glory: Football Showdown",
      image: img2,
      date: "Thu, Dec 5",
      time: "12:30AM - 12:30PM",
      location: "Bashundhara Sports Complex",
      spotsLeft: "2 spots left",
      attending: "6/8 attending",
      price: "320",
      tags: ["Football", "Below 25y"],
    },
    {
      id: 3,
      title: "United We Play, United Win",
      image: img1,
      date: "Thu, Dec 5",
      time: "12:30AM - 12:30PM",
      location: "Bashundhara Sports Complex",
      spotsLeft: "2 spots left",
      attending: "6/8 attending",
      price: "320",
      tags: ["Football", "Below 25y"],
    },
    {
      id: 4,
      title: "Football Champions League",
      image: img2,
      date: "Fri, Dec 6",
      time: "12:30AM - 12:30PM",
      location: "Bashundhara Sports Complex",
      spotsLeft: "3 spots left",
      attending: "5/8 attending",
      price: "320",
      tags: ["Football", "Below 25y"],
    },
    {
      id: 5,
      title: "Weekend Football Tournament",
      image: img1,
      date: "Sat, Dec 7",
      time: "12:30AM - 12:30PM",
      location: "Bashundhara Sports Complex",
      spotsLeft: "4 spots left",
      attending: "4/8 attending",
      price: "320",
      tags: ["Football", "Below 25y"],
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 768) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= events.length - visibleItems + 1 ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? events.length - visibleItems : nextIndex;
    });
  };

  return (
    <div className="max-w-[1360px] w-full mx-auto md:px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-[#261B36] leading-[32px] tracking-[0%]">
          Other events you may like
        </h2>

        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="size-12 flex items-center justify-center rounded-full bg-light-yellow hover:bg-gray-200 transition-colors"
            aria-label="Previous events"
          >
            <ChevronLeft className="size-6 text-[#4A4A4A]" />
          </button>
          <button
            onClick={nextSlide}
            className="size-12 flex items-center justify-center rounded-full bg-light-yellow hover:bg-gray-200 transition-colors"
            aria-label="Next events"
          >
            <ChevronRight className="size-6 text-[#4A4A4A]" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out gap-4"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            width: `${(events.length * 100) / visibleItems}%`,
          }}
        >
          {events.map((event) => (
            <div
              key={event.id}
              className=""
              style={{ width: `${100 / events.length}%` }}
            >
              <EventCard {...event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsCarousel;
