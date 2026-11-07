import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import AppRoutes from './routes/index.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}
