import Link from 'next/link'
import AnimText from '@/components/ui/unstyled/AnimText'

export default function NotFound() {
  return (
    <main className="relative flex justify-center items-center w-dvw h-dvh overflow-hidden hide-nav hide-footer">
      <Link href="/" className="hover:text-main fl-text-sm/lg">
        [<AnimText className="inline-flex gap-0.5 px-4">back home</AnimText>]
      </Link>
    </main>
  )
}
