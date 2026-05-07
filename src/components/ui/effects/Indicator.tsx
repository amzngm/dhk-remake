export default function Indicator({
  children,
  className = '',
  dotClassName = '',
  active,
}: {
  children: React.ReactNode
  className?: string
  dotClassName?: string
  active?: boolean
}) {
  return (
    <div className={`relative flex flex-col items-center group ${className}`}>
      {children}
      <div className={`mt-4 size-1.25 bg-text ${active ? 'visible' : 'hidden'} ${dotClassName}`} />
    </div>
  )
}
