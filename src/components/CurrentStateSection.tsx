import { ArrowLeftRight, CircleAlert } from 'lucide-react'
import { currentStateProblems } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeader } from './SectionHeader'

export function CurrentStateSection() {
  return (
    <section id="current-state" className="scroll-mt-28">
      <Reveal>
        <SectionHeader
          eyebrow="Как есть"
          title="Сегодня Ozon Pet — это сильная товарная зона, но ещё не система заботы"
          description="Основная монетизация строится на продаже товаров, логистике и рекламе. Пользовательский путь разрывается в моменте, когда нужны услуги, доверие, история питомца и бережное сопровождение."
        />
      </Reveal>

      <div className="mt-10 grid gap-8 xl:grid-cols-[1.04fr_0.96fr]">
        <Reveal className="rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-[0_24px_70px_rgba(0,91,255,0.08)] md:p-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-slate-500">AS IS схема</div>
              <div className="mt-2 text-2xl font-semibold text-ozon-dark">Покупатель ↔ Ozon ↔ продавцы товаров</div>
            </div>
            <div className="rounded-2xl bg-amber-50 px-4 py-3 text-amber-700">
              <CircleAlert className="size-5" />
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ['Покупатель', 'Ищет корм, игрушки, аптеку и получает много вариантов без достаточного контекста.'],
              ['Ozon', 'Управляет каталогом, логистикой и рекламной выдачей, но почти не держит сервисный слой.'],
              ['Продавцы товаров', 'Получают покупателя в момент спроса, но не в момент жизненной потребности питомца.'],
            ].map(([title, description], index) => (
              <div key={title} className="relative rounded-[28px] bg-slate-50 p-5">
                <div className="text-lg font-semibold text-ozon-dark">{title}</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                {index < 2 ? (
                  <div className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 md:block">
                    <div className="rounded-full bg-white p-2 shadow-sm">
                      <ArrowLeftRight className="size-4 text-ozon-blue" />
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[28px] bg-[linear-gradient(135deg,rgba(0,91,255,0.06),rgba(241,17,126,0.06))] p-5">
            <div className="text-sm font-medium text-slate-500">Почему этого уже недостаточно</div>
            <div className="mt-3 text-lg font-semibold text-ozon-dark">
              Данные о питомце, сервисы и доверие остаются за пределами платформы, поэтому рост ограничен товарной транзакцией.
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4">
          {currentStateProblems.map((problem, index) => (
            <Reveal
              key={problem.title}
              delay={index * 60}
              className="rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-[0_16px_50px_rgba(0,26,52,0.08)]"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-500">
                  <CircleAlert className="size-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ozon-dark">{problem.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{problem.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
