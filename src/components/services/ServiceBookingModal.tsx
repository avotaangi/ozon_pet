import { CalendarClock, MessageCircle, Send, X } from 'lucide-react'
import { useMemo, useState } from 'react'

type BookingItem = {
  title: string
  subtitle: string
  price: string
  eta?: string
}

type ServiceBookingModalProps = {
  item: BookingItem | null
  onClose: () => void
}

const defaultSlots = [
  'Сегодня, 19:30',
  'Завтра, 12:00',
  'Пятница, 18:30',
]

export function ServiceBookingModal({ item, onClose }: ServiceBookingModalProps) {
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

  if (!item) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 px-4">
      <div className="w-full max-w-[620px] rounded-[28px] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.22)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm text-slate-500">Оформить услугу</div>
            <div className="mt-2 text-3xl font-semibold text-slate-950">{item.title}</div>
            <div className="mt-2 text-sm leading-7 text-slate-600">{item.subtitle}</div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-500"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">{item.price}</div>
          {item.eta ? (
            <div className="rounded-full bg-ozon-blue/10 px-4 py-2 text-sm font-semibold text-ozon-blue">{item.eta}</div>
          ) : null}
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
            onClick={onClose}
            className="rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700"
          >
            Закрыть
          </button>
          <button
            type="button"
            className="rounded-full bg-ozon-blue px-5 py-3 text-sm font-semibold text-white"
          >
            Подтвердить слот {selectedSlot}
          </button>
        </div>
      </div>
    </div>
  )
}
