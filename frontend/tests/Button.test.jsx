import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import Button from '../src/components/ui/Button.jsx'

describe('Button', () => {
  it('renderiza o texto e dispara o clique', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Enviar</Button>)

    await userEvent.click(screen.getByRole('button', { name: 'Enviar' }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
