export type Pet = {
  id: string
  name: string
  breed: string
  breedSlug: string
  code: string
  age: string
  photo: string
  weight: string
  diet: string
  dislikedIngredients: string
  intolerance: string
  vaccinations: string
  chronicConditions: string
  visitHistory: string[]
  purchaseHistory: string[]
  recommendationHistory: string[]
  specialistRequests: string[]
  preferenceCategories: {
    dislikes: string[]
    likes: string[]
  }
  dietProducts: {
    id: string
    title: string
    subtitle: string
    price: string
  }[]
}

export type BreedGuide = {
  slug: string
  breed: string
  temperament: string
  careComplexity: string
  monthlyCost: string
  commonIssues: string[]
  recommendedGoods: string[]
  recommendedServices: string[]
  starterSet: string[]
}

export type PublicBreedProfile = {
  id: string
  breedSlug: string
  ownerName: string
  petName: string
  age: string
  city: string
  careNotes: string
  favoriteGoods: string[]
  allergies: string[]
  dietProducts: {
    id: string
    title: string
    subtitle: string
    price: string
  }[]
}

export type Category = {
  id: string
  title: string
  emoji: string
}

export type Product = {
  id: string
  title: string
  subtitle: string
  price: string
  badge?: string
  reminder?: string
  aiReason?: string
  preferenceBadge?: {
    icon: string
    label: string
    tone: 'danger' | 'positive'
  }
}

export type ServiceCard = {
  id: string
  category: 'groomers' | 'sitters' | 'veterinarians' | 'walking' | 'boarding' | 'training'
  title: string
  subtitle: string
  price: string
  eta: string
}

export type ServicePackage = {
  id: string
  title: string
  subtitle: string
  price: string
  benefit: string
}

export type CharitySupportItem = {
  id: string
  type: 'goods' | 'service'
  title: string
  subtitle: string
  price: string
  urgency: string
}

export type CharityProfile = {
  id: string
  slug: string
  mode: 'fund' | 'independent' | 'corporate'
  tag: string
  title: string
  personName: string
  location: string
  address: string
  photo: string
  coverColor: string
  shortDescription: string
  fullDescription: string
  requestedSupport: CharitySupportItem[]
  coordinates: {
    x: string
    y: string
  }
}

