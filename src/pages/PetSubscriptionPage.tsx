import { useNavigate } from 'react-router-dom'
import { servicePackages } from '../data/marketplace'

export function PetSubscriptionPage() {
  const navigate = useNavigate()

  return (
    <div className="space-y-6">
      <section className="rounded-[32px] bg-[linear-gradient(180deg,#001a34_0%,#07346f_100%)] p-7 text-white shadow-[0_18px_60px_rgba(0,26,52,0.18)]">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Pet-подписка</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Пакеты услуг и сервисов для регулярной заботы</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-white/78">
          Здесь собраны сервисы, которые выгоднее брать пакетами: прогулки, груминг, ветеринарные консультации и ситтинг. При оформлении можно выбрать слот или предложить своё окно специалисту.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {servicePackages.map((item) => (
          <article key={item.id} className="flex h-full flex-col rounded-[28px] bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
            <div className="inline-flex rounded-full bg-ozon-blue/10 px-3 py-1 text-xs font-semibold text-ozon-blue">
              Pet-пакет
            </div>
            <div className="mt-4 text-2xl font-semibold text-slate-950">{item.title}</div>
            <div className="mt-2 text-sm leading-7 text-slate-600">{item.subtitle}</div>
            <div className="mt-4 rounded-[18px] bg-slate-50 px-4 py-3 text-sm text-slate-600">{item.benefit}</div>
            <div className="mt-auto pt-5">
              <div className="text-xl font-semibold text-slate-950">{item.price}</div>
              <button
                type="button"
                onClick={() => navigate(`/booking/package/${item.id}`)}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-ozon-blue px-4 py-2.5 text-sm font-semibold text-white"
              >
                Оформить услугу
              </button>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
