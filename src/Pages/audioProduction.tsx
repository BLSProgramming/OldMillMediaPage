export function Audio() {
  return (
    <div className="relative min-h-screen bg-gradient-radial from-purple-800 via-purple-900 to-black text-white">
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-purple-700/20 blur-3xl"></div>
      </div>

      
      <div className="relative p-8 md:p-14 rounded-2xl w-full max-w-[116rem] mx-auto bg-white/5 backdrop-blur-md shadow-xl">
        <h2 className="text-5xl font-extrabold text-center mb-12 tracking-wide bg-gradient-to-r bg-clip-text drop-shadow-lg">
          Audio Production Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[].map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={img}
                alt={`Media Team Project ${idx + 1}`}
                className="w-full aspect-[1/1] object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