export const pets: Pet[] = [
  {
    id: 'roxy',
    name: 'Рокси',
    breed: 'Золотистый ретривер',
    breedSlug: 'golden-retriever',
    code: 'PC-2844-19',
    age: '4 года',
    photo:
      'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?auto=format&fit=crop&w=320&q=80',
    weight: '28 кг',
    diet: 'Sensitive salmon, 2 раза в день',
    dislikedIngredients: 'Курица, слишком сухие лакомства',
    intolerance: 'Непереносимость резкой смены корма',
    vaccinations: 'Комплексная вакцина, бешенство, ревакцинация в ноябре',
    chronicConditions: 'Чувствительные суставы, нужен контроль нагрузки',
    visitHistory: ['Ветосмотр · февраль 2026', 'Груминг · март 2026', 'Ортопед · декабрь 2025'],
    purchaseHistory: ['Farmina ND Pumpkin 12 кг', 'Таблетки от клещей', 'Шампунь для чувствительной кожи'],
    recommendationHistory: ['Переход на salmon line', 'Добавить омега-3 курсом 2 месяца', 'Повторный чекап перед летом'],
    specialistRequests: ['Онлайн-консультация ветеринара', 'Груминг с ручной сушкой', 'Контроль веса у врача'],
    preferenceCategories: {
      dislikes: ['Курица', 'Арахис', 'Много белка'],
      likes: ['Рыба', 'Мало калорий', 'Без мяса'],
    },
    dietProducts: [
      {
        id: 'roxy-diet-1',
        title: 'Sensitive Salmon Adult',
        subtitle: 'Основной рацион, 12 кг',
        price: '5 490 ₽',
      },
      {
        id: 'roxy-diet-2',
        title: 'Лососевый влажный корм',
        subtitle: 'Вечерний рацион, 12 паучей',
        price: '1 260 ₽',
      },
    ],
  },
  {
    id: 'mars',
    name: 'Марс',
    breed: 'Вельш-корги',
    breedSlug: 'welsh-corgi',
    code: 'PC-1048-21',
    age: '3 года',
    photo:
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=320&q=80',
    weight: '12 кг',
    diet: 'Hypoallergenic lamb, порционно утром и вечером',
    dislikedIngredients: 'Куриный белок, сладкие снеки',
    intolerance: 'Лёгкая реакция на зерновые смеси',
    vaccinations: 'Годовой комплекс, ревакцинация в августе',
    chronicConditions: 'Склонность к набору веса',
    visitHistory: ['Вакцинация · январь 2026', 'Выгул с ситтером · март 2026', 'Плановый осмотр · октябрь 2025'],
    purchaseHistory: ['Подписка на корм 8 кг', 'Ортопедическая лежанка', 'Пастилки для суставов'],
    recommendationHistory: ['Снизить калорийность лакомств', 'Добавить ежедневную активность', 'Подобрать лёгкий груминг'],
    specialistRequests: ['Консультация по рациону', 'Выгул по клику', 'Профилактический check-up'],
    preferenceCategories: {
      dislikes: ['Курица', 'Глютен'],
      likes: ['Мало углеводов', 'Ягнёнок', 'Мало калорий'],
    },
    dietProducts: [
      {
        id: 'mars-diet-1',
        title: 'Hypoallergenic Lamb',
        subtitle: 'Основной корм, 8 кг',
        price: '4 180 ₽',
      },
      {
        id: 'mars-diet-2',
        title: 'Light treats mix',
        subtitle: 'Низкокалорийные лакомства',
        price: '790 ₽',
      },
    ],
  },
  {
    id: 'peach',
    name: 'Персик',
    breed: 'Британский кот',
    breedSlug: 'british-cat',
    code: 'PC-7741-22',
    age: '2 года',
    photo:
      'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=320&q=80',
    weight: '5.3 кг',
    diet: 'Indoor sterilised mix, влажный корм вечером',
    dislikedIngredients: 'Рыбные соусы и резкие запахи',
    intolerance: 'Чувствительное пищеварение',
    vaccinations: 'Комплекс, бешенство, чип зарегистрирован',
    chronicConditions: 'Нужен контроль шерсти и ЖКТ',
    visitHistory: ['Чипирование · май 2025', 'УЗИ ЖКТ · февраль 2026', 'Груминг экспресс · март 2026'],
    purchaseHistory: ['Ком для шерсти', 'Наполнитель premium', 'Влажный корм indoor'],
    recommendationHistory: ['Добавить пасту для вывода шерсти', 'Сохранить текущий рацион', 'Профилактика ЖКТ весной'],
    specialistRequests: ['Первичная консультация', 'Груминг экспресс', 'Повтор заказа наполнителя'],
    preferenceCategories: {
      dislikes: ['Молоко', 'Сахар', 'Морепродукты'],
      likes: ['Рыба', 'Без мяса', 'Мало углеводов'],
    },
    dietProducts: [
      {
        id: 'peach-diet-1',
        title: 'Indoor Sterilised',
        subtitle: 'Сухой рацион, 6 кг',
        price: '3 490 ₽',
      },
      {
        id: 'peach-diet-2',
        title: 'Sensitive Digestive паучи',
        subtitle: 'Влажный рацион на вечер',
        price: '980 ₽',
      },
    ],
  },
]

export const productCategories: Category[] = [
  { id: 'food', title: 'Корм', emoji: '🥣' },
  { id: 'toys', title: 'Игрушки', emoji: '🦴' },
  { id: 'other', title: 'Другое', emoji: '📦' },
]

export const sidebarCategories = [
  'Корм',
  'Игрушки',
  'Другое',
  'Сухой корм',
  'Влажный корм',
  'Лакомства',
  'Игрушки и активность',
  'Уход и гигиена',
]

