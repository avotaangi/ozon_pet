import { ArrowRight, Gift, Heart, Settings, UserRound } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const sidebarSections = [
  {
    title: 'Личная информация',
    items: ['Главная', 'Мой профиль', 'Способы оплаты', 'Баллы и бонусы', 'Ozon Premium'],
  },
  {
    title: 'Профессиональный путь',
    items: ['Мои заявки', 'Квалификация', 'Расписание', 'Клиенты и питомцы'],
  },
]

export function LoginPage() {
  const reviewCards = [
    { title: 'Подарочный набор', icon: Gift },
    { title: 'Настройка профиля', icon: Settings },
    { title: 'Личный кабинет', icon: UserRound },
  ]

  return (
    <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
      <aside className="rounded-[32px] bg-white p-6 shadow-[0_16px_60px_rgba(15,23,42,0.06)]">
        <div className="flex flex-col items-center text-center">
          <div className="flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(135deg,#dbeafe,#bfdbfe)] text-2xl font-semibold text-ozon-blue aspect-square">
            М
          </div>
          <div className="mt-4">
            <div className="text-2xl font-semibold text-slate-950">Имя Фамилия</div>
            <div className="mt-1 text-sm font-medium text-ozon-blue">Изменить профиль</div>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          {sidebarSections.map((section) => (
            <div key={section.title}>
              <div className="text-sm font-semibold text-slate-900">{section.title}</div>
              <div className="mt-3 space-y-2">
                {section.items.map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-[14px] px-3 py-2 text-sm ${
                      section.title === 'Профессиональный путь' && index === 0
                        ? 'bg-ozon-blue text-white'
                        : 'bg-slate-50 text-slate-600'
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>

      <div className="space-y-6">
        <section className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#f1117e_0%,#ff4fa2_48%,#ff7bbd_100%)] p-7 text-white shadow-[0_18px_60px_rgba(241,17,126,0.24)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.18),transparent_18%),radial-gradient(circle_at_82%_70%,rgba(255,255,255,0.18),transparent_16%)]" />
          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Ozon Pet</div>
              <div className="mt-2 text-4xl font-semibold tracking-tight">Профессиональный путь внутри Ozon Pet</div>
              <div className="mt-3 text-sm leading-7 text-white/80">
                Подключайте профиль специалиста, подтверждайте квалификацию и работайте с клиентами и питомцами внутри единой платформы.
              </div>
            </div>
            <NavLink
              to="/petpro"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-ozon-blue"
            >
              Перейти в PetPro
              <ArrowRight className="size-4" />
            </NavLink>
          </div>
        </section>

        <section className="grid gap-4 xl:grid-cols-[0.33fr_0.67fr]">
          <div className="relative flex min-h-[270px] flex-col overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#005BFF_0%,#0A6BFF_100%)] px-7 pb-7 pt-16 text-white shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
            <div className="absolute left-1/2 top-3 z-10 -translate-x-1/2 rounded-2xl bg-ozon-green px-4 py-2 text-lg font-bold text-white shadow-[0_10px_24px_rgba(0,190,108,0.24)]">
              -277 ₽
            </div>
            <div className="text-[2rem] font-black leading-none tracking-tight">ozon банк</div>
            <div className="mt-auto flex items-end justify-between gap-6">
              <Heart className="size-8 shrink-0 fill-[#1b2dbf] text-[#1b2dbf]" />
              <div className="max-w-[180px] text-right text-sm text-white/72">Базовая карта для покупок внутри Ozon</div>
            </div>
          </div>

          <div className="relative flex min-h-[270px] flex-col overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#6E5BFF_0%,#6750E7_100%)] px-7 pb-7 pt-16 text-white shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
            <div className="absolute left-1/2 top-3 z-10 -translate-x-1/2 rounded-2xl bg-ozon-green px-4 py-2 text-lg font-bold text-white shadow-[0_10px_24px_rgba(0,190,108,0.24)]">
              -277 ₽
            </div>
            <div className="text-[1.95rem] font-black leading-none tracking-tight">ozon банк</div>
            <div className="mt-1 text-[1.95rem] font-black leading-none tracking-tight">кредитная</div>
            <div className="mt-auto flex items-end justify-between gap-6">
              <Heart className="size-8 shrink-0 fill-[#B7FF54] text-[#B7FF54]" />
              <div className="max-w-[260px] text-right text-sm leading-6 text-white/80">
                С этой картой дешевле оплачивать услуги для питомца и получать специальные pet-бонусы.
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="text-3xl font-semibold text-slate-950">Оцените покупки</div>
          <div className="mt-4 grid gap-4 xl:grid-cols-3">
            {reviewCards.map(({ title, icon: Icon }) => (
              <div key={title} className="rounded-[28px] bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
                <div className="flex h-36 items-center justify-center rounded-[22px] bg-slate-50 text-slate-400">
                  <Icon className="size-10" />
                </div>
                <div className="mt-4 text-lg font-semibold text-slate-950">{title}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
