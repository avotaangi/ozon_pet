import { ArrowLeft, Heart, MessageSquareText, Star } from 'lucide-react'
import { useState } from 'react'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { pets, productItems, featuredProducts } from '../data/marketplace'

const productPhotos: Record<string, string> = {
  'food-1': 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=1200&q=80',
  'food-2': 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=80',
  'food-3': 'https://images.unsplash.com/photo-1583512603806-077998240c7a?auto=format&fit=crop&w=1200&q=80',
  'food-4': 'https://images.unsplash.com/photo-1560743641-3914f2c45636?auto=format&fit=crop&w=1200&q=80',
  'food-5': 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=80',
  'food-6': 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80',
  'food-7': 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=1200&q=80',
  'food-8': 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=1200&q=80',
  'food-9': 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80',
  'food-10': 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80',
  'food-11': 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=1200&q=80',
  'food-12': 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=1200&q=80',
  'food-13': 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80',
  'food-14': 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80',
  'food-15': 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80',
  'food-16': 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80',
  'featured-1': 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=1200&q=80',
  'featured-2': 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=80',
  'featured-3': 'https://images.unsplash.com/photo-1560743641-3914f2c45636?auto=format&fit=crop&w=1200&q=80',
  'featured-4': 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=1200&q=80',
  'featured-5': 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=80',
}

const defaultCharacteristics = [
  'Подобрано под сценарии владельцев питомцев внутри Ozon Pet',
  'Можно добавить в любимые для конкретного питомца',
  'Можно включить в pet-подписку для регулярного напоминания',
]

function buildReviews(title: string) {
  return [
    {
      author: 'Анна, владелец Лео',
      rating: 5,
      text: `${title} удобно покупать повторно: товар уже встроен в рутину питомца и не приходится искать заново.`,
    },
    {
      author: 'Илья, владелец Марса',
      rating: 5,
      text: 'Хорошо, что в карточке сразу видно, почему рекомендация подходит по Pet ID и как часто это обычно покупают.',
    },
    {
      author: 'Дарья, владелец Персика',
      rating: 4,
      text: 'Удобно добавлять в pet-подписку и потом получать напоминание до того, как товар закончится дома.',
    },
  ]
}

function buildRecommendations(itemId: string) {
  const byItem: Record<
    string,
    Array<{
      id: string
      type: 'Товар' | 'Услуга'
      title: string
      subtitle: string
      price: string
    }>
  > = {
    'food-1': [
      { id: 'rec-1', type: 'Товар', title: 'Омега-3 курс', subtitle: 'Поддержка кожи и шерсти', price: '1 240 ₽' },
      { id: 'rec-2', type: 'Услуга', title: 'Онлайн-консультация ветеринара', subtitle: 'Разбор текущего рациона', price: '1 190 ₽' },
    ],
    'food-8': [
      { id: 'rec-3', type: 'Товар', title: 'Пелёнки Ultra Dry', subtitle: 'Регулярный расходник для дома', price: '1 020 ₽' },
      { id: 'rec-4', type: 'Услуга', title: 'Pet-ситтер на вечер', subtitle: 'С уходом по инструкциям из Pet ID', price: '1 490 ₽' },
    ],
  }

  return (
    byItem[itemId] ?? [
      { id: 'rec-fallback-1', type: 'Товар', title: 'Шампунь Sensitive Care', subtitle: 'Для регулярного ухода', price: '890 ₽' },
      { id: 'rec-fallback-2', type: 'Услуга', title: 'Первичная диагностика', subtitle: 'Короткий вход в помощь специалиста', price: '890 ₽' },
    ]
  )
}

function RecommendationsBlock({ itemId }: { itemId: string }) {
  const recommendations = buildRecommendations(itemId)

  return (
    <div>
      <div className="text-2xl font-semibold text-slate-950">Рекомендации к данному товару</div>
      <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
        {recommendations.map((recommendation) => (
          <article
            key={recommendation.id}
            className="w-[280px] shrink-0 rounded-[22px] bg-white p-4 shadow-[0_12px_38px_rgba(15,23,42,0.06)]"
          >
            <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500">
              {recommendation.type}
            </div>
            <div className="mt-3 text-lg font-semibold text-slate-950">{recommendation.title}</div>
            <div className="mt-2 text-sm leading-7 text-slate-600">{recommendation.subtitle}</div>
            <div className="mt-4 text-base font-semibold text-slate-950">{recommendation.price}</div>
          </article>
        ))}
      </div>
    </div>
  )
}

function getSizeOptions(itemId: string, fallbackPrice: string) {
  const sizeMap: Record<string, { label: string; price: string }[]> = {
    'food-1': [
      { label: '2 кг', price: '1 590 ₽' },
      { label: '7 кг', price: '3 890 ₽' },
      { label: '12 кг', price: '5 490 ₽' },
    ],
    'food-5': [
      { label: '250 мл', price: '590 ₽' },
      { label: '500 мл', price: '890 ₽' },
      { label: '1 л', price: '1 390 ₽' },
    ],
    'food-8': [
      { label: '5 л', price: '690 ₽' },
      { label: '10 л', price: '1 150 ₽' },
      { label: '20 л', price: '1 990 ₽' },
    ],
    'food-9': [
      { label: '2 кг', price: '1 490 ₽' },
      { label: '5 кг', price: '2 990 ₽' },
      { label: '10 кг', price: '4 790 ₽' },
    ],
    'food-11': [
      { label: '1.5 кг', price: '1 240 ₽' },
      { label: '4 кг', price: '2 890 ₽' },
      { label: '8 кг', price: '4 990 ₽' },
    ],
  }

  return sizeMap[itemId] ?? [{ label: 'Стандарт', price: fallbackPrice }]
}

