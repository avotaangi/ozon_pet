import { PawPrint } from 'lucide-react'
import { navItems } from '../data/content'

type StickyHeaderProps = {
  activeId: string
}

export function StickyHeader({ activeId }: StickyHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-[rgba(247,250,255,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#hero" className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-ozon-blue text-white shadow-[0_12px_24px_rgba(0,91,255,0.3)]">
            <PawPrint className="size-5" />
          </div>
          <div>
            <div className="text-sm font-semibold text-ozon-dark">Ozon Pet</div>
            <div className="text-xs text-slate-500">ecosystem showcase</div>
          </div>
        </a>

        <nav className="hidden items-center gap-2 rounded-full border border-white/70 bg-white/80 p-2 xl:flex">
          {navItems.map((item) => {
            const isActive = item.id === activeId
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-ozon-blue text-white shadow-[0_10px_20px_rgba(0,91,255,0.24)]'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-ozon-dark'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>
        <div className="hidden text-sm font-medium text-slate-500 xl:block">internal product showcase</div>
      </div>

      <div className="scrollbar-none overflow-x-auto px-4 pb-3 xl:hidden">
        <div className="mx-auto flex max-w-7xl gap-2">
          {navItems.map((item) => {
            const isActive = item.id === activeId
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-ozon-blue text-white shadow-[0_10px_20px_rgba(0,91,255,0.24)]'
                    : 'bg-white text-slate-600'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </div>
      </div>
    </header>
  )
}
