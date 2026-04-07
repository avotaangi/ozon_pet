import { revenueStreams } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function MonetizationSection() {
  return (
    <section id="monetization" className="scroll-mt-28">
      <Reveal>
        <SectionHeader
          eyebrow="Монетизация"
          title="Экосистема зарабатывает не одним каналом, а несколькими связанными потоками"
          description="Новая модель выручки складывается из товаров, подписки, услуг, продвижения, финтеха и дополнительного оборота через помощь приютам."
          align="center"
        />
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {revenueStreams.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 45}
            className={`rounded-[28px] border border-white/70 p-5 shadow-[0_18px_55px_rgba(0,26,52,0.07)] ${
              index % 4 === 0
                ? 'bg-white'
                : index % 4 === 1
                  ? 'bg-[linear-gradient(180deg,#f7faff_0%,#ffffff_100%)]'
                  : index % 4 === 2
                    ? 'bg-[linear-gradient(180deg,#fff7fb_0%,#ffffff_100%)]'
                    : 'bg-[linear-gradient(180deg,#f5fff9_0%,#ffffff_100%)]'
            }`}
          >
            <div className="flex size-12 items-center justify-center rounded-2xl bg-ozon-blue/10 text-ozon-blue">
              <item.icon className="size-5" />
            </div>
            <div className="mt-5 text-xl font-semibold text-ozon-dark">{item.title}</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
