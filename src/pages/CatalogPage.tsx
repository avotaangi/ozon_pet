import { BellRing, BrainCircuit, Check, Clock3, Funnel, PackageCheck, Repeat } from 'lucide-react'
import { useState } from 'react'
import { PreferenceBadge } from '../components/marketplace/PreferenceBadge'
import { featuredProducts, pets, productItems, sidebarCategories } from '../data/marketplace'

export function CatalogPage() {
  const activePet = pets[0]
  const [selectedReminder, setSelectedReminder] = useState('28 дней')
  const [selectedProductId, setSelectedProductId] = useState('food-4')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const selectedProduct = productItems.find((item) => item.id === selectedProductId) ?? productItems[0]

  return (
    <div className="space-y-6">
      <section className="rounded-[32px] bg-white p-7 shadow-[0_16px_60px_rgba(15,23,42,0.06)]">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-ozon-blue">Товары и подписка</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">Регулярный спрос превращается в спокойный ритуал заботы</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          Ozon Pet превращает разовую покупку в управляемый и предсказуемый сценарий: подписка, напоминания, один клик на повтор, защита от отсутствия товара и персональный подбор на базе Pet ID.
        </p>
        <div className="mt-6 grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[28px] bg-[linear-gradient(180deg,#005bff_0%,#00a2ff_100%)] p-6 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm text-white/70">Подписка активна</div>
                <div className="mt-1 text-2xl font-semibold">Корм, уход и расходники для {activePet.name}</div>
              </div>
              <PackageCheck className="size-5" />
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {[
                'Удобство и чувство контроля',
                'Приоритетная доставка',
                'Защита от out-of-stock',
                'Бонусы на услуги и баллы',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[20px] bg-white/10 px-4 py-3 text-sm">
                  <Check className="size-4 shrink-0 text-ozon-green" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[24px] bg-white p-5 text-slate-900">
              <div className="flex items-center gap-3">
                <BellRing className="size-5 text-amber-600" />
                <div>
                  <div className="text-sm text-slate-500">Уведомление</div>
                  <div className="mt-1 text-lg font-semibold">Корм скоро закончится</div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {['14 дней', '21 день', '28 дней', '35 дней'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSelectedReminder(option)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      selectedReminder === option ? 'bg-ozon-blue text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="mt-4 rounded-[18px] bg-slate-50 px-4 py-3 text-sm text-slate-600">
                Напомнить через <span className="font-semibold text-slate-900">{selectedReminder}</span>, затем оформить заказ по одному подтверждению.
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[28px] bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm text-slate-500">Один клик</div>
                  <div className="mt-1 text-2xl font-semibold text-slate-950">Повторная покупка без тревоги</div>
                </div>
                <Repeat className="size-5 text-ozon-magenta" />
              </div>
              <div className="mt-4 grid gap-3">
                {productItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedProductId(item.id)}
                    className={`rounded-[20px] p-4 text-left transition ${
                      selectedProductId === item.id
                        ? 'bg-ozon-magenta/8 ring-2 ring-ozon-magenta'
                        : 'bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div className="rounded-[18px] bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
                      <div className="flex items-start gap-3">
                        <div className="flex size-14 shrink-0 items-center justify-center rounded-[16px] bg-slate-100 text-xs font-semibold text-slate-400">
                          Товар
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-slate-900">{item.title}</div>
                          <div className="mt-1 text-sm text-slate-500">{item.subtitle}</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`mt-3 text-sm font-medium ${
                        selectedProductId === item.id ? 'text-ozon-magenta' : 'text-slate-500'
                      }`}
                    >
                      Периодичность напоминания: {item.reminder}
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-4 rounded-[20px] bg-slate-50 p-4 text-sm text-slate-600">
                Следующее действие: <span className="font-semibold text-slate-900">оформить {selectedProduct.title}</span> по одному подтверждению.
              </div>
            </div>

            <div className="rounded-[28px] bg-[linear-gradient(135deg,#fff7fb_0%,#ffffff_100%)] p-5 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
              <div className="flex items-start gap-3">
                <BrainCircuit className="mt-1 size-5 text-ozon-magenta" />
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-ozon-magenta">AI-рекомендации</div>
                  <div className="mt-2 text-lg font-semibold text-slate-950">Обучено профессиональными специалистами</div>
                  <div className="mt-2 text-sm leading-7 text-slate-600">
                    Система объясняет, что подходит конкретному животному, почему и на основе каких данных из Pet ID, заметок врача и истории покупок.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setMobileFiltersOpen((value) => !value)}
          className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-[0_12px_38px_rgba(15,23,42,0.06)]"
        >
          <Funnel className="size-4 text-ozon-blue" />
          Фильтр
        </button>
      </div>

      <section className="grid gap-4 lg:grid-cols-[240px_1fr]">
        <aside
          className={`${mobileFiltersOpen ? 'block' : 'hidden'} rounded-[28px] bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.06)] lg:block`}
        >
          <div className="text-lg font-semibold text-slate-900">Категории</div>
          <div className="mt-4 space-y-2">
            {sidebarCategories.map((item, index) => (
              <div
                key={item}
                className={`rounded-[16px] px-4 py-3 text-sm ${
                  index === 0 ? 'bg-ozon-blue text-white' : 'bg-slate-50 text-slate-600'
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </aside>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[...productItems, ...featuredProducts].map((item) => (
            <article key={item.id} className="flex h-full flex-col rounded-[28px] bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
              <div className="relative flex h-44 items-center justify-center rounded-[22px] bg-[#d9d9d9] text-xl text-slate-500">
                {item.preferenceBadge ? (
                  <PreferenceBadge
                    icon={item.preferenceBadge.icon}
                    label={item.preferenceBadge.label}
                    tone={item.preferenceBadge.tone}
                  />
                ) : null}
                Товар
              </div>
              <div className="mt-4 text-xl font-semibold text-slate-900">{item.title}</div>
              <div className="mt-2 text-sm leading-7 text-slate-600">{item.subtitle}</div>
              {item.aiReason ? (
                <div className="mt-3 rounded-[18px] bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">Почему подходит:</span> {item.aiReason}
                </div>
              ) : null}
              <div className="mt-auto flex items-center justify-between gap-4 pt-5">
                <div className="leading-none text-lg font-semibold text-slate-900">{item.price}</div>
                <button
                  type="button"
                  className="shrink-0 rounded-full bg-ozon-blue px-3 py-1.5 text-xs font-semibold text-white"
                >
                  В корзину
                </button>
              </div>
              <div className="mt-3 min-h-7 flex flex-wrap items-center gap-3">
                {item.reminder ? (
                  <div className="inline-flex items-center gap-2 rounded-full bg-ozon-blue/10 px-3 py-1 text-xs font-semibold text-ozon-blue">
                    <Clock3 className="size-3.5" />
                    {item.reminder}
                  </div>
                ) : null}
                {item.badge ? (
                  <div className="rounded-full bg-ozon-magenta/10 px-3 py-1 text-xs font-semibold text-ozon-magenta">
                    {item.badge}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
