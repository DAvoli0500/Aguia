/**
 * Formata uma data ISO para o padrão brasileiro.
 *
 * @param {string|Date} value Data a ser formatada.
 * @param {Intl.DateTimeFormatOptions} [options] Opções do Intl.
 * @returns {string} Data formatada ou string vazia quando inválida.
 */
export function formatDate(value, options = { dateStyle: 'medium' }) {
  const date = value instanceof Date ? value : new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return new Intl.DateTimeFormat('pt-BR', options).format(date)
}
