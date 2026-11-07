import { Link } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
          Boas-vindas
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Construa algo incrível.
        </h1>
        <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Este é o ponto de partida do seu site: React, Vite e Tailwind no
          frontend, Flask e SQLAlchemy no backend.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/contato">
            <Button>Começar</Button>
          </Link>
          <Link to="/sobre">
            <Button variant="secondary">Saiba mais</Button>
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {[
          { title: 'Rápido', text: 'Build com Vite e HMR instantâneo.' },
          { title: 'Escalável', text: 'Backend em app factory com blueprints.' },
          { title: 'Acessível', text: 'Componentes com foco visível e ARIA.' },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-lg border border-slate-200 p-5 dark:border-slate-800"
          >
            <h2 className="font-semibold">{item.title}</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              {item.text}
            </p>
          </article>
        ))}
      </section>
    </div>
  )
}
