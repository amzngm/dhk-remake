'use client'

import { isValidElement, useMemo, useRef } from 'react'
import { gsap } from '@/utils/gsapConfig'
import { useGSAP } from '@gsap/react'

// ─── single word unit ──────────────────────────────────────────────────────
function Word({ word }: { word: string }) {
  return (
    <span className="inline-block overflow-hidden align-bottom leading-[1.1] mb-[-0.1em] pb-[0.1em]">
      <span className="inline-block will-change-transform anim-word">{word}</span>
    </span>
  )
}

// ─── main component ────────────────────────────────────────────────────────
export default function AnimText<T extends React.ElementType = 'div'>({
  children,
  className = '',
  as,
  delay = 0.4,
  stagger = 0.06,
  ...props
}: {
  children: React.ReactNode
  className?: string
  as?: T
  delay?: number
  stagger?: number
} & React.ComponentPropsWithoutRef<T>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = as || 'div'
  const containerRef = useRef<HTMLElement>(null)

  const isStrOrNum = typeof children === 'string' || typeof children === 'number'
  const isTText = isValidElement(children) && 'tKey' in (children.props as object)

  // ── string: split into words ──────────────────────────────
  const text = String(children)
  const tokens = useMemo(() => text.split(/(\s+)/), [text])

  // ── animation setup ─────────────────────────────────────────────────────
  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.anim-word', {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 125%',
            once: true,
          },
          y: '110%',
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          stagger: Number(stagger),
          delay: Number(delay),
        })
      })

      return () => mm.revert()
    },
    { scope: containerRef, dependencies: [delay, stagger] }
  )

  // ── non-text children: single block reveal ──────────────────────────────
  if (!isStrOrNum && !isTText) {
    return (
      <Tag ref={containerRef} className={`relative overflow-hidden leading-[1.05] ${className}`} {...props}>
        <span className="inline-block will-change-transform anim-word [direction:inherit]">{children}</span>
      </Tag>
    )
  }

  return (
    <Tag ref={containerRef} className={`relative leading-[1.05] ${className}`} style={{ ...props.style }} {...props}>
      {tokens.map((token, i) => {
        if (/^\s+$/.test(token)) {
          // preserve whitespace naturally
          return (
            <span key={i} aria-hidden="true">
              {token}
            </span>
          )
        }
        return <Word key={i} word={token} />
      })}
    </Tag>
  )
}