export const productItems: Product[] = [
  {
    id: 'food-1',
    title: 'Farmina ND Pumpkin',
    subtitle: 'Для крупных пород, 12 кг',
    price: '5 490 ₽',
    badge: 'Подходит Рокси',
    reminder: 'Каждые 28 дней',
    aiReason: 'ИИ учёл крупную породу, чувствительную кожу и запрет на курицу.',
    preferenceBadge: { icon: '🐔', label: 'Есть курица', tone: 'danger' },
  },
  {
    id: 'food-2',
    title: 'Petstages Mini Set',
    subtitle: 'Игрушки для дома и прогулки',
    price: '1 290 ₽',
    reminder: 'Раз в 45 дней',
    aiReason: 'Рекомендуется для активных прогулок и снижения тревоги.',
    preferenceBadge: { icon: '🐟', label: 'Рыба', tone: 'positive' },
  },
  {
    id: 'food-3',
    title: 'Ozon Pet Аптечка',
    subtitle: 'Базовый набор для дома',
    price: '2 190 ₽',
    badge: 'Быстрая доставка',
    reminder: 'Напомнить через 60 дней',
    aiReason: 'Подходит как домашний базовый набор, но состав нужно проверить.',
    preferenceBadge: { icon: '🥛', label: 'Есть молоко', tone: 'danger' },
  },
  {
    id: 'food-4',
    title: 'Повтор заказа',
    subtitle: 'Тот же рацион, что и в прошлом месяце',
    price: '3 890 ₽',
    badge: '1 клик',
    reminder: 'Завтра, 09:00',
    aiReason: 'Это предыдущий успешный заказ без негативных реакций.',
    preferenceBadge: { icon: '🐟', label: 'Рыба', tone: 'positive' },
  },
  {
    id: 'food-5',
    title: 'Шампунь Sensitive Care',
    subtitle: 'Для чувствительной кожи, 500 мл',
    price: '890 ₽',
    badge: 'Подходит Рокси',
    reminder: 'Раз в 60 дней',
    aiReason: 'Подходит для чувствительной кожи и регулярного ухода после прогулок.',
    preferenceBadge: { icon: '🦃', label: 'Без курицы', tone: 'positive' },
  },
  {
    id: 'food-6',
    title: 'Ортопедическая лежанка',
    subtitle: 'Средний размер, антискользящее дно',
    price: '3 290 ₽',
    badge: 'Подходит Марсу',
    reminder: 'Без напоминания',
    aiReason: 'Рекомендуется питомцам со склонностью к нагрузке на суставы и спину.',
    preferenceBadge: { icon: '🐑', label: 'Ягнёнок', tone: 'positive' },
  },
  {
    id: 'food-7',
    title: 'Паста для вывода шерсти',
    subtitle: 'Для кошек с чувствительным ЖКТ',
    price: '540 ₽',
    badge: 'Подходит Персику',
    reminder: 'Раз в 30 дней',
    aiReason: 'Поддерживает ЖКТ и снижает дискомфорт при сезонной линьке.',
    preferenceBadge: { icon: '🥛', label: 'Без молока', tone: 'positive' },
  },
  {
    id: 'food-8',
    title: 'Наполнитель Premium',
    subtitle: 'Комкующийся, без запаха',
    price: '1 150 ₽',
    badge: 'Часто покупают',
    reminder: 'Раз в 21 день',
    aiReason: 'Стабильный расходник для регулярного автопополнения без стресса.',
    preferenceBadge: { icon: '🌾', label: 'Без глютена', tone: 'positive' },
  },
  {
    id: 'food-9',
    title: 'Monoprotein Turkey Adult',
    subtitle: 'Монобелковый рацион, 10 кг',
    price: '4 790 ₽',
    badge: 'Подходит Марсу',
    reminder: 'Каждые 30 дней',
    aiReason: 'Подходит для чувствительного пищеварения и контроля веса без лишних ингредиентов.',
    preferenceBadge: { icon: '🦃', label: 'Без курицы', tone: 'positive' },
  },
  {
    id: 'food-10',
    title: 'Dental Sticks Mini',
    subtitle: 'Уход за зубами, 28 стиков',
    price: '690 ₽',
    badge: 'Регулярный уход',
    reminder: 'Раз в 25 дней',
    aiReason: 'Полезно как рутинный уход между визитами к врачу и грумеру.',
    preferenceBadge: { icon: '🥜', label: 'Есть арахис', tone: 'danger' },
  },
  {
    id: 'food-11',
    title: 'Sensitive Digestive Cat',
    subtitle: 'Для кошек с чувствительным ЖКТ, 4 кг',
    price: '2 890 ₽',
    badge: 'Подходит Персику',
    reminder: 'Каждые 24 дня',
    aiReason: 'Снижает нагрузку на ЖКТ и поддерживает стабильный рацион без резких смен.',
    preferenceBadge: { icon: '🐟', label: 'Рыба', tone: 'positive' },
  },
  {
    id: 'food-12',
    title: 'Омега-3 курс',
    subtitle: 'Поддержка кожи, шерсти и суставов, 60 капсул',
    price: '1 240 ₽',
    badge: 'Совет врача',
    reminder: 'Раз в 60 дней',
    aiReason: 'Добавка рекомендована после заметок специалиста о коже и суставах.',
    preferenceBadge: { icon: '🐟', label: 'Рыба', tone: 'positive' },
  },
  {
    id: 'food-13',
    title: 'Шлейка Comfort Walk',
    subtitle: 'Анатомическая посадка для ежедневных прогулок',
    price: '1 790 ₽',
    badge: 'Для активных прогулок',
    reminder: 'Без напоминания',
    aiReason: 'Подходит для частых прогулок и снижает нагрузку по сравнению с жёстким ошейником.',
    preferenceBadge: { icon: '🍃', label: 'Мало калорий', tone: 'positive' },
  },
  {
    id: 'food-14',
    title: 'Успокаивающие лакомства Calm',
    subtitle: 'Мягкая формула для поездок и визитов',
    price: '930 ₽',
    badge: 'Перед визитом',
    reminder: 'Раз в 40 дней',
    aiReason: 'Помогает снизить тревожность перед грумингом, передержкой или поездкой.',
    preferenceBadge: { icon: '🌾', label: 'Есть глютен', tone: 'danger' },
  },
  {
    id: 'food-15',
    title: 'Фонтанчик для воды Smart Flow',
    subtitle: 'Тихая подача воды, 2 л',
    price: '2 490 ₽',
    badge: 'Для кошек',
    reminder: 'Фильтр раз в 45 дней',
    aiReason: 'Подходит домашним кошкам, которым важно чаще пить воду при сухом рационе.',
    preferenceBadge: { icon: '🥛', label: 'Без молока', tone: 'positive' },
  },
  {
    id: 'food-16',
    title: 'Пелёнки Ultra Dry',
    subtitle: 'Для дома, переноски и карантинного блока',
    price: '1 020 ₽',
    badge: 'Расходник',
    reminder: 'Раз в 18 дней',
    aiReason: 'Регулярный расходник для дома, поездок и ухода после процедур.',
    preferenceBadge: { icon: '🦃', label: 'Индейка', tone: 'positive' },
  },
]

