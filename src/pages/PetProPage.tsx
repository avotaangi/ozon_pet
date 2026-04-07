import { BarChart3, CalendarClock, FilePenLine, Plus, ShieldCheck, Star, Stethoscope, Users } from 'lucide-react'
import { useState } from 'react'

export function PetProPage() {
  const [selectedRole, setSelectedRole] = useState('Грумер')
  const [specializations, setSpecializations] = useState([
    'Экспресс-груминг',
    'Сложная шерсть',
    'Щенки и тревожные питомцы',
  ])
  const [specializationDraft, setSpecializationDraft] = useState('')
  const [newSlot, setNewSlot] = useState({ date: '2026-04-08', time: '18:30' })
  const [slots, setSlots] = useState([
    '10:30 · Рокси · ручная сушка',
    '13:00 · Марс · экспресс-уход',
    '16:30 · Персик · чувствительная кожа',
  ])

  const statsCards = [
    { title: 'Рейтинг', value: '4.9', icon: Star },
    { title: 'Клиенты', value: '128', icon: Users },
    { title: 'Повторные записи', value: '67%', icon: CalendarClock },
  ]
  const revenueCards = [
    {
      title: 'Комиссия с услуг',
      text: 'Ozon зарабатывает на записях, заказах и частоте использования.',
      icon: Stethoscope,
    },
    {
      title: 'Премиум-инструменты',
      text: 'Продвижение, премиальные профили и профессиональные сервисы для supply-side.',
      icon: ShieldCheck,
    },
    {
      title: 'Аналитика',
      text: 'Понимание спроса, повторных клиентов и эффективности сервиса.',
      icon: BarChart3,
    },
  ]
  const roles = ['Грумер', 'Ветеринар', 'Ситтер', 'Кинолог', 'Передержка', 'Выгул']

  const addSpecialization = () => {
    const value = specializationDraft.trim()
    if (!value || specializations.includes(value)) return
    setSpecializations((current) => [...current, value])
    setSpecializationDraft('')
  }

  const addSlot = () => {
    if (!newSlot.date || !newSlot.time) return
    setSlots((current) => [`${newSlot.date} · ${newSlot.time} · Свободный слот`, ...current])
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[32px] bg-[linear-gradient(180deg,#001a34_0%,#07346f_100%)] p-7 text-white shadow-[0_18px_60px_rgba(0,26,52,0.18)]">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Ozon PetPro</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Рабочий кабинет специалиста внутри Ozon Pet</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-white/78">
          Профиль специалиста, подтверждение квалификации, расписание, история клиентов, заметки в Pet ID, отзывы и продвижение в одном интерфейсе.
        </p>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.02fr_0.98fr]">
        <div className="rounded-[28px] bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-sm text-slate-500">Профиль специалиста</div>
              <div className="mt-2 text-3xl font-semibold text-slate-950">Анна Зорина · {selectedRole.toLowerCase()}</div>
              <div className="mt-2 text-sm text-slate-600">Подтверждённая квалификация · выезд и салон · 6 лет опыта</div>
            </div>
            <div className="rounded-full bg-ozon-green/10 px-3 py-1 text-xs font-semibold text-ozon-green">
              verified
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {statsCards.map(({ title, value, icon: Icon }) => (
              <div key={title} className="rounded-[20px] bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Icon className="size-4 text-ozon-blue" />
                  {title}
                </div>
                <div className="mt-2 text-2xl font-semibold text-slate-950">{value}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-[22px] bg-slate-50 p-5">
              <div className="text-sm font-semibold text-slate-900">Роль в Ozon PetPro</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {roles.map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setSelectedRole(role)}
                    className={`rounded-full px-3 py-2 text-sm font-medium ${
                      selectedRole === role ? 'bg-ozon-blue text-white' : 'bg-white text-slate-600'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[22px] bg-slate-50 p-5">
              <div className="text-sm font-semibold text-slate-900">Специализации</div>
              <div className="mt-3 flex gap-2">
                <input
                  value={specializationDraft}
                  onChange={(event) => setSpecializationDraft(event.target.value)}
                  placeholder="Добавить специализацию"
                  className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-ozon-blue"
                />
                <button
                  type="button"
                  onClick={addSpecialization}
                  className="inline-flex items-center justify-center rounded-2xl bg-ozon-blue px-4 py-2.5 text-white"
                  aria-label="Добавить специализацию"
                >
                  <Plus className="size-4" />
                </button>
              </div>
              <div className="mt-3 space-y-2">
                {specializations.map((item) => (
                  <div key={item} className="rounded-[14px] bg-white px-3 py-2 text-sm text-slate-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[22px] bg-slate-50 p-5 md:col-span-2">
              <div className="text-sm font-semibold text-slate-900">Инструменты продвижения</div>
              <div className="mt-3 space-y-2">
                {['Премиальная карточка', 'Поднятие в выдаче', 'Промо для новых клиентов'].map((item) => (
                  <div key={item} className="rounded-[14px] bg-white px-3 py-2 text-sm text-slate-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[28px] bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
            <div className="flex items-start gap-3">
              <CalendarClock className="mt-1 size-5 text-ozon-magenta" />
              <div>
                <div className="text-sm text-slate-500">Расписание</div>
                <div className="mt-2 text-2xl font-semibold text-slate-950">Ближайшие записи</div>
              </div>
            </div>
            <div className="mt-4 rounded-[20px] bg-slate-50 p-4">
              <div className="text-sm font-semibold text-slate-900">Добавить свободный слот</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <input
                  type="date"
                  value={newSlot.date}
                  onChange={(event) => setNewSlot((current) => ({ ...current, date: event.target.value }))}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-ozon-blue"
                />
                <input
                  type="time"
                  value={newSlot.time}
                  onChange={(event) => setNewSlot((current) => ({ ...current, time: event.target.value }))}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-ozon-blue"
                />
                <button
                  type="button"
                  onClick={addSlot}
                  className="rounded-2xl bg-ozon-blue px-4 py-2.5 text-sm font-semibold text-white"
                >
                  Добавить слот
                </button>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {slots.map((item) => (
                <div key={item} className="rounded-[18px] bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
            <div className="flex items-start gap-3">
              <FilePenLine className="mt-1 size-5 text-ozon-blue" />
              <div>
                <div className="text-sm text-slate-500">Pet ID</div>
                <div className="mt-2 text-2xl font-semibold text-slate-950">Заметки после визита</div>
              </div>
            </div>
            <div className="mt-4 rounded-[20px] bg-slate-50 p-4 text-sm leading-7 text-slate-600">
              Марс боится машинки, лучше стричь вручную. Владелец просит использовать шампунь без запаха.
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {revenueCards.map(({ title, text, icon: Icon }) => (
          <div key={title} className="rounded-[28px] bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-ozon-blue/10 text-ozon-blue">
              <Icon className="size-5" />
            </div>
            <div className="mt-4 text-xl font-semibold text-slate-950">{title}</div>
            <div className="mt-3 text-sm leading-7 text-slate-600">{text}</div>
          </div>
        ))}
      </section>
    </div>
  )
}
