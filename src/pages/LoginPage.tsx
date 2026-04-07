import { ArrowRight, Heart } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { pets, services } from '../data/marketplace'

const sidebarSections = [
  {
    title: 'Личная информация',
    items: ['Главная', 'Мой профиль', 'Способы оплаты', 'Баллы и бонусы', 'Ozon Premium', 'Ozon PetPro'],
  },
]

export function LoginPage() {
  const upcomingBookings = [
    { ...services.find((item) => item.id === 'srv-2')!, petName: 'Рокси', slot: '10 апреля, 14:30' },
    { ...services.find((item) => item.id === 'srv-3')!, petName: 'Марса', slot: '9 апреля, 08:00' },
    { ...services.find((item) => item.id === 'srv-16')!, petName: 'Персика', slot: '12 апреля, 12:00' },
  ]
  const pastBookings = [
    { ...services.find((item) => item.id === 'srv-8')!, petName: 'Персика', slot: '18 марта, 17:00' },
    { ...services.find((item) => item.id === 'srv-6')!, petName: 'Марса', slot: '6 марта, 11:00' },
    { ...services.find((item) => item.id === 'srv-5')!, petName: 'Рокси', slot: '27 февраля, 09:30' },
  ]
  const petByDisplayName: Record<string, (typeof pets)[number]> = {
    Рокси: pets[0],
    Марса: pets[1],
    Персика: pets[2],
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
      <aside className="hidden rounded-[32px] bg-white p-6 shadow-[0_16px_60px_rgba(15,23,42,0.06)] lg:block">
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
                {section.items.map((item) => (
                  <div
                    key={item}
                    className={`rounded-[14px] px-3 py-2 text-sm ${
                      item === 'Ozon PetPro'
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
        <div className="lg:hidden">
          <div className="rounded-[32px] bg-white p-6 shadow-[0_16px_60px_rgba(15,23,42,0.06)]">
            <div className="flex flex-col items-center text-center">
              <div className="flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(135deg,#dbeafe,#bfdbfe)] text-2xl font-semibold text-ozon-blue aspect-square">
                М
              </div>
              <div className="mt-4">
                <div className="text-2xl font-semibold text-slate-950">Имя Фамилия</div>
                <div className="mt-1 text-sm font-medium text-ozon-blue">Изменить профиль</div>
              </div>
            </div>
          </div>
        </div>

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

        <section className="grid grid-cols-2 gap-4 xl:grid-cols-[0.33fr_0.67fr]">
          <div className="relative flex min-h-[250px] flex-col overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#005BFF_0%,#0A6BFF_100%)] px-5 pb-5 pt-14 text-white shadow-[0_12px_38px_rgba(15,23,42,0.06)] md:min-h-[270px] md:px-7 md:pb-7 md:pt-16">
            <div className="absolute left-1/2 top-3 z-10 -translate-x-1/2 rounded-2xl bg-ozon-green px-4 py-2 text-lg font-bold text-white shadow-[0_10px_24px_rgba(0,190,108,0.24)]">
              -277 ₽
            </div>
            <div className="text-[1.45rem] font-black leading-none tracking-tight md:text-[2rem]">ozon банк</div>
            <div className="mt-auto flex items-end justify-between gap-3 md:gap-6">
              <Heart className="size-7 shrink-0 fill-[#1b2dbf] text-[#1b2dbf] md:size-8" />
              <div className="max-w-[150px] text-right text-xs leading-5 text-white/72 md:max-w-[180px] md:text-sm">Базовая карта для покупок внутри Ozon</div>
            </div>
          </div>

          <div className="relative flex min-h-[250px] flex-col overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#6E5BFF_0%,#6750E7_100%)] px-5 pb-5 pt-14 text-white shadow-[0_12px_38px_rgba(15,23,42,0.06)] md:min-h-[270px] md:px-7 md:pb-7 md:pt-16">
            <div className="absolute left-1/2 top-3 z-10 -translate-x-1/2 rounded-2xl bg-ozon-green px-4 py-2 text-lg font-bold text-white shadow-[0_10px_24px_rgba(0,190,108,0.24)]">
              -277 ₽
            </div>
            <div className="text-[1.45rem] font-black leading-none tracking-tight md:text-[1.95rem]">ozon банк</div>
            <div className="mt-1 text-[1.45rem] font-black leading-none tracking-tight md:text-[1.95rem]">кредитная</div>
            <div className="mt-auto flex items-end justify-between gap-3 md:gap-6">
              <Heart className="size-7 shrink-0 fill-[#B7FF54] text-[#B7FF54] md:size-8" />
              <div className="max-w-[180px] text-right text-xs leading-5 text-white/80 md:max-w-[260px] md:text-sm md:leading-6">
                С этой картой дешевле оплачивать услуги для питомца и получать специальные pet-бонусы.
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="text-3xl font-semibold text-slate-950">Мои предстоящие записи</div>
          <div className="mt-4 grid gap-4 xl:grid-cols-3">
            {upcomingBookings.map((item) => {
              const pet = petByDisplayName[item.petName]

              return (
                <article key={`${item.id}-${item.petName}`} className="flex h-full flex-col rounded-[28px] bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
                  <div className="flex items-center gap-3 rounded-[22px] bg-slate-50 p-4">
                    {pet ? (
                      <img alt={pet.name} src={pet.photo} className="size-14 rounded-full object-cover" />
                    ) : (
                      <div className="flex size-14 items-center justify-center rounded-full bg-slate-200 text-slate-500">🐾</div>
                    )}
                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Записан питомец</div>
                      <div className="mt-1 text-lg font-semibold text-slate-950">{item.petName}</div>
                      <div className="text-sm text-slate-500">{item.slot}</div>
                    </div>
                  </div>
                  <div className="mt-4 text-xl font-semibold text-slate-900">{item.title}</div>
                  <div className="mt-2 text-sm leading-7 text-slate-600">{item.subtitle}</div>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-5 text-sm">
                    <span className="leading-none font-semibold text-slate-900">{item.price}</span>
                    <button
                      type="button"
                      className="max-w-[108px] min-[390px]:max-w-none rounded-full bg-ozon-blue px-3 py-1.5 text-center text-xs font-semibold leading-tight text-white whitespace-normal min-[390px]:whitespace-nowrap"
                    >
                      Написать специалисту
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section>
          <div className="text-3xl font-semibold text-slate-950">Прошедшие услуги</div>
          <div className="mt-4 grid gap-4 xl:grid-cols-3">
            {pastBookings.map((item) => {
              const pet = petByDisplayName[item.petName]

              return (
                <article key={`${item.id}-${item.petName}-past`} className="flex h-full flex-col rounded-[28px] bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
                  <div className="flex items-center gap-3 rounded-[22px] bg-slate-50 p-4">
                    {pet ? (
                      <img alt={pet.name} src={pet.photo} className="size-14 rounded-full object-cover" />
                    ) : (
                      <div className="flex size-14 items-center justify-center rounded-full bg-slate-200 text-slate-500">🐾</div>
                    )}
                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Ранее записывали</div>
                      <div className="mt-1 text-lg font-semibold text-slate-950">{item.petName}</div>
                      <div className="text-sm text-slate-500">{item.slot}</div>
                    </div>
                  </div>
                  <div className="mt-4 text-xl font-semibold text-slate-900">{item.title}</div>
                  <div className="mt-2 text-sm leading-7 text-slate-600">{item.subtitle}</div>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-5 text-sm">
                    <span className="leading-none font-semibold text-slate-900">{item.price}</span>
                    <button
                      type="button"
                      className="max-w-[108px] min-[390px]:max-w-none rounded-full bg-ozon-blue px-3 py-1.5 text-center text-xs font-semibold leading-tight text-white whitespace-normal min-[390px]:whitespace-nowrap"
                    >
                      Написать специалисту
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
