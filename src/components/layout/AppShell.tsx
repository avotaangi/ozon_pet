import type { PropsWithChildren } from 'react'
import { MarketplaceFooter } from './MarketplaceFooter'
import { MarketplaceHeader } from './MarketplaceHeader'

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-[#f4f7fc] text-slate-700">
      <MarketplaceHeader />
      <main className="mx-auto max-w-[1180px] px-4 py-6 md:px-6">{children}</main>
      <MarketplaceFooter />
    </div>
  )
}
