import { PageContainer } from "../Components/PageContainer";


//import bryan from "../assets/bryan.jpg";


export function History() {
  return (
    <div className="relative min-h-screen bg-gradient-radial from-purple-800 via-purple-900 to-black text-white">
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-purple-700/20 blur-3xl"></div>
      </div>

      <PageContainer>
        
        <h1 className="text-5xl font-extrabold text-center mb-10">
          Our History
        </h1>

        
        <p className="text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-12">
          The Media Team began as a small group of students with a shared vision
          to create something greater than themselves. Through their passion,
          dedication, and relentless hard work—alongside the generous support
          and guidance of <span className="font-semibold">Ms. Johnson-Suarez</span>—the team has grown into a thriving
          program. What started as a simple idea has transformed into a powerful
          platform that not only makes a lasting impact within the school
          community but also helps students launch their careers, develop their
          creativity, and discover their potential as future leaders.
        </p>

       
        <h2 className="text-3xl font-bold text-center mb-6">
          Highlights from Our Journey
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[].map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={img}
                alt={`Media Team Project ${idx + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </PageContainer>
    </div>
  );
}