export const featuredProducts: Product[] = [
  {
    id: 'featured-1',
    title: 'Подписка на корм',
    subtitle: 'Автопополнение каждые 28 дней',
    price: 'от 3 490 ₽',
    badge: 'Pet+',
    reminder: 'Уведомление за 4 дня',
    aiReason: 'Стабильный рацион без риска забыть о корме.',
    preferenceBadge: { icon: '✓', label: 'Без курицы', tone: 'positive' },
  },
  {
    id: 'featured-2',
    title: 'Антистресс набор',
    subtitle: 'Подборка по возрасту и породе',
    price: '2 490 ₽',
    reminder: 'Раз в 30 дней',
    aiReason: 'ИИ-подбор по активности, тревожности и возрасту питомца.',
    preferenceBadge: { icon: '⚠', label: 'Есть орехи', tone: 'danger' },
  },
  {
    id: 'featured-3',
    title: 'Товары для здоровья',
    subtitle: 'Подтверждённые товары и советы',
    price: 'от 390 ₽',
    reminder: 'По медицинскому плану',
    aiReason: 'Рекомендация основана на заметках специалиста и истории обращений.',
    preferenceBadge: { icon: '🐟', label: 'Рыба', tone: 'positive' },
  },
  {
    id: 'featured-4',
    title: 'Набор для чувствительного ЖКТ',
    subtitle: 'Корм, паста и влажный рацион в одном комплекте',
    price: '3 790 ₽',
    badge: 'Подходит Персику',
    reminder: 'Каждые 30 дней',
    aiReason: 'Комплект собран на базе истории питания и рекомендаций по ЖКТ.',
    preferenceBadge: { icon: '✓', label: 'Без молока', tone: 'positive' },
  },
  {
    id: 'featured-5',
    title: 'Стартовый набор щенка',
    subtitle: 'Базовые товары для первых месяцев дома',
    price: '4 990 ₽',
    reminder: 'Раз в 45 дней',
    aiReason: 'Подходит как предсказуемый стартовый сценарий до формирования постоянной корзины.',
    preferenceBadge: { icon: '🐇', label: 'Кролик', tone: 'positive' },
  },
]

