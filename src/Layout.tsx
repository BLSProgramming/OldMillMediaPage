import { Navbar } from "./Components/Navbar";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="relative z-50">
        <Navbar/>
      </div>
      <main className="relative z-10">
        <div className="max-w-6xl mx-auto p-6">
          <Outlet/>
        </div>
      </main>
    </div>
  );
}
