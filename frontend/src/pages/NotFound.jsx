import { Link } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <p className="text-6xl font-bold text-brand-600">404</p>
      <h1 className="text-2xl font-semibold">Página não encontrada</h1>
      <p className="text-slate-600 dark:text-slate-300">
        O endereço que você tentou acessar não existe.
      </p>
      <Link to="/">
        <Button>Voltar para a home</Button>
      </Link>
    </div>
  )
}
