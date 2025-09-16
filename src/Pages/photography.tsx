import { PageContainer } from "../Components/PageContainer";

import football1 from "../assets/Sports Photos/football1.jpg";
import football2 from "../assets/Sports Photos/football2.jpg";
import football3 from "../assets/Sports Photos/football3.jpg";

import cheer1 from "../assets/Sports Photos/cheer1.jpg";
import cheer2 from "../assets/Sports Photos/cheer2.jpg";
import cheer3 from "../assets/Sports Photos/cheer3.jpg";

import vb1 from "../assets/Sports Photos/vb1.jpg";
import vb2 from "../assets/Sports Photos/vb2.jpg";
import vb3 from "../assets/Sports Photos/vb3.jpg";

const footballImages = [football1, football2, football3];
const cheerImages = [cheer1, cheer2, cheer3];
const volleyballImages = [vb1, vb2, vb3];

export function Photography() {
  return (
    <div className="relative min-h-screen bg-gradient-radial from-purple-800 via-purple-900 to-black text-white">
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-purple-700/20 blur-3xl"></div>
      </div>

      <PageContainer>
        
        <h2 className="text-4xl  font-extrabold text-center mb-12 tracking-wide bg-gradient-to-r bg-clip-text drop-shadow-lg">
          Photography Gallery
        </h2>

        
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 uppercase tracking-wider text-purple-200 drop-shadow-sm">
            Football
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {footballImages.map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={img}
                  alt={`Football Photo ${idx + 1}`}
                  className="w-full aspect-[3/4] object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </section>

        
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 uppercase tracking-wider text-purple-200 drop-shadow-sm">
            Cheer
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cheerImages.map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={img}
                  alt={`Cheer Photo ${idx + 1}`}
                  className="w-full aspect-[3/4] object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </section>

        
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 uppercase tracking-wider text-purple-200 drop-shadow-sm">
            Volleyball
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {volleyballImages.map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={img}
                  alt={`Volleyball Photo ${idx + 1}`}
                  className="w-full aspect-[3/4] object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </section>
      </PageContainer>
    </div>
  );
}
