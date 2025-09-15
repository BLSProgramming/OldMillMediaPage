import bryan from "../assets/bryan.png";
import trent from "../assets/trent.jpg";
import johnson from "../assets/johnson.jpg";
import jaylon from "../assets/jaylon.jpg";
import gavin from "../assets/gavin.jpg";
import rashawn from "../assets/rashawn.jpg";
import dakota from "../assets/dakota.jpg";

import { PageContainer } from "../Components/PageContainer";
import TeamCard from "../Components/TeamCard";

export function Team() {
  const members = [
    {
      name: "Ms. Johnson-Suarez",
      role: "Team Director / Sponsor",
      email: "LJohnson-Suarez@aacps.org",
      phone: "(410) 969-9010",
      image: johnson,
    },
    {
      name: "Bryan Sauber II",
      role: "Lead Computer Tech",
      email: "blsauberii@gmail.com",
      phone: "(443) 261-8975",
      image: bryan,
    },
    {
      name: "Trent Fairbee",
      role: "Assistant Producer",
      email: "trentfairbee@gmail.com",
      phone: "(410) 446-1912",
      image: trent,
    },
    {
      name: "Jaylon Hollis",
      role: "Editor",
      email: "",
      phone: "",
      image: jaylon,
    },
    {
      name: "Gavin Silkworth",
      role: "Morning Announcements Director",
      email: "",
      phone: "(240) 315-9793",
      image: gavin,
    },
    {
      name: "Rashawn Carter",
      role: "Photo/Video Producer",
      email: "rshwncrtr@gmail.com",
      phone: "(808) 650-8645",
      image: rashawn,
    },
    {
      name: "Dakota Penvose",
      role: "Social Media Director",
      email: "lildauiri08@gmail.com",
      phone: "",
      image: dakota,
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-radial from-purple-800 via-purple-900 to-black text-white">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-purple-700/20 blur-3xl"></div>
      </div>

      <PageContainer>
        <h1 className="text-6xl font-extrabold text-white text-center mb-12">
          Meet the Team
        </h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {members.map((member, idx) => (
            <TeamCard
              key={idx}
              image={member.image}
              name={member.name}
              role={member.role}
              email={member.email}
              phone={member.phone}
            />
          ))}
        </div>
      </PageContainer>
    </div>
  );
}
