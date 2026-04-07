import { useEffect, useState } from 'react'
import { CharityShowcase } from '../components/CharityShowcase'
import { CurrentStateSection } from '../components/CurrentStateSection'
import { Footer } from '../components/Footer'
import { HeroSection } from '../components/HeroSection'
import { MemorialShowcase } from '../components/MemorialShowcase'
import { MonetizationSection } from '../components/MonetizationSection'
import { PetProfileShowcase } from '../components/PetProfileShowcase'
import { RoadmapSection } from '../components/RoadmapSection'
import { ServicesShowcase } from '../components/ServicesShowcase'
import { StickyHeader } from '../components/StickyHeader'
import { SubscriptionShowcase } from '../components/SubscriptionShowcase'
import { TargetModelSection } from '../components/TargetModelSection'
import { ValueForSidesSection } from '../components/ValueForSidesSection'
import { navItems } from '../data/content'

export function EcosystemPage() {
  const [activeId, setActiveId] = useState(navItems[0]?.id ?? 'hero')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) {
          setActiveId(visible.target.id)
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0.2, 0.35, 0.55],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen rounded-[36px] bg-[linear-gradient(180deg,#f7faff_0%,#fdfefe_30%,#f4f8ff_100%)] text-slate-700">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-12rem] top-[10rem] size-[28rem] rounded-full bg-ozon-blue/10 blur-3xl" />
        <div className="absolute right-[-10rem] top-[20rem] size-[26rem] rounded-full bg-ozon-magenta/10 blur-3xl" />
        <div className="absolute left-1/3 top-[65rem] size-[24rem] rounded-full bg-ozon-green/8 blur-3xl" />
      </div>

      <StickyHeader activeId={activeId} />
      <main className="mx-auto flex max-w-7xl flex-col gap-24 px-4 pb-24 md:px-6 lg:gap-28">
        <HeroSection />
        <CurrentStateSection />
        <TargetModelSection />
        <PetProfileShowcase />
        <SubscriptionShowcase />
        <ServicesShowcase />
        <CharityShowcase />
        <MemorialShowcase />
        <ValueForSidesSection />
        <MonetizationSection />
        <RoadmapSection />
      </main>
      <Footer />
    </div>
  )
}
