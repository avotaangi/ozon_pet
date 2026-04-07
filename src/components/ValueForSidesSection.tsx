import { valueForSides } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function ValueForSidesSection() {
  return (
    <section id="value" className="scroll-mt-28">
      <Reveal>
        <SectionHeader
          eyebrow="Ценность"
          title="Одна экосистема создаёт разную, но связанную ценность для трёх сторон"
          description="Пользователь получает спокойствие и персонализацию, поставщик услуг и товаров получает новый поток спроса, а Ozon получает частоту, подписочную выручку и длинную лояльность."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {valueForSides.map((column, index) => (
          <Reveal
            key={column.title}
            delay={index * 80}
            className={`rounded-[32px] p-6 shadow-[0_20px_60px_rgba(0,26,52,0.08)] ${
              column.tone === 'dark'
                ? 'bg-ozon-dark text-white'
                : column.tone === 'blue'
                  ? 'bg-white'
                  : 'bg-[linear-gradient(180deg,#fff7fb_0%,#ffffff_100%)]'
            }`}
          >
            <div
              className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
                column.tone === 'dark'
                  ? 'bg-white/10 text-white'
                  : column.tone === 'blue'
                    ? 'bg-ozon-blue/10 text-ozon-blue'
                    : 'bg-ozon-magenta/10 text-ozon-magenta'
              }`}
            >
              {column.title}
            </div>
            <div className="mt-5 space-y-3">
              {column.points.map((point) => (
                <div
                  key={point}
                  className={`rounded-[22px] px-4 py-3 text-sm leading-7 ${
                    column.tone === 'dark' ? 'bg-white/8 text-white/78' : 'bg-slate-50 text-slate-600'
                  }`}
                >
                  {point}
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
