import { useState, lazy } from "react";
import { Heart, MoreVertical } from "lucide-react";
import uploadImg from "../assets/upload.png";
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
    <div className="max-w-[1360px] w-full mx-auto md:px-4 pb-10">
      <div className="flex justify-between items-start md:flex-row flex-col-reverse gap-6 md:gap-[60px]">
        <div className="pb-0 w-full max-w-[900px] mx-auto md:mx-0">
          <div className="flex justify-between w-full items-start">
            <h1 className="text-5xl leading-[64px] tracking-normal text-night-black font-[900]">
              Road to the Football Finals
            </h1>
            <div className="flex space-x-2 mt-1">
              <button
                className="size-[42px] rounded-full"
                aria-label="Download"
              >
                <img src={uploadImg} alt="Upload Image" />
              </button>
              <button
                className="size-[42px] rounded-full bg-light-gray border-2 border-light-gray-stroke transition-colors"
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
                className="p-2 rounded-full hover:bg-gray-100 transition-colors size-[42px]"
                aria-label="More options"
              >
                <MoreVertical size={20} className="text-gray-600" />
              </button>
            </div>
          </div>

          <div className="mt-2">
            <p className="font-normal text-[#4A4A4A] leading-[22px] text-2xl mb-1">
              Bashundhara Sports Complex
            </p>
            <p className="font-normal text-[#4A4A4A] leading-[22px] text-2xl">
              Mar 14 from 7:30 PM - 9:30 PM
            </p>
          </div>

          <div className="flex flex-col md:flex-row mt-8">
            <div className="flex-grow">
              <div className="mt-4">
                <div className="flex justify-around w-full text-center">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      className={`px-6 py-3 text-2xl font-medium w-full ${
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

              {/* Tab content */}
              <div className="p-6">
                {activeTab === "Info" && (
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                        Football
                      </span>
                      <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                        Relay
                      </span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">
                        Female
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                        Age: Below 25
                      </span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">
                        Beginner
                      </span>
                    </div>

                    <h2 className="text-xl font-bold mb-3">About this event</h2>
                    <p className="text-gray-700 mb-2">
                      Learn about the capital's first beavers in 400 years from
                      the Ealing Beaver project, make your own mushroom growing
                      starter kit with urban agriculture experts, before joining
                      Roma the Engineer to get into the nuts and bolts of
                      tomorrow's high-rise buildings.
                    </p>
                    <button className="text-blue-500 font-medium">
                      Read more
                    </button>
                  </div>
                )}

                {activeTab === "Player" && (
                  <div>
                    <h2 className="text-xl font-bold mb-4">
                      Player Information
                    </h2>
                    <p className="text-gray-700">
                      Player registration and team details will appear here.
                    </p>
                    {/* Additional player information would go here */}
                  </div>
                )}

                {activeTab === "Comments" && (
                  <div>
                    <h2 className="text-xl font-bold mb-4">Comments</h2>
                    <p className="text-gray-700">
                      No comments yet. Be the first to comment!
                    </p>
                    {/* Comments would go here */}
                  </div>
                )}
              </div>
            </div>

            {/* Right sidebar with event details */}
          </div>
        </div>

        <div className="w-full max-w-[400px] mx-auto md:mx-0 p-6 bg-white rounded-2xl">
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
            className="w-full py-3 rounded-full bg-jithbo-green text-night-black font-bold text-[18px] hover:shadow-md transition-shadow duration-200 ease-in-out"
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
