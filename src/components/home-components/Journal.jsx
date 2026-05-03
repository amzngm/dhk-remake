'use client'

import ProjectCard from '@/components/shared/ProjectCard'
import { useRef, useState } from 'react'
import { useMouseMotion } from '@/hooks/useMouseMotion'
import MouseFollower from '@/components/shared/MouseFollower'

const Journals = [
  {
    type: 'peaple',
    title: 'Radisson Red',
    imageSrc: '/images/artp/image-10.avif',
    desc: 'peoplecelebrating women 24/7/365In South Africa, during August, the social and news wires are overwhelmed with a proliferation of content focused on women, hooked on to the annual commemoration of Women’s Day on 9 August. Every year we discuss how we can join in with a post that reads “Happy Women’s Day” or a variation thereof. Every year, we agree that the history of the commemoration is a vital reminder of how important women’s voices are in driving change. But we also agree that women’s contribution to our business, industry and society needs to be acknowledged, recognised, celebrated and exposed on every day of the year.The South African Council for the Architectural Profession’s (SACAP) 2023/24 annual report shows that there are fewer than 12 000 built environment professionals in the country, incorporating architects, technologists and draughtspeople, from students through to professionals. There were just 379 new registrations in the last year, far less than the 744 recorded in 2019/20. There are important questions to be asked about the state of our profession. Why this growth is so stilted? And how can we collectively address the equitable make up of our industry, with Black registered professionals at just 33%? However, in this article, the primary concern is this: only 28% of registered professionals are women.',
  },
  {
    type: 'press',
    title: 'City Park/Mama Shelter Hotel and Residences',
    imageSrc: '/images/artp/image-25.jpg',
    desc: 'peoplecelebrating women 24/7/365In South Africa, during August, the social and news wires are overwhelmed with a proliferation of content focused on women, hooked on to the annual commemoration of Women’s Day on 9 August. Every year we discuss how we can join in with a post that reads “Happy Women’s Day” or a variation thereof. Every year, we agree that the history of the commemoration is a vital reminder of how important women’s voices are in driving change. But we also agree that women’s contribution to our business, industry and society needs to be acknowledged, recognised, celebrated and exposed on every day of the year.The South African Council for the Architectural Profession’s (SACAP) 2023/24 annual report shows that there are fewer than 12 000 built environment professionals in the country, incorporating architects, technologists and draughtspeople, from students through to professionals. There were just 379 new registrations in the last year, far less than the 744 recorded in 2019/20. There are important questions to be asked about the state of our profession. Why this growth is so stilted? And how can we collectively address the equitable make up of our industry, with Black registered professionals at just 33%? However, in this article, the primary concern is this: only 28% of registered professionals are women.',
  },
  {
    type: 'insights',
    title: 'Seafront Estate',
    imageSrc: '/images/artp/image-11.avif',
    desc: 'peoplecelebrating women 24/7/365In South Africa, during August, the social and news wires are overwhelmed with a proliferation of content focused on women, hooked on to the annual commemoration of Women’s Day on 9 August. Every year we discuss how we can join in with a post that reads “Happy Women’s Day” or a variation thereof. Every year, we agree that the history of the commemoration is a vital reminder of how important women’s voices are in driving change. But we also agree that women’s contribution to our business, industry and society needs to be acknowledged, recognised, celebrated and exposed on every day of the year.The South African Council for the Architectural Profession’s (SACAP) 2023/24 annual report shows that there are fewer than 12 000 built environment professionals in the country, incorporating architects, technologists and draughtspeople, from students through to professionals. There were just 379 new registrations in the last year, far less than the 744 recorded in 2019/20. There are important questions to be asked about the state of our profession. Why this growth is so stilted? And how can we collectively address the equitable make up of our industry, with Black registered professionals at just 33%? However, in this article, the primary concern is this: only 28% of registered professionals are women.',
  },
  {
    type: 'insights',
    title: 'Drostdy Hotel',
    imageSrc: '/images/artp/image-9.avif',
    desc: 'peoplecelebrating women 24/7/365In South Africa, during August, the social and news wires are overwhelmed with a proliferation of content focused on women, hooked on to the annual commemoration of Women’s Day on 9 August. Every year we discuss how we can join in with a post that reads “Happy Women’s Day” or a variation thereof. Every year, we agree that the history of the commemoration is a vital reminder of how important women’s voices are in driving change. But we also agree that women’s contribution to our business, industry and society needs to be acknowledged, recognised, celebrated and exposed on every day of the year.The South African Council for the Architectural Profession’s (SACAP) 2023/24 annual report shows that there are fewer than 12 000 built environment professionals in the country, incorporating architects, technologists and draughtspeople, from students through to professionals. There were just 379 new registrations in the last year, far less than the 744 recorded in 2019/20. There are important questions to be asked about the state of our profession. Why this growth is so stilted? And how can we collectively address the equitable make up of our industry, with Black registered professionals at just 33%? However, in this article, the primary concern is this: only 28% of registered professionals are women.',
  },
  {
    type: 'career',
    title: 'The Signature',
    imageSrc: '/images/artp/image-12.avif',
    desc: 'peoplecelebrating women 24/7/365In South Africa, during August, the social and news wires are overwhelmed with a proliferation of content focused on women, hooked on to the annual commemoration of Women’s Day on 9 August. Every year we discuss how we can join in with a post that reads “Happy Women’s Day” or a variation thereof. Every year, we agree that the history of the commemoration is a vital reminder of how important women’s voices are in driving change. But we also agree that women’s contribution to our business, industry and society needs to be acknowledged, recognised, celebrated and exposed on every day of the year.The South African Council for the Architectural Profession’s (SACAP) 2023/24 annual report shows that there are fewer than 12 000 built environment professionals in the country, incorporating architects, technologists and draughtspeople, from students through to professionals. There were just 379 new registrations in the last year, far less than the 744 recorded in 2019/20. There are important questions to be asked about the state of our profession. Why this growth is so stilted? And how can we collectively address the equitable make up of our industry, with Black registered professionals at just 33%? However, in this article, the primary concern is this: only 28% of registered professionals are women.',
  },
  {
    type: '',
    title: '',
    imageSrc: '',
    btn: '/projects',
    btnText: 'all projects',
  },
]

export default function Journal() {
  const containerRef = useRef()
  const { x, y } = useMouseMotion(containerRef)
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-bg text-text px-5">
      <h5 className="font-bold text-6xl tracking-wide mb-12">Journal</h5>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Journals.map((journal, index) => (
          <ProjectCard
            key={index}
            projectTitle={journal.title}
            projectDate={journal.date}
            imageSrc={journal.imageSrc}
            btn={journal.btn}
            btnText={journal.btnText}
            onHover={setHoveredCard}
            desc={journal.desc}
            type={journal.type}
          />
        ))}
      </div>

      <MouseFollower x={x} y={y} isVisible={hoveredCard?.imageSrc}>
        [ View Project ]
      </MouseFollower>
    </section>
  )
}
