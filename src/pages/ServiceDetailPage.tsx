import { ArrowLeft, CalendarDays, Clock3, Star } from 'lucide-react'
import { useState } from 'react'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { pets, services } from '../data/marketplace'

type Specialist = {
  id: string
  name: string
  role: string
  worksAt: string
  location: string
  experience: string
  rating: string
  photo: string
  reviews: string[]
}

const categorySpecialists: Record<string, Specialist[]> = {
  groomers: [
    {
      id: 'gr-1',
      name: 'Марина Смирнова',
      role: 'Грумер',
      worksAt: 'Paw Studio, салон и выезд',
      location: 'Москва, Сокол',
      experience: '6 лет опыта',
      rating: '4.9',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
      reviews: ['Аккуратный уход и спокойная работа с тревожными питомцами.', 'После визита присылает фото и рекомендации по домашнему уходу.'],
    },
    {
      id: 'gr-2',
      name: 'Ирина Волкова',
      role: 'Грумер',
      worksAt: 'Pet Flow',
      location: 'Химки, выезд и салон',
      experience: '4 года опыта',
      rating: '4.8',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
      reviews: ['Хорошо работает с кошками и длинной шерстью.', 'Понятно объясняет, какой формат нужен конкретному питомцу.'],
    },
  ],
  veterinarians: [
    {
      id: 'vet-1',
      name: 'Алексей Лебедев',
      role: 'Ветеринар',
      worksAt: 'Vet Point Online',
      location: 'Онлайн, Москва',
      experience: '9 лет опыта',
      rating: '4.9',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
      reviews: ['Быстро понимает контекст по Pet ID и назначает понятный план действий.', 'Удобно, что можно вернуться к заметкам после консультации.'],
    },
    {
      id: 'vet-2',
      name: 'Екатерина Белова',
      role: 'Ветеринар',
      worksAt: 'Care Vet',
      location: 'Москва, Таганская',
      experience: '7 лет опыта',
      rating: '4.8',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
      reviews: ['Хорошо работает по follow-up сценариям и разбору анализов.', 'Понравилось, что рекомендации не конфликтуют с текущим рационом.'],
    },
  ],
  walking: [
    {
      id: 'walk-1',
      name: 'Никита Орлов',
      role: 'Специалист по выгулу',
      worksAt: 'Paw Walk',
      location: 'Москва, Пресненский район',
      experience: '3 года опыта',
      rating: '4.9',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      reviews: ['Всегда отправляет маршрут и фото-отчёт.', 'Подходит для активных собак и быстрых заказов по клику.'],
    },
    {
      id: 'walk-2',
      name: 'Сергей Мельников',
      role: 'Специалист по выгулу',
      worksAt: 'Dog Go',
      location: 'Москва, Хорошёво',
      experience: '5 лет опыта',
      rating: '4.7',
      photo: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=400&q=80',
      reviews: ['Умеет подстраиваться под темп и тревожность питомца.', 'Удобно для регулярных утренних прогулок.'],
    },
  ],
  sitters: [
    {
      id: 'sit-1',
      name: 'Полина Егорова',
      role: 'Pet-ситтер',
      worksAt: 'Home Pet Care',
      location: 'Москва, Аэропорт',
      experience: '4 года опыта',
      rating: '4.8',
      photo: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=400&q=80',
      reviews: ['Хорошо следует инструкциям по кормлению и лекарствам.', 'Удобно, что ситтер видит заметки по режиму прямо в Ozon Pet.'],
    },
  ],
  boarding: [
    {
      id: 'board-1',
      name: 'Анастасия Крылова',
      role: 'Специалист по передержке',
      worksAt: 'Pet Stay',
      location: 'Мытищи',
      experience: '6 лет опыта',
      rating: '4.9',
      photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
      reviews: ['Спокойный домашний формат и регулярные апдейты владельцу.', 'Понравилось, что соблюдают рацион по Pet ID без уточнений в чате.'],
    },
  ],
  training: [
    {
      id: 'train-1',
      name: 'Дмитрий Серов',
      role: 'Кинолог',
      worksAt: 'City Dog School',
      location: 'Москва, СЗАО',
      experience: '8 лет опыта',
      rating: '4.9',
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
      reviews: ['Даёт понятный план занятий и бытовые упражнения.', 'Хорошо адаптирует программу под возраст и породу.'],
    },
  ],
}

const servicePhotos: Record<string, string> = {
  'srv-1': 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=1200&q=80',
  'srv-2': 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=80',
  'srv-3': 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80',
  'srv-4': 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80',
  'srv-5': 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=1200&q=80',
  'srv-6': 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80',
}

const defaultDates = ['10 апреля', '11 апреля', '12 апреля']
const defaultTimes = ['09:00', '12:30', '18:00']

