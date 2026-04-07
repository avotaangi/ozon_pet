import type { PropsWithChildren, ReactNode } from 'react'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

type FeatureBlockProps = PropsWithChildren<{
  id: string
  eyebrow: string
  title: string
  description: string
  preview: ReactNode
  reverse?: boolean
}>

export function FeatureBlock({
  id,
  eyebrow,
  title,
  description,
  preview,
  reverse = false,
  children,
}: FeatureBlockProps) {
  return (
    <section id={id} className="scroll-mt-28">
      <div
        className={`grid gap-8 lg:grid-cols-[1.02fr_1.18fr] lg:items-start ${reverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}
      >
        <Reveal className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-[0_24px_80px_rgba(0,91,255,0.1)] backdrop-blur md:p-10">
          <SectionHeader eyebrow={eyebrow} title={title} description={description} />
          <div className="mt-8">{children}</div>
        </Reveal>
        <Reveal
          delay={120}
          className="overflow-hidden rounded-[32px] border border-white/70 bg-white/80 p-4 shadow-[0_24px_80px_rgba(0,26,52,0.12)] backdrop-blur md:p-6"
        >
          {preview}
        </Reveal>
      </div>
    </section>
  )
}
