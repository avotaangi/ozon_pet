import { useState } from 'react'

type PreferenceBadgeProps = {
  icon: string
  label: string
  tone: 'danger' | 'positive'
}

const toneClass = {
  danger: 'bg-white text-rose-500 ring-1 ring-rose-100',
  positive: 'bg-white text-emerald-600 ring-1 ring-emerald-100',
} as const

function getPreferenceMessage(label: string, tone: PreferenceBadgeProps['tone']) {
  if (tone === 'danger') {
    if (label.startsWith('Есть ')) {
      return `Не нравится ${label.replace(/^Есть /, '').toLowerCase()}`
    }

    if (label === 'Проверить состав') {
      return 'Проверьте состав'
    }

    return `Не нравится ${label.toLowerCase()}`
  }

  if (label === 'Подходит' || label === 'Проверено Pet ID') {
    return 'Нравится питомцу'
  }

  return `Нравится ${label.toLowerCase()}`
}

export function PreferenceBadge({ icon, label, tone }: PreferenceBadgeProps) {
  const [isOpen, setIsOpen] = useState(false)
  const message = getPreferenceMessage(label, tone)

  return (
    <div className="absolute left-3 top-3 z-10">
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm transition ${toneClass[tone]}`}
          aria-label={message}
          aria-pressed={isOpen}
        >
          <span>{icon}</span>
        </button>
        <div
          className={`pointer-events-none absolute left-full top-1/2 ml-2 -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-[0_10px_28px_rgba(15,23,42,0.12)] ring-1 ring-slate-200 transition duration-200 ${
            isOpen ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'
          }`}
        >
          {message}
        </div>
      </div>
    </div>
  )
}
