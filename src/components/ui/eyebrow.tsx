export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.08em] text-light-fir mb-3">
      {children}
    </p>
  );
}
