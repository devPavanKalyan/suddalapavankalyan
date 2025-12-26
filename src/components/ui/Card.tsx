export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        rounded-lg
        bg-slate-900
        p-6
        transition
        ${className}
      `}
    >
      {children}
    </div>
  );
}
