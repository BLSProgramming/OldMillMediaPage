export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-black/60 p-8 rounded-lg max-w-3xl mx-auto">
      {children}
    </div>
  );
}
