import { Badge, Input } from './components/ui'

function App() {
  return (
    <main className="min-h-screen bg-pink-50 p-8">
      <div className="mx-auto max-w-xl space-y-8 rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-pink-600">
          Pink Gym UI Kit
        </h1>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Input</h2>
          <Input label="Имя" placeholder="Введите имя" />
          <Input
            label="Email"
            placeholder="Введите email"
            size="lg"
            error="Проверьте адрес электронной почты"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Badge</h2>
          <div className="flex flex-wrap gap-3">
            <Badge variant="success">Оплачено</Badge>
            <Badge variant="warning">В обработке</Badge>
            <Badge variant="error">Ошибка</Badge>
            <Badge variant="neutral">Черновик</Badge>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
