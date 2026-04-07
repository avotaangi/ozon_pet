import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { services } from '../data/marketplace'

type InstantServiceCategory = 'groomers' | 'sitters' | 'veterinarians' | 'walking' | 'boarding' | 'training'
type InstantSpecialty = {
  label: string
  categories: InstantServiceCategory[]
}

const instantSpecialties: InstantSpecialty[] = [
  { label: 'Ситтер', categories: ['sitters'] },
  { label: 'Выгул собак', categories: ['walking'] },
  { label: 'Передержка на день', categories: ['boarding', 'sitters'] },
  { label: 'Сопровождение к врачу', categories: ['sitters', 'veterinarians'] },
  { label: 'Кормление и уход', categories: ['sitters', 'groomers'] },
]

export function PetClickPage() {
  const navigate = useNavigate()
  const [instantSpecialty, setInstantSpecialty] = useState(instantSpecialties[0].label)
  const instantGoods = [
    {
      id: 'instant-good-1',
      title: 'Корм на сегодня',
      subtitle: 'Гипоаллергенный рацион, доставка за 30-40 минут',
      price: '1 290 ₽',
      eta: 'Привезём сейчас',
    },
    {
      id: 'instant-good-2',
      title: 'Пелёнки и наполнитель',
      subtitle: 'Базовые расходники для дома и переноски',
      price: '890 ₽',
      eta: 'Курьер рядом',
    },
    {
      id: 'instant-good-3',
      title: 'Аптечка первой помощи',
      subtitle: 'Срочный набор для домашнего ухода',
      price: '2 190 ₽',
      eta: 'Доставка за час',
    },
  ]

  const visibleServices = useMemo(() => {
    const activeSpecialty = instantSpecialties.find((item) => item.label === instantSpecialty) ?? instantSpecialties[0]

    return services.filter((service) => {
      const isInstantCategory = activeSpecialty.categories.includes(service.category)
      const isAvailableNow =
        service.eta.includes('сегодня') ||
        service.eta.includes('рядом') ||
        service.eta.includes('утром') ||
        service.eta.includes('вечером')

      return isInstantCategory && isAvailableNow
    })
  }, [instantSpecialty])

  return (
    <div className="space-y-6">
      <section className="rounded-[32px] bg-[linear-gradient(135deg,#ffffff_0%,#eef5ff_100%)] p-7 shadow-[0_16px_60px_rgba(15,23,42,0.06)]">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-ozon-magenta">Pet По клику</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">Срочные pet-услуги здесь и сейчас</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          Сценарий для быстрых pet-задач внутри Ozon Pet: ситтер, выгул, сопровождение к врачу и другие услуги, которые можно запросить сразу.
        </p>
      </section>

      <section className="rounded-[28px] bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
        <div className="grid gap-4 xl:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[22px] bg-slate-50 p-4">
            <div className="text-sm font-semibold text-slate-700">Кого ищем прямо сейчас</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {instantSpecialties.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setInstantSpecialty(item.label)}
                  className={`rounded-[16px] px-4 py-3 text-sm font-medium transition ${
                    instantSpecialty === item.label ? 'bg-ozon-blue text-white' : 'bg-white text-slate-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[22px] bg-slate-50 p-4">
            <div className="text-sm font-semibold text-slate-700">Карта доступных специалистов</div>
            <div className="mt-3 overflow-hidden rounded-[18px] border border-slate-200 bg-white">
              <div className="relative h-[220px] bg-[linear-gradient(180deg,#f8fbff_0%,#edf4ff_100%)]">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,91,255,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(0,91,255,0.06)_1px,transparent_1px)] bg-[size:34px_34px]" />
                <div className="absolute left-[18%] top-[22%] size-4 rounded-full bg-ozon-magenta shadow-[0_0_0_8px_rgba(241,17,126,0.12)]" />
                <div className="absolute right-[24%] top-[34%] size-4 rounded-full bg-ozon-blue shadow-[0_0_0_8px_rgba(0,91,255,0.12)]" />
                <div className="absolute left-[42%] bottom-[24%] size-4 rounded-full bg-emerald-500 shadow-[0_0_0_8px_rgba(16,185,129,0.12)]" />
                <div className="absolute right-[16%] bottom-[20%] size-4 rounded-full bg-amber-500 shadow-[0_0_0_8px_rgba(245,158,11,0.14)]" />
                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
                  Сейчас ищем:
                  <span className="text-ozon-blue">{instantSpecialty}</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-[18px] bg-ozon-magenta px-4 py-3 text-sm font-semibold text-white"
            >
              Искать {instantSpecialty}
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {visibleServices.map((item) => (
          <article key={item.id} className="flex h-full flex-col rounded-[28px] bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
            <div className="flex h-38 items-center justify-center rounded-[20px] bg-[#d9d9d9] text-xl text-slate-500">Услуга</div>
            <div className="mt-4 text-xl font-semibold text-slate-900">{item.title}</div>
            <div className="mt-2 text-sm leading-7 text-slate-600">{item.subtitle}</div>
            <div className="mt-auto flex items-center justify-between gap-3 pt-5">
              <span className="leading-none font-semibold text-ozon-dark">{item.price}</span>
              <button
                type="button"
                onClick={() => navigate(`/booking/service/${item.id}`)}
                className="shrink-0 rounded-full bg-ozon-blue px-3 py-1.5 text-xs font-semibold text-white"
              >
                Оформить
              </button>
            </div>
            <div className="mt-3 min-h-7">
              <div className="inline-flex w-fit rounded-full bg-ozon-blue/10 px-3 py-1 text-xs font-semibold text-ozon-blue">
                {item.eta}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-[28px] bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
        <div className="text-sm font-semibold uppercase tracking-[0.16em] text-ozon-blue">Товары по клику</div>
        <div className="mt-2 text-2xl font-semibold text-slate-950">Товары, которые могут привезти прямо сейчас</div>
        <div className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
          Срочные pet-товары внутри Ozon Pet: корм, расходники и базовый уход, которые можно получить без долгого ожидания.
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {instantGoods.map((item) => (
            <article key={item.id} className="flex h-full flex-col rounded-[24px] bg-slate-50 p-5">
              <div className="flex h-36 items-center justify-center rounded-[20px] bg-white text-xl text-slate-400">Товар</div>
              <div className="mt-4 text-xl font-semibold text-slate-900">{item.title}</div>
              <div className="mt-2 text-sm leading-7 text-slate-600">{item.subtitle}</div>
              <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                <span className="leading-none font-semibold text-ozon-dark">{item.price}</span>
                <button
                  type="button"
                  className="shrink-0 rounded-full bg-ozon-blue px-3 py-1.5 text-xs font-semibold text-white"
                >
                  В корзину
                </button>
              </div>
              <div className="mt-3 min-h-7">
                <div className="inline-flex w-fit rounded-full bg-ozon-blue/10 px-3 py-1 text-xs font-semibold text-ozon-blue">
                  {item.eta}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
