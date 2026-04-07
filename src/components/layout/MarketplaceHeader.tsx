import { Grid2x2, Heart, MapPin, MessageCircle, Search, ShoppingCart } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export function MarketplaceHeader() {
  const headerActions = [
    { icon: MessageCircle, label: 'Чаты' },
    { icon: Heart, label: 'Избранное' },
    { icon: ShoppingCart, label: 'Корзина' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/92 backdrop-blur-xl">
      <div className="mx-auto max-w-[1180px] px-4 py-4 md:px-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3 lg:flex-nowrap">
            <NavLink to="/" className="text-[2.1rem] font-black uppercase tracking-tight text-ozon-blue">
              OZON
            </NavLink>

            <NavLink to="/login" className="ml-auto flex flex-col items-center gap-1 text-xs text-slate-600 lg:hidden">
              <div className="size-8 overflow-hidden rounded-full shadow-[0_6px_18px_rgba(15,23,42,0.18)] ring-2 ring-white">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                  alt="Профиль"
                  className="h-full w-full object-cover"
                />
              </div>
              Я
            </NavLink>

            <button className="inline-flex items-center gap-2 rounded-2xl bg-ozon-blue px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,91,255,0.22)]">
              <Grid2x2 className="size-4" />
              Каталог
            </button>

            <div className="flex min-w-[280px] flex-1 items-center overflow-hidden rounded-2xl border-2 border-ozon-blue bg-white">
              <div className="hidden border-r border-slate-200 px-4 py-3 text-sm text-slate-500 sm:block">Везде</div>
              <input
                className="min-w-0 flex-1 px-4 py-3 text-sm outline-none placeholder:text-slate-400"
                placeholder="Искать на Ozon"
              />
              <button className="flex h-full items-center justify-center px-5 text-ozon-blue">
                <Search className="size-5" />
              </button>
            </div>

            <div className="ml-auto hidden items-center gap-5 lg:flex">
              {headerActions.map(({ icon: Icon, label }) => (
                <NavLink
                  key={label}
                  to="#"
                  className="flex flex-col items-center gap-1 text-xs text-slate-600"
                >
                  <Icon className="size-5 text-slate-500" />
                  {label}
                </NavLink>
              ))}

              <NavLink to="/login" className="flex flex-col items-center gap-1 text-xs text-slate-600">
                <div className="size-8 overflow-hidden rounded-full shadow-[0_6px_18px_rgba(15,23,42,0.18)] ring-2 ring-white">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                    alt="Профиль"
                    className="h-full w-full object-cover"
                  />
                </div>
                Я
              </NavLink>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {['Ozon fresh', 'Ozon Банк', 'Билеты, отели', 'Для бизнеса', 'Одежда', 'Электроника', 'Дом и сад', 'Товары за 1₽', 'Сертификаты', 'Ozon Pet'].map((item, index) => (
                <span
                  key={item}
                  className={
                    item === 'Ozon Pet'
                      ? 'rounded-full bg-ozon-blue px-3 py-1 font-semibold text-white shadow-[0_8px_20px_rgba(0,91,255,0.2)]'
                      : index === 0
                        ? 'font-semibold text-ozon-green'
                        : ''
                  }
                >
                  {item}
                </span>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <MapPin className="size-4" />
              <span>Москва</span>
              <span className="font-semibold text-ozon-blue">Укажите адрес</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