export const services: ServiceCard[] = [
  {
    id: 'srv-1',
    category: 'veterinarians',
    title: 'Онлайн-консультация ветеринара',
    subtitle: 'Первичная консультация, диагностика и разбор симптомов по данным питомца',
    price: '1 190 ₽',
    eta: 'Доступно сегодня',
  },
  {
    id: 'srv-2',
    category: 'groomers',
    title: 'Груминг премиум',
    subtitle: 'Выездной или салонный формат с подбором ухода под тип шерсти',
    price: '2 900 ₽',
    eta: 'Свободные слоты завтра',
  },
  {
    id: 'srv-3',
    category: 'walking',
    title: 'Выгул по клику',
    subtitle: 'Быстрый заказ выгула с фото-отчётом и треком маршрута',
    price: '590 ₽',
    eta: 'Исполнитель рядом',
  },
  {
    id: 'srv-4',
    category: 'sitters',
    title: 'Pet-ситтер на вечер',
    subtitle: 'Проверенный ситтер с доступом к режиму, рациону и заметкам из Pet ID',
    price: '1 490 ₽',
    eta: 'Можно оформить сегодня',
  },
  {
    id: 'srv-5',
    category: 'boarding',
    title: 'Передержка у партнёра',
    subtitle: 'Домашний формат или зоогостиница с регулярными фото-отчётами',
    price: '2 300 ₽',
    eta: 'Ближайшее окно завтра',
  },
  {
    id: 'srv-6',
    category: 'training',
    title: 'Кинолог online / offline',
    subtitle: 'Разбор поведения, адаптация и план занятий под возраст и породу',
    price: '2 100 ₽',
    eta: 'Слоты на неделе',
  },
  {
    id: 'srv-7',
    category: 'veterinarians',
    title: 'Первичная диагностика',
    subtitle: 'Короткий платный вход в профессиональную помощь по симптомам и состоянию',
    price: '890 ₽',
    eta: 'Можно оформить сегодня',
  },
  {
    id: 'srv-8',
    category: 'groomers',
    title: 'Экспресс-груминг',
    subtitle: 'Быстрый уход для регулярного поддержания шерсти и лап',
    price: '1 590 ₽',
    eta: 'Есть окно завтра',
  },
  {
    id: 'srv-9',
    category: 'walking',
    title: 'Долгий активный выгул',
    subtitle: 'Прогулка 60 минут с треком, фото и заметками после завершения',
    price: '990 ₽',
    eta: 'Доступно вечером',
  },
  {
    id: 'srv-10',
    category: 'sitters',
    title: 'Ситтер на ночь',
    subtitle: 'Ночной уход дома у владельца с доступом к Pet ID и инструкциям',
    price: '2 900 ₽',
    eta: 'Оформление за 1 день',
  },
  {
    id: 'srv-11',
    category: 'boarding',
    title: 'Передержка premium',
    subtitle: 'Спокойная среда, видео-отчёты и ежедневные обновления для владельца',
    price: '3 800 ₽',
    eta: 'Места на выходные',
  },
  {
    id: 'srv-12',
    category: 'training',
    title: 'Адаптация щенка',
    subtitle: 'Серия занятий по базовым командам, рутине и тревожности',
    price: '3 400 ₽',
    eta: 'Свободные слоты на неделе',
  },
  {
    id: 'srv-13',
    category: 'veterinarians',
    title: 'Чекап перед поездкой',
    subtitle: 'Осмотр, рекомендации по документам и подготовке питомца к дороге',
    price: '1 690 ₽',
    eta: 'Слоты в ближайшие 2 дня',
  },
  {
    id: 'srv-14',
    category: 'veterinarians',
    title: 'Повторный приём по анализам',
    subtitle: 'Короткий follow-up после обследования или лечения',
    price: '990 ₽',
    eta: 'Можно оформить сегодня',
  },
  {
    id: 'srv-15',
    category: 'groomers',
    title: 'Гигиенический груминг',
    subtitle: 'Лапы, когти, уши и базовый уход без полного комплекса',
    price: '1 240 ₽',
    eta: 'Есть окно сегодня',
  },
  {
    id: 'srv-16',
    category: 'groomers',
    title: 'Груминг для кошек',
    subtitle: 'Спокойный формат с учётом поведения, шерсти и чувствительности питомца',
    price: '2 450 ₽',
    eta: 'Свободные слоты завтра',
  },
  {
    id: 'srv-17',
    category: 'walking',
    title: 'Утренний выгул',
    subtitle: 'Короткий регулярный выгул перед рабочим днём владельца',
    price: '490 ₽',
    eta: 'Доступно утром',
  },
  {
    id: 'srv-18',
    category: 'walking',
    title: 'Выгул с активной нагрузкой',
    subtitle: 'Для энергичных собак с акцентом на движение и разгрузку тревоги',
    price: '1 190 ₽',
    eta: 'Слоты на сегодня',
  },
  {
    id: 'srv-19',
    category: 'sitters',
    title: 'Ситтер на выходные',
    subtitle: 'Уход на несколько часов или весь день с фото-отчётами',
    price: '3 490 ₽',
    eta: 'Окна на выходных',
  },
  {
    id: 'srv-20',
    category: 'sitters',
    title: 'Срочный ситтер',
    subtitle: 'Быстрый поиск проверенного исполнителя в знакомом районе',
    price: '1 890 ₽',
    eta: 'Исполнитель рядом',
  },
  {
    id: 'srv-21',
    category: 'boarding',
    title: 'Домашняя передержка',
    subtitle: 'Спокойная домашняя среда с учётом режима, питания и привычек из Pet ID',
    price: '2 700 ₽',
    eta: 'Места на неделе',
  },
  {
    id: 'srv-22',
    category: 'boarding',
    title: 'Передержка после операции',
    subtitle: 'Наблюдение, контроль режима и аккуратный уход после лечения',
    price: '4 200 ₽',
    eta: 'По согласованию со специалистом',
  },
  {
    id: 'srv-23',
    category: 'training',
    title: 'Коррекция тревожности',
    subtitle: 'План занятий и рекомендаций для снижения стресса и перевозбуждения',
    price: '2 850 ₽',
    eta: 'Слоты на этой неделе',
  },
  {
    id: 'srv-24',
    category: 'training',
    title: 'Базовое послушание',
    subtitle: 'Стартовый курс команд и бытовых сценариев для жизни в городе',
    price: '2 390 ₽',
    eta: 'Ближайшее окно завтра',
  },
]

