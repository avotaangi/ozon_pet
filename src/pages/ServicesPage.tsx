import { pets, services } from '../data/marketplace'

export function ServicesPage() {
  const activeBookings = [
    { ...services.find((item) => item.id === 'srv-2')!, petName: 'Рокси', slot: '10 апреля, 14:30' },
    { ...services.find((item) => item.id === 'srv-3')!, petName: 'Марса', slot: '9 апреля, 08:00' },
    { ...services.find((item) => item.id === 'srv-16')!, petName: 'Персика', slot: '12 апреля, 12:00' },
    { ...services.find((item) => item.id === 'srv-1')!, petName: 'Рокси', slot: '11 апреля, 19:00' },
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
    <div className="space-y-6">
      <section className="rounded-[32px] bg-[linear-gradient(135deg,#ffffff_0%,#eef5ff_100%)] p-7 shadow-[0_16px_60px_rgba(15,23,42,0.06)]">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-ozon-magenta">Услуги</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">Услуги, на которые уже записаны ваши питомцы</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
          Здесь собраны актуальные записи владельца по питомцам, а ниже сохранена история прошлых обращений к специалистам.
        </p>
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        {activeBookings.map((item) => {
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
              <div className="mt-auto pt-5 text-sm">
                <span className="leading-none font-semibold text-slate-900">{item.price}</span>
              </div>
            </article>
          )
        })}
      </section>

      <section className="space-y-4">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">История</div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Ранее пользовались услугами</h2>
        </div>

        <div className="grid gap-4 xl:grid-cols-3">
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
                <div className="mt-auto pt-5 text-sm">
                  <span className="leading-none font-semibold text-slate-900">{item.price}</span>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}
