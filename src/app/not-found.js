import MainBtn from '@/components/ui/button/MainBtn'
import { metadataGenerators } from '@/seo/seo-helpers'

export const metadata = metadataGenerators.notFound()

export default function NotFound() {
  return (
    <section className="relative w-dvw h-dvh overflow-hidden bg-bg text-text p-4 flex flex-col justify-center items-center gap-4">
      <div className="text-center text-2xl animate-pulse">
        [ <h2>404</h2>
        <p>Page not found</p>]
      </div>

      <MainBtn href="/">Go Home</MainBtn>
    </section>
  )
}