export const servicePackages: ServicePackage[] = [
  {
    id: 'walk-pack',
    title: '4 прогулки со скидкой',
    subtitle: 'Пакет для регулярного выгула в удобные дни недели',
    price: '2 190 ₽',
    benefit: 'Экономия 12% от разовых заказов',
  },
  {
    id: 'groom-pack',
    title: 'Груминг + поддерживающий уход',
    subtitle: 'Основной визит и 2 коротких поддерживающих ухода',
    price: '4 900 ₽',
    benefit: 'Подходит для длинной и чувствительной шерсти',
  },
  {
    id: 'vet-pack',
    title: 'Пакет ветеринарных консультаций',
    subtitle: 'Первичный онлайн-разбор и 2 follow-up консультации',
    price: '2 700 ₽',
    benefit: 'Удобно для наблюдения после лечения',
  },
  {
    id: 'sitter-pack',
    title: '3 вечера с pet-ситтером',
    subtitle: 'Проверенный специалист с доступом к Pet ID и режиму питомца',
    price: '3 800 ₽',
    benefit: 'Снижает стоимость каждого выезда',
  },
]

export const ecosystemLinks = [
  { to: '/', label: 'Главная' },
  { to: '/catalog', label: 'Товары' },
  { to: '/services', label: 'Услуги' },
]

