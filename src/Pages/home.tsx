import background_1 from "../assets/background_1.jpg";
import qrcode from "../assets/qrcode.png";

export function Home() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-start text-center px-6 pt-32"
      style={{ backgroundImage: `url(${background_1})` }}
    >
      <div className="relative bg-black/60 p-8 rounded-lg max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
          Old Mill High School
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-white mb-6">
          Our goal is to prepare students to be productive, engaged, and globally-minded
          citizens by promoting academic excellence, global-mindedness, and community pride,
          while celebrating diversity.
        </p>

        <div className="mt-6 bg-white/90 text-black rounded-lg p-6 shadow-md">
          <p className="text-lg font-medium mb-4">
            Use this link or scan the QR code to submit a request form:
          </p>
          <a
            href="https://forms.gle/1ihune9mepgXBmrQ8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Submit a Request Form
          </a>

          <div className="mt-6 flex justify-center">
            <img
              src={qrcode}
              alt="QR Code for Request Form"
              className="w-32 h-32 rounded-md shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
