import { Funnel, Heart } from 'lucide-react'
import { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import {
  productItems,
  servicePackages,
  services,
  sidebarCategories,
} from '../../data/marketplace'
import { HeroBanner } from './HeroBanner'
import { PetCardCarousel } from './PetCardCarousel'
import { PreferenceBadge } from './PreferenceBadge'

export function MarketplaceHomeContent() {
  const [activeTab, setActiveTab] = useState<'products' | 'services'>('products')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [activePetFilter, setActivePetFilter] = useState<'all' | 'Рокси' | 'Марса' | 'Персика'>('all')
  const [activeServiceCategory, setActiveServiceCategory] = useState<
    'all' | 'groomers' | 'sitters' | 'veterinarians' | 'walking' | 'boarding' | 'training'
  >('all')
  const [serviceOfferMode, setServiceOfferMode] = useState<'single' | 'package'>('single')
  const navigate = useNavigate()
  const location = useLocation()
  const capabilityCards = [
    {
      title: 'По клику',
      text: 'Срочные услуги здесь и сейчас внутри Ozon Pet',
      to: '/pet-click',
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
  )
  const petFilterButtons = [
    { id: 'all', label: 'Все товары/услуги' },
    { id: 'Рокси', label: 'Подходит для Рокси' },
    { id: 'Марса', label: 'Подходит для Марса' },
    { id: 'Персика', label: 'Подходит для Персика' },
  ] as const
  const visibleProductItems =
    activePetFilter === 'all'
      ? productItems
      : productItems.filter((item) => item.badge?.includes(activePetFilter))

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
            <div className="relative flex flex-col items-start md:flex-row md:flex-wrap md:items-center md:gap-2">
              <div className="w-fit rounded-full bg-ozon-blue px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-[0_8px_20px_rgba(0,91,255,0.22)]">
                Pet
              </div>
              <div className="mt-2 text-base font-semibold uppercase text-slate-900 md:mt-0 md:text-xl">
                {title}
              </div>
              {title === 'Добро' ? (
                <div className="absolute right-0 top-0 flex size-9 items-center justify-center rounded-full bg-ozon-magenta text-white shadow-[0_10px_24px_rgba(241,17,126,0.28)]">
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
                  {petFilterButtons.map(({ id, label }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setActivePetFilter(id)}
                      className={`rounded-2xl px-4 py-3 text-sm font-medium shadow-[0_8px_24px_rgba(15,23,42,0.05)] ${
                        activePetFilter === id ? 'bg-ozon-blue text-white' : 'bg-white text-slate-700'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {visibleProductItems.map((item) => (
                  <article
                    key={item.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => navigate(`/product/${item.id}`, { state: { from: location.pathname } })}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        navigate(`/product/${item.id}`, { state: { from: location.pathname } })
                      }
                    }}
                    className="flex h-full cursor-pointer flex-col rounded-[24px] bg-white p-4 shadow-[0_12px_38px_rgba(15,23,42,0.06)]"
                  >
                    <div className="relative flex h-38 items-center justify-center rounded-[20px] bg-[#d9d9d9] text-xl text-slate-500">
                      {item.preferenceBadge ? (
                        <PreferenceBadge
                          icon={item.preferenceBadge.icon}
                          label={item.preferenceBadge.label}
                          tone={item.preferenceBadge.tone}
                        />
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
                        onClick={(event) => event.stopPropagation()}
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
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setServiceOfferMode('single')}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                serviceOfferMode === 'single' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
              }`}
            >
              Одна услуга
            </button>
            <button
              type="button"
              onClick={() => setServiceOfferMode('package')}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                serviceOfferMode === 'package' ? 'bg-ozon-blue text-white' : 'bg-ozon-blue/10 text-ozon-blue'
              }`}
            >
              Пакет услуг
            </button>
          </div>

          {serviceOfferMode === 'single' ? (
          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {visibleServices.map((item) => (
              <article
                key={item.id}
                role="button"
                tabIndex={0}
                onClick={() => navigate(`/service/${item.id}`, { state: { from: location.pathname } })}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    navigate(`/service/${item.id}`, { state: { from: location.pathname } })
                  }
                }}
                className="flex h-full cursor-pointer flex-col rounded-[28px] bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.06)]"
              >
                <div className="flex h-38 items-center justify-center rounded-[20px] bg-[#d9d9d9] text-xl text-slate-500">Услуга</div>
                <div className="mt-4 text-xl font-semibold text-slate-900">{item.title}</div>
                <div className="mt-2 text-sm leading-7 text-slate-600">{item.subtitle}</div>
                <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                  <span className="leading-none font-semibold text-ozon-dark">{item.price}</span>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation()
                      navigate(`/service/${item.id}`, { state: { from: location.pathname } })
                    }}
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
          ) : (
            <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
              {servicePackages.map((item) => (
                <article key={item.id} className="flex h-full flex-col rounded-[28px] bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
                  <div className="flex h-38 items-center justify-center rounded-[20px] bg-[#d9d9d9] text-xl text-slate-500">Пакет</div>
                  <div className="mt-4 text-xl font-semibold text-slate-900">{item.title}</div>
                  <div className="mt-2 text-sm leading-7 text-slate-600">{item.subtitle}</div>
                  <div className="mt-3 rounded-[18px] bg-slate-50 px-4 py-3 text-sm text-slate-600">{item.benefit}</div>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                    <span className="leading-none font-semibold text-ozon-dark">{item.price}</span>
                    <button
                      type="button"
                      onClick={() => navigate(`/booking/package/${item.id}`)}
                      className="shrink-0 rounded-full bg-ozon-blue px-3 py-1.5 text-xs font-semibold text-white"
                    >
                      Оформить
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
          </div>
        </section>
        </>
      )}

    </div>
  )
}
