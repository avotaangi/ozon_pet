import { roadmapStages } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function RoadmapSection() {
  return (
    <section id="roadmap" className="scroll-mt-28">
      <Reveal>
        <SectionHeader
          eyebrow="Roadmap"
          title="Запуск строится поэтапно: сначала данные, затем сервисы, затем полная экосистема"
          description="Такой путь позволяет быстро создать ядро ценности, проверить повторные сценарии и только потом масштабировать сеть поставщиков, финтех и более чувствительные сценарии."
        />
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {roadmapStages.map((stage, index) => (
          <Reveal
            key={stage.stage}
            delay={index * 80}
            className={`relative rounded-[30px] p-6 shadow-[0_20px_60px_rgba(0,26,52,0.08)] ${
              index === 0
                ? 'bg-white'
                : index === 1
                  ? 'bg-[linear-gradient(180deg,#f7faff_0%,#ffffff_100%)]'
                  : 'bg-[linear-gradient(180deg,#001a34_0%,#07346f_100%)] text-white'
            }`}
          >
            <div
              className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
                index === 2 ? 'bg-white/10 text-white' : 'bg-ozon-blue/10 text-ozon-blue'
              }`}
            >
              {stage.stage}
            </div>
            <div className={`mt-5 text-2xl font-semibold ${index === 2 ? 'text-white' : 'text-ozon-dark'}`}>
              {stage.title}
            </div>
            <div className="mt-5 space-y-3">
              {stage.items.map((item) => (
                <div
                  key={item}
                  className={`rounded-[22px] px-4 py-3 text-sm ${
                    index === 2 ? 'bg-white/8 text-white/80' : 'bg-slate-50 text-slate-600'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
