import { ArrowLeft, ArrowRight, HeartHandshake, MapPin, Package, Stethoscope } from 'lucide-react'
import { NavLink, useParams } from 'react-router-dom'
import { charityProfiles } from '../data/marketplace'

const fundraisingCampaigns = [
  {
    id: 'campaign-1',
    title: 'Сбор на лечение после экстренной операции',
    goal: '120 000 ₽',
    raised: '86 400 ₽',
    progress: 72,
    report: 'Оплачены анализы, стационар и первые 5 дней восстановления. Отчёт загружен 5 апреля.',
    profileSlug: 'lapa-nadezhdy',
  },
  {
    id: 'campaign-2',
    title: 'Сбор на корм и расходники для карантинного блока',
    goal: '68 000 ₽',
    raised: '42 600 ₽',
    progress: 63,
    report: 'Закрыта первая поставка корма и пелёнок. Следующий отчёт после следующей доставки.',
    profileSlug: 'lapa-nadezhdy',
  },
  {
    id: 'campaign-3',
    title: 'Сбор на тёплые лежанки и санитарную обработку',
    goal: '92 000 ₽',
    raised: '58 700 ₽',
    progress: 64,
    report: 'Закрыта часть поставки лежанок и первый выезд сервиса. Отчёт обновлён 6 апреля.',
    profileSlug: 'ozon-care-fund',
  },
]

