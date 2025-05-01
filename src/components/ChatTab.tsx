import { CornerDownRight, MoreVertical } from "lucide-react";

export default function ChatTab() {
  const messages = [
    {
      id: 1,
      sender: "Alex Mercer",
      initials: "AM",
      message: "Looking forward to the game! What's the final player count?",
      time: "14 min",
      isSender: true,
    },
    {
      id: 2,
      sender: "Rifat Khan",
      initials: "RK",
      message: "missing few players",
      time: "14 min",
      isSender: false,
    },
    {
      id: 3,
      sender: "Rifat Khan",
      initials: "RK",
      message: "got any friends?",
      time: "14 min",
      isSender: false,
    },
    {
      id: 4,
      sender: "Alex Mercer",
      initials: "AM",
      message: "Looking forward to the game! What's the final player count?",
      time: "14 min",
      isSender: true,
    },
    {
      id: 5,
      sender: "Alex Mercer",
      initials: "AM",
      message: "Looking forward to the game! What's the final player count?",
      time: "14 min",
      isSender: true,
    },
    {
      id: 6,
      sender: "Rifat Khan",
      initials: "RK",
      message: "got any friends?",
      time: "14 min",
      isSender: false,
    },
  ];

  return (
    <div className="mx-auto w-full rounded-[30px] bg-white">
      <div className="p-5">
        {messages.map((message, index: number) => (
          <div
            key={message.id}
            className={`${
              !message.isSender &&
              "relative"
            }`}
          >
            <div className="absolute left-0 top-0 h-full w-0">
              <div className="h-3 w-0.5 bg-light-gray-stroke"></div>
              <div className="h-3 w-0.5 bg-transparent"></div>
              <div className="h-3 w-0.5 bg-light-gray-stroke"></div>
              <div className="h-3 w-0.5 bg-transparent"></div>
              <div className="h-3 w-0.5 bg-light-gray-stroke"></div>
              <div className="h-3 w-0.5 bg-transparent"></div>
              <div className="h-3 w-0.5 bg-light-gray-stroke"></div>
              <div className="h-3 w-0.5 bg-transparent"></div>
              <div className="h-3 w-0.5 bg-light-gray-stroke"></div>
              <div className="h-3 w-0.5 bg-transparent"></div>
            </div>
            <div
              className={`rounded-[16px] p-[18px] ${
                message.isSender
                  ? "bg-pure-green text-white"
                  : "bg-light-apricot ml-8"
              } ${index !== 0 && messages[index].isSender ? "mt-5" : "mb-3"}`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div
                    className={`flex size-10 items-center justify-center rounded-full ${
                      message.isSender
                        ? "bg-light-apricot text-pure-green"
                        : "bg-pure-green text-light-apricot"
                    }`}
                  >
                    <span className="font-bold text-lg leading-[24px] tracking-[0%]">
                      {message.initials}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3
                      className={`text-[24px] font-medium ${
                        message.isSender
                          ? " text-light-apricot"
                          : " text-pure-green"
                      }`}
                    >
                      {message.sender}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-normal text-lg ${
                          message.isSender
                            ? " text-light-apricot"
                            : " text-pure-green"
                        }`}
                      >
                        {message.time}
                      </span>
                      <button
                        className={`${
                          message.isSender
                            ? " text-night-black"
                            : " text-pure-green"
                        } rounded-full p-1 hover:bg-black/10 `}
                      >
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <p
                className={`mt-2 font-normal text-xl ${
                  message.isSender ? " text-white" : " text-night-black"
                }`}
              >
                {message.message}
              </p>
            </div>
            {message.isSender && (
              <div className="flex items-center text-[#808080] my-4">
                <CornerDownRight className="size-[26px] mr-2" />
                <button className="text-lg font-medium">Reply</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="p-4">
        <input
          placeholder="Write a comment"
          className="w-full rounded-full border border-gray-300 px-4 py-3 text-gray-500"
        />
      </div>
    </div>
  );
}
