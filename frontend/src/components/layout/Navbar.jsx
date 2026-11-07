import { NavLink } from 'react-router-dom'

export default function Navbar({ links = [] }) {
  return (
    <nav aria-label="Navegação principal" className="hidden sm:block">
      <ul className="flex items-center gap-6">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-brand-600'
                    : 'text-slate-600 hover:text-brand-600 dark:text-slate-300'
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
