import { ChevronDown, HeartHandshake, Pencil, Plus, QrCode, ShieldCheck, Trash2, Users, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { pets, type Pet } from '../data/marketplace'

const preferenceCatalog = [
  { id: 'chicken', label: 'Курица', icon: '🐔' },
  { id: 'peanuts', label: 'Арахис', icon: '🥜' },
  { id: 'nuts', label: 'Орехи', icon: '🌰' },
  { id: 'fish', label: 'Рыба', icon: '🐟' },
  { id: 'eggs', label: 'Яйца', icon: '🥚' },
  { id: 'milk', label: 'Молоко', icon: '🥛' },
  { id: 'gluten', label: 'Глютен', icon: '🌾' },
  { id: 'beef', label: 'Говядина', icon: '🐮' },
  { id: 'pork', label: 'Свинина', icon: '🐷' },
  { id: 'seafood', label: 'Морепродукты', icon: '🦐' },
  { id: 'sugar', label: 'Сахар', icon: '🧊' },
  { id: 'high-protein', label: 'Много белка', icon: '💪' },
  { id: 'no-meat', label: 'Без мяса', icon: '🌿' },
  { id: 'low-calorie', label: 'Мало калорий', icon: '🍃' },
  { id: 'low-carb', label: 'Мало углеводов', icon: '🥬' },
  { id: 'lamb', label: 'Ягнёнок', icon: '🐑' },
  { id: 'turkey', label: 'Индейка', icon: '🦃' },
  { id: 'rabbit', label: 'Кролик', icon: '🐇' },
] as const

export function PetIdPage() {
  const { petId } = useParams()
  const activePet = pets.find((pet) => pet.id === petId) ?? pets[0]

  return <PetIdContent key={activePet.id} activePet={activePet} />
}

function PetIdContent({ activePet }: { activePet: Pet }) {
  const [isEditing, setIsEditing] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [deleteReason, setDeleteReason] = useState<'clouds' | 'not-relevant' | 'other' | null>(null)
  const [isDeleted, setIsDeleted] = useState(false)
  const [showVolunteerPrompt, setShowVolunteerPrompt] = useState(false)
  const [profileDraft, setProfileDraft] = useState({
    breed: activePet.breed,
    age: activePet.age,
    weight: activePet.weight,
    diet: activePet.diet,
    dislikedIngredients: activePet.dislikedIngredients,
    intolerance: activePet.intolerance,
    vaccinations: activePet.vaccinations,
    chronicConditions: activePet.chronicConditions,
  })
  const [dislikes, setDislikes] = useState(activePet.preferenceCategories.dislikes)
  const [likes, setLikes] = useState(activePet.preferenceCategories.likes)
  const [dislikeDraft, setDislikeDraft] = useState('')
  const [likeDraft, setLikeDraft] = useState('')
  const [accessSettings, setAccessSettings] = useState([
    { id: 'clinic', label: 'Открыть ID клинике', enabled: true },
    { id: 'groomer', label: 'Открыть конкретному грумеру', enabled: true },
    { id: 'sitter', label: 'Временный доступ ситтеру', enabled: false },
    { id: 'community', label: 'Показывать часть профиля сообществу', enabled: true },
  ])

  const historySections = [
    { title: 'История посещений', items: activePet.visitHistory },
    { title: 'История покупок', items: activePet.purchaseHistory },
    { title: 'История рекомендаций', items: activePet.recommendationHistory },
    { title: 'Обращения к специалистам', items: activePet.specialistRequests },
  ]
  const preferenceSections = [
    {
      title: 'Нельзя питомцу',
      items: dislikes,
      tone: 'danger' as const,
    },
    {
      title: 'Нравится питомцу',
      items: likes,
      tone: 'positive' as const,
    },
  ]

  const addPreference = (tone: 'danger' | 'positive') => {
    if (tone === 'danger') {
      const value = dislikeDraft.trim()
      if (!value || dislikes.includes(value)) return
      setDislikes((current) => [...current, value])
      setDislikeDraft('')
      return
    }

    const value = likeDraft.trim()
    if (!value || likes.includes(value)) return
    setLikes((current) => [...current, value])
    setLikeDraft('')
  }

  const handleDraftChange = (field: keyof typeof profileDraft, value: string) => {
    setProfileDraft((current) => ({ ...current, [field]: value }))
  }

  const getPreferenceMeta = (value: string) =>
    preferenceCatalog.find((item) => item.label === value) ?? { label: value, icon: '•' }

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false)
    setDeleteReason(null)
  }

  const confirmDelete = () => {
    if (!deleteReason) return
    setIsDeleted(true)
    setIsDeleteModalOpen(false)
    setShowVolunteerPrompt(deleteReason === 'clouds')
    setDeleteReason(null)
  }

  if (isDeleted) {
    return (
      <div className="space-y-6">
        <section className="rounded-[32px] bg-[linear-gradient(180deg,#001a34_0%,#07346f_100%)] p-7 text-white shadow-[0_18px_60px_rgba(0,26,52,0.18)]">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Pet ID</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">Цифровой профиль удалён</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/78">
            Профиль питомца больше не используется в персональных сценариях Ozon Pet.
          </p>
        </section>

        {showVolunteerPrompt ? (
          <section className="rounded-[28px] bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
            <div className="flex items-start gap-3">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <HeartHandshake className="size-5" />
              </div>
              <div>
                <div className="text-2xl font-semibold text-slate-950">Хотите стать волонтером и помогать приютам?</div>
                <div className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                  Ozon Pet может мягко перевести заботу в помощь другим животным: поддержка приютов, покупки нужных товаров и участие в волонтёрских сценариях.
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <NavLink
                    to="/ecosystem"
                    className="rounded-full bg-ozon-green px-5 py-3 text-sm font-semibold text-white"
                  >
                    Посмотреть, как помогать
                  </NavLink>
                  <button
                    type="button"
                    onClick={() => setShowVolunteerPrompt(false)}
                    className="rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700"
                  >
                    Позже
                  </button>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <section>
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-ozon-blue">Pet ID</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">Цифровой профиль питомца внутри Ozon</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          История, рацион, аллергии, заметки врачей и передача данных специалистам без лишних повторений.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1fr_320px]">
        <div className="rounded-[28px] bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="flex items-center gap-4">
              <img
                src={activePet.photo}
                alt={activePet.name}
                className="size-24 rounded-full object-cover shadow-[0_8px_24px_rgba(15,23,42,0.12)]"
              />
              <div>
                <div className="text-3xl font-semibold text-slate-950">{activePet.name}</div>
                <div className="mt-1 text-slate-600">
                  {profileDraft.breed} · {profileDraft.age} · {profileDraft.weight}
                </div>
                <div className="mt-2 text-sm font-medium text-ozon-blue">Pet ID: {activePet.code}</div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:items-end">
              <div className="flex flex-wrap gap-2 sm:justify-end">
                <button
                  type="button"
                  onClick={() => setIsEditing((current) => !current)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                    isEditing ? 'bg-ozon-dark text-white' : 'bg-ozon-blue text-white'
                  }`}
                >
                  <Pencil className="size-4" />
                  {isEditing ? 'Сохранить' : 'Редактировать'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsDeleteModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600"
                >
                  <Trash2 className="size-4" />
                  Удалить ID
                </button>
              </div>

              <div className="rounded-[24px] bg-slate-50 p-4 text-center">
                <div className="mx-auto grid size-24 grid-cols-5 gap-1 rounded-2xl bg-white p-2 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
                  {Array.from({ length: 25 }).map((_, index) => (
                    <div
                      key={index}
                      className={`rounded-[2px] ${
                        [0, 1, 3, 4, 5, 7, 11, 12, 14, 17, 18, 20, 22, 24].includes(index) ? 'bg-black' : 'bg-white'
                      }`}
                    />
                  ))}
                </div>
                <div className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-slate-600">
                  <QrCode className="size-4 text-ozon-blue" />
                  Поделитесь профилем питомца :)
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ['breed', 'Порода', profileDraft.breed],
              ['age', 'Возраст', profileDraft.age],
              ['weight', 'Вес', profileDraft.weight],
              ['dislikedIngredients', 'Нелюбимые ингредиенты', profileDraft.dislikedIngredients],
              ['intolerance', 'Непереносимость', profileDraft.intolerance],
              ['vaccinations', 'Прививки', profileDraft.vaccinations],
              ['chronicConditions', 'Хронические особенности', profileDraft.chronicConditions],
            ].map(([field, title, text]) => (
              <div key={title} className="rounded-[22px] bg-slate-50 p-4">
                <div className="text-sm text-slate-500">{title}</div>
                {isEditing ? (
                  <textarea
                    value={text}
                    onChange={(event) =>
                      handleDraftChange(field as keyof typeof profileDraft, event.target.value)
                    }
                    className="mt-2 min-h-[84px] w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none focus:border-ozon-blue"
                  />
                ) : (
                  <div className="mt-2 font-semibold text-slate-900">{text}</div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-[22px] bg-slate-50 p-4">
            <div className="text-sm text-slate-500">Рацион</div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {activePet.dietProducts.map((item) => (
                <article key={item.id} className="rounded-[20px] bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
                  <div className="flex h-28 items-center justify-center rounded-[18px] bg-slate-100 text-sm font-semibold text-slate-400">
                    Товар
                  </div>
                  <div className="mt-4 text-lg font-semibold text-slate-900">{item.title}</div>
                  <div className="mt-2 text-sm leading-7 text-slate-600">{item.subtitle}</div>
                  <div className="mt-4 text-base font-semibold text-slate-900">{item.price}</div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-[24px] bg-slate-50 p-5">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <ShieldCheck className="size-4 text-ozon-blue" />
              Открытый и частный обмен ID питомца
            </div>
            <div className="mt-2 text-sm leading-7 text-slate-600">
              Владелец управляет доступом к данным: можно открыть профиль клинике, грумеру, ситтеру или сообществу владельцев похожей породы.
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {accessSettings.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    setAccessSettings((current) =>
                      current.map((entry) =>
                        entry.id === item.id ? { ...entry, enabled: !entry.enabled } : entry,
                      ),
                    )
                  }
                  className={`flex items-center justify-between rounded-[20px] px-4 py-3 text-left text-sm font-medium ${
                    item.enabled ? 'bg-ozon-blue text-white' : 'bg-white text-slate-600'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className={`rounded-full px-2 py-1 text-xs ${item.enabled ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {item.enabled ? 'включено' : 'выключено'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-[24px] bg-slate-50 p-5">
            <div className="text-base font-semibold text-slate-900">Предпочтения питомца</div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {preferenceSections.map(({ title, items, tone }) => (
                <div key={title} className="rounded-[20px] bg-white p-4">
                  <div className="text-sm font-semibold text-slate-900">{title}</div>
                  <div className="mt-3 flex gap-2">
                    <div className="relative min-w-0 flex-1">
                      <select
                        value={tone === 'danger' ? dislikeDraft : likeDraft}
                        onChange={(event) =>
                          tone === 'danger' ? setDislikeDraft(event.target.value) : setLikeDraft(event.target.value)
                        }
                        className="min-w-0 w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 pr-11 text-sm font-medium text-slate-700 outline-none transition focus:border-ozon-blue focus:bg-white"
                      >
                        <option value="">
                          {tone === 'danger' ? 'Выберите что нельзя питомцу' : 'Выберите что нравится питомцу'}
                        </option>
                        {preferenceCatalog.map((item) => (
                          <option key={item.id} value={item.label}>
                            {item.icon} {item.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                    </div>
                    <button
                      type="button"
                      onClick={() => addPreference(tone)}
                      className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold ${
                        tone === 'danger'
                          ? 'bg-rose-500 text-white'
                          : 'bg-emerald-500 text-white'
                      }`}
                      aria-label={tone === 'danger' ? 'Добавить в нельзя питомцу' : 'Добавить в нравится питомцу'}
                    >
                      <Plus className="size-4" />
                    </button>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <div
                        key={item}
                        className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                          tone === 'danger'
                            ? 'bg-rose-50 text-rose-600 ring-1 ring-rose-100'
                            : 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100'
                        }`}
                      >
                        <span className="mr-1.5">{getPreferenceMeta(item).icon}</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-[24px] bg-slate-50 p-5">
            <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Users className="size-4 text-ozon-magenta" />
              Сообщество и опыт других владельцев
            </div>
            <div className="mt-2 text-sm leading-7 text-slate-600">
              Открытые профили помогают смотреть, что покупают для похожих животных, какие есть особенности содержания и что реально сработало.
            </div>
            <NavLink
              to={`/pet-id/${activePet.id}/community`}
              className="mt-4 inline-flex rounded-full bg-ozon-magenta px-5 py-3 text-sm font-semibold text-white"
            >
              Смотреть профили других владельцев данной породы
            </NavLink>
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-2">
            {historySections.map(({ title, items }) => (
              <div key={title} className="rounded-[24px] bg-slate-50 p-5">
                <div className="text-base font-semibold text-slate-900">{title}</div>
                <div className="mt-4 space-y-2">
                  {items.map((item) => (
                    <div key={item} className="rounded-[16px] bg-white px-4 py-3 text-sm text-slate-600">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[24px] bg-[linear-gradient(180deg,rgba(0,26,52,0.04),rgba(0,26,52,0.02))] p-5">
            <div className="text-base font-semibold text-slate-900">Мемориальный режим</div>
            <div className="mt-2 text-sm leading-7 text-slate-600">
              Если профиль переводится в режим памяти, Ozon перестаёт показывать нерелевантные товары и мягко предлагает сценарий помощи другим животным вместо агрессивной продажи.
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Отключить рекомендации', 'Неактивный режим профиля', 'Помочь другим животным'].map((item) => (
                <div key={item} className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-600 ring-1 ring-slate-100">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="rounded-[28px] bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
          <div className="text-lg font-semibold text-slate-900">Мои питомцы</div>
          <div className="mt-4 space-y-3">
            {pets.map((pet) => (
              <NavLink key={pet.id} to={`/pet-id/${pet.id}`} className="block rounded-[18px] bg-slate-50 px-4 py-3">
                <div className="font-medium text-slate-900">{pet.name}</div>
                <div className="mt-1 text-sm text-slate-500">{pet.breed}</div>
              </NavLink>
            ))}
          </div>
        </aside>
      </section>

      {isDeleteModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 px-4">
          <div className="w-full max-w-[520px] rounded-[28px] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.22)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-2xl font-semibold text-slate-950">Удалить цифровой ID?</div>
                <div className="mt-2 text-sm leading-7 text-slate-600">
                  Выберите причину, чтобы Ozon Pet корректно отключил профиль и дальнейшие рекомендации.
                </div>
              </div>
              <button
                type="button"
                onClick={closeDeleteModal}
                className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-500"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="mt-5 space-y-3">
              {[
                { id: 'clouds' as const, label: 'Питомец улетел на облачка' },
                { id: 'not-relevant' as const, label: 'Мне неактуально' },
                { id: 'other' as const, label: 'Другое' },
              ].map((reason) => (
                <button
                  key={reason.id}
                  type="button"
                  onClick={() => setDeleteReason(reason.id)}
                  className={`flex w-full items-center justify-between rounded-[20px] px-4 py-4 text-left text-sm font-medium transition ${
                    deleteReason === reason.id
                      ? 'bg-rose-50 text-rose-700 ring-2 ring-rose-200'
                      : 'bg-slate-50 text-slate-700 ring-1 ring-slate-200'
                  }`}
                >
                  <span>{reason.label}</span>
                  <span
                    className={`size-5 rounded-full border-2 ${
                      deleteReason === reason.id ? 'border-rose-500 bg-rose-500' : 'border-slate-300'
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={closeDeleteModal}
                className="rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700"
              >
                Отменить
              </button>
              <button
                type="button"
                onClick={confirmDelete}
                disabled={!deleteReason}
                className="rounded-full bg-rose-600 px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                Подтвердить
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
