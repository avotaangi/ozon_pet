import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { pets } from '../../data/marketplace'

export function PetCardCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const navigate = useNavigate()
  const activePet = pets[activeIndex]

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % pets.length)
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + pets.length) % pets.length)
  const handleOpenPet = () => navigate(`/pet-id/${activePet.id}`)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pets.length)
    }, 7000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div
      className="relative h-full min-h-[162px] cursor-pointer rounded-[34px] bg-white px-5 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5"
      onClick={handleOpenPet}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          handleOpenPet()
        }
      }}
    >
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          handlePrev()
        }}
        className="absolute left-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          handleNext()
        }}
        className="absolute right-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm"
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="flex min-h-[130px] items-center">
        <div className="flex w-full items-center justify-between gap-4 px-14 md:px-16">
          <img
            src={activePet.photo}
            alt={activePet.name}
            className="size-18 shrink-0 rounded-full object-cover shadow-[0_8px_24px_rgba(15,23,42,0.12)] md:size-20"
          />
          <div className="min-w-0 flex-1">
            <div className="text-[1.65rem] font-semibold leading-none tracking-tight text-black md:text-[1.9rem]">{activePet.name}</div>
            <div className="mt-1 text-sm text-slate-600 md:text-[15px]">{activePet.breed}</div>
            <div className="mt-1 text-sm font-medium text-slate-500">{activePet.age}</div>
          </div>
          <div className="hidden shrink-0 self-center sm:flex sm:flex-col sm:items-center">
            <div className="grid size-14 grid-cols-4 gap-1 rounded-xl bg-white p-1 shadow-[0_8px_24px_rgba(15,23,42,0.1)] ring-1 ring-slate-100 md:size-16">
              {Array.from({ length: 16 }).map((_, index) => (
                <div
                  key={index}
                  className={`rounded-[2px] ${[0, 1, 3, 4, 6, 9, 10, 12, 14, 15].includes(index) ? 'bg-black' : 'bg-white'}`}
                />
              ))}
            </div>
            <div className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              ID: {activePet.code}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center justify-center gap-3">
        {pets.map((pet, index) => (
          <button
            key={pet.id}
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              setActiveIndex(index)
            }}
            className={`size-2.5 rounded-full transition ${index === activeIndex ? 'bg-black' : 'bg-slate-300'}`}
          />
        ))}
      </div>
    </div>
  )
}
