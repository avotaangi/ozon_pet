import { NavLink } from 'react-router-dom'

export function MarketplaceFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-4 py-10 md:grid-cols-[1fr_0.9fr] md:px-6">
        <div>
          <div className="text-2xl font-black uppercase tracking-tight text-ozon-blue">OZON Pet</div>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
            Концепт многостраничного pet-marketplace внутри Ozon: товары, услуги, Pet ID и экосистемные сценарии.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ['/', 'Главная'],
            ['/catalog', 'Каталог товаров'],
            ['/services', 'Услуги'],
            ['/pet-id', 'Pet ID'],
            ['/ecosystem', 'Экосистема'],
          ].map(([to, label]) => (
            <NavLink key={to} to={to} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-600 transition hover:text-ozon-blue">
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  )
}
