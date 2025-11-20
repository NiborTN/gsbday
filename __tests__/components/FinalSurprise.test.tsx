import { render, screen, fireEvent } from '@testing-library/react'
import FinalSurprise from '../../app/components/FinalSurprise'

describe('FinalSurprise Component', () => {
  const testMessage = 'Surprise message!'

  it('renders surprise button initially', () => {
    render(<FinalSurprise surpriseMessage={testMessage} />)
    expect(screen.getByText('Tap for your birthday surprise! 🎁')).toBeInTheDocument()
  })

  it('shows hint text', () => {
    render(<FinalSurprise surpriseMessage={testMessage} />)
    expect(screen.getByText('Something special awaits... ✨')).toBeInTheDocument()
  })

  it('reveals surprise when button clicked', () => {
    render(<FinalSurprise surpriseMessage={testMessage} />)
    const button = screen.getByText('Tap for your birthday surprise! 🎁')
    fireEvent.click(button)
    expect(screen.getByText('🎉 SURPRISE! 🎉')).toBeInTheDocument()
    expect(screen.getByText(testMessage)).toBeInTheDocument()
  })

  it('hides button after reveal', () => {
    render(<FinalSurprise surpriseMessage={testMessage} />)
    const button = screen.getByText('Tap for your birthday surprise! 🎁')
    fireEvent.click(button)
    expect(screen.queryByText('Tap for your birthday surprise! 🎁')).not.toBeInTheDocument()
  })
})