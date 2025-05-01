import { useState, lazy } from "react";
import { Heart, MoreVertical, Upload } from "lucide-react";
import PlayersList from "./PlayerList";
import ChatTab from "./ChatTab";
import InfoTab from "./InfoTab";
const PaymentMethodPopup = lazy(() => import("./PaymentMethodPopup"));

export default function EventDetails() {
  const [activeTab, setActiveTab] = useState("Info");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const tabs = ["Info", "Player", "Comments"];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const openPaymentModal = () => {
    setShowPaymentModal(true);
  };

  const closePaymentModal = () => {
    setShowPaymentModal(false);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="max-w-[1360px] w-full mx-auto lg:px-4 pb-10">
      <div className="flex justify-between items-start lg:flex-row flex-col-reverse gap-12 lg:gap-[60px]">
        <div className="pb-0 w-full max-w-[900px] mx-auto lg:mx-0 lg:px-0 px-4">
          <div className="flex justify-between w-full items-start">
            <h1 className="text-5xl leading-[64px] tracking-normal text-night-black font-[900]">
              Road to the Football Finals
            </h1>
            <div className="flex space-x-2 mt-1">
              <button
                className="size-[42px] rounded-full bg-light-gray border border-light-gray-stroke transition-colors"
                aria-label="Download"
              >
                <Upload className={`mx-auto my-auto text-[#4A4A4A]`} />
              </button>
              <button
                className="size-[42px] rounded-full bg-light-gray border border-light-gray-stroke transition-colors"
                aria-label="Favorite"
                onClick={toggleFavorite}
              >
                <Heart
                  className={`${
                    isFavorite
                      ? "text-red-500 fill-red-500"
                      : "text-[#4A4A4A] fill-[#4A4A4A]"
                  } h-[18.2px] w-[15.53px] mx-auto my-auto`}
                />
              </button>
              <button
                className="rounded-full hover:bg-gray-100 transition-colors size-[42px]"
                aria-label="More options"
              >
                <MoreVertical size={20} className="text-gray-600" />
              </button>
            </div>
          </div>

          <div className="mt-2">
            <p className="font-normal text-[#4A4A4A] leading-[22px] text-2xl mb-2">
              Bashundhara Sports Complex
            </p>
            <p className="font-normal text-[#4A4A4A] leading-[22px] text-2xl ">
              Mar 14 from 7:30 PM - 9:30 PM
            </p>
          </div>

          <div className="flex flex-col lg:flex-row mt-8">
            <div className="flex-grow">
              <div className="mt-4">
                <div className="flex justify-around w-full text-center">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      className={`px-6 py-3 text-2xl font-medium w-full cursor-pointer ${
                        activeTab === tab
                          ? "border-b-2 border-terra-cotta text-terra-cotta"
                          : "text-night-black hover:text-gray-700 border-b-2 border-light-gray-stroke"
                      }`}
                      onClick={() => handleTabChange(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="py-6 lg:px-0 px-4">
                {activeTab === "Info" && (
                  <div>
                    <InfoTab />
                  </div>
                )}

                {activeTab === "Player" && (
                  <div>
                    <PlayersList />
                  </div>
                )}

                {activeTab === "Comments" && (
                  <div>
                    <ChatTab />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[400px] mx-auto lg:mx-0 p-6 bg-white rounded-2xl">
          <div className="mb-4 p-4 border border-light-gray-stroke rounded-2xl">
            <div className="flex justify-between items-center">
              <span className="text-terra-cotta font-medium text-[16px]">
                6 spots left
              </span>
              <span className="text-night-black text-lg font-bold">
                320tk /player{" "}
                <span className="text-xs font-normal text-[14px] text-[#808080]">
                  (both)
                </span>
              </span>
            </div>
          </div>

          <button
            onClick={openPaymentModal}
            className="w-full py-3 rounded-full bg-jithbo-green text-night-black font-bold text-[18px] hover:shadow-lg transition-shadow duration-200 ease-in-out cursor-pointer"
          >
            Join event
          </button>
        </div>
      </div>

      {showPaymentModal && (
        <PaymentMethodPopup
          isOpen={showPaymentModal}
          onClose={closePaymentModal}
        />
      )}
    </div>
  );
}
