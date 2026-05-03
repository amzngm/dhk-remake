import Image from 'next/image'

export default function ImageSection() {
  return (
    <section className="relative w-dvw h-dvh overflow-hidden bg-bg">
      <Image src="/images/artp/image-27.jpg" alt="Background Image" fill className="object-cover" />
    </section>
  )
}