export const breedGuides: BreedGuide[] = [
  {
    slug: 'golden-retriever',
    breed: 'Золотистый ретривер',
    temperament: 'Дружелюбный, семейный, активный',
    careComplexity: 'Средняя, нужен регулярный уход за шерстью и контроль суставов',
    monthlyCost: '18 000 - 28 000 ₽',
    commonIssues: ['Суставы и связки', 'Контроль веса', 'Чувствительность кожи'],
    recommendedGoods: ['Корм для крупных пород', 'Омега-3', 'Шампунь для чувствительной кожи'],
    recommendedServices: ['Груминг', 'Плановый ортопедический осмотр', 'Активный выгул'],
    starterSet: ['Шлейка', 'Большая лежанка', 'Щетка для подшерстка'],
  },
  {
    slug: 'welsh-corgi',
    breed: 'Вельш-корги',
    temperament: 'Активный, контактный, умный',
    careComplexity: 'Средняя, важен контроль активности и питания',
    monthlyCost: '14 000 - 22 000 ₽',
    commonIssues: ['Склонность к набору веса', 'Нагрузка на спину'],
    recommendedGoods: ['Корм light', 'Ортопедическая лежанка', 'Игрушки для активности'],
    recommendedServices: ['Кинолог', 'Плановый check-up', 'Выгул'],
    starterSet: ['Низкая лежанка', 'Игрушка-головоломка', 'Порционный контейнер'],
  },
  {
    slug: 'british-cat',
    breed: 'Британский кот',
    temperament: 'Спокойный, независимый, домашний',
    careComplexity: 'Низкая-средняя, важен контроль ЖКТ и шерсти',
    monthlyCost: '9 000 - 16 000 ₽',
    commonIssues: ['Шерсть в ЖКТ', 'Чувствительное пищеварение'],
    recommendedGoods: ['Паста для вывода шерсти', 'Indoor-корм', 'Премиальный наполнитель'],
    recommendedServices: ['Груминг экспресс', 'Онлайн-консультация', 'Плановое УЗИ'],
    starterSet: ['Когтеточка', 'Лоток', 'Фонтанчик для воды'],
  },
]

export const publicBreedProfiles: PublicBreedProfile[] = [
  {
    id: 'golden-1',
    breedSlug: 'golden-retriever',
    ownerName: 'Анна',
    petName: 'Лео',
    age: '5 лет',
    city: 'Москва',
    careNotes: 'Переход на salmon-корм сильно уменьшил кожную реакцию и частоту расчесов.',
    favoriteGoods: ['Salmon Sensitive', 'Омега-3', 'Щетка для подшерстка'],
    allergies: ['Курица'],
    dietProducts: [
      {
        id: 'golden-1-diet-1',
        title: 'Salmon Sensitive',
        subtitle: 'Основной рацион, 12 кг',
        price: '5 390 ₽',
      },
      {
        id: 'golden-1-diet-2',
        title: 'Monoprotein Salmon паучи',
        subtitle: 'Дополнение к рациону',
        price: '1 140 ₽',
      },
    ],
  },
  {
    id: 'golden-2',
    breedSlug: 'golden-retriever',
    ownerName: 'Илья',
    petName: 'Бонни',
    age: '3 года',
    city: 'Казань',
    careNotes: 'Лучше переносит ручную сушку у грумера и мягкий шампунь без запаха.',
    favoriteGoods: ['Шампунь sensitive', 'Лакомства без зерна'],
    allergies: ['Арахис'],
    dietProducts: [
      {
        id: 'golden-2-diet-1',
        title: 'Large Breed Sensitive',
        subtitle: 'Сухой корм без арахиса',
        price: '4 980 ₽',
      },
    ],
  },
  {
    id: 'corgi-1',
    breedSlug: 'welsh-corgi',
    ownerName: 'Марина',
    petName: 'Тедди',
    age: '2 года',
    city: 'Санкт-Петербург',
    careNotes: 'Хорошо работает дробное питание и ежедневная активность по расписанию.',
    favoriteGoods: ['Light корм', 'Игрушка-головоломка'],
    allergies: ['Глютен'],
    dietProducts: [
      {
        id: 'corgi-1-diet-1',
        title: 'Light Lamb Mini',
        subtitle: 'Дробное питание, 7 кг',
        price: '3 760 ₽',
      },
    ],
  },
]

