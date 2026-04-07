import { ArrowUp, ChevronDown, Funnel, MessageCircle, PawPrint, Search, Send, ShieldCheck, TrendingUp, X } from 'lucide-react'
import { useState } from 'react'

const topicCards = [
  {
    id: 'topic-1',
    category: 'Питание',
    tag: 'Опыт владельца',
    title: 'Какой сухой корм реально подошёл корги с чувствительным ЖКТ?',
    body: 'Собираю живой опыт по кормам без курицы. Интересуют бренды, на которых действительно ушли реакции и нормализовался стул.',
    votes: 284,
    comments: 67,
    author: 'Марина и Тедди',
    tone: 'bg-emerald-50 text-emerald-700',
  },
  {
    id: 'topic-2',
    category: 'Ветпомощь',
    tag: 'Ответ специалиста',
    title: 'После груминга врач нашёл раздражение кожи. Чем безопасно обрабатывать до визита?',
    body: 'Нужны советы только по мягкому домашнему уходу до очного приёма. Уже есть отметка в Pet ID и история реакций на шампуни.',
    votes: 197,
    comments: 39,
    author: 'Анна, Рокси',
    tone: 'bg-ozon-blue/10 text-ozon-blue',
  },
  {
    id: 'topic-3',
    category: 'Усыновление',
    tag: 'Ответ фонда',
    title: 'Что купить заранее, если беру кота из приюта на следующей неделе?',
    body: 'Нужен стартовый набор без лишних трат: корм, лоток, наполнитель, переноска и базовые вещи на первые 10 дней дома.',
    votes: 356,
    comments: 82,
    author: 'Света',
    tone: 'bg-amber-50 text-amber-700',
  },
  {
    id: 'topic-4',
    category: 'Поведение',
    tag: 'Разбор с кинологом',
    title: 'Собака нервничает в машине и отказывается ехать к грумеру. Что реально помогло?',
    body: 'Ищу рабочие привычки и сервисные сценарии. Может, кто-то переходил на выездной груминг или готовил поездки через короткие тренировочные маршруты.',
    votes: 142,
    comments: 28,
    author: 'Илья и Бонни',
    tone: 'bg-rose-50 text-rose-700',
  },
  {
    id: 'topic-5',
    category: 'Pet-добро',
    tag: 'Запрос фонда',
    title: 'Нужен опыт по организации доставки корма прямо в приют через Ozon',
    body: 'Хотим собрать регулярную помощь без ручной координации в чатах. Интересует, как лучше оформить товары и кто уже запускал такой сценарий.',
    votes: 221,
    comments: 44,
    author: 'Фонд «Лапа надежды»',
    tone: 'bg-fuchsia-50 text-fuchsia-700',
  },
  {
    id: 'topic-6',
    category: 'Породы',
    tag: 'Новая тема',
    title: 'Хочу завести британского кота. Какие реальные ежемесячные расходы и частые ошибки на старте?',
    body: 'Смотрю не витринные советы, а живой опыт: корм, ветеринария, шерсть, наполнитель и неожиданные траты первого года.',
    votes: 89,
    comments: 16,
    author: 'Наташа',
    tone: 'bg-slate-100 text-slate-700',
  },
]

const communities = ['Все темы', 'Питание', 'Ветпомощь', 'Поведение', 'Усыновление', 'Pet-добро', 'Породы']

