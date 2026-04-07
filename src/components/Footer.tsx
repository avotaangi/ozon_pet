import { navItems } from '../data/content'

export function Footer() {
  return (
    <footer className="rounded-t-[40px] border-t border-white/70 bg-[linear-gradient(180deg,#ffffff_0%,#eef5ff_100%)] px-6 py-10 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="text-2xl font-semibold text-ozon-dark">Ozon Pet</div>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Продуктовая концепция экосистемы Ozon Pet: данные о питомце, покупки, услуги, помощь и память внутри
            основного продукта Ozon.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {navItems.slice(0, 8).map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-[20px] bg-white px-4 py-3 text-sm font-medium text-slate-600 transition hover:text-ozon-blue"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
