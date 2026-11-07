export default function Card({ title, children, footer, className = '' }) {
  return (
    <section
      className={`rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}
    >
      {title && <h2 className="mb-3 text-lg font-semibold">{title}</h2>}
      <div className="text-slate-600 dark:text-slate-300">{children}</div>
      {footer && (
        <div className="mt-4 border-t border-slate-100 pt-4 dark:border-slate-800">
          {footer}
        </div>
      )}
    </section>
  )
}
