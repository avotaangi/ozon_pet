import { NavLink, useParams } from 'react-router-dom'
import { breedGuides, pets, publicBreedProfiles } from '../data/marketplace'

export function BreedProfilesPage() {
  const { petId } = useParams()
  const activePet = pets.find((pet) => pet.id === petId) ?? pets[0]
  const guide = breedGuides.find((item) => item.slug === activePet.breedSlug)
  const profiles = publicBreedProfiles.filter((item) => item.breedSlug === activePet.breedSlug)
  const guideSections = guide
    ? [
        { title: 'Частые проблемы', items: guide.commonIssues },
        { title: 'Рекомендуемые товары', items: guide.recommendedGoods },
        { title: 'Нужные услуги', items: guide.recommendedServices },
      ]
    : []

  return (
    <div className="space-y-6">
      <section className="rounded-[32px] bg-[linear-gradient(180deg,#001a34_0%,#07346f_100%)] p-7 text-white shadow-[0_18px_60px_rgba(0,26,52,0.18)]">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Сообщество породы</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Профили других владельцев: {activePet.breed}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-white/78">
          Открытые профили помогают учиться на опыте других владельцев: что покупают, какие есть особенности ухода и какие решения сработали.
        </p>
      </section>

      {guide ? (
        <section className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[28px] bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-ozon-blue">Страница породы</div>
            <div className="mt-3 text-3xl font-semibold text-slate-950">{guide.breed}</div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                ['Характер', guide.temperament],
                ['Сложность ухода', guide.careComplexity],
                ['Стоимость содержания', guide.monthlyCost],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[22px] bg-slate-50 p-4">
                  <div className="text-sm text-slate-500">{title}</div>
                  <div className="mt-2 font-semibold text-slate-900">{text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
            <div className="text-lg font-semibold text-slate-950">Что обычно рекомендуют</div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {guideSections.map(({ title, items }) => (
                <div key={title} className="rounded-[20px] bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-900">{title}</div>
                  <div className="mt-3 space-y-2">
                    {items.map((item) => (
                      <div key={item} className="rounded-[14px] bg-white px-3 py-2 text-sm text-slate-600">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="grid gap-4 lg:grid-cols-2">
        {profiles.map((profile) => (
          <article key={profile.id} className="rounded-[28px] bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-2xl font-semibold text-slate-950">{profile.petName}</div>
                <div className="mt-1 text-sm text-slate-500">
                  {profile.ownerName} · {profile.city} · {profile.age}
                </div>
              </div>
              <div className="rounded-full bg-ozon-blue/10 px-3 py-1 text-xs font-semibold text-ozon-blue">
                Открытый профиль
              </div>
            </div>

            <div className="mt-5 rounded-[20px] bg-slate-50 p-4 text-sm leading-7 text-slate-600">
              {profile.careNotes}
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-[20px] bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-900">Любимые товары</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {profile.favoriteGoods.map((item) => (
                    <div key={item} className="rounded-full bg-emerald-50 px-3 py-1.5 text-sm text-emerald-700 ring-1 ring-emerald-100">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[20px] bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-900">Типичные аллергии</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {profile.allergies.map((item) => (
                    <div key={item} className="rounded-full bg-rose-50 px-3 py-1.5 text-sm text-rose-600 ring-1 ring-rose-100">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-[20px] bg-slate-50 p-4">
              <div className="text-sm font-semibold text-slate-900">Рацион владельца</div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {profile.dietProducts.map((item) => (
                  <article key={item.id} className="rounded-[18px] bg-white p-4">
                    <div className="flex h-24 items-center justify-center rounded-[16px] bg-slate-100 text-sm font-semibold text-slate-400">
                      Товар
                    </div>
                    <div className="mt-3 text-base font-semibold text-slate-900">{item.title}</div>
                    <div className="mt-2 text-sm leading-6 text-slate-600">{item.subtitle}</div>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <div className="text-sm font-semibold text-slate-900">{item.price}</div>
                      <button
                        type="button"
                        className="rounded-full bg-ozon-blue px-4 py-2 text-sm font-semibold text-white"
                      >
                        В корзину
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <NavLink
        to={`/pet-id/${activePet.id}`}
        className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-ozon-dark shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
      >
        Вернуться в паспорт питомца
      </NavLink>
    </div>
  )
}
