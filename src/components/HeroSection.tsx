import { ArrowRight, ChevronDown, CirclePlay, Sparkles } from 'lucide-react'
import { heroBadges, highlightMetrics, quickActions } from '../data/content'
import { Reveal } from './Reveal'

const badgeToneMap = {
  blue: 'bg-ozon-blue/10 text-ozon-blue',
  magenta: 'bg-ozon-magenta/10 text-ozon-magenta',
  green: 'bg-ozon-green/10 text-ozon-green',
  orange: 'bg-ozon-orange/10 text-amber-600',
}

export function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-28 pt-8 md:pt-12">
      <div className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
        <Reveal className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-[0_16px_40px_rgba(0,91,255,0.1)] backdrop-blur">
            <Sparkles className="size-4 text-ozon-magenta" />
            Встроено в опыт Ozon, а не вынесено в отдельный pet-стартап
          </div>

          <div>
            <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-tight text-ozon-dark md:text-7xl">
              Ozon Pet — экосистема для владельцев животных
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              От раздела товаров для животных — к платформе, которая объединяет цифровой профиль питомца,
              товары, подписку, услуги, помощь приютам и бережное сопровождение владельца на всём жизненном
              цикле питомца.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#target-model"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ozon-blue px-6 py-4 text-base font-semibold text-white shadow-[0_20px_40px_rgba(0,91,255,0.28)] transition hover:-translate-y-0.5"
            >
              Посмотреть экосистему
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#pet-profile"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 text-base font-semibold text-ozon-dark transition hover:border-ozon-blue hover:text-ozon-blue"
            >
              <CirclePlay className="size-4" />
              Изучить сервисы
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {heroBadges.map((badge) => (
              <div
                key={badge.label}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${badgeToneMap[badge.tone]}`}
              >
                {badge.label}
              </div>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {highlightMetrics.map((item) => (
              <div key={item.label} className="rounded-[24px] border border-white/70 bg-white/75 p-4 shadow-[0_16px_30px_rgba(0,26,52,0.06)]">
                <div className="text-2xl font-semibold text-ozon-dark">{item.value}</div>
                <div className="mt-1 text-sm text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="relative overflow-hidden rounded-[40px] border border-white/70 bg-[radial-gradient(circle_at_top_left,_rgba(241,17,126,0.16),_transparent_28%),linear-gradient(145deg,#ffffff_0%,#eef5ff_40%,#f9fbff_100%)] p-5 shadow-[0_32px_100px_rgba(0,91,255,0.18)]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(0,91,255,0.08),transparent_25%,transparent_70%,rgba(241,17,126,0.08))]" />

            <div className="relative grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
              <div className="rounded-[30px] bg-ozon-dark p-5 text-white shadow-[0_20px_40px_rgba(0,26,52,0.3)]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/60">Pet dashboard</div>
                    <div className="mt-1 text-2xl font-semibold">Марс, 4 года</div>
                  </div>
                  <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
                    Pet ID активен
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[24px] bg-white/8 p-4">
                    <div className="text-sm text-white/60">Рацион</div>
                    <div className="mt-2 text-lg font-semibold">Гипоаллергенный корм</div>
                    <div className="mt-3 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-3/4 rounded-full bg-ozon-green" />
                    </div>
                  </div>
                  <div className="rounded-[24px] bg-white/8 p-4">
                    <div className="text-sm text-white/60">Следующий сервис</div>
                    <div className="mt-2 text-lg font-semibold">Груминг в четверг</div>
                    <div className="mt-2 text-sm text-white/70">Pet ID уже передан специалисту</div>
                  </div>
                </div>

                <div className="mt-4 rounded-[28px] bg-white p-4 text-ozon-dark">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm text-slate-500">Подписка Ozon Pet+</div>
                      <div className="mt-1 text-xl font-semibold">Корм и расходники на автопилоте</div>
                    </div>
                    <div className="rounded-full bg-ozon-magenta/10 px-3 py-1 text-xs font-semibold text-ozon-magenta">
                      renew in 3 days
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[22px] bg-slate-50 p-4">
                      <div className="text-sm text-slate-500">Следующее пополнение</div>
                      <div className="mt-1 font-semibold">6,490 ₽</div>
                    </div>
                    <div className="rounded-[22px] bg-slate-50 p-4">
                      <div className="text-sm text-slate-500">Персональные рекомендации</div>
                      <div className="mt-1 font-semibold">5 товаров и 2 бандла</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[30px] bg-white p-4 shadow-[0_20px_40px_rgba(0,91,255,0.12)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-slate-500">Quick actions</div>
                      <div className="mt-1 text-lg font-semibold text-ozon-dark">Ежедневная забота</div>
                    </div>
                    <ChevronDown className="size-4 text-slate-400" />
                  </div>
                  <div className="mt-4 grid gap-3">
                    {quickActions.map((action) => (
                      <div key={action.label} className="flex items-center gap-3 rounded-[22px] bg-slate-50 px-4 py-3">
                        <div className="flex size-10 items-center justify-center rounded-2xl bg-ozon-blue/10 text-ozon-blue">
                          <action.icon className="size-5" />
                        </div>
                        <div className="font-medium text-slate-700">{action.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mx-auto max-w-[320px] rounded-[34px] border border-slate-200 bg-white p-3 shadow-[0_24px_60px_rgba(0,26,52,0.12)]">
                  <div className="rounded-[28px] bg-[linear-gradient(180deg,#f8fbff_0%,#f1f6ff_100%)] p-4">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>Ozon app / mobile</span>
                      <span>15:07</span>
                    </div>
                    <div className="mt-4 rounded-[24px] bg-ozon-blue p-4 text-white">
                      <div className="text-sm text-white/70">Нужен ситтер сейчас</div>
                      <div className="mt-1 text-lg font-semibold">3 проверенных исполнителя рядом</div>
                    </div>
                    <div className="mt-3 rounded-[24px] bg-white p-4">
                      <div className="text-sm text-slate-500">Помощь приютам</div>
                      <div className="mt-1 font-semibold text-ozon-dark">300 ₽ в месяц автоматически</div>
                      <div className="mt-3 h-2 rounded-full bg-slate-100">
                        <div className="h-2 w-2/3 rounded-full bg-ozon-green" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
