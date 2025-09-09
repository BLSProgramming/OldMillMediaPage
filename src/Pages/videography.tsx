import { PageContainer } from "../Components/PageContainer"




export function Videography() {
  return (
    <div className="relative min-h-screen bg-gradient-radial from-purple-800 via-purple-900 to-black text-white">
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-purple-700/20 blur-3xl"></div>
      </div>

      <PageContainer>
        
        <h2 className="text-3xl font-bold text-center mb-6">
          Videography Gallery
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
