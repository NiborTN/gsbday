import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home Page', () => {
  it('renders main heading', () => {
    render(<Home />)
    expect(screen.getByText('Happy Birthday,')).toBeInTheDocument()
    expect(screen.getByText('Gina 💜')).toBeInTheDocument()
  })

  it('renders section headings', () => {
    render(<Home />)
    expect(screen.getByText('Something Sweet 🌸')).toBeInTheDocument()
    expect(screen.getByText('Time to Laugh 😄')).toBeInTheDocument()
    expect(screen.getByText('From My Heart 💕')).toBeInTheDocument()
    expect(screen.getByText('Heartfelt Words 💜')).toBeInTheDocument()
  })

  it('renders scroll indicator text', () => {
    render(<Home />)
    expect(screen.getByText('Scroll down for your special day ✨')).toBeInTheDocument()
  })

  it('renders interactive emojis', () => {
    render(<Home />)
    expect(screen.getByText('😂')).toBeInTheDocument()
    expect(screen.getByText('🤣')).toBeInTheDocument()
    expect(screen.getByText('😆')).toBeInTheDocument()
    expect(screen.getByText('😄')).toBeInTheDocument()
  })
})