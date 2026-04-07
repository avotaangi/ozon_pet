import { CalendarDays, Clock3, MapPin, Smartphone, Star } from 'lucide-react'
import { useMemo, useState } from 'react'
import { serviceProviderStats } from '../data/content'
import { FeatureBlock } from './FeatureBlock'

const slots = ['10:30', '12:00', '14:30', '16:00']

export function ServicesShowcase() {
  const [selectedSlot, setSelectedSlot] = useState(slots[1])
  const bookingText = useMemo(() => `Груминг забронирован на ${selectedSlot}`, [selectedSlot])

  return (
    <FeatureBlock
      id="services"
      eyebrow="Направление 3"
      title="Услуги собираются в единый сервисный слой с Ozon PetPro для поставщиков"
      description="Клиники, специалисты, выгул, ситтеры и передержка становятся частью продуктового пути Ozon. Pet ID уходит в карточку специалиста, а поставщик работает через отдельный рабочий интерфейс Ozon PetPro."
      preview={
        <div className="grid gap-4 2xl:grid-cols-[1fr_320px]">
          <div className="space-y-4">
            <div className="rounded-[30px] bg-white p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm text-slate-500">Клиники и специалисты</div>
                  <div className="mt-1 text-2xl font-semibold text-ozon-dark">Список доступных сервисов</div>
                </div>
                <div className="rounded-full bg-ozon-green/10 px-3 py-1 text-xs font-semibold text-ozon-green">
                  18 проверенных
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {[
                  ['VetCity Парк', 'Терапия · вакцинация · диагностика'],
                  ['Грумер Анна З.', 'Стрижка · экспресс-уход · SPA'],
                  ['PetWalker Now', 'Выгул по клику · 20 минут'],
                ].map(([title, subtitle]) => (
                  <div key={title} className="rounded-[24px] bg-slate-50 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-semibold text-ozon-dark">{title}</div>
                        <div className="mt-1 text-sm text-slate-500">{subtitle}</div>
                      </div>
                      <div className="flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm text-slate-500">
                        <Star className="size-4 fill-current text-amber-400" />
                        4.9
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[1fr_0.92fr]">
              <div className="rounded-[30px] bg-slate-50 p-5">
                <div className="flex items-center gap-3">
                  <CalendarDays className="size-5 text-ozon-blue" />
                  <div className="text-lg font-semibold text-ozon-dark">Запись на услугу</div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {slots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`rounded-[18px] px-4 py-3 text-sm font-semibold transition ${
                        selectedSlot === slot
                          ? 'bg-ozon-blue text-white'
                          : 'bg-white text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                <div className="mt-4 rounded-[20px] bg-white p-4 text-sm text-slate-600">{bookingText}</div>
              </div>

              <div className="rounded-[30px] bg-[linear-gradient(180deg,#f1117e_0%,#ff4fa2_100%)] p-5 text-white">
                <div className="text-sm text-white/70">Срочная услуга</div>
                <div className="mt-1 text-xl font-semibold">Нужен ситтер сейчас</div>
                <div className="mt-4 flex items-center gap-3 rounded-[20px] bg-white/12 px-4 py-3 text-sm">
                  <MapPin className="size-4" />
                  3 исполнителя рядом, ETA 18 минут
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[34px] border border-slate-200 bg-white p-3 shadow-[0_24px_60px_rgba(0,26,52,0.12)]">
            <div className="rounded-[28px] bg-[linear-gradient(180deg,#f8fbff_0%,#eff6ff_100%)] p-4">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>mobile / выгул по клику</span>
                <Smartphone className="size-4" />
              </div>
              <div className="mt-4 rounded-[22px] bg-ozon-blue p-4 text-white">
                <div className="text-sm text-white/70">Walk now</div>
                <div className="mt-1 text-lg font-semibold">Алексей уже в пути</div>
              </div>
              <div className="mt-3 rounded-[22px] bg-white p-4">
                <div className="flex items-center gap-3">
                  <Clock3 className="size-4 text-ozon-magenta" />
                  <div className="text-sm font-medium text-slate-700">20 минут выгул, трек и фото-отчёт</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[24px] bg-slate-50 p-5">
          <div className="text-sm text-slate-500">Ozon PetPro</div>
          <div className="mt-2 text-2xl font-semibold text-ozon-dark">Интерфейс для стороны поставщика услуг</div>
          <div className="mt-4 grid gap-3 text-sm text-slate-600">
            {['Профиль специалиста и витрина услуг', 'Расписание и история питомцев', 'Заполнение заметок в Pet ID', 'Рейтинг, отзывы и подтверждённый статус'].map((item) => (
              <div key={item} className="rounded-[20px] bg-white px-4 py-3">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[24px] bg-ozon-dark p-5 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-white/60">Ozon PetPro / provider side</div>
              <div className="mt-1 text-2xl font-semibold">Профиль грумера Анны</div>
            </div>
            <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">verified</div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {serviceProviderStats.map((item) => (
              <div key={item.label} className="rounded-[20px] bg-white/8 p-4">
                <div className="text-sm text-white/60">{item.label}</div>
                <div className="mt-1 text-xl font-semibold">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FeatureBlock>
  )
}
