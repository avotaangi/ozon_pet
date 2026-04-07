import type { LucideIcon } from 'lucide-react'
import {
  BadgeCheck,
  Banknote,
  Bone,
  CalendarRange,
  HeartHandshake,
  HeartPulse,
  IdCard,
  Landmark,
  LayoutGrid,
  PawPrint,
  Repeat,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Store,
  Users,
} from 'lucide-react'

export type NavItem = {
  id: string
  label: string
}

export type BadgeItem = {
  label: string
  tone: 'blue' | 'magenta' | 'green' | 'orange'
}

export type ProblemItem = {
  title: string
  description: string
}

export type EcosystemNode = {
  title: string
  subtitle: string
  icon: LucideIcon
  tone: 'blue' | 'magenta' | 'green' | 'dark' | 'orange'
}

export type ValueColumn = {
  title: string
  points: string[]
  tone: 'blue' | 'magenta' | 'dark'
}

export type RevenueItem = {
  title: string
  description: string
  icon: LucideIcon
}

export type RoadmapStage = {
  stage: string
  title: string
  items: string[]
}

export const navItems: NavItem[] = [
  { id: 'hero', label: 'Обзор' },
  { id: 'current-state', label: 'AS IS' },
  { id: 'target-model', label: 'TO BE' },
  { id: 'pet-profile', label: 'Pet ID' },
  { id: 'subscription', label: 'Подписка' },
  { id: 'services', label: 'Услуги' },
  { id: 'charity', label: 'Помощь' },
  { id: 'memorial', label: 'Мемориал' },
  { id: 'monetization', label: 'Монетизация' },
  { id: 'roadmap', label: 'Roadmap' },
]

export const heroBadges: BadgeItem[] = [
  { label: 'Pet ID', tone: 'blue' },
  { label: 'Подписка', tone: 'magenta' },
  { label: 'Услуги', tone: 'orange' },
  { label: 'Помощь приютам', tone: 'green' },
  { label: 'Мемориал', tone: 'blue' },
]

export const currentStateProblems: ProblemItem[] = [
  {
    title: 'Сложно выбрать подходящий товар',
    description:
      'Рекомендации строятся вокруг категории, а не вокруг конкретного питомца, его возраста, ограничений и режима.',
  },
  {
    title: 'Нет единого пространства для услуг',
    description:
      'Ветеринар, грумер, ситтер и передержка живут вне пользовательского сценария Ozon и не связаны с покупками.',
  },
  {
    title: 'Нет цифрового документа питомца',
    description:
      'История, аллергии, рацион и посещения не собраны в одном профиле, который можно передать специалисту.',
  },
  {
    title: 'Сложно найти специалиста',
    description:
      'Нужно отдельно искать проверенного поставщика, сверять отзывы и заново объяснять контекст по питомцу.',
  },
  {
    title: 'Мало сквозной персонализации',
    description:
      'Повторные заказы, напоминания и сценарии ухода не превращаются в связанный жизненный цикл заботы.',
  },
  {
    title: 'Доверие не систематизировано',
    description:
      'Нет единой модели подтвержденных профилей, заполнения заметок и прозрачности качества услуг и товаров.',
  },
]

export const targetModelNodes: EcosystemNode[] = [
  { title: 'Владельцы', subtitle: 'Покупки, услуги, Pet ID', icon: PawPrint, tone: 'blue' },
  { title: 'Продавцы товаров', subtitle: 'Каталог, бандлы, реклама', icon: Store, tone: 'dark' },
  { title: 'Клиники', subtitle: 'Запись, заметки, история', icon: HeartPulse, tone: 'magenta' },
  { title: 'Грумеры и ситтеры', subtitle: 'Услуги по клику', icon: Users, tone: 'orange' },
  { title: 'Приюты', subtitle: 'Сборы, нужды, подписка', icon: HeartHandshake, tone: 'green' },
  { title: 'Ozon Банк', subtitle: 'Оплата, подписка, финтех', icon: Landmark, tone: 'blue' },
]

export const petProfileValues: ValueColumn[] = [
  {
    title: 'Для владельца',
    tone: 'blue',
    points: [
      'Один живой профиль на всех питомцев',
      'Быстрая передача ID клинике или грумеру',
      'Меньше ошибок в покупке и уходе',
    ],
  },
  {
    title: 'Для поставщика услуг',
    tone: 'magenta',
    points: [
      'Контекст о питомце до визита',
      'Стандартизированное заполнение заметок',
      'Меньше ручных уточнений и пропусков',
    ],
  },
  {
    title: 'Для Ozon',
    tone: 'dark',
    points: [
      'База для рекомендаций и подписки',
      'Рост частоты сценариев в экосистеме',
      'Данные для новых монетизационных слоев',
    ],
  },
]

