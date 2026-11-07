import { Link } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import { useTheme } from '../../context/ThemeContext.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
]

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4">
        <Link to="/" className="text-lg font-bold tracking-tight text-brand-600">
          Meu Site
        </Link>
        <Navbar links={links} />
        <ThemeToggle />
      </div>
    </header>
  )
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-md border border-slate-200 px-3 py-1.5 text-sm dark:border-slate-700"
      aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
