import background_1 from "../assets/background_1.jpg";
import { PageContainer } from "../Components/PageContainer";

export function History() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-start px-6 pt-32"
      style={{ backgroundImage: `url(${background_1})` }}
    >
      <PageContainer>
        <h1 className="text-4xl font-bold text-white mb-6">Our History</h1>
        <p className="text-lg text-white">
          Share the background and history of the Media Team here.
        </p>
      </PageContainer>
    </div>
  );
}
