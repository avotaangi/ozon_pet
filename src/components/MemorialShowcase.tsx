import { HeartHandshake, MoonStar } from 'lucide-react'
import { FeatureBlock } from './FeatureBlock'

export function MemorialShowcase() {
  return (
    <FeatureBlock
      id="memorial"
      eyebrow="Направление 5"
      title="Мемориал даёт бережный сценарий после утраты питомца"
      description="Платформа не продолжает автоматически продавать после потери. Вместо этого Ozon Pet переводит профиль в тактичный режим, отключает нерелевантные рекомендации и при желании предлагает направить заботу на помощь другим животным."
      reverse
      preview={
        <div className="grid gap-4 bg-[linear-gradient(180deg,#001a34_0%,#0d2c57_100%)] p-4 md:p-6">
          <div className="rounded-[30px] border border-white/10 bg-white/6 p-6 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm text-white/55">Мемориал питомца</div>
                <div className="mt-2 text-3xl font-semibold">Марс</div>
                <div className="mt-1 text-sm text-white/65">2019 — 2026</div>
              </div>
              <MoonStar className="size-5 text-white/55" />
            </div>
            <p className="mt-6 max-w-lg text-sm leading-8 text-white/72">
              Профиль остаётся как спокойное место памяти: важные даты, фотографии, история жизни и заметки владельца.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[28px] bg-white/8 p-5 text-white">
              <div className="text-sm text-white/55">Мягкие настройки</div>
              <div className="mt-4 space-y-3 text-sm text-white/75">
                <div>Неактивный режим профиля</div>
                <div>Отключение рекомендаций и автопродаж</div>
                <div>Сохранение истории без давления</div>
              </div>
            </div>
            <div className="rounded-[28px] bg-white p-5 text-ozon-dark">
              <div className="flex items-center gap-3">
                <HeartHandshake className="size-5 text-ozon-green" />
                <div className="font-semibold">Помочь другим животным в память о своём питомце</div>
              </div>
              <div className="mt-3 text-sm leading-7 text-slate-600">
                Спокойный переход к помощи приютам без агрессивных CTA и без давления на пользователя.
              </div>
            </div>
          </div>
        </div>
      }
    >
      <div className="rounded-[24px] bg-[linear-gradient(180deg,rgba(0,26,52,0.04),rgba(0,26,52,0.02))] p-6">
        <p className="max-w-3xl text-base leading-8 text-slate-600">
          Этот блок намеренно тише остальных. Он показывает, что Ozon Pet работает не только в момент потребления,
          но и в момент потери, где ценность создаёт деликатность, а не продажа.
        </p>
      </div>
    </FeatureBlock>
  )
}
