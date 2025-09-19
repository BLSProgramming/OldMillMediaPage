import qrcode from "../assets/qrcode.png";

export function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-radial from-purple-800 via-purple-900 to-black text-white flex items-center justify-center px-6 py-1">
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-purple-700/20 blur-3xl"></div>
      </div>

      
      <div className="relative w-full max-w-[116rem] bg-white/5 backdrop-blur-md shadow-2xl rounded-2xl p-14 space-y-14 text-center">
        
        <div>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8">
            The Mission
          </h1>
          <p className="text-xl md:text-3xl leading-relaxed max-w-4xl mx-auto">
            Our goal is to prepare students for career readiness by equipping them
            with the essential skills needed in photography, videography, and
            audio production. Through hands-on experience and real-world projects,
            we empower students to develop creativity, technical expertise, and
            professionalism. The media team not only supports school and community
            initiatives but also fosters a collaborative environment where students
            can grow as storytellers, innovators, and leaders.
          </p>
        </div>

        
        <div className="border-t border-white/20"></div>

        
        <div className="space-y-8">
          <p className="text-2xl font-semibold">
            Use this link or scan the QR code to submit a request form:
          </p>

          <a
            href="https://forms.gle/1ihune9mepgXBmrQ8"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xl text-blue-400 underline hover:text-blue-300"
          >
            Submit a Request Form
          </a>

          <img
            src={qrcode}
            alt="QR Code for Request Form"
            className="w-56 h-56 rounded-md shadow-lg mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
