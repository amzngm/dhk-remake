import Image from 'next/image'

const WHATWEDO = [
  {
    title: 'hospitality',
    desc: 'Create welcoming spaces that blend guest comfort with refined sophistication, aligned with the operator’s brand ethos and operational requirements.',
    imageSrc:
      'https://cdn.prod.website-files.com/67483fb596664fd411a9d07f/67aa1733d0a127aae2e29106_joakim-nadell-tUGyri_ggzs-unsplash%20(3)%20(square%20small).avif',
  },
  {
    title: 'interior design',
    desc: 'Through dhk Interior Design, create interior spaces that provide lasting value through materiality, sustainable design and sophisticated detailing.',
    imageSrc: 'https://cdn.prod.website-files.com/67483fb596664fd411a9d07f/6970e03c0df78469cbca53f1_05---S4_WhatWeDo_dhki.jpg',
    golden: true,
  },
  {
    title: 'mixed-use',
    desc: 'Build dynamic urban communities by weaving together living, working and leisure spaces designed to respond to their diverse functional needs. ',
    imageSrc:
      'https://cdn.prod.website-files.com/67483fb596664fd411a9d07f/67aa16cb94bdccefbb9ac364_joakim-nadell-tUGyri_ggzs-unsplash%20(2)%20(square%20small).avif',
  },
  {
    title: 'office',
    desc: 'Design progressive workplaces that inspire collaboration, enhance wellbeing and adapt to the evolving needs of employers and employees alike.',
    imageSrc:
      'https://cdn.prod.website-files.com/67483fb596664fd411a9d07f/67aa1642110c7c9891dfb509_joakim-nadell-tUGyri_ggzs-unsplash%20(1)%20(square%20small).avif',
  },
  {
    title: 'public + education',
    desc: 'Shape inclusive, future-ready environments designed to nurture learning and enhance the experience of the people who use them.',
    imageSrc: 'https://cdn.prod.website-files.com/67483fb596664fd411a9d07f/67aa14fbfba3ff395e4aec77_joakim-nadell-tUGyri_ggzs-unsplash%20(square%20small).avif',
  },
  {
    title: 'residential',
    desc: 'Deliver considered spaces that enrich daily life and optimise value for developers through innovative space planning and sustainable construction.',
    imageSrc:
      'https://cdn.prod.website-files.com/67483fb596664fd411a9d07f/67aa17b43ce62483cf7fcc88_joakim-nadell-tUGyri_ggzs-unsplash%20(4)%20(square%20small).avif',
  },
  {
    title: 'retail',
    desc: 'Design engaging retail environments that create memorable customer experiences and support successful commercial outcomes.',
    imageSrc:
      'https://cdn.prod.website-files.com/67483fb596664fd411a9d07f/67aa1803309b106c5a9293c7_joakim-nadell-tUGyri_ggzs-unsplash%20(5)%20(square%20small).avif',
  },
  {
    title: 'sustainable',
    desc: 'Infuse sustainability throughout our design process, empowering clients and teams and embedding environmental principles from project inception to create meaningful outcomes that enhance health, economic and social value.',
    imageSrc:
      'https://cdn.prod.website-files.com/67483fb596664fd411a9d07f/67aa1985e236a10c1af5a05a_joakim-nadell-tUGyri_ggzs-unsplash%20(6)%20(square%20small).avif',
  },
  {
    title: 'urban design',
    desc: 'Enhance urban lifestyles through integrated masterplans that prioritise people, promote inclusive public spaces and build vibrant, healthy communities.',
    imageSrc: 'https://cdn.prod.website-files.com/67483fb596664fd411a9d07f/67aa187633a91c30b3db6149_image%20-%202025-02-10T171616.604%20(square%20small).avif',
  },
]

export default function WhatWeDo() {
  return (
    <section className="relative space-y-24 w-dvw h-[150dvh] bg-bg text-text fl-px-4/5 py-140">
      <h3 className="w-1/2 font-bold text-6xl tracking-wide ms-auto px-1">what we do</h3>

      <div className="size-full">
        {WHATWEDO.map((item, index) => (
          <div
            key={index}
            className={`group relative tracking-wide text-main/40 hover:text-text py-0.5 cursor-default ${item.golden ? ' text-yellow-500/40 hover:text-yellow-500' : ''}`}
          >
            <hr className="opacity-0 group-hover:opacity-30" />
            <h4 className="font-bold text-4xl">{item.title}</h4>
            <p className="top-2 right-0 absolute max-w-2xs opacity-0 group-hover:opacity-30 normal-case">{item.desc}</p>
            <div className="top-2 left-1/2 absolute size-60 opacity-0 group-hover:opacity-100">
              <Image src={item.imageSrc} alt={item.title} fill loading="eager" className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
