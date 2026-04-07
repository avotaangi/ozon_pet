import { Heart, Percent, Wallet } from 'lucide-react'
import { charityNeeds } from '../data/content'
import { FeatureBlock } from './FeatureBlock'

export function CharityShowcase() {
  return (
    <FeatureBlock
      id="charity"
      eyebrow="Направление 4"
      title="Благотворительность и помощь работают как прозрачный товарно-сервисный поток"
      description="Приют сам выставляет список нужд: корм, лечение, выезд ветеринара, перевозка и передержка. Пользователь может закрыть конкретную потребность, оформить подписку, выбрать процент с покупки или оплатить разово."
      preview={
        <div className="grid gap-4 xl:grid-cols-[1fr_0.96fr]">
          <div className="rounded-[30px] bg-white p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm text-slate-500">Карточка приюта</div>
                <div className="mt-1 text-2xl font-semibold text-ozon-dark">Приют «Лапа рядом»</div>
              </div>
              <div className="rounded-full bg-ozon-green/10 px-3 py-1 text-xs font-semibold text-ozon-green">
                verified shelter
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {charityNeeds.map((need) => (
                <div key={need.label} className="rounded-[24px] bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-semibold text-ozon-dark">{need.label}</div>
                    <div className="text-sm text-slate-500">{need.amount}</div>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-white">
                    <div
                      className="h-2 rounded-full bg-ozon-green"
                      style={{ width: `${need.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[30px] bg-[linear-gradient(180deg,#00be6c_0%,#2fd087_100%)] p-5 text-white">
              <div className="flex items-center gap-3">
                <Heart className="size-5" />
                <div className="text-xl font-semibold">Подписка на помощь</div>
              </div>
              <div className="mt-3 text-sm text-white/80">300 ₽ в месяц автоматически направляются на товары и услуги внутри Ozon.</div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[28px] bg-white p-5">
                <div className="flex items-center gap-3">
                  <Wallet className="size-5 text-ozon-blue" />
                  <div className="font-semibold text-ozon-dark">Оплатить разово</div>
                </div>
                <div className="mt-2 text-sm text-slate-600">Закрыть конкретную нужду: корм, лечение или перевозку.</div>
              </div>
              <div className="rounded-[28px] bg-white p-5">
                <div className="flex items-center gap-3">
                  <Percent className="size-5 text-amber-600" />
                  <div className="font-semibold text-ozon-dark">Процент с покупки</div>
                </div>
                <div className="mt-2 text-sm text-slate-600">Направить часть каждой pet-покупки в выбранный приют.</div>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['Прозрачность', 'Помощь идёт через реальные товары и услуги внутри Ozon, поэтому пользователь видит понятный след пожертвования.'],
          ['Рейтинг помощи', 'Система показывает вклад пользователя и брендов без давления и токсичной геймификации.'],
          ['Новый оборот', 'Даже благотворительность усиливает экосистему: это честный сервисный и товарный поток с понятной структурой.'],
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
