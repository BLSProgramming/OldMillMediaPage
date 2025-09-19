export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative p-4 rounded-2xl w-full mx-auto bg-white/5 backdrop-blur-md shadow-xl">
      {children}
    </div>
  );
}
