import bryan from "../assets/bryan.jpg";
import kushal from "../assets/kushal.jpg";
import trent from "../assets/trent.jpg";
import johnson from "../assets/johnson.jpg";
import { PageContainer } from "../Components/PageContainer";

export function Team() {
  const members = [
    {
      name: "Ms. Johnson-Suarez",
      role: "Team Director / Sponsor",
      email: "LJohnson-Suarez@aacps.org",
      phone: "(410) 969-9010",
      img: johnson,
    },
    { 
      name: "Bryan Sauber II", 
      role: "Lead Computer Tech", 
      email: "blsauberii@gmail.com",
      phone: "(443)-261-8975",
      img: bryan 
    },
    {
      name: "Trent Fairbee",
      role: "Assistant Producer",
      email: "trentfairbee@gmail.com",
      phone: "(410)-446-1912",
      img: trent
    },
    {
      name: "Kushal Khatri",
      role: "Assistant Computer Tech",
      img: kushal
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

        <div className="grid gap-26 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {members.map((member, idx) => (
            <div key={idx} className="w-64 h-80 [perspective:1000px] mx-auto">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                
                <div className="absolute w-full h-full backface-hidden rounded-2xl shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm flex flex-col items-center">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-2/3 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h2 className="text-lg font-semibold text-gray-900">
                      {member.name}
                    </h2>
                    <p className="text-gray-700">{member.role}</p>
                  </div>
                </div>

                <div className="absolute w-full h-full backface-hidden rounded-2xl shadow-lg bg-gradient-to-br from-purple-800 via-gray-800 to-black text-white flex flex-col justify-center items-center [transform:rotateY(180deg)] p-6">
                  <h2 className="text-lg font-semibold">{member.name}</h2>
                  <p>{member.role}</p>
                  <p className="mt-2 text-sm">{member.email}</p>
                  <p className="mt-2 text-sm">{member.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </div>
  );
}