export const charityProfiles: CharityProfile[] = [
  {
    id: 'charity-1',
    slug: 'lapa-nadezhdy',
    mode: 'fund',
    tag: 'Фонд-партнёр',
    title: 'Фонд «Лапа надежды»',
    personName: 'Команда фонда',
    location: 'Москва',
    address: 'Москва, приют в районе Куркино',
    photo: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=900&q=80',
    coverColor: 'from-[#00BE6C] to-[#47D98C]',
    shortDescription: 'Фонд помогает бездомным собакам и кошкам, закрывает базовые нужды и лечение.',
    fullDescription:
      'Фонд работает с городскими и частными приютами, организует закупки корма, расходников и оплачивает первичное лечение для животных после спасения. Ozon выступает посредником: покупатель выбирает нужную позицию, а доставка идёт прямо в приют, который указан фондом.',
    requestedSupport: [
      {
        id: 'fund-goods-1',
        type: 'goods',
        title: 'Сухой корм для взрослых собак',
        subtitle: 'Нужен для 42 животных на ближайшие 2 недели',
        price: '4 890 ₽',
        urgency: 'Высокий приоритет',
      },
      {
        id: 'fund-goods-2',
        type: 'goods',
        title: 'Пелёнки и наполнитель',
        subtitle: 'Расходники для карантинного блока',
        price: '2 140 ₽',
        urgency: 'Нужно до пятницы',
      },
      {
        id: 'fund-service-1',
        type: 'service',
        title: 'Выезд ветеринара в приют',
        subtitle: 'Осмотр новых подопечных и базовая диагностика',
        price: '6 500 ₽',
        urgency: 'На этой неделе',
      },
    ],
    coordinates: { x: '64%', y: '38%' },
  },
  {
    id: 'charity-2',
    slug: 'ozon-care-fund',
    mode: 'fund',
    tag: 'Фонд-партнёр',
    title: 'Фонд Ozon Care',
    personName: 'Команда фонда',
    location: 'Казань',
    address: 'Казань, партнёрский приют и логистический хаб',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    coverColor: 'from-[#005BFF] to-[#00A2FF]',
    shortDescription: 'Фонд помогает крупным поставкам, логистике и базовым услугам для животных в приютах.',
    fullDescription:
      'Фонд координирует крупные поставки в партнёрские приюты, договаривается о сервисных выездах и собирает регулярную помощь для животных. Ozon выступает операционным посредником: все товары и услуги оформляются внутри платформы и доставляются сразу на адрес фонда или в сервисную точку.',
    requestedSupport: [
      {
        id: 'crew-goods-1',
        type: 'goods',
        title: 'Стартовый набор для щенков',
        subtitle: 'Корм, миски и базовый уход для новых поступлений',
        price: '5 600 ₽',
        urgency: 'Сбор недели',
      },
      {
        id: 'crew-goods-2',
        type: 'goods',
        title: 'Тёплые лежанки',
        subtitle: 'Для блока восстановительного содержания',
        price: '3 200 ₽',
        urgency: 'До конца месяца',
      },
      {
        id: 'crew-service-1',
        type: 'service',
        title: 'Груминг и санитарная обработка',
        subtitle: 'Подготовка животных к переезду в новые семьи',
        price: '4 400 ₽',
        urgency: 'Следующая доступная дата',
      },
    ],
    coordinates: { x: '43%', y: '46%' },
  },
]
