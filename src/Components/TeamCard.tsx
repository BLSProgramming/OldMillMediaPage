import React from "react";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  email?: string;
  phone?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ image, name, role, email, phone }) => {
  return (
    <div className="w-full max-w-xs mx-auto [perspective:1000px] group">
      <div className="relative w-full h-80 transform-gpu transition-transform duration-700 ease-in-out [transform-style:preserve-3d] [will-change:transform] group-hover:[transform:rotateY(180deg)]">

        
        <div className="absolute inset-0 rounded-2xl shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm flex flex-col items-center [backface-visibility:hidden] pointer-events-auto group-hover:pointer-events-none">
          <img src={image} alt={name} className="w-full h-2/3 object-cover" />
          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
            <span className="inline-block mt-2 bg-purple-600/20 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
              {role}
            </span>
          </div>
        </div>

        
        <div className="absolute inset-0 rounded-2xl shadow-lg bg-gradient-to-br from-purple-800 via-gray-800 to-black text-white flex flex-col justify-center items-center [transform:rotateY(180deg)] [backface-visibility:hidden] p-6 pointer-events-none group-hover:pointer-events-auto">
          <h2 className="text-lg font-semibold">{name}</h2>
          <div className="w-12 h-0.5 bg-purple-400 my-2"></div>
          <p className="text-sm uppercase tracking-wider text-purple-200">{role}</p>
          {email && <p className="mt-4 text-sm break-words">{email}</p>}
          {phone && <p className="mt-2 text-sm">{phone}</p>}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
