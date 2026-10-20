# Pink Gym UI Kit

Небольшая библиотека React-компонентов на TypeScript: `Input` и `Badge`.

## Установка

```bash
npm install pink-gym-ui-kit
```

Импортируйте компоненты и стили в приложении:

```tsx
import { Badge, Input } from 'pink-gym-ui-kit'
import 'pink-gym-ui-kit/style.css'

export function Example() {
  return (
    <>
      <Input label="Email" placeholder="name@example.com" />
      <Badge variant="success">Оплачено</Badge>
    </>
  )
}
```

Компоненты используют Tailwind CSS-классы, включённые в `style.css`. Для кастомизации можно передавать обычные HTML-пропсы и `className`.

## Компоненты

### Input

Обязательный проп `label`; `size`: `sm`, `md` или `lg` (по умолчанию `md`); `error` для текста ошибки. Поддерживает стандартные пропсы `input`, включая `type`, `value`, `onChange`, `placeholder` и `disabled`.

### Badge

`variant`: `success`, `warning`, `error` или `neutral` (по умолчанию `neutral`); `size`: `sm`, `md` или `lg` (по умолчанию `md`). Поддерживает HTML-пропсы `span`.

## Разработка

```bash
npm install
npm run dev
npm run storybook
```

В Storybook есть истории для стандартного и ошибочного `Input`, а также для вариантов `Badge`.

## Сборка и публикация

```bash
npm run lint
npm run build
npm run build-storybook
npm pack --dry-run
npm login
npm publish
```

Пакет собирается в `dist/`; типы TypeScript включены. Для публикации аккаунт npm должен быть авторизован, а имя пакета — свободно.
