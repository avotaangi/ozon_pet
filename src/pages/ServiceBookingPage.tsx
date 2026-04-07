import { CalendarClock, MessageCircle, Send } from 'lucide-react'
import { useMemo, useState } from 'react'
import { NavLink, Navigate, useParams } from 'react-router-dom'
import { servicePackages, services } from '../data/marketplace'

const defaultSlots = ['Сегодня, 19:30', 'Завтра, 12:00', 'Пятница, 18:30']

export function ServiceBookingPage() {
  const { kind, itemId } = useParams()
  const item =
    kind === 'package'
      ? servicePackages.find((entry) => entry.id === itemId)
      : services.find((entry) => entry.id === itemId)

  const [selectedSlot, setSelectedSlot] = useState(defaultSlots[0])
  const [customDate, setCustomDate] = useState('2026-04-10')
  const [customTime, setCustomTime] = useState('14:30')
  const [customComment, setCustomComment] = useState('')
  const [proposalSent, setProposalSent] = useState(false)

  const chatMessage = useMemo(
    () =>
      `Предложение отправлено в чат специалисту: ${item?.title}, ${customDate} в ${customTime}${
        customComment ? `, комментарий: ${customComment}` : ''
      }. Специалист может согласиться или отказаться.`,
    [customComment, customDate, customTime, item?.title],
  )

  if (!item || (kind !== 'service' && kind !== 'package')) {
    return <Navigate to="/services" replace />
  }

  const subtitle = 'benefit' in item ? `${item.subtitle}. ${item.benefit}` : item.subtitle
  const eta = 'benefit' in item ? 'Пакетные слоты по согласованию' : item.eta

  return (
    <div className="space-y-6">
      <section>
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-ozon-blue">Оформить услугу</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">{item.title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{subtitle}</p>
      </section>

      <NavLink
        to={kind === 'package' ? '/pet-subscription' : '/services'}
        className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-[0_12px_38px_rgba(15,23,42,0.06)]"
      >
        Назад
      </NavLink>

      <section className="rounded-[28px] bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
        <div className="flex flex-wrap items-center gap-3">
          <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">{item.price}</div>
          <div className="rounded-full bg-ozon-blue/10 px-4 py-2 text-sm font-semibold text-ozon-blue">{eta}</div>
        </div>

        <div className="mt-6 rounded-[22px] bg-slate-50 p-5">
          <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
            <CalendarClock className="size-4 text-ozon-blue" />
            Выберите слот
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {defaultSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setSelectedSlot(slot)}
                className={`rounded-[18px] px-4 py-3 text-left text-sm font-medium ${
                  selectedSlot === slot ? 'bg-ozon-blue text-white' : 'bg-white text-slate-700'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 rounded-[22px] bg-slate-50 p-5">
          <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
            <MessageCircle className="size-4 text-ozon-magenta" />
            Предложить окно самостоятельно
          </div>
          <div className="mt-2 text-sm leading-7 text-slate-600">
            Если подходящих слотов нет, можно отправить предложение в чат. Специалист либо соглашается, либо отказывается.
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <input
              type="date"
              value={customDate}
              onChange={(event) => setCustomDate(event.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-ozon-blue"
            />
            <input
              type="time"
              value={customTime}
              onChange={(event) => setCustomTime(event.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-ozon-blue"
            />
          </div>
          <textarea
            value={customComment}
            onChange={(event) => setCustomComment(event.target.value)}
            placeholder="Комментарий для специалиста"
            className="mt-3 min-h-[96px] w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-ozon-blue"
          />
          {proposalSent ? (
            <div className="mt-3 rounded-[18px] bg-white px-4 py-3 text-sm leading-7 text-slate-600">{chatMessage}</div>
          ) : null}
          <button
            type="button"
            onClick={() => setProposalSent(true)}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-ozon-magenta px-4 py-2.5 text-sm font-semibold text-white"
          >
            <Send className="size-4" />
            Предложить окно самостоятельно
          </button>
        </div>

        <div className="mt-6 flex flex-wrap justify-end gap-3">
          <button
            type="button"
            className="rounded-full bg-ozon-blue px-5 py-3 text-sm font-semibold text-white"
          >
            Подтвердить слот {selectedSlot}
          </button>
        </div>
      </section>
    </div>
  )
}
