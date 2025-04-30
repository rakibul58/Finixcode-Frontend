import { ChangeEvent, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import navLogo from "../assets/navLogo.png";
import calendarImg from "../assets/calendar.png";
import searchImg from "../assets/Search.png";
import leaderboardImg from "../assets/Jithbo icon.png";
import userImage from "../assets/ix_user-profile-filled.png";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleButtonClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };

  const formatDisplayDate = (dateString: string) => {
    if (!dateString) return "Select date";

    const date = new Date(dateString);
    const options = {
      year: "numeric" as const,
      month: "long" as const,
      day: "numeric" as const,
    };
    return date.toLocaleDateString("en-US", options);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="w-full bg-white py-3 md:px-4 max-w-[1360px] mx-auto px-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={navLogo} alt="Navbar Logo" className="h-10" />
        </div>

        <div className="hidden md:flex items-center gap-2 flex-grow justify-center max-w-xl">
          <div className="relative flex-grow max-w-[260px]">
            <input
              ref={dateInputRef}
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="absolute opacity-0 w-0 h-0"
              aria-hidden="false"
            />

            <button
              className="flex items-center justify-between gap-2 pr-2 pl-4 py-2 rounded-full shadow-md border border-light-gray hover:bg-gray-200 transition-colors w-full"
              onClick={handleButtonClick}
              aria-label="Open date picker"
            >
              <span className="text-[#6A6A6A] font-normal text-sm">
                {formatDisplayDate(selectedDate)}
              </span>
              <div className="bg-jithbo-green rounded-full p-1">
                <img src={calendarImg} alt="Calendar" className="w-5 h-5" />
              </div>
            </button>
          </div>

          <div className="relative flex-grow max-w-[260px]">
            <div className="relative bg-white">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 pl-4 pr-10 rounded-full shadow-md border border-light-gray focus:outline-none placeholder:font-normal placeholder:text-sm placeholder:text-[#6A6A6A]"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="bg-[#E5E5E5] p-1 rounded-full">
                  <img src={searchImg} alt="Search" className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-light-yellow hover:bg-yellow-50 cursor-pointer transition-colors">
              <img src={leaderboardImg} alt="Leaderboard" className="w-5 h-5" />
              <span className="text-pure-green text-base font-medium">
                Leaderboard
              </span>
            </button>
          </div>

          <div className="hidden lg:flex">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-pure-green hover:bg-green-50 transition-colors">
              <span className="text-pure-green text-base font-medium">
                Login / Sign up
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2 border-2 shadow border-light-gray px-2 rounded-full">
            <button
              className="p-1 rounded-full hover:bg-gray-100 md:hidden"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="text-gray-600" size={20} />
              ) : (
                <Menu className="text-gray-600" size={20} />
              )}
            </button>
            <button className="hidden md:block p-1 rounded-full hover:bg-gray-100">
              <Menu className="text-gray-600" size={20} />
            </button>
            <button className="p-1 rounded-full size-9">
              <img src={userImage} alt="User" className="w-full h-full" />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 pl-4 pr-10 rounded-full shadow-md border border-light-gray focus:outline-none placeholder:font-normal placeholder:text-sm placeholder:text-[#6A6A6A]"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <div className="bg-[#E5E5E5] p-1 rounded-full">
                  <img src={searchImg} alt="Search" className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="relative">
              <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="absolute opacity-0 w-0 h-0"
                aria-hidden="false"
              />
              <button
                className="flex items-center justify-between gap-2 pr-2 pl-4 py-2 rounded-full shadow-md border border-light-gray hover:bg-gray-200 transition-colors w-full"
                onClick={handleButtonClick}
                aria-label="Open date picker"
              >
                <span className="text-[#6A6A6A] font-normal text-sm">
                  {formatDisplayDate(selectedDate)}
                </span>
                <div className="bg-jithbo-green rounded-full p-1">
                  <img src={calendarImg} alt="Calendar" className="w-5 h-5" />
                </div>
              </button>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-light-yellow hover:bg-yellow-50 cursor-pointer transition-colors">
              <img src={leaderboardImg} alt="Leaderboard" className="w-5 h-5" />
              <span className="text-pure-green text-base font-medium">
                Leaderboard
              </span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-pure-green hover:bg-green-50 transition-colors">
              <span className="text-pure-green text-base font-medium">
                Login / Sign up
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