export function ServiceDetailPage() {
  const { itemId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const item = services.find((entry) => entry.id === itemId)
  const [selectedDate, setSelectedDate] = useState(defaultDates[0])
  const [selectedTime, setSelectedTime] = useState(defaultTimes[0])
  const [selectedPetId, setSelectedPetId] = useState(pets[0]?.id ?? '')
  const [isInSubscription, setIsInSubscription] = useState(false)

  if (!item) {
    return <Navigate to="/services" replace />
  }

  const specialists = categorySpecialists[item.category]
  const photo = servicePhotos[item.id] ?? servicePhotos['srv-1']
  const leadSpecialist = specialists[0]
  const from = (location.state as { from?: string } | null)?.from

  return (
    <div className="space-y-6">
      <section className="rounded-[32px] bg-white p-7 shadow-[0_16px_60px_rgba(15,23,42,0.06)]">
        <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <div className="relative overflow-hidden rounded-[28px] bg-slate-100">
            <button
              type="button"
              onClick={() => {
                if (from) {
                  navigate(-1)
                  return
                }
                navigate('/services')
              }}
              className="absolute left-4 top-4 z-10 inline-flex items-center justify-center rounded-full bg-white/95 p-3 text-slate-700 shadow-[0_12px_24px_rgba(15,23,42,0.12)] backdrop-blur"
              aria-label="Назад к услугам"
            >
              <ArrowLeft className="size-5" />
            </button>
            <img src={photo} alt={item.title} className="h-full min-h-[360px] w-full object-cover" />
          </div>

          <div className="flex flex-col">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-ozon-magenta">Карточка услуги</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">{item.title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{item.subtitle}</p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">{item.price}</div>
              <div className="rounded-full bg-ozon-blue/10 px-4 py-2 text-sm font-semibold text-ozon-blue">{item.eta}</div>
            </div>

            <div className="mt-6 rounded-[22px] bg-slate-50 p-5">
              <div className="text-base font-semibold text-slate-900">Описание услуги</div>
              <div className="mt-3 text-sm leading-8 text-slate-600">
                Услуга оформляется внутри Ozon Pet: специалист получает контекст по питомцу, владелец видит свободные окна, а после записи может вернуться к услуге через pet-профиль и историю обращений.
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-center gap-2 text-base font-semibold text-slate-900">
                <CalendarDays className="size-4 text-ozon-magenta" />
                Выберите дату и время
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {defaultDates.map((date) => (
                  <button
                    key={date}
                    type="button"
                    onClick={() => setSelectedDate(date)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      selectedDate === date ? 'bg-ozon-magenta text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {defaultTimes.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      selectedTime === time ? 'bg-ozon-blue text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="text-base font-semibold text-slate-900">Добавить в любимые для питомца</div>
              <div className="flex flex-wrap gap-2">
                {pets.map((pet) => (
                  <button
                    key={pet.id}
                    type="button"
                    onClick={() => setSelectedPetId(pet.id)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold shadow-[0_10px_24px_rgba(15,23,42,0.06)] ${
                      selectedPetId === pet.id ? 'bg-ozon-magenta text-white' : 'bg-ozon-magenta/10 text-ozon-magenta'
                    }`}
                  >
                    Для {pet.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-ozon-blue px-5 py-3 text-sm font-semibold text-white"
              >
                <Clock3 className="size-4" />
                Оформить на {selectedDate}, {selectedTime}
              </button>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsInSubscription((current) => !current)}
                  className={`inline-flex shrink-0 items-center justify-center rounded-full px-5 py-3 text-center text-sm font-semibold leading-5 whitespace-normal break-words ${
                    isInSubscription ? 'bg-ozon-magenta text-white' : 'bg-ozon-magenta/10 text-ozon-magenta'
                  }`}
                >
                  Pet-подписка
                </button>
                <button
                  type="button"
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-100 px-5 py-3 text-center text-sm font-semibold leading-5 text-slate-700 whitespace-normal break-words"
                >
                  Написать специалисту
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <div className="rounded-[28px] bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
          <div className="text-2xl font-semibold text-slate-950">Характеристика специалиста</div>
          <div className="mt-4 flex items-center gap-4 rounded-[22px] bg-slate-50 p-4">
            <img src={leadSpecialist.photo} alt={leadSpecialist.name} className="size-16 rounded-full object-cover" />
            <div className="min-w-0">
              <div className="text-lg font-semibold text-slate-950">{leadSpecialist.name}</div>
              <div className="mt-1 text-sm text-slate-500">{leadSpecialist.role}</div>
            </div>
          </div>
          <div className="mt-4 space-y-3">
            <div className="rounded-[18px] bg-slate-50 px-4 py-3 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Где работает:</span> {leadSpecialist.worksAt}
            </div>
            <div className="rounded-[18px] bg-slate-50 px-4 py-3 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Стаж работы:</span> {leadSpecialist.experience}
            </div>
            <div className="rounded-[18px] bg-slate-50 px-4 py-3 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Локация:</span> {leadSpecialist.location}
            </div>
          </div>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
          <div className="text-2xl font-semibold text-slate-950">Отзывы</div>
          <div className="mt-4 space-y-3">
            {leadSpecialist.reviews.map((review, index) => (
              <div key={review} className="rounded-[18px] bg-slate-50 px-4 py-3 text-sm text-slate-600">
                <div className="flex items-center gap-2 text-amber-600">
                  <Star className="size-4 fill-current" />
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    {index === 0 ? '5.0' : '4.9'}
                  </span>
                </div>
                <div className="mt-2 leading-7">{review}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-ozon-magenta px-5 py-3 text-sm font-semibold text-white"
            >
              Оставить отзыв
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}
