
import React from "react";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  email: string;
  phone: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ image, name, role, email, phone }) => {
  return (
    <div className="w-64 h-80 [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
        

        <div className="absolute w-full h-full backface-hidden rounded-2xl shadow-lg overflow-hidden bg-white flex flex-col items-center">
          <img src={image} alt={name} className="w-full h-2/3 object-cover" />
          <h3 className="mt-2 text-lg font-bold">{name}</h3>
          <p className="text-gray-600">{role}</p>
        </div>
        

        <div className="absolute w-full h-full backface-hidden rounded-2xl shadow-lg bg-gray-800 text-white flex flex-col justify-center items-center [transform:rotateY(180deg)]">
          <h3 className="text-lg font-bold">{name}</h3>
          <p>{role}</p>
          <p className="mt-2 text-sm">{email}</p>
          <p className="mt-2 text-sm">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
