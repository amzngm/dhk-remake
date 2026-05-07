'use client'

import { useEffect } from 'react'
import AnimText from '@/components/ui/unstyled/AnimText'

export default function Error({ error, unstable_retry }: { error: Error & { digest?: string }; unstable_retry: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="relative flex flex-col justify-center items-center gap-4 w-dvw h-dvh overflow-hidden fl-text-sm/base hide-nav hide-footer">
      <AnimText as="h2">Something went wrong!</AnimText>

      <button onClick={() => unstable_retry()} className="hover:text-main lowercase cursor-pointer">
        [<AnimText className="inline-flex gap-0.5 px-4">Try again</AnimText>]
      </button>
    </main>
  )
}
