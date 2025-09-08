export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative p-8 rounded-2xl max-w-6xl mx-auto bg-white/5 backdrop-blur-md shadow-xl">
      {children}
    </div>
  );
}