import { Navbar } from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import background_1 from "./assets/background_1.jpg";

export function Layout() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${background_1})` }}
    >
      
      <div className="absolute inset-0 bg-black/0 pointer-events-none"></div>

      
      <div className="relative z-50">
        <Navbar />
      </div>

      
      <main className="relative z-10">
        <div className="max-w-6xl mx-auto p-6">
        <Outlet />
        </div>
      </main>
    </div>
  );
}
