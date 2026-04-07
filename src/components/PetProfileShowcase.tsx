import { Lock, Share2 } from 'lucide-react'
import { useState } from 'react'
import { petProfileValues } from '../data/content'
import { FeatureBlock } from './FeatureBlock'

export function PetProfileShowcase() {
  const [shareOpen, setShareOpen] = useState(false)

  return (
    <>
      <FeatureBlock
        id="pet-profile"
        eyebrow="Направление 1"
        title="Цифровой профиль питомца становится центром всей системы"
        description="Это не анкета, а операционная модель экосистемы. На данных Pet ID строятся рекомендации, подписка, сервисы, доверие и долгосрочное сопровождение."
        preview={
          <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[30px] bg-ozon-dark p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="flex size-18 items-center justify-center rounded-[28px] bg-[linear-gradient(135deg,#ffb56b,#f1117e)] text-2xl font-semibold">
                  М
                </div>
                <div>
                  <div className="text-sm text-white/60">Цифровой паспорт</div>
                  <div className="mt-1 text-2xl font-semibold">Марс · корги</div>
                  <div className="mt-1 text-sm text-white/70">4 года · 11.8 кг · стерилизован</div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  ['Рацион', 'Sensitive Lamb, 2 раза в день'],
                  ['Аллергии', 'Курица, некоторые лакомства'],
                  ['История услуг', 'Ветосмотр, груминг, выгул'],
                  ['Заметки ветеринара', 'Контроль веса раз в 2 месяца'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[22px] bg-white/8 p-4">
                    <div className="text-sm text-white/60">{label}</div>
                    <div className="mt-2 font-semibold">{value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-[24px] bg-white/8 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/60">Видимость профиля</div>
                    <div className="mt-1 font-semibold">Открытые и закрытые разделы</div>
                  </div>
                  <Lock className="size-4 text-white/60" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="button"
                onClick={() => setShareOpen(true)}
                className="w-full rounded-[28px] bg-ozon-blue p-5 text-left text-white shadow-[0_18px_40px_rgba(0,91,255,0.24)] transition hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/70">Сценарий</div>
                    <div className="mt-2 text-xl font-semibold">Поделиться ID с клиникой</div>
                  </div>
                  <Share2 className="size-5" />
                </div>
              </button>

              <div className="rounded-[28px] bg-white p-5">
                <div className="text-sm text-slate-500">Несколько питомцев у владельца</div>
                <div className="mt-4 grid gap-3">
                  {['Марс · собака', 'Персик · кот', 'Бусинка · котёнок'].map((pet) => (
                    <div key={pet} className="rounded-[22px] bg-slate-50 px-4 py-3 font-medium text-slate-700">
                      {pet}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] bg-slate-50 p-5">
                <div className="text-sm text-slate-500">Породы и стоимость содержания</div>
                <div className="mt-2 text-lg font-semibold text-ozon-dark">Подсветка ожидаемых расходов и сценариев ухода</div>
              </div>
            </div>
          </div>
        }
      >
        <div className="space-y-5">
          <p className="text-base leading-8 text-slate-600">
            Pet ID связывает товары, услуги и поддержку вокруг одного объекта. Владелец не повторяет контекст при каждом
            касании, а специалист работает с полным профилем и может обратно обогащать данные.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {petProfileValues.map((column) => (
              <div key={column.title} className="rounded-[24px] bg-slate-50 p-5">
                <div
                  className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${
                    column.tone === 'blue'
                      ? 'bg-ozon-blue/10 text-ozon-blue'
                      : column.tone === 'magenta'
                        ? 'bg-ozon-magenta/10 text-ozon-magenta'
                        : 'bg-ozon-dark text-white'
                  }`}
                >
                  {column.title}
                </div>
                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  {column.points.map((point) => (
                    <div key={point}>{point}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FeatureBlock>

      {shareOpen ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#001a34]/45 p-4 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-[32px] bg-white p-6 shadow-[0_32px_100px_rgba(0,26,52,0.26)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm text-slate-500">Modal / share flow</div>
                <div className="mt-1 text-2xl font-semibold text-ozon-dark">Передать Pet ID в клинику</div>
              </div>
              <button
                type="button"
                onClick={() => setShareOpen(false)}
                className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-600"
              >
                Закрыть
              </button>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[24px] bg-slate-50 p-5">
                <div className="text-sm text-slate-500">Передаваемые разделы</div>
                <div className="mt-3 space-y-2 text-sm text-slate-700">
                  <div>Паспорт и контакты владельца</div>
                  <div>Аллергии и рацион</div>
                  <div>История последних услуг</div>
                  <div>Заметки предыдущего врача</div>
                </div>
              </div>
              <div className="rounded-[24px] bg-ozon-blue p-5 text-white">
                <div className="text-sm text-white/70">Срок доступа</div>
                <div className="mt-2 text-xl font-semibold">48 часов</div>
                <div className="mt-4 text-sm text-white/80">Клиника видит только нужные поля и может добавить заметки обратно в профиль.</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
