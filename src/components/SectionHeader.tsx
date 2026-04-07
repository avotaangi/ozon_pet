type SectionHeaderProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'

  return (
    <div className={alignment}>
      <div className="mb-4 inline-flex rounded-full border border-white/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-ozon-blue shadow-[0_10px_30px_rgba(0,91,255,0.08)] backdrop-blur">
        {eyebrow}
      </div>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-ozon-dark md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
    </div>
  )
}
