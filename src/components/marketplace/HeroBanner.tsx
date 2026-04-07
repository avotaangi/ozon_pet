import { useEffect, useState } from 'react'

const bannerSlides = [
  {
    eyebrow: 'Ozon fresh',
    title: 'Для любимых питомцев',
  },
  {
    eyebrow: 'Ozon Pet',
    title: 'Подбор товаров по Pet ID',
  },
  {
    eyebrow: 'Ozon Pet',
    title: 'Подписка и забота без стресса',
  },
]

export function HeroBanner() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeSlide = bannerSlides[activeIndex]

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % bannerSlides.length)
    }, 7000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div className="relative h-full min-h-[162px] overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#f1117e_0%,#ff4fa2_48%,#ff7bbd_100%)] px-7 py-4 shadow-[0_18px_60px_rgba(241,17,126,0.24)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_22%),radial-gradient(circle_at_75%_30%,rgba(255,255,255,0.15),transparent_20%),radial-gradient(circle_at_88%_78%,rgba(255,255,255,0.18),transparent_18%)]" />
      <div className="relative min-h-[162px] md:h-full">
        <div className="flex items-start justify-between gap-4">
          <div className="rounded-full bg-white/18 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
            Реклама
          </div>
          <div className="max-w-[180px] text-right text-white">
            <div className="text-xs uppercase tracking-[0.3em] text-white/70">{activeSlide.eyebrow}</div>
            <div className="mt-2 text-[1.7rem] font-semibold leading-none md:text-[2rem]">{activeSlide.title}</div>
          </div>
        </div>

        <div className="absolute left-[7%] top-[16%] h-16 w-16 rounded-full border border-white/20 bg-white/10 blur-[2px]" />
        <div className="absolute bottom-[10%] left-[22%] h-10 w-10 rotate-12 rounded-[16px] border border-white/18 bg-white/10" />
        <div className="absolute bottom-[14%] right-[10%] h-12 w-12 rounded-full border border-white/18 bg-white/10" />
        <div className="absolute left-[44%] top-[34%] h-12 w-12 rounded-full border-[4px] border-white/30 bg-white/18 shadow-[0_10px_24px_rgba(255,255,255,0.08)] md:h-14 md:w-14" />

      </div>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {bannerSlides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`size-2.5 rounded-full transition ${
              index === activeIndex ? 'bg-white' : 'bg-white/40'
            }`}
            aria-label={`Показать слайд ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
