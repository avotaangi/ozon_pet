import { Funnel, Heart } from 'lucide-react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  productItems,
  services,
  sidebarCategories,
} from '../../data/marketplace'
import { HeroBanner } from './HeroBanner'
import { PetCardCarousel } from './PetCardCarousel'

const preferenceToneClass = {
  danger: 'bg-white text-rose-500 ring-1 ring-rose-100',
  positive: 'bg-white text-emerald-600 ring-1 ring-emerald-100',
}

export function MarketplaceHomeContent() {
  const [activeTab, setActiveTab] = useState<'products' | 'services'>('products')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [activeServiceCategory, setActiveServiceCategory] = useState<
    'all' | 'groomers' | 'sitters' | 'veterinarians' | 'walking' | 'boarding' | 'training'
  >('all')
  const [serviceMode, setServiceMode] = useState<'all' | 'instant'>('all')
  const [instantSpecialty, setInstantSpecialty] = useState('Ситтер')
  const navigate = useNavigate()
  const capabilityCards = [
    {
      title: 'Услуги',
      text: 'Раздел услуг для животных',
      to: '/services',
      image:
        'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Подписка',
      text: 'Пакеты услуг и сервисов с выгодой и связью со специалистом',
      to: '/pet-subscription',
      image:
        'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Добро',
      text: 'Благотворительность для животных',
      to: '/pet-dobro',
      image:
        'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Блог',
      text: 'Сообщество, объединяющее специалистов и владельцев животных',
      to: '/pet-blog',
      image:
        'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=800&q=80',
    },
  ]
  const serviceCategories = [
    { id: 'all', label: 'Все услуги' },
    { id: 'groomers', label: 'Грумеры' },
    { id: 'sitters', label: 'Ситтеры' },
    { id: 'veterinarians', label: 'Ветеринары' },
    { id: 'walking', label: 'Выгул' },
    { id: 'boarding', label: 'Передержка' },
    { id: 'training', label: 'Кинологи' },
  ] as const
  const visibleServices = (
    activeServiceCategory === 'all'
      ? services
      : services.filter((service) => service.category === activeServiceCategory)
  ).filter((service) =>
    serviceMode === 'instant'
      ? ['walking', 'sitters', 'veterinarians'].includes(service.category) &&
        (service.eta.includes('сегодня') || service.eta.includes('рядом') || service.eta.includes('утром') || service.eta.includes('вечером'))
      : true,
  )
  const instantSpecialties = ['Ситтер', 'Выгул собак', 'Передержка на день', 'Сопровождение к врачу', 'Кормление и уход']

  return (
    <div className="space-y-6">
      <section className="grid gap-5 lg:grid-cols-[1fr_0.96fr]">
        <div className="order-2 lg:order-1">
          <PetCardCarousel />
        </div>
        <div className="order-1 lg:order-2">
          <HeroBanner />
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {capabilityCards.map(({ title, text, to, image }) => (
          <NavLink
            key={title}
            to={to}
            className="relative overflow-hidden rounded-[28px] bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(15,23,42,0.1)]"
          >
            <img
              src={image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full scale-110 object-cover opacity-20 blur-xl"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0.88))]" />
            <div className="relative flex flex-wrap items-center gap-2">
              <div className="rounded-full bg-ozon-blue px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-[0_8px_20px_rgba(0,91,255,0.22)]">
                Pet
              </div>
              <div className="text-lg font-semibold uppercase text-slate-900 md:text-xl">{title}</div>
              {title === 'Добро' ? (
                <div className="ml-auto flex size-9 items-center justify-center rounded-full bg-ozon-magenta text-white shadow-[0_10px_24px_rgba(241,17,126,0.28)]">
                  <Heart className="size-4 fill-current" />
                </div>
              ) : null}
            </div>
            <div className="relative mt-2 text-sm leading-6 text-slate-600 md:leading-7">{text}</div>
          </NavLink>
        ))}
      </section>

      <section className="flex justify-center">
        <div className="inline-flex rounded-[20px] bg-[#dcdfe5] p-1.5">
          <button
            type="button"
            onClick={() => setActiveTab('products')}
            className={`min-w-38 rounded-[16px] px-8 py-3 text-lg font-medium transition ${
              activeTab === 'products' ? 'bg-white text-black shadow-sm' : 'text-slate-700'
            }`}
          >
            Товары
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('services')}
            className={`min-w-38 rounded-[16px] px-8 py-3 text-lg font-medium transition ${
              activeTab === 'services' ? 'bg-white text-black shadow-sm' : 'text-slate-700'
            }`}
          >
            Услуги
          </button>
        </div>
      </section>

      {activeTab === 'products' ? (
        <>
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

          <section className="grid gap-4 lg:grid-cols-[220px_1fr]">
            <aside
              className={`${mobileFiltersOpen ? 'block' : 'hidden'} rounded-[24px] bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.06)] lg:block`}
            >
              <div className="text-sm font-semibold text-slate-700">Категория</div>
              <div className="mt-4 space-y-2">
                {sidebarCategories.map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-[14px] px-3 py-2 text-sm ${
                      index === 0 ? 'bg-slate-100 font-medium text-ozon-dark' : 'text-slate-600'
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </aside>

            <div className="space-y-4">
              <div className={`${mobileFiltersOpen ? 'flex' : 'hidden'} flex-wrap items-center gap-4 lg:flex`}>
                <div className="flex flex-wrap gap-2">
                  {['Все товары/услуги', 'Подходит для Рокси', 'Подходит для Марса', 'Подходит для Персика'].map(
                    (label, index) => (
                    <button
                      key={label}
                      type="button"
                      className={`rounded-2xl px-4 py-3 text-sm font-medium shadow-[0_8px_24px_rgba(15,23,42,0.05)] ${
                        index === 0
                          ? 'bg-ozon-blue text-white'
                          : 'bg-white text-slate-700'
                      }`}
                    >
                      {label}
                    </button>
                    ),
                  )}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {productItems.map((item) => (
                  <article key={item.id} className="flex h-full flex-col rounded-[24px] bg-white p-4 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
                    <div className="relative flex h-38 items-center justify-center rounded-[20px] bg-[#d9d9d9] text-xl text-slate-500">
                      {item.preferenceBadge ? (
                        <div
                          className={`absolute left-3 top-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm ${preferenceToneClass[item.preferenceBadge.tone]}`}
                        >
                          <span>{item.preferenceBadge.icon}</span>
                        </div>
                      ) : null}
                      Товар
                    </div>
                    <div className="mt-4">
                      <div className="text-lg font-semibold text-slate-900">{item.title}</div>
                      <div className="mt-1 text-sm text-slate-500">{item.subtitle}</div>
                    </div>
                    <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                      <div className="leading-none text-lg font-semibold text-slate-900">{item.price}</div>
                      <button
                        type="button"
                        className="shrink-0 rounded-full bg-ozon-blue px-3 py-1.5 text-xs font-semibold text-white"
                      >
                        В корзину
                      </button>
                    </div>
                    <div className="mt-3 min-h-7">
                      {item.badge ? (
                        <div className="w-fit rounded-full bg-ozon-blue/10 px-3 py-1 text-xs font-semibold text-ozon-blue">
                          {item.badge}
                        </div>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

        </>
      ) : (
        <>
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

        <section className="grid gap-4 lg:grid-cols-[260px_1fr]">
          <aside
            className={`${mobileFiltersOpen ? 'block' : 'hidden'} rounded-[24px] bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.06)] lg:block`}
          >
            <div className="text-sm font-semibold text-slate-700">Кого ищем</div>
            <div className="mt-4 space-y-2">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveServiceCategory(category.id)}
                  className={`w-full rounded-[14px] px-3 py-2 text-left text-sm ${
                    activeServiceCategory === category.id
                      ? 'bg-ozon-blue text-white'
                      : 'bg-slate-50 text-slate-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </aside>

          <div className="space-y-4">
            <div className="rounded-[24px] bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.16em] text-ozon-magenta">Быстрый сценарий</div>
                  <div className="mt-2 text-xl font-semibold text-slate-950">По клику</div>
                  <div className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                    Сервис для ситуаций здесь и сейчас: владелец выбирает специализацию ситтера, видит ближайшую карту и запускает поиск специалиста почти как в такси.
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setServiceMode('all')}
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      serviceMode === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    Все услуги
                  </button>
                  <button
                    type="button"
                    onClick={() => setServiceMode('instant')}
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      serviceMode === 'instant' ? 'bg-ozon-magenta text-white' : 'bg-ozon-magenta/10 text-ozon-magenta'
                    }`}
                  >
                    По клику
                  </button>
                </div>
              </div>

              {serviceMode === 'instant' ? (
                <div className="mt-5 grid gap-4 xl:grid-cols-[0.92fr_1.08fr]">
                  <div className="rounded-[22px] bg-slate-50 p-4">
                    <div className="text-sm font-semibold text-slate-700">Кого ищем прямо сейчас</div>
                    <div className="mt-3 space-y-2">
                      {instantSpecialties.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setInstantSpecialty(item)}
                          className={`w-full rounded-[16px] px-4 py-3 text-left text-sm font-medium transition ${
                            instantSpecialty === item
                              ? 'bg-ozon-blue text-white'
                              : 'bg-white text-slate-600'
                          }`}
                        >
                          {item}
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
                    <div className="mt-4">
                      <div className="text-sm font-semibold text-slate-700">Возможные специалисты</div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {[
                          `${instantSpecialty} у дома`,
                          `${instantSpecialty} с рейтингом 4.9+`,
                          `${instantSpecialty} с доступом к Pet ID`,
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-slate-600 ring-1 ring-slate-200"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
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
          </div>
          </div>
        </section>
        </>
      )}

    </div>
  )
}