export const valueForSides: ValueColumn[] = [
  {
    title: 'Для владельца питомца',
    tone: 'blue',
    points: [
      'Меньше хаоса и меньше ошибок',
      'Удобные покупки и услуги в одном месте',
      'Персонализация по данным питомца',
      'Поддержка в сложные и эмоциональные моменты',
    ],
  },
  {
    title: 'Для поставщика услуг / товаров',
    tone: 'magenta',
    points: [
      'Новые клиенты внутри потока Ozon',
      'Цифровая витрина и прозрачный рейтинг',
      'Доступ к релевантным данным питомца',
      'Повторные продажи и работа через Ozon PetPro',
    ],
  },
  {
    title: 'Для Ozon',
    tone: 'dark',
    points: [
      'Рост повторных покупок и LTV',
      'Подписочная выручка и комиссия с услуг',
      'Рост использования Ozon Банка',
      'Реклама и long-term loyalty внутри экосистемы',
    ],
  },
]

export const revenueStreams: RevenueItem[] = [
  {
    title: 'Комиссия с товаров',
    description: 'Базовый оборот усиливается персональными рекомендациями, бандлами и повторными заказами.',
    icon: LayoutGrid,
  },
  {
    title: 'Подписка',
    description: 'Регулярный доход от корма, расходников и подписки на помощь приютам вместо разовой скидочной механики.',
    icon: Repeat,
  },
  {
    title: 'Комиссия с услуг',
    description: 'Запись, консультации, выгул, передержка и груминг создают новую сервисную вертикаль.',
    icon: Stethoscope,
  },
  {
    title: 'Платное продвижение',
    description: 'Клиники, бренды и специалисты получают выделение внутри релевантных pet-сценариев.',
    icon: Sparkles,
  },
  {
    title: 'Финансовые сервисы',
    description: 'Ozon Банк покрывает оплату, рассрочку, подписки, страхоподобные и сервисные сценарии.',
    icon: Banknote,
  },
  {
    title: 'Благотворительный оборот',
    description: 'Помощь приютам проходит через реальные товары и услуги, сохраняя прозрачность и оборот внутри Ozon.',
    icon: HeartHandshake,
  },
  {
    title: 'Будущая pet-реклама',
    description: 'Сегменты по типу питомца, состоянию и жизненному циклу создают новый рекламный инвентарь.',
    icon: BadgeCheck,
  },
]

export const roadmapStages: RoadmapStage[] = [
  {
    stage: 'Этап 1',
    title: 'Данные и повторяемость',
    items: ['Цифровой профиль питомца', 'Персональные рекомендации', 'Подписка на товары'],
  },
  {
    stage: 'Этап 2',
    title: 'Маркетплейс услуг',
    items: ['Карточки клиник и специалистов', 'Онлайн-запись на услуги', 'Приложение Ozon PetPro'],
  },
  {
    stage: 'Этап 3',
    title: 'Экосистема заботы',
    items: ['Услуги по клику', 'Финтех для услуг', 'Помощь приютам', 'Мемориал', 'Продвинутая персонализация'],
  },
]

export const highlightMetrics = [
  { label: 'Повторные сценарии', value: '+28%' },
  { label: 'Время до покупки', value: '1 клик' },
  { label: 'Сервисные роли', value: '6+' },
  { label: 'Доверенные статусы', value: '100%' },
]

export const serviceProviderStats = [
  { label: 'Рейтинг', value: '4.9' },
  { label: 'Записи за месяц', value: '124' },
  { label: 'Питомцев в истории', value: '380' },
]

export const charityNeeds = [
  { label: 'Корм для щенков', progress: 82, amount: '41 000 / 50 000 ₽' },
  { label: 'Пелёнки и уход', progress: 56, amount: '14 000 / 25 000 ₽' },
  { label: 'Выезд ветеринара', progress: 34, amount: '8 500 / 25 000 ₽' },
]

export const quickActions = [
  { icon: IdCard, label: 'Поделиться Pet ID' },
  { icon: Bone, label: 'Повторить заказ' },
  { icon: CalendarRange, label: 'Записаться на услугу' },
  { icon: ShieldCheck, label: 'Поддержать приют' },
]
