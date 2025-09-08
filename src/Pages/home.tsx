
import qrcode from "../assets/qrcode.png";
import { PageContainer } from "../Components/PageContainer";

export function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-radial from-purple-800 via-purple-900 to-black text-white">
      <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-[600px] h-[600px] rounded-full bg-purple-700/20 blur-3xl"></div>
    </div>

      <PageContainer>
        <h1 className="text-6xl font-extrabold text-white text-center">
          The Mission:
        </h1>

        <p className="text-lg md:text-2xl leading-relaxed text-white mb-6 pt-4 text-center">
          Our goal is to prepare students for career readiness by equipping them
          with the essential skills needed in photography, videography, and
          audio production. Through hands-on experience and real-world projects,
          we empower students to develop creativity, technical expertise, and
          professionalism. The media team not only supports school and community
          initiatives but also fosters a collaborative environment where
          students can grow as storytellers, innovators, and leaders.
        </p>

        <div className="mt-10 bg-white/90 text-black rounded-lg p-6 shadow-md max-w-md mx-auto text-center flex flex-col items-center">
          <p className="text-lg font-medium mb-4">
            Use this link or scan the QR code to submit a request form:
          </p>

          <a
            href="https://forms.gle/1ihune9mepgXBmrQ8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 mb-4"
          >
            Submit a Request Form
          </a>

          <img
            src={qrcode}
            alt="QR Code for Request Form"
            className="w-32 h-32 rounded-md shadow"
          />
        </div>
      </PageContainer>
    </div>
  );
}
