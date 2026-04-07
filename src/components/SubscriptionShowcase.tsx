import { BellRing, Check, PackageCheck } from 'lucide-react'
import { FeatureBlock } from './FeatureBlock'

export function SubscriptionShowcase() {
  return (
    <FeatureBlock
      id="subscription"
      eyebrow="Направление 2"
      title="Товары и подписка превращают разовые покупки в предсказуемый поток"
      description="Подписка Ozon Pet выглядит как самостоятельный продукт: персональные рекомендации по питомцу, автопополнение, умные напоминания, бандлы и повторный заказ в один клик."
      reverse
      preview={
        <div className="grid gap-4 xl:grid-cols-[1.04fr_0.96fr]">
          <div className="rounded-[30px] bg-white p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm text-slate-500">Рекомендации по питомцу</div>
                <div className="mt-1 text-2xl font-semibold text-ozon-dark">Подборка для Марса</div>
              </div>
              <div className="rounded-full bg-ozon-magenta/10 px-3 py-1 text-xs font-semibold text-ozon-magenta">
                96% fit
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              {[
                ['Сухой корм', '3 490 ₽', 'Подходит по возрасту и аллергиям'],
                ['Лакомства без курицы', '690 ₽', 'Совместимо с текущим рационом'],
                ['Набор для прогулок', '1 290 ₽', 'Бандл с экономией 14%'],
              ].map(([title, price, note]) => (
                <div key={title} className="rounded-[24px] bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="font-semibold text-ozon-dark">{title}</div>
                      <div className="mt-1 text-sm text-slate-500">{note}</div>
                    </div>
                    <div className="text-sm font-semibold text-ozon-dark">{price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[30px] bg-[linear-gradient(180deg,#005bff_0%,#00a2ff_100%)] p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-white/70">Подписка активна</div>
                  <div className="mt-1 text-xl font-semibold">Корм и расходники</div>
                </div>
                <PackageCheck className="size-5" />
              </div>
              <div className="mt-5 space-y-3">
                {['Автопополнение каждые 28 дней', 'Один клик для изменения состава', 'Персональные наборы и замены'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-[22px] bg-white/10 px-4 py-3 text-sm">
                    <Check className="size-4 shrink-0 text-ozon-green" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-amber-100 bg-amber-50 p-5">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-white text-amber-600">
                  <BellRing className="size-5" />
                </div>
                <div>
                  <div className="text-sm text-amber-700/80">Умное напоминание</div>
                  <div className="mt-1 text-lg font-semibold text-amber-900">Корм скоро закончится через 4 дня</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        {[
          [
            'Сильный продукт, а не скидка',
            'Подписка снимает стресс и делает Ozon точкой спокойствия: владелец знает, что базовые потребности питомца закрываются автоматически.',
          ],
          [
            'Предсказуемая выручка',
            'Ozon получает повторяемый доход, более устойчивую корзину и пространство для сервисных апселов без давления в момент покупки.',
          ],
        ].map(([title, text]) => (
          <div key={title} className="rounded-[24px] bg-slate-50 p-5">
            <div className="text-lg font-semibold text-ozon-dark">{title}</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
          </div>
        ))}
      </div>
    </FeatureBlock>
  )
}