export function PetBlogPage() {
  const [isCreateTopicOpen, setIsCreateTopicOpen] = useState(false)
  const [mobileSectionsOpen, setMobileSectionsOpen] = useState(false)
  const [topicDraft, setTopicDraft] = useState({
    title: '',
    description: '',
    category: 'Питание',
  })
  const [isTopicSent, setIsTopicSent] = useState(false)

  return (
    <div className="space-y-6">
      <section className="rounded-[32px] bg-[linear-gradient(180deg,#001a34_0%,#07346f_100%)] p-7 text-white shadow-[0_18px_60px_rgba(0,26,52,0.18)]">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Pet-блог</div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Сообщество владельцев, специалистов и фондов внутри Ozon Pet</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-white/78">
          Здесь живёт опыт, который обычно уходит в чаты и форумы: подбор корма, сервисные сценарии, уход за породами, усыновление и помощь приютам.
        </p>
      </section>

      <section className="grid gap-6 xl:grid-cols-[260px_1fr_300px]">
        <div className="xl:hidden">
          <button
            type="button"
            onClick={() => setMobileSectionsOpen((value) => !value)}
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-[0_12px_38px_rgba(15,23,42,0.06)]"
          >
            <Funnel className="size-4 text-ozon-blue" />
            Фильтр
          </button>
        </div>

        <aside
          className={`${mobileSectionsOpen ? 'block' : 'hidden'} rounded-[28px] bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.06)] xl:block`}
        >
          <div className="text-lg font-semibold text-slate-950">Разделы</div>
          <div className="mt-4 space-y-2">
            {communities.map((item, index) => (
              <button
                key={item}
                type="button"
                className={`w-full rounded-[16px] px-4 py-3 text-left text-sm font-medium ${
                  index === 0 ? 'bg-ozon-blue text-white' : 'bg-slate-50 text-slate-700'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </aside>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 rounded-[24px] bg-white p-4 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
            <div className="flex min-w-[240px] flex-1 items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
              <Search className="size-4 text-slate-400" />
              <span className="text-sm text-slate-500">Поиск по темам, породам, услугам и фондам</span>
            </div>
            <div className="inline-flex rounded-full bg-ozon-magenta/10 px-4 py-2 text-sm font-semibold text-ozon-magenta">
              126 новых обсуждений за неделю
            </div>
          </div>

          {topicCards.map((topic) => (
            <article
              key={topic.id}
              className="grid gap-4 rounded-[28px] bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.06)] md:grid-cols-[72px_1fr]"
            >
              <div className="flex flex-row items-center gap-3 rounded-[22px] bg-slate-50 p-3 md:flex-col md:justify-start">
                <button type="button" className="flex size-10 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm">
                  <ArrowUp className="size-4" />
                </button>
                <div className="text-lg font-semibold text-slate-950">{topic.votes}</div>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{topic.category}</div>
                  <div className={`rounded-full px-3 py-1 text-xs font-semibold ${topic.tone}`}>{topic.tag}</div>
                </div>
                <div className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{topic.title}</div>
                <div className="mt-3 text-sm leading-7 text-slate-600">{topic.body}</div>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <div>Автор: {topic.author}</div>
                  <div className="inline-flex items-center gap-2">
                    <MessageCircle className="size-4" />
                    {topic.comments} комментариев
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="space-y-4">
          <div className="rounded-[28px] bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-2 text-lg font-semibold text-slate-950">
              <TrendingUp className="size-5 text-ozon-blue" />
              В тренде
            </div>
            <div className="mt-4 space-y-3">
              {['Лучшие корма без курицы', 'Груминг для тревожных собак', 'Как собрать набор для приюта'].map((item) => (
                <div key={item} className="rounded-[18px] bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-2 text-lg font-semibold text-slate-950">
              <ShieldCheck className="size-5 text-emerald-600" />
              Кто участвует
            </div>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <div className="rounded-[18px] bg-slate-50 px-4 py-3">Владельцы делятся тем, что реально сработало для похожих животных.</div>
              <div className="rounded-[18px] bg-slate-50 px-4 py-3">Специалисты отвечают в темах и могут опираться на данные из Pet ID.</div>
              <div className="rounded-[18px] bg-slate-50 px-4 py-3">Фонды и волонтёры публикуют запросы и собирают помощь прозрачнее, чем в чатах.</div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsCreateTopicOpen(true)}
            className="w-full rounded-[28px] bg-[linear-gradient(180deg,#f1117e_0%,#ff5aa9_100%)] p-5 text-left text-white shadow-[0_18px_60px_rgba(241,17,126,0.22)]"
          >
            <div className="flex items-center gap-2 text-lg font-semibold">
              <PawPrint className="size-5" />
              Задать тему
            </div>
            <div className="mt-3 text-sm leading-7 text-white/82">
              Можно вынести в сообщество вопрос про рацион, уход, сервис, породу или адресную помощь приюту.
            </div>
          </button>
        </aside>
      </section>

      {isCreateTopicOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 px-4">
          <div className="w-full max-w-[560px] rounded-[28px] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.22)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-2xl font-semibold text-slate-950">Новая тема</div>
                <div className="mt-2 text-sm leading-7 text-slate-600">
                  Задайте тему, добавьте описание и выберите категорию, чтобы опубликовать её в сообществе.
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsCreateTopicOpen(false)
                  setIsTopicSent(false)
                }}
                className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-500"
              >
                <X className="size-4" />
              </button>
            </div>

            <input
              value={topicDraft.title}
              onChange={(event) => setTopicDraft((current) => ({ ...current, title: event.target.value }))}
              placeholder="Тема"
              className="mt-5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-ozon-blue focus:bg-white"
            />
            <textarea
              value={topicDraft.description}
              onChange={(event) => setTopicDraft((current) => ({ ...current, description: event.target.value }))}
              placeholder="Описание"
              className="mt-3 min-h-[120px] w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-ozon-blue focus:bg-white"
            />

            <div className="relative mt-3">
              <select
                value={topicDraft.category}
                onChange={(event) => setTopicDraft((current) => ({ ...current, category: event.target.value }))}
                className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 pr-11 text-sm font-medium text-slate-700 outline-none transition focus:border-ozon-blue focus:bg-white"
              >
                {communities.slice(1).map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            </div>

            {isTopicSent ? (
              <div className="mt-4 rounded-[18px] bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-600">
                Тема отправлена в категорию <span className="font-semibold text-slate-900">{topicDraft.category}</span>.
              </div>
            ) : null}

            <div className="mt-5 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsCreateTopicOpen(false)
                  setIsTopicSent(false)
                }}
                className="rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700"
              >
                Отменить
              </button>
              <button
                type="button"
                onClick={() => setIsTopicSent(true)}
                className="inline-flex items-center gap-2 rounded-full bg-ozon-magenta px-5 py-3 text-sm font-semibold text-white"
              >
                <Send className="size-4" />
                Опубликовать тему
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