export function PetDobroPage() {
  const { profileSlug } = useParams()
  const activeProfile = charityProfiles.find((profile) => profile.slug === profileSlug)

  if (profileSlug === 'campaigns') {
    return (
      <div className="space-y-6">
        <section className="rounded-[32px] bg-[linear-gradient(180deg,#001a34_0%,#07346f_100%)] p-7 text-white shadow-[0_18px_60px_rgba(0,26,52,0.18)]">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Pet-добро</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">Все сборы и отчётность</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/78">
            Здесь видно, на что именно собираются средства, сколько уже закрыто и какая отчётность загружена по каждому сбору.
          </p>
        </section>

        <div className="space-y-4">
          {fundraisingCampaigns.map((campaign) => (
            <article key={campaign.id} className="rounded-[28px] bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="inline-flex rounded-full bg-ozon-magenta/10 px-3 py-1 text-xs font-semibold text-ozon-magenta">
                    Открытый сбор
                  </div>
                  <div className="mt-3 text-2xl font-semibold text-slate-950">{campaign.title}</div>
                </div>
                <NavLink
                  to={`/pet-dobro/${campaign.profileSlug}`}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700"
                >
                  Открыть фонд
                </NavLink>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-[20px] bg-slate-50 p-4">
                  <div className="text-sm text-slate-500">Цель</div>
                  <div className="mt-2 text-xl font-semibold text-slate-950">{campaign.goal}</div>
                </div>
                <div className="rounded-[20px] bg-slate-50 p-4">
                  <div className="text-sm text-slate-500">Собрано</div>
                  <div className="mt-2 text-xl font-semibold text-slate-950">{campaign.raised}</div>
                </div>
                <div className="rounded-[20px] bg-slate-50 p-4">
                  <div className="text-sm text-slate-500">Прогресс</div>
                  <div className="mt-2 text-xl font-semibold text-slate-950">{campaign.progress}%</div>
                </div>
              </div>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,#00BE6C_0%,#4FD98E_100%)]"
                  style={{ width: `${campaign.progress}%` }}
                />
              </div>

              <div className="mt-5 rounded-[22px] bg-[#f8fbff] p-4">
                <div className="text-sm font-semibold text-slate-900">Отчётность</div>
                <div className="mt-2 text-sm leading-7 text-slate-600">{campaign.report}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    )
  }

  if (activeProfile) {
    const goods = activeProfile.requestedSupport.filter((item) => item.type === 'goods')
    const services = activeProfile.requestedSupport.filter((item) => item.type === 'service')
    const profileCampaigns = fundraisingCampaigns.filter((campaign) => campaign.profileSlug === activeProfile.slug)

    return (
      <div className="space-y-6">
        <section className="rounded-[32px] bg-[linear-gradient(180deg,#001a34_0%,#07346f_100%)] p-7 text-white shadow-[0_18px_60px_rgba(0,26,52,0.18)]">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Pet-добро</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">Ozon помогает адресно поддерживать волонтёров и фонды</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/78">
            Ozon выступает посредником между волонтёром и покупателем: товары и услуги оплачиваются внутри платформы, а доставка идёт прямо в приют или сервисную точку, указанную в профиле.
          </p>
        </section>

        <NavLink
          to="/pet-dobro"
          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-[0_12px_38px_rgba(15,23,42,0.06)]"
        >
          <ArrowLeft className="size-4" />
          Ко всем карточкам помощи
        </NavLink>

        <section className="rounded-[30px] bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
          <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
            <div className="self-start overflow-hidden rounded-[28px] bg-slate-100">
              <img
                src={activeProfile.photo}
                alt={activeProfile.title}
                className="h-[200px] w-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="inline-flex w-fit rounded-full bg-ozon-blue/10 px-4 py-2 text-sm font-semibold text-ozon-blue">
                  {activeProfile.tag}
                </div>
                <div className="inline-flex w-fit rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                  Проверено командой OZON
                </div>
              </div>
              <div className="mt-4 text-3xl font-semibold text-slate-950">{activeProfile.title}</div>
              <div className="mt-2 text-lg text-slate-600">{activeProfile.personName}</div>
              <div className="mt-4 text-sm leading-8 text-slate-600">{activeProfile.fullDescription}</div>

              <div className="mt-5 rounded-[22px] bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <MapPin className="size-4 text-ozon-magenta" />
                  Точка работы и доставки
                </div>
                <div className="mt-2 text-sm leading-7 text-slate-600">
                  {activeProfile.address}. Доставка оформляется прямо в приют или на точку, указанную волонтёром.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1fr_360px]">
          <div className="space-y-6">
            <div className="rounded-[28px] bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
              <div className="flex items-center gap-2 text-2xl font-semibold text-slate-950">
                <Package className="size-5 text-ozon-blue" />
                Ozon товары, запрошенные волонтёром
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {goods.map((item) => (
                  <article key={item.id} className="flex h-full flex-col rounded-[24px] bg-slate-50 p-5">
                    <div className="inline-flex rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-500">
                      {item.urgency}
                    </div>
                    <div className="mt-3 text-xl font-semibold text-slate-950">{item.title}</div>
                    <div className="mt-2 text-sm leading-7 text-slate-600">{item.subtitle}</div>
                    <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                      <div className="text-lg font-semibold text-slate-950">{item.price}</div>
                      <button
                        type="button"
                        className="rounded-full bg-ozon-blue px-4 py-2 text-sm font-semibold text-white"
                      >
                        Оплатить
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
              <div className="flex items-center gap-2 text-2xl font-semibold text-slate-950">
                <Stethoscope className="size-5 text-ozon-magenta" />
                Ozon услуги, запрошенные волонтёром
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {services.map((item) => (
                  <article key={item.id} className="flex h-full flex-col rounded-[24px] bg-slate-50 p-5">
                    <div className="inline-flex rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-500">
                      {item.urgency}
                    </div>
                    <div className="mt-3 text-xl font-semibold text-slate-950">{item.title}</div>
                    <div className="mt-2 text-sm leading-7 text-slate-600">{item.subtitle}</div>
                    <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                      <div className="text-lg font-semibold text-slate-950">{item.price}</div>
                      <button
                        type="button"
                        className="rounded-full bg-ozon-blue px-4 py-2 text-sm font-semibold text-white"
                      >
                        Оплатить
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {profileCampaigns[0] ? (
              <div className="rounded-[28px] bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
                <div className="text-lg font-semibold text-slate-950">Сбор сейчас</div>
                <div className="mt-4 rounded-[22px] bg-slate-50 p-4">
                  <div className="inline-flex rounded-full bg-ozon-magenta/10 px-3 py-1 text-xs font-semibold text-ozon-magenta">
                    Открытый сбор
                  </div>
                  <div className="mt-3 text-lg font-semibold text-slate-950">{profileCampaigns[0].title}</div>
                  <div className="mt-3 flex items-center justify-between gap-3 text-sm text-slate-600">
                    <span>Собрано {profileCampaigns[0].raised}</span>
                    <span>из {profileCampaigns[0].goal}</span>
                  </div>
                  <div className="mt-3 h-3 overflow-hidden rounded-full bg-white">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,#F1117E_0%,#FF6AAF_100%)]"
                      style={{ width: `${profileCampaigns[0].progress}%` }}
                    />
                  </div>
                  <div className="mt-3 text-sm leading-7 text-slate-600">{profileCampaigns[0].report}</div>
                  <NavLink
                    to="/pet-dobro/campaigns"
                    className="mt-4 inline-flex rounded-full bg-ozon-blue px-4 py-2 text-sm font-semibold text-white"
                  >
                    Посмотреть все сборы
                  </NavLink>
                </div>
              </div>
            ) : null}
          </div>

          <aside className="space-y-6">
            <div className="rounded-[28px] bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
              <div className="text-lg font-semibold text-slate-950">Карта точки помощи</div>
              <div className="mt-4 overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#eef5ff_0%,#ffffff_100%)] p-4">
                <div className="relative h-[280px] rounded-[20px] border border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#edf4ff_100%)]">
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,91,255,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(0,91,255,0.06)_1px,transparent_1px)] bg-[size:36px_36px]" />
                  <div className="absolute left-[12%] top-[18%] h-16 w-16 rounded-full bg-ozon-blue/8" />
                  <div className="absolute right-[18%] top-[26%] h-20 w-20 rounded-full bg-ozon-magenta/8" />
                  <div className="absolute bottom-[14%] left-[24%] h-14 w-14 rounded-full bg-emerald-400/10" />
                  <div
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: activeProfile.coordinates.x, top: activeProfile.coordinates.y }}
                  >
                    <div className="relative">
                      <div className="absolute left-1/2 top-1/2 size-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ozon-blue/15 blur-sm" />
                      <div className="relative flex size-12 items-center justify-center rounded-full bg-ozon-blue text-white shadow-[0_12px_24px_rgba(0,91,255,0.28)]">
                        <MapPin className="size-5" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-sm leading-7 text-slate-600">
                  <span className="font-semibold text-slate-900">{activeProfile.location}</span>
                  {' · '}
                  точка работы фонда или волонтёра отмечена на карте.
                </div>
              </div>
            </div>

            <div className="rounded-[28px] bg-[linear-gradient(180deg,#001a34_0%,#07346f_100%)] p-5 text-white shadow-[0_18px_60px_rgba(0,26,52,0.16)]">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <HeartHandshake className="size-5 text-ozon-green" />
                Как помогает Ozon
              </div>
              <div className="mt-4 space-y-3 text-sm leading-7 text-white/78">
                <div className="rounded-[18px] bg-white/8 px-4 py-3">Покупатель выбирает нужный товар или услугу внутри Ozon Pet.</div>
                <div className="rounded-[18px] bg-white/8 px-4 py-3">Ozon выступает посредником между волонтёром и тем, кто хочет помочь.</div>
                <div className="rounded-[18px] bg-white/8 px-4 py-3">Доставка отправляется прямо в приют или на адрес, указанный в профиле помощи.</div>
              </div>
            </div>
          </aside>
        </section>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[32px] bg-[linear-gradient(180deg,#001a34_0%,#07346f_100%)] p-7 text-white shadow-[0_18px_60px_rgba(0,26,52,0.18)]">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Pet-добро</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Карточки волонтёров, фондов и точек адресной помощи</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-white/78">
          Здесь Ozon соединяет волонтёра и покупателя: все нужные товары и услуги оформляются внутри платформы, а доставка идёт прямо в приют, который указан в профиле.
        </p>
      </section>

      <section className="grid gap-5 xl:grid-cols-3">
        {charityProfiles.map((profile) => (
          <NavLink
            key={profile.id}
            to={`/pet-dobro/${profile.slug}`}
            className="overflow-hidden rounded-[28px] bg-white shadow-[0_12px_38px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(15,23,42,0.1)]"
          >
            <div className={`h-44 bg-gradient-to-br ${profile.coverColor} p-5 text-white`}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]">
                  {profile.tag}
                </div>
                <div className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Проверено командой OZON
                </div>
              </div>
              <div className="mt-4 text-2xl font-semibold leading-tight">{profile.title}</div>
              <div className="mt-2 text-sm text-white/80">{profile.location}</div>
            </div>
            <div className="p-5">
              <div className="text-lg font-semibold text-slate-950">{profile.personName}</div>
              <div className="mt-2 text-sm leading-7 text-slate-600">{profile.shortDescription}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                  {profile.requestedSupport.filter((item) => item.type === 'goods').length} товара
                </div>
                <div className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                  {profile.requestedSupport.filter((item) => item.type === 'service').length} услуги
                </div>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ozon-blue">
                Открыть карточку помощи
                <ArrowRight className="size-4" />
              </div>
            </div>
          </NavLink>
        ))}
      </section>
    </div>
  )
}
