export default function Loading({ className, dark }) {
  return (
    <section
      className={`relative w-dvw min-h-dvh overflow-hidden px-4 max-md:px-2 py-12 ${dark ? 'bg-bg text-text' : 'bg-text text-bg'} ${className}`}
    >
      Loading...
    </section>
  )
}
