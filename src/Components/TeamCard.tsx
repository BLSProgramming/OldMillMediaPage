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
    <div className="w-full max-w-xs mx-auto [perspective:1000px]">
      <div className="relative w-full h-96 transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
        
        
        <div className="absolute w-full h-full backface-hidden rounded-2xl shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm flex flex-col items-center">
          <img src={image} alt={name} className="w-full h-2/3 object-cover" />
          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
            <p className="text-gray-700">{role}</p>
          </div>
        </div>

        
        <div className="absolute w-full h-full backface-hidden rounded-2xl shadow-lg bg-gradient-to-br from-purple-800 via-gray-800 to-black text-white flex flex-col justify-center items-center [transform:rotateY(180deg)] p-6">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p>{role}</p>
          {email && <p className="mt-2 text-sm">{email}</p>}
          {phone && <p className="mt-2 text-sm">{phone}</p>}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
