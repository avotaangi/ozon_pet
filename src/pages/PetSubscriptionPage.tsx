import { useState } from 'react'
import { CalendarClock, Package, Stethoscope } from 'lucide-react'

const reminderOptions = ['7 дней', '14 дней', '21 день', '28 дней', '45 дней', '60 дней', '75 дней', '90 дней']

const subscriptionProducts = [
  {
    id: 'sub-product-1',
    title: 'Farmina ND Pumpkin',
    subtitle: 'Корм для Рокси, который покупают регулярно',
    petName: 'Рокси',
    nextAction: 'Напомнить перед окончанием текущей пачки',
    price: '3 490 ₽',
    defaultReminder: '28 дней',
    photo: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'sub-product-2',
    title: 'Наполнитель и пелёнки',
    subtitle: 'Расходники для Персика',
    petName: 'Персик',
    nextAction: 'Напомнить до того, как закончатся дома',
    price: '1 290 ₽',
    defaultReminder: '21 день',
    photo: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'sub-product-3',
    title: 'Лакомства для выгула',
    subtitle: 'Набор для Марса',
    petName: 'Марс',
    nextAction: 'Напомнить перед следующей прогулочной неделей',
    price: '690 ₽',
    defaultReminder: '14 дней',
    photo: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=900&q=80',
  },
]

const subscriptionServices = [
  {
    id: 'sub-service-1',
    title: 'Груминг премиум',
    subtitle: 'Регулярная запись для Рокси',
    petName: 'Рокси',
    nextAction: 'Напомнить до следующего окна у специалиста',
    price: '2 900 ₽',
    defaultReminder: '45 дней',
    photo: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'sub-service-2',
    title: 'Онлайн-консультация ветеринара',
    subtitle: 'Контрольный созвон по самочувствию',
    petName: 'Персик',
    nextAction: 'Напомнить о повторной записи после курса лечения',
    price: '1 190 ₽',
    defaultReminder: '30 дней',
    photo: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'sub-service-3',
    title: 'Выгул с фото-отчётом',
    subtitle: 'Серия быстрых записей для Марса',
    petName: 'Марс',
    nextAction: 'Напомнить о повторном бронировании',
    price: '590 ₽',
    defaultReminder: '7 дней',
    photo: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
  },
]

export function PetSubscriptionPage() {
  const [productReminders, setProductReminders] = useState<Record<string, string>>(
    Object.fromEntries(subscriptionProducts.map((item) => [item.id, item.defaultReminder])),
  )
  const [serviceReminders, setServiceReminders] = useState<Record<string, string>>(
    Object.fromEntries(subscriptionServices.map((item) => [item.id, item.defaultReminder])),
  )

  return (
    <div className="space-y-6">
      <section className="rounded-[32px] bg-[linear-gradient(180deg,#001a34_0%,#07346f_100%)] p-7 text-white shadow-[0_18px_60px_rgba(0,26,52,0.18)]">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Pet-подписка</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Напоминания о регулярных покупках и записях на услугу</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-white/78">
          Здесь собраны товары и услуги, которые уже добавлены в pet-подписку. Для каждого сценария можно поставить свою периодичность напоминания и дальше возвращаться к покупке или записи без лишнего поиска.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2 text-2xl font-semibold text-slate-950">
          <Package className="size-5 text-ozon-blue" />
          Товары в pet-подписке
        </div>
        <div className="grid gap-4 xl:grid-cols-3">
          {subscriptionProducts.map((item) => (
            <article key={item.id} className="flex h-full flex-col rounded-[28px] bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
              <div className="overflow-hidden rounded-[22px] bg-slate-100">
                <img src={item.photo} alt={item.title} className="h-44 w-full object-cover" />
              </div>
              <div className="mt-4 inline-flex w-fit rounded-full bg-ozon-blue/10 px-3 py-1 text-xs font-semibold text-ozon-blue">
                Для {item.petName}
              </div>
              <div className="mt-4 text-xl font-semibold text-slate-950">{item.title}</div>
              <div className="mt-2 text-sm leading-7 text-slate-600">{item.subtitle}</div>
              <div className="mt-4 rounded-[18px] bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-600">{item.nextAction}</div>
              <div className="mt-4 text-lg font-semibold text-slate-950">{item.price}</div>
              <div className="mt-4">
                <div className="text-sm font-semibold text-slate-900">Периодичность напоминания</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {reminderOptions.map((option) => {
                    const isSelected = productReminders[item.id] === option
                    return (
                      <button
                        key={`${item.id}-${option}`}
                        type="button"
                        onClick={() =>
                          setProductReminders((current) => ({
                            ...current,
                            [item.id]: option,
                          }))
                        }
                        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                          isSelected ? 'bg-ozon-blue text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {option}
                      </button>
                    )
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2 text-2xl font-semibold text-slate-950">
          <Stethoscope className="size-5 text-ozon-magenta" />
          Услуги в pet-подписке
        </div>
        <div className="grid gap-4 xl:grid-cols-3">
          {subscriptionServices.map((item) => (
            <article key={item.id} className="flex h-full flex-col rounded-[28px] bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
              <div className="overflow-hidden rounded-[22px] bg-slate-100">
                <img src={item.photo} alt={item.title} className="h-44 w-full object-cover" />
              </div>
              <div className="mt-4 inline-flex w-fit rounded-full bg-ozon-magenta/10 px-3 py-1 text-xs font-semibold text-ozon-magenta">
                Для {item.petName}
              </div>
              <div className="mt-4 text-xl font-semibold text-slate-950">{item.title}</div>
              <div className="mt-2 text-sm leading-7 text-slate-600">{item.subtitle}</div>
              <div className="mt-4 rounded-[18px] bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-600">{item.nextAction}</div>
              <div className="mt-4 text-lg font-semibold text-slate-950">{item.price}</div>
              <div className="mt-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <CalendarClock className="size-4 text-ozon-magenta" />
                  Периодичность напоминания
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {reminderOptions.map((option) => {
                    const isSelected = serviceReminders[item.id] === option
                    return (
                      <button
                        key={`${item.id}-${option}`}
                        type="button"
                        onClick={() =>
                          setServiceReminders((current) => ({
                            ...current,
                            [item.id]: option,
                          }))
                        }
                        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                          isSelected ? 'bg-ozon-magenta text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {option}
                      </button>
                    )
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
