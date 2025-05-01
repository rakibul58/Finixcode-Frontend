interface Player {
  id: number;
  initials: string;
  name: string;
  isHost: boolean;
}

export default function SinglePlayer({ player }: { player: Player }) {
  return (
    <div
      key={player.id}
      className="flex items-center justify-between p-[12px] bg-pure-green rounded-[14px] "
    >
      <div className="flex items-center">
        <div className="size-[45px] rounded-full bg-light-apricot text-lg text-pure-green font-bold flex items-center justify-center mr-3">
          {player.initials}
        </div>
        <div className="text-light-apricot font-normal text-2xl">
          {player.name}{" "}
          {player.isHost && (
            <span className="text-[16px] font-light">(Host)</span>
          )}
        </div>
      </div>
      <button className="px-2 py-3 bg-white text-night-black font-medium text-[16px] rounded-[12px] cursor-pointer hover:shadow-md transition-shadow duration-200 ease-in-out">
        Message
      </button>
    </div>
  );
}
