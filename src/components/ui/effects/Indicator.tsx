export default function Indicator({ children, className = '', active }: { children: React.ReactNode; className?: string; active?: boolean }) {
  return (
    <div className={`relative flex flex-col items-center group ${className}`}>
      {children}
      <div className={`mt-4 w-1 h-1 bg-text ${active ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  )
}
