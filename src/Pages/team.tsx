import bryan from "../assets/bryan.jpg";
import background_1 from "../assets/background_1.jpg";
import { PageContainer } from "../Components/PageContainer";

export function Team() {
  const members = [
    { 
      name: "Bryan Sauber II", 
      role: "Lead Computer Tech", 
      email: "bls2.working@gmail.com",
      phone: "(443)-261-8975",
      img: bryan 
    },
  ];

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-start px-6 pt-16"
      style={{ backgroundImage: `url(${background_1})` }}
    >
      <PageContainer>
        <h1 className="text-4xl font-extrabold text-white text-center mb-12">
          Meet the Team
        </h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {members.map((member, idx) => (
            <div key={idx} className="w-64 h-80 [perspective:1000px] mx-auto">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                
                <div className="absolute w-full h-full backface-hidden rounded-2xl shadow-lg overflow-hidden bg-white/90 flex flex-col items-center">
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

                <div className="absolute w-full h-full backface-hidden rounded-2xl shadow-lg bg-gray-800 text-white flex flex-col justify-center items-center [transform:rotateY(180deg)] p-6">
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
