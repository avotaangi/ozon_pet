import { ArrowRight, Dot } from 'lucide-react'
import { targetModelNodes } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

const toneClasses = {
  blue: 'bg-ozon-blue/10 text-ozon-blue',
  magenta: 'bg-ozon-magenta/10 text-ozon-magenta',
  green: 'bg-ozon-green/10 text-ozon-green',
  dark: 'bg-ozon-dark text-white',
  orange: 'bg-ozon-orange/10 text-amber-600',
}

export function TargetModelSection() {
  return (
    <section id="target-model" className="scroll-mt-28">
      <Reveal>
        <SectionHeader
          eyebrow="Целевая модель"
          title="Ozon Pet становится двусторонней экосистемой вокруг жизненного цикла питомца"
          description="В центре не витрина товаров, а слой данных и доверия. Вокруг него соединяются владельцы, продавцы, клиники, грумеры, ситтеры, приюты и Ozon Банк."
          align="center"
        />
      </Reveal>

      <Reveal
        delay={120}
        className="mt-10 overflow-hidden rounded-[40px] border border-white/70 bg-white/85 p-6 shadow-[0_28px_90px_rgba(0,91,255,0.1)] md:p-8"
      >
        <div className="grid gap-6 xl:grid-cols-[1fr_420px]">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {targetModelNodes.map((node, index) => (
              <div
                key={node.title}
                className={`rounded-[30px] p-5 shadow-[0_18px_50px_rgba(0,26,52,0.07)] ${
                  node.tone === 'dark' ? 'bg-ozon-dark text-white' : 'bg-slate-50'
                }`}
              >
                <div className={`inline-flex size-12 items-center justify-center rounded-2xl ${toneClasses[node.tone]}`}>
                  <node.icon className="size-5" />
                </div>
                <div className={`mt-5 text-xl font-semibold ${node.tone === 'dark' ? 'text-white' : 'text-ozon-dark'}`}>
                  {node.title}
                </div>
                <div className={`mt-2 text-sm leading-7 ${node.tone === 'dark' ? 'text-white/70' : 'text-slate-600'}`}>
                  {node.subtitle}
                </div>
                {index < targetModelNodes.length - 1 ? (
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    value flow <ArrowRight className="size-3" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="rounded-[32px] bg-[linear-gradient(180deg,#001a34_0%,#07346f_100%)] p-6 text-white">
            <div className="text-sm uppercase tracking-[0.22em] text-white/60">Core platform</div>
            <div className="mt-3 text-3xl font-semibold">Ozon Pet</div>
            <p className="mt-4 text-sm leading-7 text-white/72">
              Данные о питомце, доверенные статусы, рекомендации, подписка, сервисный маркетплейс, благотворительность и
              финтех собираются в одном интерфейсе Ozon.
            </p>

            <div className="mt-6 rounded-[28px] bg-white/8 p-5">
              {[
                'Pet ID запускает персонализацию и передачу данных специалистам',
                'Подписка превращает разовые покупки в регулярный сценарий',
                'Ozon PetPro даёт клиникам и специалистам рабочий интерфейс',
                'Благотворительность создаёт прозрачный оборот товаров и услуг',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 py-2">
                  <Dot className="mt-1 size-5 shrink-0 text-ozon-green" />
                  <span className="text-sm leading-7 text-white/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[24px] bg-ozon-blue/30 p-4">
                <div className="text-sm text-white/60">Для пользователя</div>
                <div className="mt-1 text-lg font-semibold">Один непрерывный путь заботы</div>
              </div>
              <div className="rounded-[24px] bg-white/8 p-4">
                <div className="text-sm text-white/60">Для Ozon</div>
                <div className="mt-1 text-lg font-semibold">Новый слой удержания и LTV</div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
