export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-6 dark:border-slate-800">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-4 text-sm text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Meu Site. Todos os direitos reservados.</p>
        <p>Feito com React + Flask</p>
      </div>
    </footer>
  )
}