export function ProductDetailPage() {
  const { itemId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const item = [...productItems, ...featuredProducts].find((entry) => entry.id === itemId)
  const preferredPetFromBadge = pets.find((pet) => item?.badge?.includes(pet.name))
  const [selectedPetId, setSelectedPetId] = useState(preferredPetFromBadge?.id ?? pets[0].id)
  const [isInSubscription, setIsInSubscription] = useState(Boolean(item?.reminder && item.reminder !== 'Без напоминания'))
  const sizeOptions = getSizeOptions(item?.id ?? 'default', item?.price ?? '0 ₽')
  const [selectedSize, setSelectedSize] = useState(sizeOptions[sizeOptions.length - 1]?.label ?? sizeOptions[0].label)

  if (!item) {
    return <Navigate to="/catalog" replace />
  }

  const photo = productPhotos[item.id] ?? productPhotos['food-1']
  const reviews = buildReviews(item.title)
  const activeSize = sizeOptions.find((option) => option.label === selectedSize) ?? sizeOptions[0]
  const from = (location.state as { from?: string } | null)?.from

  return (
    <div className="space-y-6">
      <section>
        <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <div className="relative overflow-hidden rounded-[28px] bg-slate-100">
            <button
              type="button"
              onClick={() => {
                if (from) {
                  navigate(-1)
                  return
                }
                navigate('/catalog')
              }}
              className="absolute left-4 top-4 z-10 inline-flex items-center justify-center rounded-full bg-white/95 p-3 text-slate-700 shadow-[0_12px_24px_rgba(15,23,42,0.12)] backdrop-blur"
              aria-label="Назад к товарам"
            >
              <ArrowLeft className="size-5" />
            </button>
            <img src={photo} alt={item.title} className="h-full min-h-[360px] w-full object-cover" />
          </div>

          <div className="flex flex-col rounded-[28px] bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-ozon-blue">Карточка товара</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">{item.title}</h1>

            <div className="mt-5 space-y-3">
              <div className="text-base font-semibold text-slate-900">Выберите размер</div>
              <div className="flex flex-wrap gap-2">
                {sizeOptions.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => setSelectedSize(option.label)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold shadow-[0_10px_24px_rgba(15,23,42,0.06)] ${
                      selectedSize === option.label ? 'bg-slate-900 text-white' : 'bg-white text-slate-700'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[22px] bg-slate-50 px-5 py-4">
              <div className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Цена</div>
              <div className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{activeSize.price}</div>
              <div className="mt-2 text-sm font-medium text-slate-600">{item.subtitle}</div>
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

            <div className="mt-6 rounded-[22px] bg-slate-50 p-5">
              <div className="text-base font-semibold text-slate-900">Описание</div>
              <div className="mt-3 text-sm leading-8 text-slate-600">
                {item.aiReason ?? 'Товар входит в персональную pet-витрину и подходит для регулярного сценария ухода, питания или поддержания здоровья питомца.'}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex items-center rounded-full bg-ozon-blue px-5 py-3 text-sm font-semibold text-white"
              >
                Добавить в корзину
              </button>
              <button
                type="button"
                onClick={() => setIsInSubscription((current) => !current)}
                className={`inline-flex max-w-[132px] min-[390px]:max-w-none items-center justify-center rounded-full px-5 py-3 text-center text-sm font-semibold leading-tight whitespace-normal min-[390px]:whitespace-nowrap ${
                  isInSubscription ? 'bg-ozon-magenta text-white' : 'bg-ozon-magenta/10 text-ozon-magenta'
                }`}
              >
                Pet-подписка
              </button>
            </div>

          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
        <div className="space-y-6">
          <div className="rounded-[28px] bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-2 text-2xl font-semibold text-slate-950">
              <Heart className="size-5 text-ozon-magenta" />
              Что есть в карточке
            </div>
            <div className="mt-4 space-y-3">
              {defaultCharacteristics.map((point) => (
                <div key={point} className="rounded-[18px] bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-600">
                  {point}
                </div>
              ))}
              <div className="flex justify-center pt-1">
                <button
                  type="button"
                  className="inline-flex items-center rounded-full bg-ozon-blue px-5 py-3 text-sm font-semibold text-white"
                >
                  Написать продавцу
                </button>
              </div>
            </div>
          </div>

          <div className="hidden xl:block">
            <RecommendationsBlock itemId={item.id} />
          </div>
        </div>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
          <div className="flex items-center gap-2 text-2xl font-semibold text-slate-950">
            <MessageSquareText className="size-5 text-ozon-blue" />
            Отзывы владельцев питомцев на Ozon
          </div>
          <div className="mt-5 space-y-4">
            {reviews.map((review) => (
              <article key={review.author} className="rounded-[22px] bg-slate-50 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="text-base font-semibold text-slate-950">{review.author}</div>
                  <div className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-amber-600">
                    <Star className="size-4 fill-current" />
                    {review.rating}.0
                  </div>
                </div>
                <div className="mt-3 text-sm leading-7 text-slate-600">{review.text}</div>
              </article>
            ))}
          </div>
          <div className="mt-5 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center rounded-full bg-ozon-magenta px-5 py-3 text-sm font-semibold text-white"
            >
              Добавить отзыв
            </button>
          </div>
        </div>
      </section>

      <div className="xl:hidden">
        <RecommendationsBlock itemId={item.id} />
      </div>
    </div>
  )
}
