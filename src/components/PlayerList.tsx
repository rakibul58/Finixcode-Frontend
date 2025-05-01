import { useState } from "react";
import playerGroup from '../assets/user-group.png'
import SinglePlayer from "./SinglePlayer";

const PlayersList = () => {
  const [players] = useState([
    { id: 1, name: "Alex Mercer", initials: "AM", isHost: true },
    { id: 2, name: "Jamir Uddin", initials: "JU", isHost: false },
    { id: 3, name: "Biplu Ahmed", initials: "BA", isHost: false },
    { id: 4, name: "Topu Barman", initials: "TB", isHost: false },
    { id: 5, name: "Rakib Hossain", initials: "RH", isHost: false },
  ]);

  return (
    <div className="w-full mx-auto">
      <div className="flex items-center justify-between gap-1 mb-4">
        <h1 className="text-[32px] leading-[28px] tracking-[0] font-bold text-night-black">Players</h1>
        <div className="flex items-center gap-2">
          <div className="size-[32px]">
            <img className="w-full h-full size-32" src={playerGroup} alt="Player Group Icon" />
          </div>
          <span className="text-2xl font-normal leading-[100%] tracking-[0%]">5/11</span>
        </div>
      </div>

      <div className="space-y-2">
        {players.map((player) => (
          <SinglePlayer key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default PlayersList;
