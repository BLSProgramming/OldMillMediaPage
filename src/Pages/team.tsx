import bryan from "../assets/bryan.jpg";
import background_1 from "../assets/background_1.jpg";

export function Team() {
  const members = [
    { name: "Bryan Sauber II", role: "Lead Computer Tech", img: bryan },
  ];

  return (
    <div
      className="min-h-screen bg-gray-900 text-gray-900 px-6 py-16 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${background_1})` }}
    >
      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0"></div>

      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-black">
          Meet the Team
        </h1>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold">{member.name}</h2>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
