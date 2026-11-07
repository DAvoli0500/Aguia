import { useState } from 'react'
import Button from '../components/ui/Button.jsx'
import Input from '../components/ui/Input.jsx'

export default function Contato() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    // Integre aqui com o backend, por exemplo:
    // await api.post('/contato', formData)
    setSent(true)
  }

  return (
    <div className="max-w-xl space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Contato</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Envie sua mensagem e responderemos o mais breve possível.
        </p>
      </div>

      {sent ? (
        <p role="status" className="rounded-md bg-green-50 p-4 text-green-800">
          Mensagem enviada! Obrigado pelo contato.
        </p>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input label="Nome" name="name" autoComplete="name" required />
          <Input
            label="E-mail"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 dark:border-slate-700 dark:bg-slate-900"
            />
          </div>
          <Button type="submit">Enviar mensagem</Button>
        </form>
      )}
    </div>
  )
}
