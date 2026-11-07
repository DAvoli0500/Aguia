import { useCallback, useState } from 'react'

/**
 * Persiste um valor no localStorage.
 *
 * @param {string} key Chave usada no localStorage.
 * @param {*} initialValue Valor inicial (ou função que o retorna).
 * @returns {[*, Function]} Par [valor, setValor].
 */
export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item !== null) return JSON.parse(item)
    } catch {
      // localStorage indisponível ou JSON inválido: usa o valor inicial.
    }
    return typeof initialValue === 'function' ? initialValue() : initialValue
  })

  const setValue = useCallback(
    (value) => {
      setStoredValue((current) => {
        const next = value instanceof Function ? value(current) : value
        try {
          window.localStorage.setItem(key, JSON.stringify(next))
        } catch {
          // Ignora falhas de quota/privacidade; o estado em memória continua válido.
        }
        return next
      })
    },
    [key],
  )

  return [storedValue, setValue]
}
